import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import PillButton from "./ui/PillButton";

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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0b0c12]/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.28)]" : ""
      }`}
    >
      <nav className="mx-auto max-w-[1312px] px-4 sm:px-6 xl:px-0">
        <div className="flex h-[82px] items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3 text-white tracking-tight"
          >
            <img
              src={logoSrc}
              alt="Cabral Labs"
              className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            />
            <span className="font-satoshi text-lg font-bold sm:text-xl">
              Cabral Labs
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10 lg:gap-11">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-white/[0.82] transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <PillButton
              href="#contato"
              variant="outline-light"
              showIcon={false}
              className="border-white/70 bg-transparent px-6 py-2.5 text-white hover:bg-white/10"
            >
              Solicitar orçamento
            </PillButton>
          </div>

          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0f1118] p-2 shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition-colors"
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
