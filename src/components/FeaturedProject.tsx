import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const FeaturedProject: React.FC = () => {
  return (
    <div className="rounded-2xl overflow-hidden bg-card border shadow-xl relative z-40 animate-fade-in-slow transform transition-all duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
          alt="Vehicle Insurance Domain Project"
          className="w-full h-[250px] sm:h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 p-5 sm:p-8 w-full">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] sm:text-xs font-bold mb-3 tracking-wider uppercase">
            Featured Project
          </span>
          <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 leading-tight">
            Vehicle Insurance Domain Project
          </h3>
          <p className="text-white/90 text-sm sm:text-base line-clamp-2 max-w-2xl">
            A production-ready end-to-end ML pipeline for vehicle insurance, featuring data versioning, experiment tracking, and cloud deployment.
          </p>
        </div>
      </div>
      <div className="p-5 sm:p-8 space-y-6">
        <div className="flex flex-wrap gap-2">
          {["Python", "Scikit-Learn", "DVC", "MLflow", "Docker", "AWS"].map(tech => (
            <span key={tech} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-semibold border border-blue-100">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          This project implements a robust machine learning workflow including data ingestion,
          preprocessing, model training with experiment tracking via MLflow, and automated
          deployment pipelines. Containerized with Docker and deployed on AWS for scalability.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button variant="outline" size="lg" className="flex-1 gap-2 rounded-full border-blue-200 text-blue-700 hover:bg-blue-50" asChild>
            <a href="https://github.com/rinkudiwakar/Vehicle-Insurance-Domain-Project" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View Code
            </a>
          </Button>
          <Button size="lg" className="flex-1 gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <a href="https://github.com/rinkudiwakar/Vehicle-Insurance-Domain-Project" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Project Details
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
