import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Briefcase, User, Code, Mail, Github, Linkedin } from "lucide-react";


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", href: "#about", icon: <User className="h-5 w-5" /> },
    { name: "Skills", href: "#skills", icon: <Code className="h-5 w-5" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrollPosition > 20 ? "glass-effect py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-left">
            {/* Make the text smaller (text-xl instead of text-2xl), add cursor */}
            <a href="#" className="text-l font-bold text-foreground/80 relative font-dancing hover:text-foreground transition-colors duration-200">
              Rinku Diwakar
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="underline-animation text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* GitHub and LinkedIn Icons for Desktop */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nitian-rockstar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mrdiwakar1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="flex md:hidden items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-secondary transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center text-xl font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </a>
              </li>
            ))}
            {/* GitHub and LinkedIn Icons for Mobile */}
            <li className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/nitian-rockstar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mrdiwakar1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
