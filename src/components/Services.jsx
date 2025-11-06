import React from "react";
import { Code, Layers, Cloud, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { services } from "../data/mock";

const Services = () => {
  const getIcon = (iconName) => {
    const icons = {
      Code: Code,
      Layers: Layers,
      Cloud: Cloud,
      Users: Users,
    };
    return icons[iconName] || Code;
  };

  const iconColors = [
    "text-blue-400 bg-blue-500/20",
    "text-green-400 bg-green-500/20",
    "text-purple-400 bg-purple-500/20",
    "text-orange-400 bg-orange-500/20",
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Serviços Freelancer
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Soluções completas para transformar suas ideias em realidade digital
          </p>
          <div className="mt-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-green-300 text-sm sm:text-base">
              ✨ <strong>Projetos de todos os tamanhos:</strong> Desde landing
              pages simples até sistemas complexos. Cada projeto recebe
              dedicação total e qualidade profissional!
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);

            return (
              <Card
                key={service.id}
                className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-lg flex items-center justify-center mb-3 sm:mb-4 ${iconColors[index]} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs sm:text-sm text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 text-xs sm:text-sm"
                  >
                    Saiba mais
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white px-4 sm:px-0">
            Meu Processo de Trabalho
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            {[
              {
                step: "01",
                title: "Análise",
                desc: "Entendo suas necessidades e objetivos",
              },
              {
                step: "02",
                title: "Planejamento",
                desc: "Defino a arquitetura e tecnologias",
              },
              {
                step: "03",
                title: "Desenvolvimento",
                desc: "Codifico com qualidade e agilidade",
              },
              {
                step: "04",
                title: "Entrega",
                desc: "Deploy e suporte pós-implementação",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index !== 3 && (
                  <div className="hidden md:block absolute top-6 sm:top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}

                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-blue-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
