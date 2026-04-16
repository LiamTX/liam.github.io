import React from "react";
import { stats } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const About = () => {
  const [leftRef, leftVisible] = useIntersectionObserver();
  const [rightRef, rightVisible] = useIntersectionObserver();

  return (
    <section
      id="sobre"
      className="py-24 sm:py-32 bg-cl-bg-secondary/40 border-y border-cl-border/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div
            ref={leftRef}
            className={`fade-up ${leftVisible ? "visible" : ""}`}
          >
            <p className="text-xs uppercase tracking-widest text-cl-accent-glow font-medium">
              Sobre
            </p>
            <h2 className="mt-3 font-satoshi font-extrabold text-3xl sm:text-4xl md:text-5xl text-cl-text">
              Quem vai tocar o seu projeto.
            </h2>

            <div className="mt-6 space-y-4 text-cl-text-muted text-base sm:text-lg leading-relaxed">
              <p>
                A Cabral Labs nasceu da prática de construir software em
                produção para operações que exigem responsabilidade técnica de
                verdade.
              </p>
              <p>
                Aqui, quem conversa com você também participa das decisões
                técnicas e da execução. Isso reduz ruído, acelera alinhamentos
                e evita a distância comum entre comercial e entrega.
              </p>
              <p>
                O foco está em projetos onde arquitetura, integração e
                qualidade de implementação fazem diferença no resultado final.
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
            className={`fade-up ${rightVisible ? "visible" : ""} rounded-xl border border-cl-border bg-cl-bg-secondary p-8 sm:p-10`}
          >
            <p className="text-xs uppercase tracking-widest text-cl-text-muted/70">
              Cabral Labs em contexto
            </p>
            <div className="mt-6 space-y-6 divide-y divide-cl-border/60">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={i === 0 ? "" : "pt-6"}
                >
                  <div className="font-satoshi font-extrabold text-3xl sm:text-4xl text-cl-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-cl-text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
