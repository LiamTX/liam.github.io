import React, { useEffect, useState } from "react";
import { fintechScreens } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionTag from "./ui/SectionTag";

const FintechShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEntering, setIsEntering] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();
  const active = fintechScreens[activeIndex];

  useEffect(() => {
    setIsEntering(true);
    const raf = requestAnimationFrame(() => {
      setIsEntering(false);
    });
    return () => cancelAnimationFrame(raf);
  }, [activeIndex]);

  return (
    <div
      ref={ref}
      className={`fade-up ${isVisible ? "visible" : ""} overflow-hidden rounded-2xl border border-cl-dark-card-border bg-cl-dark-card p-6 sm:p-8`}
    >
      <div className="flex flex-col gap-5">
        <div>
          <SectionTag tone="dark">Projeto em detalhes</SectionTag>
          <h3 className="mt-3 font-satoshi text-xl font-bold text-white sm:text-2xl">
            Aplicação financeira em operação
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/[0.72]">
            Telas do aplicativo e do painel administrativo desenvolvidos e
            evoluídos pela Cabral Labs, em colaboração com a equipe
            responsável pela infraestrutura.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              key={active.id}
              src={active.src}
              alt={`${active.group}: ${active.title}`}
              className={`fintech-viewer-img absolute inset-0 h-full w-full object-cover ${isEntering ? "fintech-viewer-entering" : ""}`}
            />
          </div>
          <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
            <span className="text-sm font-medium text-white">{active.title}</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
              {active.group}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {fintechScreens.map((screen, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={screen.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                style={{ transitionDelay: `${index * 60}ms` }}
                className={`group relative overflow-hidden rounded-lg border bg-black/20 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cl-accent-royal)] active:scale-[0.97] ${
                  isActive
                    ? "border-[var(--cl-accent-royal)] ring-2 ring-[var(--cl-accent-royal)]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={screen.src}
                    alt={`Miniatura ${index + 1}: ${screen.title}`}
                    loading="lazy"
                    className="fintech-thumb-img h-full w-full object-cover"
                  />
                </div>
                <div className="truncate px-2 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
                  {screen.title}
                </div>
                {isActive && <span className="sr-only">(selecionado)</span>}
              </button>
            );
          })}
        </div>

        <p className="ml-auto max-w-md text-right text-[11px] leading-relaxed text-white/40">
          Telas do sistema real, com dados, nomes e identidade adaptados por
          sigilo contratual.
        </p>
      </div>
    </div>
  );
};

export default FintechShowcase;
