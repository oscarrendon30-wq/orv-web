"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { trackClickWhatsApp } from "@/utils/analytics";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("header.inicio"), href: "/#inicio" },
    { name: t("header.servicios"), href: "/#servicios" },
    { name: t("header.portafolio"), href: "/#portafolio" },
    { name: t("header.proceso"), href: "/#proceso" },
    { name: t("header.sobreMi"), href: "/#sobre-mi" },
    { name: t("header.contacto"), href: "/#contacto" },
  ];

  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20de%20dise%C3%B1o%20gr%C3%A1fico.";
  const facebookUrl = "https://web.facebook.com/oscarrendondisenografico"; // Easy-to-update Facebook constant

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-100 py-4 shadow-sm"
          : "bg-white border-b border-zinc-50 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo Container */}
        <Link href="/#inicio" className="group flex items-center">
          <div className="transition-transform duration-300 group-hover:scale-[1.01]">
            <Image
              src="/images/brand/logo-horizontal-transparent.webp"
              alt="Oscar Rendón Visual"
              width={170}
              height={38}
              priority
              className="object-contain h-auto w-[145px] md:w-[170px]"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = link.name === t("header.inicio");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] tracking-wide font-medium transition-colors relative pb-1 ${
                  isActive
                    ? "text-brand-royal font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-royal"
                    : "text-zinc-600 hover:text-brand-royal"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Social Icons Block */}
        <div className="hidden md:flex items-center gap-6">
          {/* Social Icons & Language Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-600" aria-label="Toggle language">
              <button 
                onClick={() => setLanguage("es")}
                className={`hover:text-brand-royal transition-colors ${language === 'es' ? "text-[#0a2540]" : ""}`}
              >
                ES
              </button>
              <span className="mx-1.5 opacity-40">/</span>
              <button 
                onClick={() => setLanguage("en")}
                className={`hover:text-brand-royal transition-colors ${language === 'en' ? "text-[#0a2540]" : ""}`}
              >
                EN
              </button>
            </div>
            <div className="w-[1px] h-4 bg-zinc-200 mx-1" />

            <a
              href="https://www.instagram.com/oscar_rendonvisual"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a2540] hover:text-[#00A3FF] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a2540] hover:text-[#00A3FF] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClickWhatsApp("Header Desktop")}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#0a2540] text-white text-[13px] font-bold tracking-wider uppercase hover:bg-brand-royal transition-all duration-300 shadow-md hover:shadow-brand-royal/10 group"
          >
            {/* WhatsApp Custom Inline SVG */}
            <svg
              className="w-4 h-4 fill-current text-white transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.638 1.982 14.19 1.94 11.97 1.94c-5.438 0-9.863 4.373-9.868 9.802-.001 1.77.463 3.5 1.34 5.016l-.997 3.634 3.737-.968zm11.388-7.75c-.247-.124-1.461-.72-1.685-.8-.225-.081-.388-.124-.55.125-.162.249-.625.8-.767.962-.14.161-.281.18-.528.057-.247-.125-1.044-.385-1.988-1.229-.735-.656-1.232-1.47-1.378-1.72-.146-.249-.015-.384.109-.507.112-.111.247-.29.37-.435.125-.145.166-.248.248-.415.083-.166.042-.311-.02-.435-.062-.125-.55-1.326-.75-1.81-.197-.474-.396-.411-.55-.419-.143-.008-.307-.01-.472-.01-.166 0-.436.062-.664.311-.228.249-.873.851-.873 2.075 0 1.224.891 2.406.99 2.571.1.166 1.752 2.674 4.244 3.75.593.256 1.056.409 1.417.524.597.19 1.14.163 1.57.099.479-.071 1.462-.597 1.666-1.173.204-.576.204-1.07.142-1.173-.061-.102-.224-.165-.471-.29z" />
            </svg>
            {t("header.hablemos")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-700 hover:text-brand-royal transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute inset-x-0 top-full h-[100vh] z-[100] bg-white border-t border-zinc-100 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-700 hover:text-brand-royal transition-colors border-b border-zinc-100 pb-3"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Social Icons & Language Toggle */}
          <div className="flex flex-col gap-2 py-2 border-b border-zinc-100 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs font-bold tracking-[0.2em] uppercase text-zinc-600">
                <button 
                  onClick={() => setLanguage("es")}
                  className={language === 'es' ? "text-[#0a2540]" : ""}
                >
                  ES
                </button>
                <span className="mx-2 opacity-40">/</span>
                <button 
                  onClick={() => setLanguage("en")}
                  className={language === 'en' ? "text-[#0a2540]" : ""}
                >
                  EN
                </button>
              </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/oscar_rendonvisual"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-[#0a2540] hover:text-brand-royal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-[#0a2540] hover:text-brand-royal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            </div>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setIsOpen(false);
              trackClickWhatsApp("Header Mobile");
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0a2540] text-white text-base font-bold tracking-wider uppercase hover:bg-brand-royal transition-all mt-2"
          >
            {t("header.hablemos")}
          </a>
        </div>
      </div>
    </header>
  );
}
