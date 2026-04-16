import React from "react";
import { Shield, Zap, Brain } from "lucide-react";
import { services } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const iconMap = {
  Shield,
  Zap,
  Brain,
};

const ServiceCard = ({ service, index }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const Icon = iconMap[service.icon] || Shield;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`fade-up ${isVisible ? "visible" : ""} group relative rounded-xl border border-cl-border bg-cl-bg-secondary p-6 sm:p-8 transition-all duration-300 hover:border-cl-accent/40 hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.45)]`}
    >
      {service.badge && (
        <div className="absolute -top-3 left-6 rounded-full border border-cl-accent/40 bg-cl-bg px-3 py-1 text-xs font-medium text-cl-accent-glow">
          {service.badge}
        </div>
      )}

      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cl-accent/10 text-cl-accent-glow group-hover:bg-cl-accent/15 transition-colors">
        <Icon size={22} />
      </div>

      <h3 className="mt-5 font-satoshi font-bold text-xl text-cl-text">
        {service.title}
      </h3>
      <p className="mt-3 text-sm text-cl-text-muted leading-relaxed">
        {service.description}
      </p>

      <div className="mt-6 pt-5 border-t border-cl-border/60">
        <p className="text-xs uppercase tracking-widest text-cl-text-muted/70">
          Resultado
        </p>
        <p className="mt-1 text-sm font-medium text-cl-success">
          {service.metric}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="servicos" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`fade-up ${headerVisible ? "visible" : ""} max-w-2xl`}
        >
          <p className="text-xs uppercase tracking-widest text-cl-accent-glow font-medium">
            Serviços
          </p>
          <h2 className="mt-3 font-satoshi font-extrabold text-3xl sm:text-4xl md:text-5xl text-cl-text">
            O que construímos.
          </h2>
          <p className="mt-4 text-cl-text-muted text-base sm:text-lg">
            Cada projeto que aceitamos tem uma coisa em comum: precisa
            funcionar em produção, com escala e sem surpresas.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
