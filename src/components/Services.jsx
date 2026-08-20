import React from "react";
import { Shield, Zap, RefreshCw } from "lucide-react";
import { services } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionTag from "./ui/SectionTag";

const iconMap = {
  Shield,
  Zap,
  RefreshCw,
};

const ServiceCard = ({ service, index }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const Icon = iconMap[service.icon] || Shield;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`fade-up ${isVisible ? "visible" : ""} group relative overflow-hidden rounded-2xl bg-cl-dark-card border border-cl-dark-card-border p-6 transition-colors duration-300 hover:border-white/20 sm:p-7 lg:p-8 min-h-[340px] lg:min-h-[380px] flex flex-col`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-curves-decoration opacity-80"
      />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
            <Icon size={22} strokeWidth={1.75} />
          </div>

          {service.badge && (
            <div className="rounded-full border border-[var(--cl-accent-royal)]/50 bg-[var(--cl-accent-royal)]/15 px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-white/90">
              {service.badge}
            </div>
          )}
        </div>

        <h3 className="mt-8 font-satoshi font-bold text-xl leading-tight text-white sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/[0.72]">
          {service.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/[0.58]">
            Resultado
          </p>
          <p className="mt-1.5 text-sm font-medium leading-relaxed text-white/95">
            {service.metric}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="servicos" className="bg-cl-light-bg py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-cl-light-bg-soft px-6 py-16 sm:px-12 sm:py-20">
          <div
            ref={headerRef}
            className={`fade-up ${headerVisible ? "visible" : ""} max-w-2xl`}
          >
            <SectionTag>Serviços</SectionTag>
            <h2 className="mt-4 font-satoshi font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-cl-text-on-light leading-[1.05] tracking-normal">
              Onde a Cabral Labs entra.
            </h2>
            <p className="mt-5 text-cl-text-on-light-muted text-base sm:text-lg leading-relaxed">
              Os projetos podem pertencer a diferentes setores, desde que
              envolvam sistemas, integrações ou processos relevantes para a
              operação.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
