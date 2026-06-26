import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about", label: "Ir para a seção sobre Lidiane Rabelo" },
    { name: "Especialidades", href: "#services", label: "Ver especialidades e diferenciais do atendimento" },
    { name: "Consultório", href: "#gallery", label: "Visualizar fotos do consultório terapêutico" },
    { name: "Depoimentos", href: "#testimonials", label: "Ler avaliações de clientes atendidas" },
    { name: "Contato", href: "#contact", label: "Ir para o formulário de contato e redes sociais" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 ${
        isScrolled
          ? "bg-brand-bg/90 backdrop-blur-md shadow-md border-b border-brand-card/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Neumorphic text extrusion effect */}
        <a
          href="#"
          aria-label="Psicóloga Lidiane Rabelo - Página Inicial"
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-brand-dark transition-all duration-300 hover:opacity-95">
            Psicóloga <span className="text-brand-gold">Lidiane Rabelo</span>
          </span>
          <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-dark/65 -mt-1 group-hover:text-brand-gold transition-colors duration-300">
            Psicoterapia Corporal Reichiana • {CONTACT_INFO.crp}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.label}
              className="px-4 py-2 text-sm font-medium text-brand-dark/80 hover:text-brand-gold hover:bg-brand-card/50 rounded-xl transition-all duration-200 focus:ring-2 focus:ring-brand-gold/30 focus:outline-none"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar Consulta pelo WhatsApp"
            className="btn-neo-gold text-sm font-medium px-5 py-2.5 rounded-xl flex items-center gap-2"
          >
            <Phone size={16} />
            <span>Agendar Consulta</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="lg:hidden p-2 rounded-xl text-brand-dark hover:bg-brand-card focus:outline-none focus:ring-2 focus:ring-brand-gold/30 flex items-center justify-center btn-neo-flat"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] bg-brand-dark/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        id="mobile-menu"
        className={`fixed top-[60px] left-0 right-0 bg-brand-bg border-b border-brand-card shadow-lg z-50 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[380px] py-4 px-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-2 mb-4" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.label}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 px-4 text-sm font-medium text-brand-dark hover:text-brand-gold hover:bg-brand-card/70 rounded-xl transition-all duration-200 focus:outline-none"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="pt-2 border-t border-brand-card/50 flex flex-col space-y-3">
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Agendar Consulta pelo WhatsApp"
            className="btn-neo-gold text-center py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <Phone size={16} />
            <span>Agendar Consulta</span>
          </a>
        </div>
      </div>
    </header>
  );
}
