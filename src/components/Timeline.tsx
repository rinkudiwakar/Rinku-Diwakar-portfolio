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
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-muted-foreground">
            A timeline of my professional experience, internships, and educational background.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20 z-0"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative z-10 flex flex-col md:flex-row items-start gap-8 animate-fade-in transition-all duration-300 hover:scale-105",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>

                {/* Date */}
                <div
                  className={cn(
                    "md:w-1/2 text-lg font-medium pb-4 md:pb-0",
                    index % 2 === 0 ? "md:text-left md:pr-8" : "md:text-right md:pl-8"
                  )}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {item.date}
                  </span>
                </div>

                {/* Content */}
                <Card
                  className={cn(
                    "md:w-1/2 transform transition-all duration-300 hover:shadow-2xl",
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      {item.link && (
                        <a href={item.link} className="text-primary hover:text-primary/80 transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills?.map(skill => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs transform transition-all duration-300 hover:scale-110 hover:shadow-md"
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
