import React from "react";
import { processSteps } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Step = ({ step, index, isLast }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`fade-up ${isVisible ? "visible" : ""} relative`}
    >
      <div className="flex min-h-full items-start gap-4 sm:gap-5">
        <span
          aria-hidden="true"
          className="block w-14 shrink-0 text-right font-satoshi font-black text-4xl sm:w-16 sm:text-5xl lg:w-20 lg:text-6xl text-cl-accent/20 select-none leading-none"
        >
          {number}
        </span>
        <div className="min-w-0 flex-1 pt-1 sm:pt-2">
          <h3 className="font-satoshi font-bold text-xl text-cl-text">
            {step.title}
          </h3>
          <p className="mt-3 text-sm text-cl-text-muted leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {!isLast && (
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-16 left-full w-full border-t border-dashed border-cl-border -translate-x-6"
        />
      )}
    </div>
  );
};

const Process = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="processo" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`fade-up ${headerVisible ? "visible" : ""} max-w-2xl`}
        >
          <p className="text-xs uppercase tracking-widest text-cl-accent-glow font-medium">
            Processo
          </p>
          <h2 className="mt-3 font-satoshi font-extrabold text-3xl sm:text-4xl md:text-5xl text-cl-text">
            Como o projeto acontece.
          </h2>
          <p className="mt-4 text-cl-text-muted text-base sm:text-lg">
            Um processo simples, com visibilidade desde o início. Você sabe o
            que está sendo decidido, o que está sendo entregue e o que vem
            depois.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
          {processSteps.map((step, i) => (
            <Step
              key={step.id}
              step={step}
              index={i}
              isLast={i === processSteps.length - 1}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cl-border bg-cl-bg-secondary/60 px-4 py-2 text-sm text-cl-text-muted text-center">
            O objetivo não é complicar o projeto com etapas demais. É dar
            previsibilidade sem tirar velocidade.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
