import React from "react";
import { cn } from "@/lib/utils";
import { TimelineItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const timelineItems: TimelineItem[] = [
  {
    date: "June 2025 – July 2025",
    title: "Data Analytics & ML Intern | TS Bridge",
    description:
      "Developed end-to-end ML applications including bike-demand prediction using XGBoost. Implemented MLOps workflows with DVC and MLflow; built CI/CD pipelines and containerized models using Docker. Integrated backend with AWS (EC2, S3) and MongoDB.",
    skills: ["XGBoost", "MLOps", "Docker", "AWS", "Flask"],
    link: "#"
  },
  {
    date: "June 2024 – July 2024",
    title: "Data Science Intern | CourseVita",
    description:
      "Led data preprocessing project for ML dataset preparation. Performed data wrangling, missing value handling, and exploratory data analysis using Python (Pandas, NumPy) to ensure data integrity.",
    skills: ["Python", "Pandas", "NumPy", "EDA", "Data Cleaning"],
    link: "#"
  },
  {
    date: "2023 – 2027",
    title: "B.Tech – Electrical Engineering | NIT Jalandhar",
    description:
      "Pursuing Bachelor of Technology with a CGPA of 7.47. Actively involved in technical societies and department leadership roles.",
    skills: ["Electrical Engineering", "Data Structures", "Algorithms", "Leadership"],
    link: "#"
  },
  {
    date: "2022 – 2023",
    title: "Class XII (CBSE) | MGM KPS, Bheeti Kaushambi",
    description: "Completed higher secondary education with 90% aggregate.",
    skills: ["Mathematics", "Physics", "Chemistry"],
    link: "#"
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="section-padding bg-secondary min-h-screen py-16 bg-gradient-to-br from-green-50 via-purple-50 to-indigo-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A timeline of my professional experience, internships, and educational background.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200 z-0"></div>

          <div className="space-y-10 sm:space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative z-10 flex flex-col md:flex-row items-baseline md:items-start gap-6 md:gap-8 animate-fade-in transition-all duration-300",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-1.5 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm z-20"></div>

                {/* Date */}
                <div
                  className={cn(
                    "w-full md:w-1/2 pl-10 md:pl-0 text-sm font-semibold text-blue-600 mb-2 md:mb-0",
                    index % 2 === 0 ? "md:text-left md:pr-10" : "md:text-right md:pl-10"
                  )}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 uppercase tracking-wider text-[10px] sm:text-xs">
                    {item.date}
                  </span>
                </div>

                {/* Content */}
                <Card
                  className={cn(
                    "w-full md:w-1/2 ml-4 md:ml-0 transform transition-all duration-300 hover:shadow-xl border-gray-100",
                    index % 2 === 0 ? "md:mr-4" : "md:ml-4"
                  )}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                      {item.link && item.link !== "#" && (
                        <a href={item.link} className="text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.skills?.map(skill => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-[10px] sm:text-xs py-0.5 px-2 bg-gray-100 text-gray-600 border-none font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
