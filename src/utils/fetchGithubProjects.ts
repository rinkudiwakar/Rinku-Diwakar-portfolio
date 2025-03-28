
import { GithubProject } from "../types";
import { toast } from "sonner";

export const fetchGithubProjects = async (username: string): Promise<GithubProject[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }
    
    const data = await response.json();
    return data as GithubProject[];
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    toast.error('Failed to load GitHub projects. Please try again later.');
    return [];
  }
};
