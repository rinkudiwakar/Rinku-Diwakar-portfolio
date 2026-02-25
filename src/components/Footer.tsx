
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
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold text-blue-600 font-dancing">
              Rinku Diwakar
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} • All rights reserved
            </p>
            <div className="flex flex-col items-center md:items-start mt-4 text-xs sm:text-sm text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-blue-500" />
                <span>NIT Jalandhar, Punjab, 144011</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-blue-500" />
                <span>+91 9137438718</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-blue-500" />
                <span>diwakar.active@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://github.com/rinkudiwakar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mrdiwakar1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/_mrdiwakar/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:diwakar.active@gmail.com"
              className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-110"
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
