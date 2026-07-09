"use client";

import Image from "next/image";
import ZoomableImage from "@/components/ui/ZoomableImage";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import ProjectNavigation from "@/components/ProjectNavigation";

import { useLanguage } from "@/context/LanguageContext";

export default function MeiPortfolioPage() {
  const { t, language, setLanguage } = useLanguage();

  const content = {
    eyebrow: {
      es: "BELLEZA, IDENTIDAD VISUAL & REDES",
      en: "BEAUTY, VISUAL IDENTITY & SOCIAL MEDIA"
    },
    desc: {
      es: "Identidad visual, comunicación para redes, fachada y piezas comerciales para una marca de belleza con estética sofisticada.",
      en: "Visual identity, social media communication, storefront, and commercial pieces for a beauty brand with a sophisticated aesthetic."
    },
    tags: {
      es: ["Identidad visual", "Redes sociales", "Fachada", "Piezas comerciales"],
      en: ["Visual Identity", "Social Media", "Storefront", "Commercial Pieces"]
    },
    sheet: {
      client: { es: "MEI Uñas & Spa", en: "MEI Uñas & Spa" },
      category: { es: "Belleza / Spa", en: "Beauty / Spa" },
      services: { es: "Identidad visual, redes sociales, fachada y piezas comerciales", en: "Visual identity, social media, storefront, and commercial pieces" },
      focus: { es: "Estética elegante, femenina y sofisticada", en: "Elegant, feminine, and sophisticated aesthetic" },
      year: { es: "2024", en: "2024" }
    },
    summary: {
      es: "Para MEI Uñas & Spa se desarrolló una línea visual elegante y coherente, aplicada en piezas de identidad, redes sociales, comunicación comercial y fachada. El objetivo fue construir una presencia visual sofisticada, confiable y alineada con el universo de belleza que representa la marca.",
      en: "For MEI Uñas & Spa, an elegant and coherent visual line was developed, applied to identity pieces, social media, commercial communication, and storefront. The goal was to build a sophisticated, reliable visual presence aligned with the beauty universe that the brand represents."
    },
    devTitle: { es: "Desarrollo del proyecto", en: "Project Development" },
    blocks: [
      {
        title: { es: "Logo e identidad", en: "Logo and identity" },
        desc: { es: "Diseño de logotipo, paleta de colores, tipografía y elementos gráficos que representan la elegancia y esencia de la marca.", en: "Logo design, color palette, typography, and graphic elements that represent the elegance and essence of the brand." }
      },
      {
        title: { es: "Redes sociales", en: "Social media" },
        desc: { es: "Diseño de plantillas para contenido digital coherente, atractivo y alineado con la estética de la marca.", en: "Template design for coherent, attractive digital content aligned with the brand's aesthetics." }
      },
      {
        title: { es: "Fachada y comerciales", en: "Storefront and commercials" },
        desc: { es: "Aplicaciones visuales para fortalecer la presencia comercial de la marca en puntos físicos y canales digitales.", en: "Visual applications to strengthen the brand's commercial presence in physical points and digital channels." }
      },
      {
        title: { es: "Sistema visual aplicado", en: "Applied visual system" },
        desc: { es: "Un desarrollo integral que unifica la comunicación comercial, garantizando consistencia, confianza y alto valor percibido en cada punto de contacto.", en: "A comprehensive development that unifies commercial communication, ensuring consistency, trust, and high perceived value at every touchpoint." }
      }
    ],
    result: {
      es: "MEI Uñas & Spa consolidó una presencia visual más coherente, sofisticada y profesional, con piezas alineadas a su universo de marca y preparadas para comunicar con claridad en medios digitales, comerciales y físicos.",
      en: "MEI Uñas & Spa consolidated a more coherent, sophisticated, and professional visual presence, with pieces aligned with its brand universe and prepared to communicate clearly across digital, commercial, and physical media."
    }
  };

  // Configuración de la plantilla del caso de estudio
  const caseAccent = "#C8A96A";

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
            {t("portfolio.projectLayout.back_to_projects")}
          </Link>
          <div className="flex flex-wrap items-center gap-4 opacity-100">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 mr-2 md:mr-6">
              <button
                onClick={() => setLanguage("es")}
                className={`font-sans text-[10px] md:text-xs font-bold tracking-widest transition-colors ${language === "es" ? "text-[#00A3FF]" : "text-[#071B33]/40 hover:text-[#071B33]"}`}
              >
                ES
              </button>
              <span className="text-[#071B33]/20 text-[10px] md:text-xs">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`font-sans text-[10px] md:text-xs font-bold tracking-widest transition-colors ${language === "en" ? "text-[#00A3FF]" : "text-[#071B33]/40 hover:text-[#071B33]"}`}
              >
                EN
              </button>
            </div>
            <div className="w-8 h-[1px] bg-[#071B33]/20 hidden md:block" />
            <span className="font-sans text-[#071B33] text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-3">
              Oscar Rendón Visual <span className="text-[#071B33]/20">/</span> <span className="text-[#071B33] bg-[#EAF1F8] px-3 py-1.5 rounded-full">{t("portfolio.projectLayout.project")}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Full Width Background & Cinematic Bleed */}
      <div className="relative w-full mb-16 md:mb-24 flex flex-col lg:justify-center overflow-hidden bg-[#0c2446] min-h-[75vh] md:min-h-[80vh] lg:min-h-[clamp(520px,58vh,640px)]">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Base background is solid #0c2446 (handled by container bg class) */}
          
          {/* Imagen sangrada a la derecha */}
          <div className="absolute top-0 right-0 w-full h-[65vh] md:h-[70vh] lg:h-full lg:w-[65vw] z-10">
             <ZoomableImage
                src="/images/portfolio/mei/mei-oscar-hero.webp"
                alt="Proyecto MEI Uñas & Spa"
                fill
                className="object-cover object-[80%_center] lg:object-[80%_center] [mask-image:linear-gradient(to_top,transparent_0%,black_15%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_15%)] opacity-85"
                priority
             />
          </div>
        </div>

        {/* Contenido del Hero alineado a la retícula central */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center pt-[45vh] pb-12 lg:py-[clamp(70px,8vh,100px)] pointer-events-none mt-auto lg:mt-0">
          {/* Left Text Content */}
          <div className="w-full lg:w-[50%] flex flex-col justify-start relative z-30 pointer-events-auto lg:pr-8">
            <p className="inline-block text-[#00A3FF] bg-[#061B33]/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-4 py-1.5 md:px-0 md:py-0 rounded-full font-sans text-[10.5px] md:text-xs font-bold uppercase tracking-[0.25em] mb-6 border border-white/10 md:border-transparent shadow-lg md:shadow-none">
              {content.eyebrow[language]}
            </p>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-md">
              MEI Uñas & Spa
            </h1>
            <p className="font-sans text-zinc-300 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              {content.desc[language]}
            </p>
            
            <div className="flex flex-wrap gap-2 md:gap-3 mb-14">
              {content.tags[language].map((chip, idx) => (
                <span 
                  key={idx} 
                  className="font-sans text-[11px] md:text-sm font-semibold text-[#0c2446] bg-[#EAF1F8] px-4 md:px-6 py-2 md:py-2.5 rounded-full tracking-wide shadow-sm hover:bg-white transition-all"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-4 self-start mt-auto">
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="font-sans text-[10px] md:text-xs text-zinc-400 uppercase tracking-[0.2em] font-semibold leading-relaxed">
                {t("portfolio.projectLayout.developed_by")} <br />
                <span className="text-white font-bold">Oscar Rendón Visual</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Abre el contenedor general para el resto de la página */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* {t("portfolio.projectLayout.technical_sheet")} y Resumen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-12 md:mb-16 lg:mb-20 items-start">
          {/* {t("portfolio.projectLayout.technical_sheet")} */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="p-7 md:p-8 rounded-[24px] bg-[#0c2446] border border-white/5 shadow-[0_20px_60px_-15px_rgba(12,36,70,0.3)] relative overflow-hidden group hover:border-white/10 hover:shadow-[0_20px_60px_-15px_rgba(12,36,70,0.4)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3FF] opacity-5 blur-[50px] rounded-full group-hover:opacity-10 transition-opacity duration-500" />
              <h3 className="font-sans text-xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00A3FF]" />
                {t("portfolio.projectLayout.technical_sheet")}
              </h3>
              
              <div className="space-y-6">
                {[
                  { label: "CLIENTE", value: content.sheet.client[language] },
                  { label: "CATEGORÍA", value: content.sheet.category[language] },
                  { label: "SERVICIOS", value: content.sheet.services[language] },
                  { label: "ENFOQUE", value: content.sheet.focus[language] },
                  { label: "AÑO", value: content.sheet.year[language] },
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
              {t("portfolio.projectLayout.project_summary")}
            </h2>
            <div className="font-sans text-[#071B33]/90 font-light text-lg md:text-xl leading-[1.9] max-w-3xl relative pl-0 md:pl-8">
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[#071B33]/10 hidden md:block" />
              <p>
                {content.summary[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Desarrollo del Proyecto */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#0c2446] mb-12 text-center tracking-tight">
            {content.devTitle[language]}
          </h2>
          <div className="relative w-full max-w-5xl mx-auto">
            
            {/* 01 Logo */}
            <div className="relative mb-12 lg:mb-16 group">
              {/* Module Container */}
              <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 bg-white/60 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(7,27,51,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(7,27,51,0.08)] rounded-[32px] p-4 lg:p-6 transition-all duration-500 overflow-hidden">
                {/* Subtle Editorial Line Accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-[#00A3FF]/15 group-hover:bg-[#00A3FF] group-hover:h-[80%] transition-all duration-700 ease-out rounded-r-full hidden lg:block" />

                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#F8FAFC] border border-[#071B33]/5 flex items-center justify-center p-2 md:p-4">
                  <ZoomableImage src="/images/portfolio/mei/mei-logo.webp" alt="Logo MEI" fill className="object-contain p-2 md:p-4 group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 py-6 lg:py-8">
                  <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#00A3FF]/40 hidden lg:block" /> 01
                  </span>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-[#0c2446] tracking-tight mb-5">{content.blocks[0].title[language]}</h3>
                  <p className="font-sans text-[#071B33]/70 font-light text-base md:text-lg leading-[1.8]">
                    {content.blocks[0].desc[language]}
                  </p>
                </div>
              </div>
            </div>

            {/* 02 Redes */}
            <div className="relative mb-12 lg:mb-16 group">
              {/* Module Container (Text Left, Image Right) */}
              <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 bg-[#F8FAFC]/50 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(7,27,51,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(7,27,51,0.08)] rounded-[32px] p-4 lg:p-6 transition-all duration-500 overflow-hidden">
                {/* Subtle Editorial Line Accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-[#00A3FF]/15 group-hover:bg-[#00A3FF] group-hover:h-[80%] transition-all duration-700 ease-out rounded-r-full hidden lg:block" />

                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 py-6 lg:py-8 order-2 lg:order-1">
                  <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#00A3FF]/40 hidden lg:block" /> 02
                  </span>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-[#0c2446] tracking-tight mb-5">{content.blocks[1].title[language]}</h3>
                  <p className="font-sans text-[#071B33]/70 font-light text-base md:text-lg leading-[1.8]">
                    {content.blocks[1].desc[language]}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-white border border-[#071B33]/5 flex items-center justify-center p-1 md:p-2 order-1 lg:order-2">
                  <ZoomableImage src="/images/portfolio/mei/mei-redes-01.webp" alt="Redes MEI" fill className="object-contain p-1 md:p-3 group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </div>

            {/* 03 Fachada */}
            <div className="relative mb-12 lg:mb-16 group">
              {/* Module Container */}
              <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 bg-white/60 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(7,27,51,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(7,27,51,0.08)] rounded-[32px] p-4 lg:p-6 transition-all duration-500 overflow-hidden">
                {/* Subtle Editorial Line Accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-[#00A3FF]/15 group-hover:bg-[#00A3FF] group-hover:h-[80%] transition-all duration-700 ease-out rounded-r-full hidden lg:block" />

                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#F8FAFC] border border-[#071B33]/5 flex items-center justify-center p-1 md:p-2">
                  <ZoomableImage src="/images/portfolio/mei/mei-fachada.webp" alt="Fachada MEI" fill className="object-contain p-1 md:p-2 group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 py-6 lg:py-8">
                  <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#00A3FF]/40 hidden lg:block" /> 03
                  </span>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-[#0c2446] tracking-tight mb-5">{content.blocks[2].title[language]}</h3>
                  <p className="font-sans text-[#071B33]/70 font-light text-base md:text-lg leading-[1.8]">
                    {content.blocks[2].desc[language]}
                  </p>
                </div>
              </div>
            </div>

            {/* 04 Sistema visual aplicado */}
            <div className="relative mb-8 lg:mb-16 group">
              {/* Module Container */}
              <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 bg-[#F8FAFC]/50 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(7,27,51,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(7,27,51,0.08)] rounded-[32px] p-4 lg:p-6 transition-all duration-500 overflow-hidden">
                {/* Subtle Editorial Line Accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-[#00A3FF]/15 group-hover:bg-[#00A3FF] group-hover:h-[80%] transition-all duration-700 ease-out rounded-r-full hidden lg:block" />

                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 py-6 lg:py-8 order-2 lg:order-1">
                  <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#00A3FF]/40 hidden lg:block" /> 04
                  </span>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-[#0c2446] tracking-tight mb-5">{content.blocks[3].title[language]}</h3>
                  <p className="font-sans text-[#071B33]/70 font-light text-base md:text-lg leading-[1.8]">
                    {content.blocks[3].desc[language]}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-white border border-[#071B33]/5 flex items-center justify-center order-1 lg:order-2">
                  <ZoomableImage src="/images/portfolio/mei/mei-portada-caso.webp" alt="Sistema Visual MEI" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* Cierra contenedor general previo */}

      {/* Separador de Transición Premium */}
      <div className="w-full relative py-8 md:py-12 mb-0 flex items-center justify-center pointer-events-none">
        {/* Glow de fondo integrado sin cortes */}
        <div className="absolute w-[80%] md:w-[60%] h-[4px] bg-[#00A3FF]/20 blur-lg rounded-full" />
        {/* Franja central */}
        <div className="w-full h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-[#00A3FF]/50 to-transparent relative z-10" />
      </div>

      {/* Resultado del Proyecto (Fondo Claro) */}
      <div className="relative w-full pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <span className="font-sans text-[#00A3FF] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#00A3FF]/40 hidden md:block" />
            {t("portfolio.projectLayout.the_result")}
            <span className="w-8 h-[1px] bg-[#00A3FF]/40 hidden md:block" />
          </span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#0c2446] mb-8 tracking-tight leading-tight">
            {t("portfolio.projectLayout.project_result")}
          </h2>
          <p className="font-sans text-[#071B33]/70 text-lg md:text-xl leading-[1.8] font-light max-w-3xl">
            {content.result[language]}
          </p>
        </div>
      </div>

      {/* Cierre / CTA Final */}
      <div className="relative w-full bg-[#0c2446] text-white py-12 md:py-16 overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A3FF] opacity-[0.03] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <h3 className="font-sans text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {t("portfolio.projectLayout.similar_project")}
          </h3>
          <p className="font-sans text-zinc-400 text-base md:text-lg mb-10 max-w-lg">
            {t("portfolio.projectLayout.lets_talk_desc")}
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center bg-white text-[#0c2446] font-sans font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full hover:bg-[#00A3FF] hover:text-white transition-colors duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(0,163,255,0.3)] mb-12 md:mb-16"
          >
            {t("portfolio.projectLayout.lets_talk_btn")}
          </Link>

          <ProjectNavigation currentProject="mei" />
        </div>
      </div>
    </main>
  );
}
