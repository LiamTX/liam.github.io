import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { isUpworkMode } from "../utils/upworkMode";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const personalInfo = t.personalInfo;
  const upworkMode = isUpworkMode();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationLinks = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "services", label: t.nav.services },
    { id: "contact", label: t.nav.contact },
  ];

  const services = t.footer.serviceList;

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              {personalInfo.name}
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.footer.description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              {!upworkMode && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          {!upworkMode && (
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t.footer.contact}</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-3 text-blue-400" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-3 text-blue-400" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin size={16} className="mr-3 text-blue-400 mt-1" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold">
                    {t.footer.available}
                  </span>
                </div>
              </div>
            </div>
          )}
          {upworkMode && (
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t.footer.contact}</h3>
              <div className="space-y-4">
                <div className="flex items-start text-gray-400">
                  <MapPin size={16} className="mr-3 text-blue-400 mt-1" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold">
                    {t.footer.available}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. {t.footer.copyright}
            </div>

            <div className="flex items-center text-gray-400 text-sm">
              <span>{t.footer.madeWith}</span>
              <Heart
                className="text-red-400 mx-2"
                size={16}
                fill="currentColor"
              />
              <span>{t.footer.madeUsing}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-6 text-center">
            <div className="text-gray-500 text-xs">
              {t.footer.mainTechnologies}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
