import React from "react";
import { cases } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionTag from "./ui/SectionTag";

const CaseCard = ({ item, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  if (item.soon) {
    return (
      <div
        ref={ref}
        style={{ transitionDelay: `${index * 120}ms` }}
        className={`fade-up ${isVisible ? "visible" : ""} relative overflow-hidden flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-black/15 bg-white/50 p-8 min-h-[360px]`}
      >
        <span className="relative flex h-3 w-3 mb-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cl-accent-royal)] opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--cl-accent-royal)]" />
        </span>
        <h3 className="font-satoshi font-bold text-lg text-cl-text-on-light">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-cl-text-on-light-muted max-w-xs">
          {item.description}
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`fade-up ${isVisible ? "visible" : ""} relative overflow-hidden flex flex-col rounded-2xl bg-cl-dark-card border border-cl-dark-card-border p-7 sm:p-8 transition-colors duration-300 hover:border-white/20 min-h-[360px]`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-curves-decoration opacity-80"
      />

      <div className="relative flex flex-col flex-1">
        <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-white">
          {item.title}
        </h3>
        <p className="mt-3 text-sm text-white/65 leading-relaxed">
          {item.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-white/75 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
          {item.results.map((r) => (
            <div key={r.label}>
              <div className="font-satoshi font-semibold text-xl sm:text-2xl text-white">
                {r.metric}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/55 leading-tight">
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Cases = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="cases" className="bg-cl-light-bg py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-cl-light-bg-soft px-6 py-16 sm:px-12 sm:py-20">
          <div
            ref={headerRef}
            className={`fade-up ${headerVisible ? "visible" : ""} max-w-2xl`}
          >
            <SectionTag>Cases</SectionTag>
            <h2 className="mt-4 font-satoshi font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-cl-text-on-light leading-[1.05] tracking-tight">
              O que já entregamos.
            </h2>
            <p className="mt-5 text-cl-text-on-light-muted text-base sm:text-lg leading-relaxed">
              Não vendemos promessa. Cada número abaixo é de um sistema rodando
              em produção agora.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((c, i) => (
              <CaseCard key={c.id} item={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
