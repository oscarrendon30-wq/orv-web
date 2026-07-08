"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionSeparator from "@/components/ui/SectionSeparator";
import { ExternalLink, Tag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  id: string;
  name: string;
  category: string;
  tags: (string | React.ReactNode)[];
  type: string;
  description: string;
  image: string;
  imageFit?: string;
  logo?: string;
  secondaryImage?: string;
  accent?: string;
  href?: string;
  status?: string;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const { t } = useLanguage();

  const categories = [
    { id: "todos", name: t("portfolio.categories.todos") },
    { id: "branding", name: t("portfolio.categories.branding") },
    { id: "editorial", name: t("portfolio.categories.editorial") },
    { id: "empaques", name: t("portfolio.categories.empaques") },
    { id: "redes", name: t("portfolio.categories.redes") },
  ];

  // The 6 main projects
  const projects: Project[] = [
    {
      id: "be-good",
      name: "Be Good",
      category: "empaques",
      tags: [<span translate="no" className="notranslate" key="branding">Branding</span>, t("portfolio.projects.beGood.tags.0"), t("portfolio.projects.beGood.tags.1")],
      type: t("portfolio.projects.beGood.type"),
      status: t("portfolio.status.enConstruccion"),
      description: t("portfolio.projects.beGood.desc"),
      image: "/images/portfolio/be-good/be-good-showcase.webp",
      logo: "/images/portfolio/be-good-logo.jpg",
      accent: "from-brand-gold/15 to-transparent",
      href: "/portfolio/be-good",
    },
    {
      id: "monreve",
      name: "Monreve Solutions",
      category: "branding",
      tags: [t("portfolio.projects.monreve.tags.0"), t("portfolio.projects.monreve.tags.1"), t("portfolio.projects.monreve.tags.2"), t("portfolio.projects.monreve.tags.3")],
      type: t("portfolio.projects.monreve.type"),
      description: t("portfolio.projects.monreve.desc"),
      image: "/images/portfolio/monreve/monreve-showcase-v2.webp",
      secondaryImage: "/images/portfolio/monreve-uniforme.png",
      accent: "from-emerald-950/10 to-transparent",
      href: "/portfolio/monreve",
    },
    {
      id: "mei",
      name: "MEI Uñas & Spa",
      category: "redes",
      tags: [t("portfolio.projects.mei.tags.0"), t("portfolio.projects.mei.tags.1"), t("portfolio.projects.mei.tags.2")],
      type: t("portfolio.projects.mei.type"),
      description: t("portfolio.projects.mei.desc"),
      image: "/images/portfolio/mei/mei-portada-caso.webp",
      imageFit: "object-cover object-center",
      logo: "/images/portfolio/mei-logo.jpg",
      accent: "from-brand-gold/10 to-transparent",
      href: "/portfolio/mei",
    },
    {
      id: "dental-techniques",
      name: "Dental Techniques",
      category: "branding",
      tags: [t("portfolio.projects.dental.tags.0"), t("portfolio.projects.dental.tags.1"), t("portfolio.projects.dental.tags.2")],
      type: t("portfolio.projects.dental.type"),
      description: t("portfolio.projects.dental.desc"),
      image: "/images/portfolio/dentaltechniques/dental-techniques-card.webp",
      accent: "from-blue-900/10 to-transparent",
      href: "/portfolio/dental-techniques",
    },
    {
      id: "ancla-salud",
      name: "Ancla Salud",
      category: "branding",
      tags: [t("portfolio.projects.ancla.tags.0"), t("portfolio.projects.ancla.tags.1"), t("portfolio.projects.ancla.tags.2")],
      type: t("portfolio.projects.ancla.type"),
      description: t("portfolio.projects.ancla.desc"),
      image: "/images/portfolio/ancla-salud/ancla-salud-card.webp",
      accent: "from-blue-900/10 to-transparent",
      href: "/portfolio/ancla-salud",
    },
    {
      id: "compitnda",
      name: "CompuTienda",
      category: "branding",
      tags: [t("portfolio.projects.computienda.tags.0"), t("portfolio.projects.computienda.tags.1"), t("portfolio.projects.computienda.tags.2")],
      type: t("portfolio.projects.computienda.type"),
      description: t("portfolio.projects.computienda.desc"),
      image: "/images/portfolio/computienda/compu-tienda_card.webp",
      accent: "from-brand-blue/10 to-transparent",
      href: "/portfolio/computienda",
    },
  ];

  // Supporting items to show expertise in packaging and editorial
  const supportingItems = [
    {
      title: "Diseño Editorial & Publicidad",
      items: [
        {
          name: "Portada Libro Herederos",
          category: "Diseño de Portada",
          image: "/images/portfolio/portada-herederos.jpg",
          desc: "Diagramación y retoque de portada para publicación editorial.",
        },
        {
          name: "Historia Tierra Mía",
          category: "Diseño Editorial",
          image: "/images/portfolio/tierra-mia-historia.png",
          desc: "Maquetación de páginas y narrativa corporativa de marca.",
        },
        {
          name: "Menú y Precios Dental",
          category: "Pieza Publicitaria",
          image: "/images/portfolio/lista-precios-dental.jpg",
          desc: "Estructuración de información comercial compleja para clínica dental.",
        },
        {
          name: "Computienda Agenda",
          category: "Branding Editorial",
          image: "/images/portfolio/computienda-agenda.jpg",
          desc: "Diseño de merchandising y agendas corporativas de marca.",
        },
        {
          name: "Fachada Computienda",
          category: "Señalética & Exterior",
          image: "/images/portfolio/computienda-fachada.jpg",
          desc: "Branding ambiental y diseño de aviso exterior comercial.",
        },
      ],
    },
    {
      title: "Diseño de Etiquetas y Empaques",
      items: [
        {
          name: "Etiqueta Juana",
          category: "Packaging Artesanal",
          image: "/images/portfolio/etiqueta-juana.jpg",
          desc: "Diseño de etiqueta para botella y producto premium.",
        },
        {
          name: "Etiqueta Maja",
          category: "Packaging Comercial",
          image: "/images/portfolio/etiqueta-maja.jpg",
          desc: "Desarrollo tipográfico y gráfico para empaque comercial.",
        },
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
    <section id="portafolio" className="scroll-mt-28 pt-16 pb-0 bg-gradient-to-b from-[#071B33] to-[#050B14] relative">
      {/* Elegant Separator - More presence */}
      <SectionSeparator className="absolute top-0" />
      
      {/* Top ambient glow for the section header */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[300px] bg-[#00A3FF] opacity-[0.06] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-12 lg:mb-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#00A3FF] uppercase mb-4">
              {t("portfolio.tagline")}
            </h2>
            <h3 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              {t("portfolio.title")}
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light max-w-2xl">
              {t("portfolio.subtitle")}
            </p>
          </div>
          {/* Filters */}
          <div className="flex flex-nowrap overflow-x-auto gap-3 pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex-shrink-0 px-5 py-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 border-[1.5px] ${
                  activeFilter === cat.id
                    ? "bg-[#00A3FF] text-white border-[#00A3FF] shadow-[0_0_15px_rgba(0,163,255,0.4)]"
                    : "bg-transparent text-zinc-400 border-white/20 hover:border-white/40 hover:bg-white/5 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.id}
                className="bg-white/5 backdrop-blur-md rounded-2xl border-[1.5px] border-white/25 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col group cursor-pointer hover:border-[#00A3FF]/50 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hover:bg-white/10 transition-all duration-500"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] bg-[#050B14] border-b border-white/5 overflow-hidden flex items-center justify-center">
                  {/* Background glow overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-30 z-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-50`} />

                  {/* Main Image */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 z-10"
                  />

                  {/* Type tag */}
                  <span className="absolute top-4 left-4 z-20 text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 bg-[#050B14]/80 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg">
                    {project.type}
                  </span>
                </div>

                {/* Text details */}
                <div className="p-6 pb-8 lg:p-8 lg:pb-10 flex flex-col flex-grow relative">
                  {/* Full card clickable overlay hack if needed, but group cursor-pointer usually suffices */}
                  {project.href && (
                    <Link href={project.href} className="absolute inset-0 z-0"><span className="sr-only">Ver proyecto {project.name}</span></Link>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                    {project.status && (
                      <span className="text-[10px] font-bold tracking-wider text-[#00A3FF] uppercase border border-[#00A3FF]/20 bg-[#00A3FF]/10 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-pulse"></span>
                        {project.status}
                      </span>
                    )}
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium tracking-wide text-zinc-300 border border-white/10 bg-white/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-sans text-xl lg:text-[22px] font-bold text-white mb-3 leading-tight tracking-tight group-hover:text-[#00A3FF] transition-colors relative z-10">
                    <span translate="no" className="notranslate">{project.name}</span>
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-zinc-400 leading-relaxed font-light mb-8 relative z-10">
                    {project.description}
                  </p>
                  
                  {/* CTA Ver Proyecto */}
                  <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between group-hover:border-white/20 transition-colors relative z-10 pointer-events-none">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#00A3FF] group-hover:text-white transition-colors duration-300 relative inline-block">
                      {t("portfolio.viewProject")}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-[#00A3FF] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Secondary CTA (Full Portfolio) */}
        <div className="mt-8 flex justify-center relative z-10">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-[1.5px] border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-white hover:text-[#050B14] transition-all duration-300">
            {t("portfolio.viewAll")}
          </button>
        </div>
      </div>

      {/* Separador de Transición Premium */}
      <SectionSeparator className="pt-12 md:pt-16 pb-8 mt-4" />
    </section>

    {/* SECCIÓN CTA CLARA */}
    <section className="bg-white py-6 md:py-8 relative overflow-hidden">
      {/* Suave línea y degradado de transición superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#050B14]/[0.04] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#050B14]/[0.02] to-transparent pointer-events-none" />
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EAF1F8] opacity-50 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Premium Commercial CTA Card */}
        <div className="w-full max-w-4xl mx-auto relative group">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[#00A3FF] rounded-[32px] blur-xl opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.15] pointer-events-none" />
          
          <div className="relative bg-[#F8FAFC] border-[1.5px] border-[#0c2446]/5 hover:border-[#00A3FF]/20 transition-colors duration-500 rounded-[32px] px-6 py-10 md:p-12 lg:p-16 flex flex-col items-center text-center overflow-hidden shadow-[0_20px_50px_-10px_rgba(12,36,70,0.05)]">
            {/* Texture/Pattern */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00A3FF] opacity-[0.02] blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00A3FF] opacity-[0.015] blur-[60px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            {/* Content */}
            <h4 className="font-sans text-2xl md:text-3xl lg:text-4xl text-[#0c2446] font-bold mb-4 md:mb-5 max-w-2xl leading-[1.2] tracking-tight relative z-10">
              {t("portfolio.cta.title")}
            </h4>
            <p className="font-sans text-[#4a6b8c] font-light text-base md:text-lg max-w-xl mb-8 md:mb-10 relative z-10">
              {t("portfolio.cta.subtitle")}
            </p>
            <a
              href="https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20de%20dise%C3%B1o%20gr%C3%A1fico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#0c2446] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-[#00A3FF] hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(12,36,70,0.15)] hover:shadow-[0_15px_40px_rgba(0,163,255,0.3)] relative z-10"
            >
              {t("portfolio.cta.btn")}
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
