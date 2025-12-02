import React, { useState } from "react";
import { Code, Server, Database, Cloud, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { skills } from "../data/mock";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", label: t.skills.categories.frontend, icon: Code, color: "blue" },
    { id: "backend", label: t.skills.categories.backend, icon: Server, color: "green" },
    { id: "database", label: t.skills.categories.database, icon: Database, color: "purple" },
    { id: "cloud", label: t.skills.categories.cloud, icon: Cloud, color: "orange" },
    { id: "tools", label: t.skills.categories.tools, icon: Settings, color: "pink" },
  ];

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      blue: isActive
        ? "bg-blue-500 text-white"
        : "bg-blue-500/20 text-blue-300 border-blue-500/30",
      green: isActive
        ? "bg-green-500 text-white"
        : "bg-green-500/20 text-green-300 border-green-500/30",
      purple: isActive
        ? "bg-purple-500 text-white"
        : "bg-purple-500/20 text-purple-300 border-purple-500/30",
      orange: isActive
        ? "bg-orange-500 text-white"
        : "bg-orange-500/20 text-orange-300 border-orange-500/30",
      pink: isActive
        ? "bg-pink-500 text-white"
        : "bg-pink-500/20 text-pink-300 border-pink-500/30",
    };
    return colors[color];
  };

  const SkillBar = ({ skill, color }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-white font-medium">{skill.name}</span>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">{skill.years} {t.skills.years}</span>
            <span className="text-blue-400 font-semibold">{skill.level}%</span>
          </div>
        </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r from-${color}-400 to-${color}-600 transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg border transition-all duration-300 ${getColorClasses(
                  category.color,
                  isActive
                )} hover:scale-105`}
              >
                <IconComponent size={20} className="mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                {categories.find((cat) => cat.id === activeCategory)?.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {skills[activeCategory]?.map((skill, index) => (
                  <div key={index} className="space-y-4">
                    <SkillBar
                      skill={skill}
                      color={
                        categories.find((cat) => cat.id === activeCategory)
                          ?.color
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const skillCount = skills[category.id]?.length || 0;

            return (
              <Card
                key={index}
                className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${getColorClasses(
                      category.color
                    )}`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    {category.label}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {skillCount} {t.skills.technologies}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
