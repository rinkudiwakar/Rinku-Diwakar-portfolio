import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-fade-in, .animate-fade-in-slow, .animate-slide-in, .animate-slide-up, .animate-zoom-in");
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section id="about">
          <HeroSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;