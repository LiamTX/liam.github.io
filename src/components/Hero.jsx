import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const personalInfo = t.personalInfo;
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.title;

  // Reset typing effect when language changes
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [language]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
       

          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-2 min-h-[2rem]">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>

          <div className="flex items-center justify-center text-gray-400 mb-6 sm:mb-8">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm sm:text-base">
              {personalInfo.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {personalInfo.yearsExperience} {t.hero.experienceYears}{" "}
            {t.hero.description}{" "}
            <span className="text-blue-400 font-semibold">Node.js</span>,
            <span className="text-blue-400 font-semibold"> Angular</span> e
            <span className="text-blue-400 font-semibold">
              {" "}
              sistemas financeiros
            </span>
            .
          </p>

          {/* Freelancer Note */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <p className="text-blue-300 text-base sm:text-lg">
              💼 {personalInfo.freelancerNote}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              {t.hero.ctaContact}
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300"
            >
              {t.hero.ctaProjects}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 sm:mb-12">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
