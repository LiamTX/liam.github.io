import React from "react";
import { cases } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const CaseCard = ({ item, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  if (item.soon) {
    return (
      <div
        ref={ref}
        style={{ transitionDelay: `${index * 120}ms` }}
        className={`fade-up ${isVisible ? "visible" : ""} flex flex-col items-center justify-center text-center rounded-xl border border-dashed border-cl-border bg-cl-bg-secondary/40 p-8 min-h-[320px]`}
      >
        <span className="relative flex h-3 w-3 mb-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cl-accent-glow opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-cl-accent" />
        </span>
        <h3 className="font-satoshi font-bold text-lg text-cl-text">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-cl-text-muted max-w-xs">
          {item.description}
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`fade-up ${isVisible ? "visible" : ""} flex flex-col rounded-xl border border-cl-border bg-cl-bg-secondary p-6 sm:p-8 transition-all duration-300 hover:border-cl-accent/30`}
    >
      <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-cl-text">
        {item.title}
      </h3>
      <p className="mt-3 text-sm text-cl-text-muted leading-relaxed">
        {item.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-cl-bg-elevated px-2.5 py-1 text-xs font-medium text-cl-text-muted border border-cl-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-cl-border/60 grid grid-cols-3 gap-4">
        {item.results.map((r) => (
          <div key={r.label}>
            <div className="font-satoshi font-bold text-xl sm:text-2xl text-cl-text">
              {r.metric}
            </div>
            <div className="mt-1 text-xs text-cl-text-muted leading-tight">
              {r.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cases = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section
      id="cases"
      className="py-24 sm:py-32 bg-cl-bg-secondary/40 border-y border-cl-border/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`fade-up ${headerVisible ? "visible" : ""} max-w-2xl`}
        >
          <p className="text-xs uppercase tracking-widest text-cl-accent-glow font-medium">
            Cases
          </p>
          <h2 className="mt-3 font-satoshi font-extrabold text-3xl sm:text-4xl md:text-5xl text-cl-text">
            O que já entregamos.
          </h2>
          <p className="mt-4 text-cl-text-muted text-base sm:text-lg">
            Não vendemos promessa. Cada número abaixo é de um sistema rodando
            em produção agora.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.id} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
