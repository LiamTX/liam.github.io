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
              <h2 className="mt-4 font-satoshi font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-cl-text-on-light leading-[1.05] tracking-normal">
                Quem vai tocar o seu projeto.
              </h2>

              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-cl-text-on-light-muted sm:text-lg">
                <p>
                  A Cabral Labs é conduzida por Liam Cabral, engenheiro de
                  software com mais de 7 anos de experiência, e por um time
                  enxuto que conecta descoberta, requisitos, desenvolvimento, QA
                  e entrega.
                </p>
                <p>
                  Essa estrutura mantém o cliente próximo das decisões e
                  permite recorrer a especialistas, como infraestrutura, quando
                  o escopo do projeto exige.
                </p>
                <ul className="space-y-2.5 text-sm text-cl-text-on-light sm:text-base">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cl-accent-royal)]" />
                    <span>
                      Descoberta, requisitos e QA integrados à execução
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cl-accent-royal)]" />
                    <span>
                      Contato próximo com quem toma as decisões técnicas
                    </span>
                  </li>
                </ul>
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
                <div className="mx-auto mt-6 w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <div className="aspect-square overflow-hidden rounded-[1rem] bg-white/5">
                    <img
                      src="/perfil.png"
                      alt="Liam Cabral, responsável técnico pela Cabral Labs"
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-7 space-y-6 divide-y divide-white/10">
                  {stats.map((s, i) => (
                    <div key={s.label} className={i === 0 ? "" : "pt-6"}>
                      <div
                        className={`font-satoshi font-semibold leading-tight text-white ${
                          s.value.length > 18
                            ? "text-2xl sm:text-3xl"
                            : "text-3xl sm:text-4xl"
                        }`}
                      >
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
