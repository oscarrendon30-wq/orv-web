"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Minus, 
  Sparkles, 
  BookOpen, 
  Layers, 
  FileText, 
  Newspaper, 
  FileCheck2, 
  ShieldCheck, 
  MapPin, 
  Award,
  ExternalLink,
  BookMarked
} from "lucide-react";
import { trackClickWhatsApp, trackCtaClick } from "@/utils/analytics";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border-b border-white/10 py-5 last:border-0 last:pb-0 first:pt-0 relative z-10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="font-sans text-base md:text-lg font-bold text-white group-hover:text-[#00A3FF] transition-colors duration-200">
          {question}
        </span>
        <div className="w-8 h-8 rounded-[8px] bg-[#0c2446] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-[#00A3FF]/30 group-hover:text-[#00A3FF] transition-colors flex-shrink-0 ml-4">
          {isOpen ? <Minus className="w-4 h-4 text-[#00A3FF]" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm md:text-base text-zinc-300 leading-relaxed pt-4 pb-2 pr-4 md:pr-12 font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DisenoEditorialClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20Dise%C3%B1o%20Editorial%20y%20Diagramaci%C3%B3n.";

  const includes = [
    {
      icon: <Layers className="w-6 h-6 text-[#00A3FF]" />,
      title: "Diagramación Editorial",
      desc: "Organización profesional de textos, imágenes, columnas, márgenes, retículas y espacios para lograr composiciones visuales legibles, ordenadas y armónicas.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#00A3FF]" />,
      title: "Revistas y Publicaciones",
      desc: "Diseño de revistas institucionales, comerciales, culturales o deportivas, cuidando el impacto visual de portadas y la fluidez de lectura en páginas interiores.",
    },
    {
      icon: <Newspaper className="w-6 h-6 text-[#00A3FF]" />,
      title: "Periódicos y Publicaciones Informativas",
      desc: "Diagramación de páginas y tabloides con jerarquía editorial clara, titulares equilibrados y manejo eficiente de grandes bloques de texto para medios de comunicación.",
    },
    {
      icon: <BookMarked className="w-6 h-6 text-[#00A3FF]" />,
      title: "Catálogos Comerciales",
      desc: "Organización visual de productos, servicios, fotografías, tablas de especificaciones, referencias y fichas de venta pensadas para facilitar la decisión comercial.",
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-[#00A3FF]" />,
      title: "Informes y Documentos Corporativos",
      desc: "Presentación profesional de información institucional, balances anuales, memorias de gestión, manuales y dossiers técnicos con gráficos claros y ejecutivos.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00A3FF]" />,
      title: "Preparación para Impresión y Digital",
      desc: "Estructuración técnica de archivos en PDF de alta resolución con sangrías y perfiles de color para imprenta, y versiones optimizadas para distribución digital.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Recepción y análisis del contenido",
      desc: "Revisión integral de manuscritos, textos, imágenes, tablas y especificaciones de formato o número de páginas para fijar la ruta de maquetación.",
    },
    {
      number: "02",
      title: "Estructura editorial",
      desc: "Definición de la retícula compositiva, familias tipográficas, jerarquías de lectura, cajas de texto, márgenes y estilo visual general.",
    },
    {
      number: "03",
      title: "Diseño y diagramación",
      desc: "Maquetación integral de páginas interiores y portadas, integrando equilibradamente texto, fotografías, destacados y elementos gráficos.",
    },
    {
      number: "04",
      title: "Correcciones y ajustes",
      desc: "Revisión conjunta de galeradas y pruebas de lectura para ajustar detalles tipográficos, composición y ubicación exacta de contenidos.",
    },
    {
      number: "05",
      title: "Preparación y entrega",
      desc: "Generación de artes finales en PDF listos para imprenta (preprensa técnica) y versiones digitales optimizadas para visualización en pantallas.",
    },
  ];

  const relatedCases = [
    {
      id: "editorial",
      title: "Diseño Editorial & Publicaciones",
      category: "Libros, Revistas & Periódicos",
      desc: "Diagramación y composición visual para libros conmemorativos, revistas institucionales, periódicos regionales, catálogos y piezas impresas de alto impacto.",
      image: "/images/portfolio/editorial/card.webp",
      href: "/portfolio/editorial/",
    },
  ];

  const faqs = [
    {
      question: "¿Qué diferencia hay entre diseño gráfico y diseño editorial?",
      answer: "El diseño gráfico abarca la comunicación visual de forma amplia (logotipos, publicidad, piezas digitales). El diseño editorial es una disciplina especializada enfocada en la arquitectura de lectura y composición de publicaciones extensas (libros, revistas, periódicos, catálogos e informes), cuidando con rigor técnico la tipografía, interlineados, retículas y legibilidad para que la lectura prolongada sea cómoda, fluida y atractiva.",
    },
    {
      question: "¿Puedo entregar los textos y fotografías para que Oscar Rendón Visual realice toda la diagramación?",
      answer: "Sí. Puedes suministrar tus textos en cualquier procesador de texto (Word, Google Docs) y las fotografías o imágenes en alta resolución. Oscar Rendón Visual se encarga de organizar, maquetar y diagramar cada página con el estándar visual y técnico requerido para su publicación.",
    },
    {
      question: "¿Trabajas publicaciones tanto impresas como digitales?",
      answer: "Sí. Cada proyecto editorial se puede preparar tanto para impresión física profesional (archivos PDF de alta resolución en CMYK con marcas de corte, sangrías y fuentes incrustadas) como para distribución digital (PDFs interactivos y optimizados para lectura fluida en computadores, tablets y celulares).",
    },
    {
      question: "¿Qué archivos debo entregar para comenzar un proyecto editorial?",
      answer: "Para comenzar es recomendable contar con los textos finales corregidos, las imágenes o fotografías en la mayor resolución posible, el logotipo de la marca o institución (en formato vectorial si aplica) y las especificaciones básicas deseadas (dimensiones aproximadas, orientación o número estimado de páginas).",
    },
    {
      question: "¿Trabajas solamente con clientes de Pereira?",
      answer: "No. Aunque Oscar Rendón Visual tiene su sede principal en Pereira (Colombia), el servicio de diseño editorial y diagramación se presta con total fluidez a nivel regional, nacional e internacional mediante canales digitales, revisiones por correo y reuniones virtuales.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#071B33] text-white pt-24 md:pt-32 pb-0 overflow-hidden relative selection:bg-[#00A3FF]/20 selection:text-white">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[3%] left-[-20%] w-[100%] md:w-[70%] aspect-square opacity-[0.02] mix-blend-screen -rotate-12">
          <Image
            src="/images/brand/logo-horizontal-transparent.png"
            alt="Oscar Rendón Visual"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[35%] right-[-25%] w-[120%] md:w-[80%] aspect-square opacity-[0.018] mix-blend-screen rotate-6">
          <Image
            src="/images/brand/logo-horizontal-transparent.png"
            alt="Oscar Rendón Visual"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_80%,transparent_100%)] opacity-40" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-4 md:pt-8">
        {/* Breadcrumb / Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link
            href="/"
            className="font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
          >
            Inicio
          </Link>
          <span className="text-zinc-600 text-xs">/</span>
          <span className="font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#00A3FF]">
            Servicios
          </span>
          <span className="text-zinc-600 text-xs">/</span>
          <span className="font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
            Diseño Editorial
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start bg-[#0c2446] border border-[#00A3FF]/20 px-4 py-1.5 rounded-full font-sans text-[10.5px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Diseño Editorial & Diagramación
            </span>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Diseño Editorial y Diagramación
            </h1>

            <div className="space-y-5 font-sans text-zinc-300 text-base md:text-lg leading-[1.8] font-light max-w-2xl mb-10">
              <p>
                El <strong>diseño editorial</strong> organiza texto, imágenes, jerarquías y recursos gráficos para convertir grandes volúmenes de información en <strong>publicaciones claras, atractivas y fáciles de leer</strong>.
              </p>
              <p>
                A través de una <strong>diagramación profesional</strong> estructuro proyectos como <strong>revistas</strong>, <strong>periódicos</strong>, <strong>catálogos</strong>, <strong>informes</strong> y <strong>publicaciones corporativas</strong>, cuidando la <strong>composición tipográfica</strong> y la <strong>jerarquía visual</strong> tanto en <strong>piezas impresas</strong> de alta calidad como en <strong>publicaciones digitales</strong>.
              </p>
              <p className="text-sm md:text-base text-zinc-400 border-l-2 border-[#00A3FF]/40 pl-4 py-1">
                Respaldado por 30 años de experiencia en diseño gráfico y diagramación, <strong>Oscar Rendón Visual</strong> presta sus servicios desde Pereira (Colombia) para autores, empresas, medios e instituciones a nivel local, nacional e internacional.
              </p>
            </div>

            {/* Badges / Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Pereira, Colombia",
                "30 años de trayectoria",
                "Publicaciones impresas y digitales",
                "Archivos listos para imprenta",
              ].map((badge, idx) => (
                <span
                  key={idx}
                  className="font-sans text-[11px] md:text-xs font-semibold text-white/90 bg-[#0c2446]/80 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3FF]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClickWhatsApp("Service Hero - Editorial")}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all shadow-[0_10px_30px_rgba(0,163,255,0.3)] hover:shadow-[0_10px_35px_rgba(0,163,255,0.4)]"
              >
                Cotizar Proyecto Editorial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proyectos"
                onClick={() => trackCtaClick("Ver Trabajos Editoriales", "Service Hero")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all"
              >
                Ver Trabajos Editoriales
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#0c2446] to-[#050B14] p-6 md:p-8 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00A3FF] opacity-10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-[#071B33] border border-white/10">
                <Image
                  src="/images/services/diseno-editorial.webp"
                  alt="Servicio de Diseño Editorial y Diagramación por Oscar Rendón"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-sans text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#00A3FF]" />
                  Jerarquía Visual & Legibilidad
                </h3>
                <p className="font-sans text-zinc-300 text-sm leading-relaxed font-light">
                  Composición y maquetación con rigor estético y técnico para que tus publicaciones transmitan orden, elegancia y faciliten la comprensión del lector.
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-sans">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#00A3FF]" />
                    Pereira, Colombia
                  </span>
                  <span className="font-semibold text-white">Oscar Rendón Visual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full relative py-6 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent" />
      </div>

      {/* Section: Qué Incluye */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-3 block">
            Servicios y Alcance
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            ¿Qué incluye el Servicio Editorial?
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Soluciones completas de diagramación estructuradas para responder a las necesidades técnicas y comunicativas de cada publicación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {includes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0c2446]/40 hover:bg-[#0c2446]/70 border border-white/5 hover:border-[#00A3FF]/30 p-7 md:p-8 rounded-[24px] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-[14px] bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-sans text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00A3FF] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm md:text-[15px] text-zinc-300 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Proceso de Trabajo */}
      <section className="relative z-10 bg-[#050B14]/80 py-20 md:py-28 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-3 block">
              Metodología Rigurosa
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Proceso de Trabajo
            </h2>
            <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              Un flujo de trabajo ordenado desde el análisis del manuscrito hasta la entrega final para imprenta o publicación digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#071B33]/60 border border-white/5 p-6 md:p-7 rounded-[22px] relative flex flex-col justify-between hover:border-[#00A3FF]/30 transition-colors"
              >
                <div>
                  <span className="font-sans text-3xl font-bold text-[#00A3FF]/30 mb-4 block font-mono">
                    {step.number}
                  </span>
                  <h3 className="font-sans text-lg font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Casos Relacionados */}
      <section id="proyectos" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-3 block">
              Publicaciones Reales
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Proyectos Desarrollados
            </h2>
            <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              Conoce proyectos editoriales, periódicos, revistas y piezas comerciales diseñadas por Oscar Rendón Visual.
            </p>
          </div>
          <Link
            href="/#portafolio"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00A3FF] hover:text-white transition-colors"
          >
            Ver portafolio completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {relatedCases.map((cs) => (
            <Link
              key={cs.id}
              href={cs.href}
              className="bg-[#0c2446]/40 hover:bg-[#0c2446]/80 border border-white/5 hover:border-[#00A3FF]/40 rounded-[28px] overflow-hidden transition-all duration-300 group flex flex-col md:flex-row shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] md:w-1/2 w-full bg-[#050B14] overflow-hidden min-h-[260px]">
                <Image
                  src={cs.image}
                  alt={`Proyecto ${cs.title} por Oscar Rendón`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2446] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 font-sans text-[10px] font-bold uppercase tracking-[0.15em] bg-[#050B14]/80 backdrop-blur-md px-3 py-1 rounded-full text-[#00A3FF] border border-white/10">
                  {cs.category}
                </span>
              </div>

              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans text-2xl font-bold text-white mb-3 group-hover:text-[#00A3FF] transition-colors flex items-center justify-between">
                    {cs.title}
                    <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-[#00A3FF] transition-colors" />
                  </h3>
                  <p className="font-sans text-sm md:text-base text-zinc-300 font-light leading-relaxed mb-6">
                    {cs.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider text-[#00A3FF] uppercase pt-4 border-t border-white/5">
                  Ver caso de estudio completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section: FAQ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-3 block">
            Dudas Comunes
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Todo lo que necesitas saber antes de iniciar la diagramación o diseño de tu publicación.
          </p>
        </div>

        <div className="bg-[#0c2446]/30 p-6 md:p-10 rounded-[28px] border border-[#00A3FF]/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00A3FF] opacity-[0.03] blur-[60px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === i}
              onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* Section: CTA Final */}
      <section className="relative z-10 w-full bg-[#050B14] text-white py-20 md:py-28 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A3FF] opacity-[0.04] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-4">
            Comencemos Hoy
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            ¿Listo para diagramar tu próxima publicación?
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg mb-10 max-w-xl font-light leading-relaxed">
            Hablemos de tus contenidos y transformemos tus textos e imágenes en una publicación profesional, legible y de alta calidad visual.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClickWhatsApp("Service CTA Final - Editorial")}
              className="inline-flex items-center justify-center gap-3 bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,163,255,0.3)] w-full sm:w-auto text-center"
            >
              Cotizar Proyecto Editorial
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/portfolio/editorial/"
              onClick={() => trackCtaClick("Ver Trabajos Editoriales", "Service CTA Final")}
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/15 text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
            >
              Ver Trabajos Editoriales
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
