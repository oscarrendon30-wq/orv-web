"use client";

import { Instagram, Facebook, MessageSquare, ArrowUp, Zap } from "lucide-react";
import SectionSeparator from "@/components/ui/SectionSeparator";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = 2026;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20de%20dise%C3%B1o%20gr%C3%A1fico.";

  return (
    <footer className="bg-[#050B14] relative overflow-hidden">
      <SectionSeparator className="absolute top-0" />
      
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00A3FF] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24 pb-8">
        {/* Top 3-column block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Izquierda: Marca y Descripción */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#00A3FF]" />
              </div>
              <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
                Oscar Rendón <span className="text-[#00A3FF]">Visual</span>
              </h3>
            </div>
            <p className="font-sans text-[10px] md:text-xs text-[#00A3FF] font-bold uppercase tracking-[0.2em] mb-4">
              {t("footer.tagline")}
            </p>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Centro: Navegación */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans text-sm font-bold text-white mb-6 tracking-wide">
              {t("footer.navTitle")}
            </h4>
            <div className="flex flex-col gap-y-3">
              {([0, 1, 2, 3, 4, 5] as const).map((i) => (
                <a
                  key={i}
                  href={`#${t(`footer.navItems.${i}.id`)}`}
                  className="font-sans text-sm text-zinc-400 hover:text-[#00A3FF] transition-colors"
                >
                  {t(`footer.navItems.${i}.label`)}
                </a>
              ))}
            </div>
          </div>

          {/* Derecha: Redes y Contacto */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans text-sm font-bold text-white mb-6 tracking-wide">
              {t("footer.contactTitle")}
            </h4>
            
            <div className="flex flex-col gap-4 mb-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-[#00A3FF] transition-colors group">
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm font-semibold">{t("footer.whatsapp")}</span>
              </a>
              <a href="mailto:contacto@oscarrendonvisual.com" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-[#00A3FF] transition-colors group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-sans text-sm font-semibold">{t("footer.email")}</span>
              </a>
              <a href="https://www.instagram.com/oscar_rendonvisual" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-[#00A3FF] transition-colors group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm font-semibold">{t("footer.instagram")}</span>
              </a>
              <a href="https://web.facebook.com/oscarrendondisenografico" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-[#00A3FF] transition-colors group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm font-semibold">{t("footer.facebook")}</span>
              </a>
            </div>

            <a
              href="#contacto"
              className="inline-block w-full sm:w-auto text-center font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#00A3FF] hover:text-white border border-[#00A3FF] hover:bg-[#00A3FF] px-8 py-3.5 rounded-[12px] transition-all"
            >
              {t("footer.cta")}
            </a>
          </div>

        </div>

        {/* Bottom Bar: Legal */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-zinc-500 text-center md:text-left">
            {t("footer.rights").replace("{year}", currentYear.toString())}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.1em] text-zinc-500">
            <a href="/privacy" className="hover:text-[#00A3FF] transition-colors">{t("legal.privacy")}</a>
            <span className="text-zinc-700">|</span>
            <a href="/cookies" className="hover:text-[#00A3FF] transition-colors">{t("legal.cookies")}</a>
            <span className="text-zinc-700">|</span>
            <a href="/terms" className="hover:text-[#00A3FF] transition-colors">{t("legal.terms")}</a>
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0c2446] border border-white/10 text-zinc-400 hover:text-[#00A3FF] hover:border-[#00A3FF]/40 transition-colors shrink-0"
            aria-label={t("footer.backToTop")}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
