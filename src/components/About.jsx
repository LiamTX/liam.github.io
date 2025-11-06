import React from "react";
import { Code, Users, Award, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { personalInfo } from "../data/mock";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "7+ Anos de Experiência",
      description:
        "Desenvolvimento full stack com foco em tecnologias modernas e escaláveis",
    },
    {
      icon: Users,
      title: "Liderança Técnica",
      description:
        "Experiência liderando equipes e projetos de alta complexidade",
    },
    {
      icon: Award,
      title: "Sistemas Financeiros",
      description: "Especialista em integrações bancárias e soluções fintech",
    },
    {
      icon: Zap,
      title: "Inovação",
      description:
        "Sempre buscando as melhores práticas e tecnologias emergentes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Conheça um pouco da minha jornada e expertise técnica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="px-4 sm:px-0">
            <div className="prose prose-invert max-w-none">
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 sm:p-6 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3">
                  🚀 Transição para Freelancer
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Após anos desenvolvendo soluções para grandes empresas como
                  Personal Card, Globo e Logikee, agora estou focado em ajudar
                  empresas e startups a alcançarem seus objetivos através de
                  soluções tecnológicas inovadoras e escaláveis.
                </p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-sm text-green-300">
                    ✨ <strong>Projetos de todos os tamanhos:</strong> Desde
                    landing pages e dashboards simples até sistemas complexos e
                    aplicações enterprise. Cada projeto recebe a mesma dedicação
                    e qualidade!
                  </p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Especialização:</strong> Backend com Node.js e
                    NestJS
                  </span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Frontend:</strong> Angular com TypeScript e Angular
                    Material
                  </span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Cloud:</strong> Microsoft Azure e AWS
                  </span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Banco de Dados:</strong> MongoDB, SQL, PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="pb-2 sm:pb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <highlight.icon className="text-blue-400" size={20} />
                  </div>
                  <CardTitle className="text-white text-sm sm:text-lg font-semibold leading-tight">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 px-4 sm:px-0">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              7+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Anos de Experiência
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              50+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Projetos Desenvolvidos
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              4
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Empresas Atendidas
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              15+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">Tecnologias</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
