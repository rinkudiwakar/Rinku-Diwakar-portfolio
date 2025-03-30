
import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Instagram, X, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="py-12 bg-secondary/50 py-16 bg-gradient-to-br from-green-50 via-purple-50 to-indigo-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-gradient">
              Rinku Diwakar
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} • All rights reserved
            </p>
            <div className="flex flex-col mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="h-4 w-4" />
                <span>NIT Jalandhar, Punjab, 144011</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Phone className="h-4 w-4" />
                <span>+91 9137438718</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>diwakar.active@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/rinkudiwakar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mrdiwakar1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/_mrdiwakar/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/_mrdiwakar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <X className="h-5 w-5" />
            </a>
            <a 
              href="mailto:diwakar.active@gmail.com" 
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <button 
              onClick={scrollToTop}
              className="ml-2 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
