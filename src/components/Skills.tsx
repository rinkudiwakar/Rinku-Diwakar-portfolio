import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";

// Example skill categories
const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "JavaScript/TypeScript", proficiency: 95 },
      { name: "React/Next.js", proficiency: 90 },
      { name: "Node.js/Express", proficiency: 88 },
      { name: "HTML/CSS", proficiency: 95 },
      { name: "GraphQL", proficiency: 85 },
    ],
  },
  {
    title: "AI & Data",
    skills: [
      { name: "Python", proficiency: 92 },
      { name: "Machine Learning", proficiency: 85 },
      { name: "Data Analytics", proficiency: 90 },
      { name: "TensorFlow/PyTorch", proficiency: 78 },
      { name: "SQL/NoSQL", proficiency: 88 },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", proficiency: 90 },
      { name: "Responsive Design", proficiency: 95 },
      { name: "User Research", proficiency: 85 },
      { name: "Wireframing", proficiency: 92 },
      { name: "Prototyping", proficiency: 88 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git/GitHub", proficiency: 95 },
      { name: "Docker", proficiency: 85 },
      { name: "AWS/GCP", proficiency: 82 },
      { name: "CI/CD", proficiency: 80 },
      { name: "Testing", proficiency: 88 },
    ],
  },
];

// Softer, pastel gradient color pairs (feel free to change these)
const colorPairs = [
  ["#FFB5E8", "#FF9CEE"], // Pink-Purple gradient
  ["#B28DFF", "#C5A3FF"], // Violet gradient
  ["#AFF8DB", "#85E3FF"], // Teal-Blue gradient
  ["#FFABAB", "#FFD3B6"], // Peach gradient
  ["#FDFD96", "#FEFF9C"], // Light Yellow gradient
];

// A custom shape for the bars to have rounded corners
const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 10;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      ry={radius}
      fill={fill}
    />
  );
};

const SkillCategoryBar = ({ category, delay }) => {
  // Prepare data for the bar chart
  const data = category.skills.map((skill, index) => ({
    name: skill.name,
    proficiency: skill.proficiency,
    // Map each skill to a gradient index
    gradientIndex: index % colorPairs.length,
  }));

  // Delayed reveal of the chart
  const [showChart, setShowChart] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowChart(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-all transform hover:scale-[1.02]"
      style={{ animationDelay: `${delay * 0.001}s` }}
    >
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        {category.title}
      </h3>
      {showChart && (
        <div className="w-full h-64">
          <ResponsiveContainer>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
            >
              {/* Subtle grid for background */}
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={{ stroke: "#E5E7EB" }}
                tickLine={false}
              />
              <YAxis
                dataKey="name"
                type="category"
                width={130}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={{ stroke: "#E5E7EB" }}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: "#F9FAFB" }}
                contentStyle={{ borderRadius: "8px", border: "none" }}
                labelStyle={{ color: "#4B5563" }}
                formatter={(value) => `${value}%`}
              />
              {/* Define gradient fills for each bar */}
              <defs>
                {colorPairs.map((pair, idx) => {
                  // Create a unique ID for each color pair
                  // Avoid spaces or special characters
                  const gradientId = `gradient-${idx}`;
                  return (
                    <linearGradient
                      key={gradientId}
                      id={gradientId}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor={pair[0]} />
                      <stop offset="100%" stopColor={pair[1]} />
                    </linearGradient>
                  );
                })}
              </defs>
              <Bar dataKey="proficiency" shape={<RoundedBar />} animationDuration={1000}>
                {data.map((entry, index) => {
                  // Reference the correct gradient ID
                  const gradientId = `url(#gradient-${entry.gradientIndex})`;
                  return <Cell key={index} fill={gradientId} />;
                })}
                <LabelList
                  dataKey="proficiency"
                  position="right"
                  formatter={(val) => `${val}%`}
                  style={{ fill: "#374151", fontSize: 12, fontWeight: "500" }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-br from-green-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600">
            Explore my proficiency levels in various technologies and domains,
            displayed in a vibrant, modern bar chart layout.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategoryBar
              key={category.title}
              category={category}
              delay={index * 300}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
