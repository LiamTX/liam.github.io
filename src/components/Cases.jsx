import React, { useState } from "react";
import { cases } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import FintechShowcase from "./FintechShowcase";
import SectionTag from "./ui/SectionTag";

const CaseCard = ({ item, index, expanded, onToggle }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const isFinanceCase = item.id === "banking-platform";
  const galleryId = `${item.id}-gallery`;

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

        <div className="mt-5 space-y-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/[0.58]">
              Contexto
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/[0.72]">
              {item.context}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/[0.58]">
              Atuação da Cabral Labs
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/[0.72]">
              {item.role}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/[0.58]">
              Colaboração
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/[0.72]">
              {item.collaboration}
            </p>
          </div>
        </div>

        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/[0.58]">
            Resultados
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {item.results.map((r) => (
              <div key={r.label}>
                <div className="font-satoshi text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {r.metric}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/60 leading-tight">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {isFinanceCase && (
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={galleryId}
            className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cl-accent-royal)] focus-visible:ring-offset-2 focus-visible:ring-offset-cl-dark-card"
          >
            {expanded ? "Recolher detalhes" : "Ver projeto em detalhes"}
          </button>
        )}

        {isFinanceCase && expanded && (
          <div id={galleryId} className="mt-6">
            <FintechShowcase />
          </div>
        )}
      </div>
    </div>
  );
};

const Cases = () => {
  const [expandedCase, setExpandedCase] = useState(null);
  const [headerRef, headerVisible] = useIntersectionObserver();

  const toggleCase = (id) => {
    setExpandedCase((prev) => (prev === id ? null : id));
  };

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
              Projetos reais colocados em produção, com atribuição clara entre
              o que foi desenvolvido pela Cabral Labs e o que foi construído em
              colaboração.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {cases.map((c, i) => (
              <CaseCard
                key={c.id}
                item={c}
                index={i}
                expanded={expandedCase === c.id}
                onToggle={() => toggleCase(c.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
