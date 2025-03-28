import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Briefcase,
  User,
  Code,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

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
          {/* Logo/Name & Email */}
          <div className="flex items-center space-x-4 text-left">
            <a
              href="#"
              className="text-l font-bold text-foreground/80 relative font-dancing hover:text-foreground transition-colors duration-200"
            >
              Rinku Diwakar
            </a>
            <a
              href="mailto:diwakar.active@gmail.com"
              className="bg-[#fffcef] pl-3 pr-3 pt-1 pb-1 rounded-full border border-[#fff6d3] inline-flex items-center cursor-pointer hover:bg-[#fffcd9]"
            >
              <svg
                className="w-3.5 mr-2 fill-[#625833]"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>
              <span className="hidden lg:block">diwakar.active@gmail.com</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Main Nav Links */}
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

            {/* Icons */}
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/nitian-rockstar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100
                           hover:bg-blue-100 text-gray-600 hover:text-blue-600
                           transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mrdiwakar1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100
                           hover:bg-blue-100 text-gray-600 hover:text-blue-600
                           transition-all duration-300 transform hover:scale-110"
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

            {/* GitHub & LinkedIn in Mobile Menu */}
            <li className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/nitian-rockstar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100
                           hover:bg-blue-100 text-gray-600 hover:text-blue-600
                           transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mrdiwakar1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100
                           hover:bg-blue-100 text-gray-600 hover:text-blue-600
                           transition-all duration-300 transform hover:scale-110"
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
