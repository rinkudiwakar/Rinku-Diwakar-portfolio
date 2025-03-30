import React, { useState, useEffect } from "react";
import { fetchGithubProjects } from "@/utils/fetchGithubProjects";
import { GithubProject, ProjectCategory } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import FeaturedProject from "./FeaturedProject";

const projectCategories: ProjectCategory[] = [
  { name: "All", slug: "all" },
  { name: "Full Stack", slug: "full-stack" },
  { name: "AI/ML", slug: "ai-ml" },
  { name: "Data Analytics", slug: "data-analytics" },
  { name: "UI/UX Design", slug: "ui-ux" }
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<GithubProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      const fetchedProjects = await fetchGithubProjects("rinkudiwakar");
      setProjects(fetchedProjects);
      setFilteredProjects(fetchedProjects);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);

    if (category === "all") {
      setFilteredProjects(projects);
      return;
    }

    // Filter based on topics, name or description matching the category
    const filtered = projects.filter(project => {
      const lowerName = project.name.toLowerCase();
      const lowerDesc = project.description?.toLowerCase() || "";
      const hasMatchingTopic = project.topics?.some(topic =>
        topic.toLowerCase().includes(category.toLowerCase().replace("-", ""))
      );

      return hasMatchingTopic ||
        lowerName.includes(category.toLowerCase().replace("-", "")) ||
        lowerDesc.includes(category.toLowerCase().replace("-", ""));
    });

    setFilteredProjects(filtered);
  };

  const renderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
      {[...Array(6)].map((_, index) => (
        <Card key={index} className="animate-pulse">
          <CardHeader className="h-40 bg-muted"></CardHeader>
          <CardContent className="py-4">
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-full mb-2"></div>
            <div className="h-3 bg-muted rounded w-5/6"></div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="h-8 bg-muted rounded w-20"></div>
            <div className="h-8 bg-muted rounded w-20"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  const renderProjects = () => (
    <>
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground ">No projects found for this category.</p>
        </div>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen py-16 bg-gradient-to-br from-green-50 via-purple-50 to-indigo-50">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <img
                  src={`https://opengraph.githubassets.com/1/${project.html_url.replace('https://github.com/', '')}`}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-all duration-300 hover:scale-110"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                  {project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description || "No description available"}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics?.slice(0, 3).map(topic => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className="text-xs transform transition-all duration-300 hover:scale-110 hover:shadow-md"
                    >
                      {topic}
                    </Badge>
                  ))}
                  {project.language && (
                    <Badge
                      variant="outline"
                      className="text-xs transform transition-all duration-300 hover:scale-110 hover:shadow-md"
                    >
                      {project.language}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-xs text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    <span>{project.stargazers_count}</span>
                  </div>
                  <div className="flex items-center">
                    <GitFork className="h-3 w-3 mr-1" />
                    <span>{project.forks_count}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                    asChild
                  >
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                  {project.homepage && (
                    <Button
                      size="sm"
                      className="gap-1.5 transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                      asChild
                    >
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom min-h-screen py-16 bg-gradient-to-br from-green-50 via-purple-50 to-indigo-50">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Work</h2>
          <p className="text-muted-foreground">
            A showcase of my recent projects, ranging from full-stack applications
            to data analytics and UI/UX design work.
          </p>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <FeaturedProject />
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-4 scrollbar-hide animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex space-x-2">
            {projectCategories.map((category) => (
              <Button
                key={category.slug}
                variant={activeCategory === category.slug ? "default" : "outline"}
                size="sm"
                className="rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                onClick={() => handleCategoryChange(category.slug)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {isLoading ? renderSkeleton() : renderProjects()}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com/rinkudiwakar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary transition-all duration-300 hover:scale-105 hover:text-primary/80"
          >
            <span>View all projects on GitHub</span>
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
