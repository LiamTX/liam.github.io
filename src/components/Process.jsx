import React from "react";
import { processSteps } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionTag from "./ui/SectionTag";
import PillButton from "./ui/PillButton";

const Step = ({ step, index, isLast }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`fade-up ${isVisible ? "visible" : ""} relative pl-10 pb-10`}
    >
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-2 h-3 w-3 border-2 border-[var(--cl-accent-royal)] bg-cl-light-bg-soft"
      />
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[10px] top-6 bottom-0 border-l border-dashed border-black/20"
        />
      )}
      <h3 className="font-satoshi font-bold text-xl text-cl-text-on-light">
        {index + 1}. {step.title}
      </h3>
      <p className="mt-2 text-sm text-cl-text-on-light-muted leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

const Process = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="processo" className="bg-cl-light-bg py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-cl-light-bg-soft px-6 py-16 sm:px-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div
              ref={headerRef}
              className={`fade-up ${headerVisible ? "visible" : ""}`}
            >
              <SectionTag>Processo</SectionTag>
              <h2 className="mt-4 font-satoshi font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-cl-text-on-light leading-[1.05] tracking-normal">
                Como o projeto acontece.
              </h2>
              <p className="mt-5 text-cl-text-on-light-muted text-base sm:text-lg leading-relaxed">
                Um processo simples, com visibilidade desde o início. Você sabe
                o que está sendo decidido, o que está sendo entregue e o que
                vem depois.
              </p>

              <div className="mt-8">
                <PillButton href="#contato" variant="dark">
                  Solicitar conversa inicial
                </PillButton>
              </div>
            </div>

            <div>
              {processSteps.map((step, i) => (
                <Step
                  key={step.id}
                  step={step}
                  index={i}
                  isLast={i === processSteps.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex max-w-3xl items-center gap-2 rounded-full border border-black/15 bg-white/60 px-4 py-2 text-center text-sm leading-relaxed text-cl-text-on-light-muted">
              O objetivo não é complicar o projeto com etapas demais. É dar
              previsibilidade sem tirar velocidade.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
