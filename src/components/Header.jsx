import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close language menu when clicking outside
    const handleClickOutside = (event) => {
      if (isLanguageMenuOpen && !event.target.closest('.language-selector')) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "services", label: t.nav.services },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-blue-400">
            Liam Cabral
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-sm lg:text-base px-3 py-2 rounded-lg hover:bg-gray-800/50"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span>{language === 'pt-BR' ? 'PT' : 'EN'}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => handleLanguageChange('pt-BR')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                      language === 'pt-BR' ? 'text-blue-400 bg-gray-700/50' : 'text-gray-300'
                    }`}
                  >
                    🇧🇷 Português
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                      language === 'en' ? 'text-blue-400 bg-gray-700/50' : 'text-gray-300'
                    }`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Selector Mobile */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="text-gray-300 hover:text-blue-400 p-2"
                aria-label="Change language"
              >
                <Globe size={20} />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => handleLanguageChange('pt-BR')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                      language === 'pt-BR' ? 'text-blue-400 bg-gray-700/50' : 'text-gray-300'
                    }`}
                  >
                    🇧🇷 Português
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                      language === 'en' ? 'text-blue-400 bg-gray-700/50' : 'text-gray-300'
                    }`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
            
            <button
              className="text-gray-300 hover:text-blue-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-gray-800/95 rounded-lg backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-all duration-200 text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
