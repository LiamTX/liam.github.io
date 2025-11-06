import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projects } from "../data/mock";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "Fintech", "Automação", "Enterprise", "Gestão"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const getCategoryColor = (category) => {
    const colors = {
      Fintech: "bg-green-500/20 text-green-300 border-green-500/30",
      Automação: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Enterprise: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Gestão: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    };
    return (
      colors[category] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluções reais desenvolvidas para empresas de diferentes segmentos
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center text-gray-400 mr-4">
            <Filter size={20} className="mr-2" />
            <span>Filtrar por:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg border transition-all duration-300 ${
                filter === category
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category === "all" ? "Todos" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-300 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">
                    Principais funcionalidades:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">
                    Tecnologias:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
             
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Gostou dos projetos?
            </h3>
            <p className="text-gray-300 mb-6">
              Posso desenvolver uma solução personalizada para sua empresa.
              Vamos conversar sobre suas necessidades!
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
