import React from "react";

const navItems = [
  { id: "servicos", label: "Serviços" },
  { id: "cases", label: "Cases" },
  { id: "processo", label: "Processo" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

const Footer = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logo.png`;

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-curves-decoration opacity-70"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3 text-white tracking-tight"
            >
              <img
                src={logoSrc}
                alt="Cabral Labs"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="font-satoshi font-bold text-lg">
                Cabral Labs
              </span>
            </a>
            <p className="mt-4 text-sm text-white/60 max-w-sm">
              Engenharia para sistemas que precisam funcionar no mundo real.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <nav className="flex flex-col gap-2 lg:items-end">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/50">© 2026 Cabral Labs</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
