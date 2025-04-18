import React, { useState, useEffect } from "react";
import { ArrowDown, Mail, Github, Linkedin, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Hi, I'm Rinku Diwakar",
    "I'm a Full Stack Dev.",
    "I'm a UI/UX Designer",
    "I'm an AI/ML Enthusiast",
  ];

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const shouldDelete = isDeleting;

      setText((prev) =>
        shouldDelete
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center min-h-screen py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-light.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            {/* Role Tag */}
            <div
              className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Full Stack Developer
            </div>

            {/* Typing Effect Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight animate-fade-in text-gray-900"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-blue-600">{text}</span>
              <span className="animate-pulse">|</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg text-gray-600 max-w-2xl animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              I specialize in Full Stack Web Development, AI/ML, Data Analytics, and UI/UX
              Design, crafting innovative solutions that blend technical excellence with
              intuitive design. Currently pursuing B.Tech in Electrical Engineering from NIT
              Jalandhar, Punjab, India.
            </p>

            {/* Buttons (including Resume) */}
            <div
              className="flex flex-col gap-4 pt-4 animate-fade-in items-start"
              style={{ animationDelay: "0.5s" }}
            >
              {/* First row of buttons */}
              <div className="flex flex-wrap items-start gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="inline-flex !w-auto items-center justify-center 
                             rounded-full border-blue-600 font-semibold bg-gray-400"
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=9137438718&text=Hi+Rinku&type=phone_number&app_absent=0"
                    className="flex items-center gap-2 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm">Text Me</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="inline-flex !w-auto items-center justify-center 
                             rounded-full border-blue-600 text-blue font-semibold shadow-lg"
                >
                  <a href="#projects" className="flex items-center gap-2">
                    View My Work
                  </a>
                </Button>
              </div>

              {/* Resume Button below the two buttons */}
              <Button
                variant="outline"
                size="lg"
                className="inline-flex !w-auto items-center justify-center 
                           rounded-full border-blue-600 text-blue-600 
                           hover:bg-blue-50 hover:text-blue-700 
                           font-semibold transition-all duration-300 
                           transform hover:scale-105 bg-blue-100"
              >
                <a
                  href="https://drive.google.com/file/d/1IXGZGJWwwl296DxGCQPJNF2Vo0wNywW4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black hover:text-blue-600 transition-all duration-300"
                >
                  <FileText className="w-5 h-5" />
                  See My Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side: Floating Image */}
          <div
            className="lg:col-span-5 animate-fade-in relative"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative group">
              {/* Background Shape for Depth */}
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Image with Floating Effect */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500 animate-float">
                <img
                  src="rinku_image1.png"
                  alt="Rinku Diwakar - Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#skills"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
    </section>
  );
};

export default HeroSection;
