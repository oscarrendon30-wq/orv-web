import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function DentalTechniquesPortfolioPage() {
  return (
    <main className="min-h-screen relative bg-[#F8FAFC] text-[#071B33] overflow-hidden pt-16 md:pt-[72px] pb-0">
      {/* Light Theme ORV Watermark Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-25%] w-[120%] md:w-[80%] aspect-square opacity-[0.015] mix-blend-multiply -rotate-6">
          <Image
            src="/images/brand/logo-horizontal-transparent.png"
            alt="ORV Brand Background"
            fill
            className="object-contain object-left-top"
          />
        </div>
        <div className="absolute bottom-[20%] right-[-30%] w-[150%] md:w-[100%] aspect-square opacity-[0.015] mix-blend-multiply rotate-12">
          <Image
            src="/images/brand/logo-horizontal-transparent.png"
            alt="ORV Brand Background"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
        {/* Subtle light grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#050B1405_1px,transparent_1px),linear-gradient(to_bottom,#050B1405_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_80%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Top Header ORV Branding */}
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#050B14]/10 pb-5">
          <Link
            href="/#portafolio"
            className="inline-flex items-center gap-2 text-[#071B33]/50 hover:text-[#071B33] transition-colors font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portafolio
          </Link>
          <div className="flex items-center gap-4 opacity-100">
            <div className="w-8 h-[1px] bg-[#071B33]/20 hidden md:block" />
            <span className="font-sans text-[#071B33] text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-3">
              Oscar Rendón Visual <span className="text-[#071B33]/20">/</span> <span className="text-[#071B33] bg-[#EAF1F8] px-3 py-1.5 rounded-full">Proyecto</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Full Width Background */}
      <div className="relative w-full mb-20 md:mb-24 flex flex-col lg:justify-center overflow-hidden bg-[#0a1e3f] min-h-[90vh] lg:min-h-[clamp(520px,58vh,640px)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-[60vh] lg:h-full lg:w-[65vw] z-10 flex items-center justify-center p-8 lg:p-0">
             <Image
                src="/images/portfolio/dentaltechniques/dental-techniques-hero-v2.webp"
                alt="Proyecto Dental Techniques"
                fill
                className="object-cover object-[60%_center] lg:object-[60%_center] [mask-image:linear-gradient(to_top,transparent_0%,black_40%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_20%)] opacity-85"
                priority
             />
          </div>
        </div>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center pt-[55vh] pb-16 lg:py-[clamp(70px,8vh,100px)] pointer-events-none mt-auto lg:mt-0">
          <div className="w-full lg:w-[55%] flex flex-col justify-start relative z-30 pointer-events-auto lg:pr-8">
            <p className="text-[#00A3FF] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-6">
              ODONTOLOGÍA & SALUD
            </p>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-md">
              Dental Techniques
            </h1>
            <p className="font-sans text-zinc-300 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              Identidad visual, papelería comercial, lista de precios y desarrollo web para una marca odontológica con presencia profesional y comunicación clara.
            </p>
            
            <div className="flex flex-wrap gap-2 md:gap-3 mb-14">
              {["Branding", "Diseño web", "Papelería comercial", "Lista de precios", "Sector odontológico"].map((chip, idx) => (
                <span 
                  key={idx} 
                  className="font-sans text-[11px] md:text-sm font-semibold text-[#0a1e3f] bg-[#EAF1F8] px-4 md:px-6 py-2 md:py-2.5 rounded-full tracking-wide shadow-sm hover:bg-white transition-all"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-4 self-start mt-auto">
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="font-sans text-[10px] md:text-xs text-zinc-400 uppercase tracking-[0.2em] font-semibold leading-relaxed">
                Desarrollado por <br />
                <span className="text-white font-bold">Oscar Rendón Visual</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Ficha Técnica y Resumen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-12 md:mb-16 lg:mb-20 items-start">
          {/* Ficha Técnica */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="p-7 md:p-8 rounded-[24px] bg-[#0a1e3f] border border-white/5 shadow-[0_20px_60px_-15px_rgba(10,30,63,0.3)] relative overflow-hidden group hover:border-white/10 hover:shadow-[0_20px_60px_-15px_rgba(10,30,63,0.4)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3FF] opacity-5 blur-[50px] rounded-full group-hover:opacity-10 transition-opacity duration-500" />
              <h3 className="font-sans text-xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00A3FF]" />
                Ficha Técnica
              </h3>
              
              <div className="space-y-6">
                {[
                  { label: "CLIENTE", value: "Dental Techniques" },
                  { label: "CATEGORÍA", value: "Odontología & Salud" },
                  { label: "SERVICIOS", value: "Identidad visual, papelería, web, lista de precios" },
                  { label: "ENFOQUE", value: "Confianza, limpieza, precisión y tecnología dental" },
                  { label: "AÑO", value: "2025" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="font-sans text-[10px] md:text-[11px] text-[#00A3FF] uppercase tracking-[0.2em] font-bold">
                      {item.label}
                    </span>
                    <span className="font-sans text-white/90 text-sm md:text-base font-light">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumen del Proyecto */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col justify-start lg:pt-6">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#071B33] mb-10 leading-tight tracking-tight">
              Resumen del proyecto
            </h2>
            <div className="font-sans text-[#071B33]/90 font-light text-lg md:text-xl leading-[1.9] max-w-3xl relative pl-0 md:pl-8">
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[#071B33]/10 hidden md:block" />
              <p>
                El objetivo central fue construir una presencia visual clara, confiable y profesional para una marca odontológica. Se enfatizó una comunicación visual limpia con alta legibilidad y consistencia, proyectando seguridad y cuidado hacia los pacientes.
              </p>
            </div>
          </div>
        </div>

        {/* Desarrollo del Proyecto */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#0a1e3f] mb-12 text-center tracking-tight">
            Piezas desarrolladas
          </h2>
          <div className="relative w-full max-w-5xl mx-auto">
            
            {/* 01 Enfoque visual y Logo */}
            <div className="relative mb-12 lg:mb-16 group">
              <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 bg-white/60 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(7,27,51,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(7,27,51,0.08)] rounded-[32px] p-4 lg:p-6 transition-all duration-500 overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-[#00A3FF]/15 group-hover:bg-[#00A3FF] group-hover:h-[80%] transition-all duration-700 ease-out rounded-r-full hidden lg:block" />

                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#F8FAFC] border border-[#071B33]/5 flex items-center justify-center p-1 md:p-2">
                  <Image src="/images/portfolio/dentaltechniques/dental-logo.webp" alt="Logo e Identidad Visual" fill className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-700 ease-out opacity-100" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 py-6 lg:py-8">
                  <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#00A3FF]/40 hidden lg:block" /> 01
                  </span>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-[#0a1e3f] tracking-tight mb-5">Identidad y Enfoque Visual</h3>
                  <p className="font-sans text-[#071B33]/70 font-light text-base md:text-lg leading-[1.8]">
                    Uso de azul, blanco y tonos limpios asociados a la salud, garantizando una composición clara y jerarquía informativa pensada especialmente para pacientes.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 Lista de precios y papelería */}
            <div className="relative mb-12 lg:mb-16 group">
              <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 bg-[#F8FAFC]/50 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(7,27,51,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(7,27,51,0.08)] rounded-[32px] p-4 lg:p-6 transition-all duration-500 overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-[#00A3FF]/15 group-hover:bg-[#00A3FF] group-hover:h-[80%] transition-all duration-700 ease-out rounded-r-full hidden lg:block" />

                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 py-6 lg:py-8 order-2 lg:order-1">
                  <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#00A3FF]/40 hidden lg:block" /> 02
                  </span>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-[#0a1e3f] tracking-tight mb-5">Lista de precios y papelería</h3>
                  <p className="font-sans text-[#071B33]/70 font-light text-base md:text-lg leading-[1.8]">
                    Diseño de materiales impresos, tarjetas y listas de precios estructurados para facilitar la lectura de los servicios odontológicos.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-white border border-[#071B33]/5 flex items-center justify-center p-1 md:p-2 order-1 lg:order-2">
                  <Image src="/images/portfolio/dentaltechniques/dental-lista-precios.webp" alt="Lista de precios Dental Techniques" fill className="object-cover p-0 md:p-0 group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </div>

            {/* 03 Desarrollo web */}
            <div className="relative mb-12 lg:mb-16 group">
              <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 bg-white/60 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(7,27,51,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(7,27,51,0.08)] rounded-[32px] p-4 lg:p-6 transition-all duration-500 overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-[#00A3FF]/15 group-hover:bg-[#00A3FF] group-hover:h-[80%] transition-all duration-700 ease-out rounded-r-full hidden lg:block" />

                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#F8FAFC] border border-[#071B33]/5 flex items-center justify-center p-1 md:p-2">
                  <Image src="/images/portfolio/dentaltechniques/dental-web.webp" alt="Desarrollo Web" fill className="object-cover p-0 md:p-0 group-hover:scale-105 transition-transform duration-700 ease-out opacity-90" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 py-6 lg:py-8">
                  <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#00A3FF]/40 hidden lg:block" /> 03
                  </span>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-[#0a1e3f] tracking-tight mb-5">Sitio web / presencia digital</h3>
                  <p className="font-sans text-[#071B33]/70 font-light text-base md:text-lg leading-[1.8] mb-6">
                    Aplicación de la identidad visual en la interfaz principal del sitio web, consolidando una presencia digital clara, confiable y alineada con la marca.
                  </p>
                  <a 
                    href="https://dentaltechniquesftmyers.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex flex-wrap items-center justify-center gap-2 self-start font-sans text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-[#00A3FF] bg-[#00A3FF]/10 hover:bg-[#00A3FF] hover:text-white px-4 sm:px-5 py-2.5 rounded-[20px] sm:rounded-full transition-colors duration-300 group text-center"
                  >
                    Ver sitio web: dentaltechniquesftmyers.com
                    <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Separador de Transición Premium */}
      <div className="w-full relative py-8 md:py-12 mb-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[80%] md:w-[60%] h-[4px] bg-[#00A3FF]/20 blur-lg rounded-full" />
        <div className="w-full h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-[#00A3FF]/50 to-transparent relative z-10" />
      </div>

      {/* Resultado del Proyecto (Fondo Claro) */}
      <div className="relative w-full pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#00A3FF]/40 hidden md:block" />
            El Resultado
            <span className="w-8 h-[1px] bg-[#00A3FF]/40 hidden md:block" />
          </span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1e3f] mb-8 tracking-tight leading-tight">
            Marca profesional y ordenada
          </h2>
          <p className="font-sans text-[#071B33]/70 text-lg md:text-xl leading-[1.8] font-light max-w-3xl">
            El resultado es una marca odontológica mucho más profesional, ordenada y confiable, capaz de presentar sus servicios de forma clara y mantener una coherencia visual en todos sus canales impresos y digitales.
          </p>
        </div>
      </div>

      {/* Cierre / CTA Final */}
      <div className="relative w-full bg-[#0a1e3f] text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A3FF] opacity-[0.03] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <h3 className="font-sans text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            ¿Tienes un proyecto similar?
          </h3>
          <p className="font-sans text-zinc-400 text-base md:text-lg mb-10 max-w-lg">
            Hablemos y construyamos juntos una presencia visual que eleve tu marca.
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center bg-white text-[#0a1e3f] font-sans font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full hover:bg-[#00A3FF] hover:text-white transition-colors duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(0,163,255,0.3)] mb-12 md:mb-16"
          >
            Hablemos de tu marca
          </Link>

          {/* Navegación del Portafolio */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
            <Link
              href="/#portafolio"
              className="inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors font-sans text-xs font-bold tracking-[0.2em] uppercase group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al portafolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
