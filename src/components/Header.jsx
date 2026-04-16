import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "servicos", label: "Serviços" },
  { id: "cases", label: "Cases" },
  { id: "processo", label: "Processo" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoSrc = `${process.env.PUBLIC_URL}/logo.png`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cl-bg/80 backdrop-blur-md border-b border-cl-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#top"
            className="flex items-center gap-3 text-cl-text tracking-tight"
          >
            <img
              src={logoSrc}
              alt="Cabral Labs"
              className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
            />
            <span className="font-satoshi font-bold text-lg sm:text-xl">
              Cabral Labs
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-cl-text-muted hover:text-cl-text transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-md bg-cl-accent px-4 py-2 text-sm font-medium text-white hover:bg-cl-accent-glow transition-colors duration-200"
            >
              Solicitar orçamento
            </a>
          </div>

          <button
            className="md:hidden text-cl-text p-2 -mr-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-1 rounded-lg border border-cl-border bg-cl-bg-secondary p-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-cl-text-muted hover:text-cl-text hover:bg-cl-bg-elevated rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-cl-accent px-4 py-2 text-sm font-medium text-white hover:bg-cl-accent-glow transition-colors"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
