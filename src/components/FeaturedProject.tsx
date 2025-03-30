import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const FeaturedProject: React.FC = () => {
  return (
    <div className="rounded-2xl overflow-hidden bg-card border shadow-2xl relative z-50 animate-fade-in-slow transform transition-all duration-300 hover:scale-105 min-h-screen py-16 bg-gradient-to-br from-green-50 via-purple-50 to-indigo-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Amazon clone project"
          className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-medium mb-3">
            Featured Project
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">Amazon Clone</h3>
          <p className="text-white/80 line-clamp-2 mb-4">
            A full-stack replica of Amazon with complete e-commerce functionality, user authentication, payment processing, and order management.
          </p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">React</span>
          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Firebase</span>
          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Stripe</span>
          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Node.js</span>
          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Express</span>
        </div>
        <p className="text-muted-foreground">
          This comprehensive Amazon clone features a responsive design, secure authentication,
          product catalog, shopping cart, checkout flow with Stripe integration, order history,
          and admin dashboard for product management.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="https://github.com/rinkudiwakar/Amazon-Clone" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              <Github className="h-4 w-4" />
              View Code
            </Button>
          </a>
          <a href="https://github.com/rinkudiwakar/Amazon-Clone" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
