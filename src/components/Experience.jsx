import React from "react";
import { MapPin, Calendar, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { experience } from "../data/mock";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Minha trajetória desenvolvendo soluções inovadoras
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

              <Card className="ml-12 mb-8 bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-white mb-2">
                        {exp.position}
                      </CardTitle>
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <Building size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="text-sm text-gray-500">
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">
                      Principais Realizações:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-sm flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Tecnologias utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Formação Acadêmica
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-400 text-lg">
                  Universidade do Vale do Itajaí (UNIVALI)
                </CardTitle>
                <p className="text-white font-semibold">
                  Análise e Desenvolvimento de Sistemas
                </p>
                <p className="text-gray-400">2021 - 2023 • Concluído</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Graduação focada em desenvolvimento de software, análise de
                  sistemas e metodologias de programação modernas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-400 text-lg">
                  SENAI/SC
                </CardTitle>
                <p className="text-white font-semibold">
                  Ensino Técnico em Programação
                </p>
                <p className="text-gray-400">2018 - 2020 • Concluído</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Curso técnico com foco em programação de computadores e
                  desenvolvimento de aplicações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
