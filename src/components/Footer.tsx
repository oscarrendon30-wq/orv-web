"use client";

import { Instagram, Facebook, MessageSquare, ArrowUp, Zap } from "lucide-react";
import SectionSeparator from "@/components/ui/SectionSeparator";

export default function Footer() {
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
              Más que diseño, presencia visual.
            </p>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-sm">
              Diseño gráfico, branding, portafolios visuales y presencia digital para marcas que necesitan verse profesionales.
            </p>
          </div>

          {/* Centro: Navegación */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans text-sm font-bold text-white mb-6 tracking-wide">
              Navegación
            </h4>
            <div className="flex flex-col gap-y-3">
              {[
                { label: "Inicio", id: "inicio" },
                { label: "Servicios", id: "servicios" },
                { label: "Portafolio", id: "portafolio" },
                { label: "Proceso", id: "proceso" },
                { label: "Sobre mí", id: "sobre-mi" },
                { label: "Contacto", id: "contacto" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  className="font-sans text-sm text-zinc-400 hover:text-[#00A3FF] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Derecha: Redes y Contacto */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans text-sm font-bold text-white mb-6 tracking-wide">
              Contacto rápido
            </h4>
            
            <div className="flex flex-col gap-4 mb-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-[#00A3FF] transition-colors group">
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm font-semibold">WhatsApp Directo</span>
              </a>
              <a href="https://www.instagram.com/oscar_rendonvisual" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-[#00A3FF] transition-colors group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm font-semibold">Instagram Profesional</span>
              </a>
              <a href="https://web.facebook.com/oscarrendondisenografico" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-[#00A3FF] transition-colors group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm font-semibold">Facebook Profesional</span>
              </a>
            </div>

            <a
              href="#contacto"
              className="inline-block w-full sm:w-auto text-center font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#00A3FF] hover:text-white border border-[#00A3FF] hover:bg-[#00A3FF] px-8 py-3.5 rounded-[12px] transition-all"
            >
              Hablemos de tu proyecto
            </a>
          </div>

        </div>

        {/* Bottom Bar: Legal */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-zinc-500 text-center sm:text-left">
            © {currentYear} Oscar Rendón Visual. Todos los derechos reservados.
          </p>
          
          <button
            onClick={handleScrollTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0c2446] border border-white/10 text-zinc-400 hover:text-[#00A3FF] hover:border-[#00A3FF]/40 transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
