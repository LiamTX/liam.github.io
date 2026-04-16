import React from "react";

const navItems = [
  { id: "servicos", label: "Serviços" },
  { id: "cases", label: "Cases" },
  { id: "processo", label: "Processo" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

const Footer = () => {
  return (
    <footer className="bg-[var(--cl-bg-secondary)] border-t border-cl-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="font-satoshi font-bold text-cl-text">Cabral Labs</div>
            <p className="mt-2 text-sm text-cl-text-muted">
              Engenharia para sistemas que precisam funcionar no mundo real.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-cl-text-muted hover:text-cl-text transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-xs text-cl-text-muted text-center sm:text-right">
            © 2026 Cabral Labs
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
