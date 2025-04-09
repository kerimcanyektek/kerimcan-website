
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SkillsSection from "./components/SkillsSection";
import ContactCTA from "./components/ContactCTA";

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
};

export default HomePage;
