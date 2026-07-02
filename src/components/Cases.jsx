import React from "react";
import { cases } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionTag from "./ui/SectionTag";

const CaseCard = ({ item, index }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const isLicenseCase = item.id === "license-governance";

  if (item.soon) {
    return (
      <div
        ref={ref}
        style={{ transitionDelay: `${index * 120}ms` }}
        className={`fade-up ${isVisible ? "visible" : ""} relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-2xl border border-dashed border-white/20 bg-cl-dark-card p-7 text-center transition-colors duration-300 hover:border-white/30 sm:p-8`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-curves-decoration opacity-60"
        />

        <div className="relative flex flex-1 flex-col items-center justify-center">
          <p className="mb-6 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
            Case em documentação
          </p>
          <span className="relative mb-5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cl-accent-royal)] opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--cl-accent-royal)]" />
          </span>
          <h3 className="max-w-xs font-satoshi text-xl font-bold leading-tight text-white sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/[0.72]">
            {item.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`fade-up ${isVisible ? "visible" : ""} relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-2xl border border-cl-dark-card-border bg-cl-dark-card p-7 transition-colors duration-300 hover:border-white/20 sm:p-8`}
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
        <h3 className="font-satoshi text-xl font-bold leading-tight text-white sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/[0.72]">
          {item.description}
        </p>

        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/[0.58]">
            Resultado
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {item.results.map((r, resultIndex) => (
              <div key={r.label}>
                <div
                  className={`font-satoshi text-xl font-semibold leading-tight sm:text-2xl ${
                    isLicenseCase && resultIndex === 0
                      ? "text-cl-success"
                      : "text-white"
                  }`}
                >
                  {r.metric}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/60 leading-tight">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
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
            <h2 className="mt-4 font-satoshi font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-cl-text-on-light leading-[1.05] tracking-normal">
              O que já entregamos.
            </h2>
            <p className="mt-5 text-cl-text-on-light-muted text-base sm:text-lg leading-relaxed">
              Não vendemos promessa. Os números abaixo vêm de projetos reais
              colocados em produção.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
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
