"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionSeparator from "@/components/ui/SectionSeparator";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailDescription: string;
  benefits: string[];
  idealFor: string;
  image: string;
  icon: React.ReactNode;
}

export default function InteractiveServices() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);
  const { t, language } = useLanguage();

  const services: Service[] = [
    {
      id: "branding",
      title: t("services.items.branding.title"),
      shortDescription: t("services.items.branding.short"),
      detailDescription: t("services.items.branding.detail"),
      benefits: (language === "es" 
        ? ["Identidad visual coherente", "Paleta cromática y estilo gráfico", "Aplicaciones comerciales de marca"]
        : ["Coherent visual identity", "Color palette and graphic style", "Commercial brand applications"]),
      idealFor: t("services.items.branding.ideal"),
      image: "/images/services/branding-identidad.webp",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#00A3FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 12l10 10 10-10L12 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6L6 12l6 6 6-6-6-6z" />
        </svg>
      ),
    },
    {
      id: "redes",
      title: t("services.items.redes.title"),
      shortDescription: t("services.items.redes.short"),
      detailDescription: t("services.items.redes.detail"),
      benefits: (language === "es"
        ? ["Piezas para feed e historias", "Línea visual para campañas", "Contenido listo para publicar"]
        : ["Feed and stories content", "Visual line for campaigns", "Ready-to-publish content"]),
      idealFor: t("services.items.redes.ideal"),
      image: "/images/services/redes-sociales.webp",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#00A3FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="2" y="3" width="16" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 15v4l4-4" />
          <path d="M16 11.5a2 2 0 002-2h-3v2h1z" />
          <rect x="15" y="11" width="7" height="8" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 19v2" />
        </svg>
      ),
    },
    {
      id: "editorial",
      title: t("services.items.editorial.title"),
      shortDescription: t("services.items.editorial.short"),
      detailDescription: t("services.items.editorial.detail"),
      benefits: (language === "es"
        ? ["Diagramación profesional", "Jerarquía visual clara", "Piezas listas para impresión o digital"]
        : ["Professional layout", "Clear visual hierarchy", "Print or digital ready pieces"]),
      idealFor: t("services.items.editorial.ideal"),
      image: "/images/services/diseno-editorial.webp",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#00A3FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "presentaciones",
      title: t("services.items.presentaciones.title"),
      shortDescription: t("services.items.presentaciones.short"),
      detailDescription: t("services.items.presentaciones.detail"),
      benefits: (language === "es"
        ? ["Láminas claras y persuasivas", "Diseño para informes y propuestas", "Mejor lectura de información compleja"]
        : ["Clear and persuasive slides", "Design for reports and proposals", "Better reading of complex information"]),
      idealFor: t("services.items.presentaciones.ideal"),
      image: "/images/services/presentaciones-corporativas.webp",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#00A3FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="3" y="3" width="18" height="13" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v5M9 21h6M7 7h10M7 11h6" />
        </svg>
      ),
    },
    {
      id: "web",
      title: t("services.items.web.title"),
      shortDescription: t("services.items.web.short"),
      detailDescription: t("services.items.web.detail"),
      benefits: (language === "es"
        ? ["Diseño moderno y funcional", "Estructura clara de navegación", "Presencia digital profesional"]
        : ["Modern and functional design", "Clear navigation structure", "Professional digital presence"]),
      idealFor: t("services.items.web.ideal"),
      image: "/images/services/diseno-web.webp",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#00A3FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      id: "empaques",
      title: t("services.items.empaques.title"),
      shortDescription: t("services.items.empaques.short"),
      detailDescription: t("services.items.empaques.detail"),
      benefits: (language === "es"
        ? ["Diseño aplicado a producto", "Etiquetas y piezas comerciales", "Presentación visual más atractiva"]
        : ["Product applied design", "Labels and commercial pieces", "More attractive visual presentation"]),
      idealFor: t("services.items.empaques.ideal"),
      image: "/images/services/empaques-publicidad.webp",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#00A3FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5M2 7v10M22 7v10M12 12v10" />
        </svg>
      ),
    },
  ];

  const activeService = services.find((s) => s.id === selectedService);

  return (
    <section id="servicios" className="scroll-mt-28 pt-8 md:pt-10 pb-16 bg-[#f8f9fa] relative">
      <SectionSeparator className="absolute top-0" />
      
      {/* Background soft layout grids */}
      <div className="absolute left-6 top-10 w-24 h-24 opacity-[0.03] pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-zinc-900">
          <circle cx="10" cy="10" r="3" />
          <circle cx="30" cy="10" r="3" />
          <circle cx="50" cy="10" r="3" />
          <circle cx="70" cy="10" r="3" />
          <circle cx="90" cy="10" r="3" />
          <circle cx="10" cy="30" r="3" />
          <circle cx="30" cy="30" r="3" />
          <circle cx="50" cy="30" r="3" />
          <circle cx="70" cy="30" r="3" />
          <circle cx="90" cy="30" r="3" />
          <circle cx="10" cy="50" r="3" />
          <circle cx="30" cy="50" r="3" />
          <circle cx="50" cy="50" r="3" />
          <circle cx="70" cy="50" r="3" />
          <circle cx="90" cy="50" r="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#00A3FF] uppercase mb-3">
            {t("services.tagline")}
          </h2>
          <p className="font-sans text-3xl md:text-[42px] lg:text-[48px] font-bold text-zinc-900 tracking-tight leading-[1.1] mb-5">
            {t("services.title")}
          </p>
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-normal">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid (Interactive Tabs) */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
          {services.map((service) => {
            const isSelected = selectedService === service.id;
            return (
              <div
                key={service.id}
                onClick={() => {
                  setSelectedService(isSelected ? null : service.id);
                  setImageError(false);
                }}
                className={`cursor-pointer group flex flex-col h-full bg-white rounded-2xl p-6 md:p-8 min-h-[260px] md:min-h-[280px] transition-all duration-500 ease-out border ${
                  isSelected
                    ? "border-[#00A3FF]/30 shadow-[0_12px_40px_rgb(0,163,255,0.12)] ring-1 ring-[#00A3FF]/5 -translate-y-2"
                    : "border-zinc-200/50 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-10px_rgba(0,163,255,0.1)] hover:border-[#00A3FF]/20 hover:-translate-y-2"
                }`}
              >
                <div>
                  {/* Icon Area */}
                  <div className="flex justify-center mb-8">
                    <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 ${
                      isSelected 
                        ? 'bg-gradient-to-br from-blue-50 to-[#00A3FF]/10 shadow-inner' 
                        : 'bg-gradient-to-br from-zinc-50 to-white border border-zinc-100/80 shadow-sm group-hover:border-[#00A3FF]/10 group-hover:from-white group-hover:to-blue-50/50'
                    }`}>
                      <div className={`transform transition-transform duration-500 ${isSelected ? 'scale-110' : 'scale-100 group-hover:scale-110'}`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-[15px] md:text-[17px] font-bold text-center leading-[1.35] tracking-tight mb-3 min-h-[48px] flex items-center justify-center font-sans transition-colors duration-300 ${isSelected ? 'text-[#00A3FF]' : 'text-zinc-800 group-hover:text-[#00A3FF]'}`}>
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[13px] md:text-sm text-center text-zinc-500 leading-relaxed font-normal mb-5">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom CTA Indicator */}
                <div className={`flex items-center justify-center gap-2 mt-auto pt-5 border-t transition-colors duration-500 ${isSelected ? 'border-[#00A3FF]/10' : 'border-zinc-100/60 group-hover:border-[#00A3FF]/10'}`}>
                  <span className={`text-[12px] font-semibold tracking-wider uppercase transition-all duration-300 ${isSelected ? "text-[#00A3FF]" : "text-zinc-400 group-hover:text-[#00A3FF]"}`}>
                    {t("services.viewDetail")}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-all duration-500 ${
                      isSelected
                        ? "text-[#00A3FF] translate-y-1 opacity-100 rotate-90"
                        : "text-zinc-300 group-hover:text-[#00A3FF] group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Area - Premium Editorial Panel */}
        <div className={`transition-all duration-500 ease-in-out origin-top ${selectedService ? 'opacity-100 max-h-[1500px] mt-8 md:mt-10' : 'opacity-0 max-h-0 mt-0 overflow-hidden'}`}>
          {activeService && (
            <div className="max-w-5xl mx-auto animate-fadeInUp">
              <div className="bg-white border border-zinc-200/60 rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row group hover:border-[#00A3FF]/20 transition-colors duration-500">
                
                {/* Left Column: Conceptual Image with Premium Framing */}
                <div className="w-full md:w-5/12 lg:w-1/2 relative bg-gradient-to-br from-[#f8f9fa] to-blue-50/40 border-b md:border-b-0 md:border-r border-zinc-100 min-h-[260px] md:min-h-[440px] flex items-center justify-center p-6 md:p-8 lg:p-12">
                  
                  {/* Elegant Fallback (Visible behind image or if image fails) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 z-0">
                    <div className="text-[#00A3FF]/5 transform scale-[3] md:scale-[5] transition-transform duration-700 group-hover:scale-[3.2] md:group-hover:scale-[5.2]">
                      {activeService.icon}
                    </div>
                  </div>
                  
                  {/* Main Service Image (Rounded floating frame) */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] border border-white/80 bg-white aspect-[4/3] md:aspect-auto flex items-center justify-center z-10 group-hover:shadow-[0_20px_40px_-15px_rgba(0,163,255,0.15)] transition-shadow duration-700">
                      {!imageError ? (
                        <Image 
                          src={activeService.image} 
                          alt={activeService.title} 
                          fill 
                          sizes="(max-w-768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-zinc-50 to-zinc-100 flex flex-col items-center justify-center p-6 text-center">
                          <div className="text-[#00A3FF] mb-3 md:mb-4 opacity-50 transform scale-125">
                            {activeService.icon}
                          </div>
                          <span className="text-zinc-400 font-bold text-xs md:text-sm px-2 md:px-4 uppercase tracking-[0.1em]">{activeService.title}</span>
                        </div>
                      )}
                  </div>
                </div>

                {/* Right Column: Editorial Details */}
                <div className="w-full md:w-7/12 lg:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative">
                  {/* Subtle accent line at top */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A3FF] to-cyan-400 opacity-80" />
                  
                  <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#00A3FF] mb-2 md:mb-3">
                    {t("services.selectedService")}
                  </h4>
                  <h5 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 md:mb-4 font-sans leading-tight">
                    {activeService.title}
                  </h5>
                  
                  <p className="text-sm md:text-base text-zinc-600 leading-[1.6] font-normal mb-5 md:mb-6">
                    {activeService.detailDescription}
                  </p>

                  {/* Benefits List */}
                  <div className="mb-5 md:mb-6">
                    <ul className="space-y-2.5">
                      {activeService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                          <CheckCircle2 className="w-5 h-5 text-[#00A3FF] shrink-0" />
                          <span className="leading-relaxed font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Section */}
                  <div className="mb-6 md:mb-8 bg-blue-50/40 p-4 md:p-5 rounded-xl border border-[#00A3FF]/10 shadow-[0_2px_10px_-4px_rgba(0,163,255,0.05)]">
                    <span className="block text-[#00A3FF] font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs mb-1.5">
                      {t("services.idealFor")}
                    </span>
                    <p className="text-sm md:text-[15px] text-zinc-700 leading-relaxed font-medium">
                      {activeService.idealFor}
                    </p>
                  </div>

                  {/* CTA & Authority */}
                  <div className="mt-auto pt-4 md:pt-5 border-t border-zinc-100 flex flex-col items-start">
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full sm:w-auto">
                      <a
                        href={`https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20${encodeURIComponent(activeService.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-sm hover:bg-[#00A3FF] transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                      >
                        {t("services.ctaPrimary")}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a 
                        href="#portafolio" 
                        className="text-sm font-medium text-zinc-500 hover:text-[#00A3FF] transition-colors underline underline-offset-4 decoration-zinc-200 hover:decoration-[#00A3FF]/40 text-center sm:text-left"
                      >
                        {t("services.ctaSecondary")}
                      </a>
                    </div>
                    
                    {/* Authority microcopy */}
                    <div className="w-full text-center sm:text-left">
                      <p className="text-[11px] text-zinc-400 font-medium tracking-wide">
                        {t("services.authority")}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
