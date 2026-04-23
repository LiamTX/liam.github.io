import React from "react";
import { clientLogos } from "../data/mock";
import PillButton from "./ui/PillButton";
import HeroGrid from "./HeroGrid";

const Hero = () => {
  return (
    <>
      <section
        id="top"
        className="relative bg-black text-white overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-curves-decoration"
        />
        <div
          aria-hidden="true"
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[var(--cl-accent-royal)]/10 blur-[140px]"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/70 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cl-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cl-success" />
                </span>
                Disponível para novos projetos
              </div>

              <h1 className="mt-8 font-satoshi font-extrabold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.02] tracking-tight text-white">
                Software que funciona em produção.{" "}
                <span className="text-white/60">Sem atalhos.</span>
              </h1>

              <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
                A Cabral Labs é a consultoria técnica por trás de sistemas
                bancários, automações corporativas e soluções de IA que operam
                no mundo real. Sete anos de engenharia com responsabilidade
                sobre o que vai pro ar.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <PillButton href="#contato" variant="light">
                  Solicitar orçamento
                </PillButton>
                <PillButton href="#cases" variant="outline-light">
                  Ver cases
                </PillButton>
              </div>

              <div className="mt-12 lg:hidden">
                <HeroGrid />
              </div>
            </div>

            <div className="hidden lg:flex justify-center lg:justify-end">
              <HeroGrid />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cl-light-bg pt-6 pb-6 sm:pt-10 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-cl-light-bg-soft px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-xs uppercase tracking-[0.2em] text-cl-text-on-light-muted mb-6">
              Construído com e para
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {clientLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-semibold text-cl-text-on-light shadow-[0_1px_2px_rgba(10,10,15,0.04)] border border-black/5 min-w-[140px]"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
