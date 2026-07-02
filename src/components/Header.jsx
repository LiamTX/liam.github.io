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
        <div className="flex h-[86px] items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3.5 rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <img
              src={logoSrc}
              alt="Cabral Labs"
              className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
            />
            <span className="font-satoshi text-xl font-bold leading-none sm:text-[1.375rem]">
              Cabral Labs
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8 xl:gap-11">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full text-sm font-medium text-white/[0.82] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <PillButton
              href="#contato"
              variant="outline-light"
              showIcon={false}
              className="border-white/70 bg-transparent px-6 py-2.5 text-white hover:bg-white/10"
            >
              Conversar sobre um projeto
            </PillButton>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2 rounded-full transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0f1118] p-2 shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Conversar sobre um projeto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
