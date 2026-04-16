import React from "react";
import { ArrowRight } from "lucide-react";
import { clientLogos } from "../data/mock";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cl-border bg-cl-bg-secondary/60 px-3 py-1.5 text-xs sm:text-sm text-cl-text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cl-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cl-success" />
            </span>
            Disponível para novos projetos
          </div>

          <h1 className="mt-6 font-satoshi font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cl-text">
            Software que funciona em produção.{" "}
            <span className="text-gradient-accent">Sem atalhos.</span>
          </h1>

          <p className="mt-6 text-cl-text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            A Cabral Labs é a consultoria técnica por trás de sistemas
            bancários, automações corporativas e soluções de IA que operam no
            mundo real. Sete anos de engenharia com responsabilidade sobre o
            que vai pro ar.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cl-accent px-6 py-3 text-sm font-medium text-white hover:bg-cl-accent-glow transition-colors duration-200"
            >
              Solicitar orçamento
              <ArrowRight size={16} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center rounded-md border border-cl-border bg-transparent px-6 py-3 text-sm font-medium text-cl-text hover:bg-cl-bg-secondary transition-colors duration-200"
            >
              Ver cases
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-cl-border/50">
            <p className="text-xs uppercase tracking-widest text-cl-text-muted/70 mb-4">
              Construído com e para
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-cl-text-muted/60 text-sm">
              {clientLogos.map((logo, i) => (
                <React.Fragment key={logo}>
                  <span className="font-medium">{logo}</span>
                  {i < clientLogos.length - 1 && (
                    <span className="text-cl-text-muted/30">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
