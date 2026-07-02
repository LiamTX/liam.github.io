import React from "react";
import { clientLogos } from "../data/mock";
import PillButton from "./ui/PillButton";
import HeroGrid from "./HeroGrid";

const Hero = () => {
  return (
    <>
      <section
        id="top"
        className="relative isolate overflow-hidden bg-[#0b0d11] pt-32 pb-20 text-white sm:pt-40 sm:pb-24 lg:min-h-[770px] lg:pt-[9.75rem]"
      >
        <div
          aria-hidden="true"
          className="hero-page-grid absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="hero-page-curves absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="hero-page-orbital-detail absolute"
        />
        <div
          aria-hidden="true"
          className="hero-page-glow absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="hero-grid-desktop-layer absolute inset-x-0 top-0 bottom-0 hidden lg:block"
        >
          <div className="relative mx-auto h-full max-w-[1312px] px-6 xl:px-0">
            <div className="hero-grid-desktop-position">
              <HeroGrid />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1312px] px-4 sm:px-6 xl:px-0">
          <div className="max-w-[720px] lg:max-w-[760px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.045] px-3.5 py-1.5 text-xs text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cl-success opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cl-success" />
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="mt-7 text-balance font-satoshi text-[2.55rem] font-extrabold uppercase leading-[1.03] tracking-normal text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.35rem]">
              Software que funciona em produção.{" "}
              <span className="inline-block text-white/[0.64]">
                Sem atalhos.
              </span>
            </h1>

            <p className="mt-6 max-w-[680px] text-pretty text-base leading-[1.65] text-white/[0.74] md:mt-7 md:text-lg">
              Sistemas financeiros, automações corporativas e soluções com IA
              aplicada para empresas que precisam operar com segurança,
              rastreabilidade e escala.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <PillButton href="#contato" variant="light" className="w-full sm:w-auto">
                Conversar sobre um projeto
              </PillButton>
              <PillButton href="#cases" variant="outline-light" className="w-full sm:w-auto">
                Ver cases
              </PillButton>
            </div>

            <div className="mt-12 lg:hidden">
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
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-cl-text-on-light shadow-[0_1px_2px_rgba(10,10,15,0.04)] border border-black/5 min-w-[140px]"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-6 w-6 object-contain"
                  />
                  {client.name}
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
