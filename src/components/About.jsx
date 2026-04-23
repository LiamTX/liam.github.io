import React from "react";
import { stats } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionTag from "./ui/SectionTag";

const About = () => {
  const [leftRef, leftVisible] = useIntersectionObserver();
  const [rightRef, rightVisible] = useIntersectionObserver();

  return (
    <section id="sobre" className="bg-cl-light-bg py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-cl-light-bg-soft px-6 py-16 sm:px-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div
              ref={leftRef}
              className={`fade-up ${leftVisible ? "visible" : ""}`}
            >
              <SectionTag>Sobre</SectionTag>
              <h2 className="mt-4 font-satoshi font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-cl-text-on-light leading-[1.05] tracking-tight">
                Quem vai tocar o seu projeto.
              </h2>

              <div className="mt-6 space-y-4 text-cl-text-on-light-muted text-base sm:text-lg leading-relaxed">
                <p>
                  A Cabral Labs nasceu da prática de construir software em
                  produção para operações que exigem responsabilidade técnica
                  de verdade.
                </p>
                <p>
                  Aqui, quem conversa com você também participa das decisões
                  técnicas e da execução. Isso reduz ruído, acelera
                  alinhamentos e evita a distância comum entre comercial e
                  entrega.
                </p>
                <p>
                  O foco está em projetos onde arquitetura, integração e
                  qualidade de implementação fazem diferença no resultado
                  final.
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cl-success/40 bg-cl-success/10 px-3 py-1.5 text-sm text-cl-success">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cl-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cl-success" />
                </span>
                Disponível para novos projetos
              </div>
            </div>

            <div
              ref={rightRef}
              className={`fade-up ${rightVisible ? "visible" : ""} relative overflow-hidden rounded-2xl bg-cl-dark-card border border-cl-dark-card-border p-8 sm:p-10`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-grid-pattern opacity-50"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-curves-decoration opacity-70"
              />

              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                  Cabral Labs em contexto
                </p>
                <div className="mt-6 space-y-6 divide-y divide-white/10">
                  {stats.map((s, i) => (
                    <div key={s.label} className={i === 0 ? "" : "pt-6"}>
                      <div className="font-satoshi font-semibold text-3xl sm:text-4xl text-white">
                        {s.value}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/55">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
