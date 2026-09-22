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
  Layers, 
  Palette, 
  Type, 
  BookOpen, 
  Compass, 
  FileCheck2, 
  ShieldCheck, 
  MapPin, 
  Award,
  ExternalLink
} from "lucide-react";
import SectionSeparator from "@/components/ui/SectionSeparator";
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

export default function BrandingIdentidadVisualClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20Branding%20e%20Identidad%20Visual.";

  const includes = [
    {
      icon: <Palette className="w-6 h-6 text-[#00A3FF]" />,
      title: "Diseño de Logotipo e Identidad",
      desc: "Creación de logotipo, isotipo y variantes visuales principales y secundarias pensadas para perdurar y funcionar con impacto en todos los formatos.",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#00A3FF]" />,
      title: "Sistema Gráfico Integral",
      desc: "Desarrollo del lenguaje visual completo: texturas, iconografía, patrones, recursos visuales y criterios de composición para darle coherencia a la marca.",
    },
    {
      icon: <Palette className="w-6 h-6 text-[#00A3FF]" />,
      title: "Paleta de Colores Estratégica",
      desc: "Definición cromática técnica y psicológica con valores precisos en RGB, CMYK, HEX y Pantone para garantizar fidelidad en digital e impresión.",
    },
    {
      icon: <Type className="w-6 h-6 text-[#00A3FF]" />,
      title: "Tipografía Corporativa",
      desc: "Selección y jerarquización tipográfica para títulos, subtítulos y cuerpos de texto que aseguran máxima legibilidad y personalidad de marca.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#00A3FF]" />,
      title: "Manual Básico de Identidad",
      desc: "Documento guía con normas claras de aplicación, márgenes de seguridad, usos correctos e incorrectos para mantener el control visual de la empresa.",
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-[#00A3FF]" />,
      title: "Aplicaciones y Piezas Corporativas",
      desc: "Diseño de piezas clave según tus necesidades: papelería, tarjetas, firmas de correo, uniformes, plantillas para redes, empaques o avisos.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Diagnóstico",
      desc: "Análisis del modelo de negocio, propuesta de valor, público objetivo y referentes de mercado para fijar las metas visuales del proyecto.",
    },
    {
      number: "02",
      title: "Concepto",
      desc: "Estructuración de la dirección creativa y el tono de comunicación que definirán la personalidad y el posicionamiento de la marca.",
    },
    {
      number: "03",
      title: "Desarrollo Visual",
      desc: "Diseño y exploración gráfica del logotipo, paleta cromática, combinaciones tipográficas y elementos que darán vida al sistema.",
    },
    {
      number: "04",
      title: "Aplicaciones",
      desc: "Pruebas y despliegue de la identidad en escenarios reales: soportes comerciales, piezas digitales, papelería y entorno físico.",
    },
    {
      number: "05",
      title: "Entrega",
      desc: "Suministro del paquete integral de archivos vectoriales editables y formatos digitales listos para producción junto a su manual de uso.",
    },
  ];

  const relatedCases = [
    {
      id: "be-good",
      title: "Be Good",
      category: "Moda & Sostenibilidad",
      desc: "Branding, identidad visual y diseño de empaques para una marca con propósito.",
      image: "/images/portfolio/be-good/be-good-showcase.webp",
      href: "/portfolio/be-good/",
    },
    {
      id: "monreve",
      title: "Monreve Solutions",
      category: "Servicios & Eco-Friendly",
      desc: "Identidad corporativa, piezas comerciales y presencia digital orientada a la confianza.",
      image: "/images/portfolio/monreve/monreve-showcase-v2.webp",
      href: "/portfolio/monreve/",
    },
    {
      id: "mei",
      title: "MEI Uñas & Spa",
      category: "Belleza & Cuidado",
      desc: "Identidad visual elegante, piezas para redes sociales y fachada comercial.",
      image: "/images/portfolio/mei/mei-portada-caso.webp",
      href: "/portfolio/mei/",
    },
    {
      id: "ancla-salud",
      title: "Ancla Salud",
      category: "Salud & Bienestar",
      desc: "Sistema de identidad y comunicación gráfica para una marca enfocada en autocuidado.",
      image: "/images/portfolio/ancla-salud/ancla-salud-card.webp",
      href: "/portfolio/ancla-salud/",
    },
    {
      id: "computienda",
      title: "CompuTienda",
      category: "Tecnología & Retail",
      desc: "Identidad corporativa, formatos comerciales y aplicaciones gráficas en tienda física.",
      image: "/images/portfolio/computienda/compu-tienda_card.webp",
      href: "/portfolio/computienda/",
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto cuesta crear una identidad visual?",
      answer: "El costo de un proyecto de branding e identidad visual varía de acuerdo con el alcance requerido, la etapa de la empresa y la cantidad de aplicaciones de marca necesarias (papelería, redes sociales, empaques, diseño web, entre otros). Cada cotización se realiza de forma personalizada con entregables claros y detallados para que tengas total transparencia desde el inicio.",
    },
    {
      question: "¿Cuál es la diferencia entre un logotipo y una identidad visual?",
      answer: "Un logotipo es el identificador gráfico principal de tu marca (el símbolo y tipografía que representan su nombre). En cambio, una identidad visual es el sistema gráfico completo que acompaña al logo: paleta de colores, familias tipográficas, texturas, estilos fotográficos, manual de uso y aplicaciones comerciales. La identidad visual es lo que permite que tu empresa sea reconocida y percibida con profesionalismo en todos los puntos de contacto.",
    },
    {
      question: "¿Trabajas solamente con clientes de Pereira?",
      answer: "No. Aunque Oscar Rendón Visual tiene su sede principal en Pereira (Colombia), el servicio se presta con total fluidez de forma remota y presencial para clientes locales, nacionales e internacionales. Se realizan sesiones de diagnóstico y presentación por videollamada con metodologías ágiles y acompañamiento continuo.",
    },
    {
      question: "¿Qué archivos se entregan al finalizar un proyecto?",
      answer: "Al finalizar se entrega un paquete completo y organizado con todos los archivos maestros vectoriales editables (Adobe Illustrator, PDF vectorial para imprenta de alta resolución) y formatos digitales optimizados (SVG, PNG con fondo transparente, JPG en alta resolución) en todas las versiones cromáticas (color principal, fondos oscuros, blanco y escala de grises), junto al manual de identidad visual.",
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto de branding?",
      answer: "Generalmente, el desarrollo de un proyecto de branding e identidad visual completo toma entre 2 y 4 semanas, dependiendo de la fluidez en las revisiones, el alcance de las aplicaciones comerciales y los requerimientos específicos de cada cliente.",
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
          <Link
            href="/servicios/"
            className="font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#00A3FF] hover:text-white transition-colors"
          >
            Servicios
          </Link>
          <span className="text-zinc-600 text-xs">/</span>
          <span className="font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
            Branding
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start bg-[#0c2446] border border-[#00A3FF]/20 px-4 py-1.5 rounded-full font-sans text-[10.5px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Diseño Gráfico Estratégico
            </span>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Branding e Identidad Visual
            </h1>

            <div className="space-y-5 font-sans text-zinc-300 text-base md:text-lg leading-[1.8] font-light max-w-2xl mb-10">
              <p>
                Una identidad visual sólida no es únicamente un logotipo: es un <strong>sistema gráfico coherente</strong> que permite que una empresa sea reconocible, consistente y altamente profesional en cada punto de contacto con sus clientes.
              </p>
              <p>
                Desarrollo soluciones integrales que abarcan desde el <strong>diseño de logotipo</strong> e <strong>identidad corporativa</strong>, hasta la definición de <strong>paleta de colores</strong>, <strong>tipografía</strong>, <strong>sistema gráfico</strong>, <strong>aplicaciones de marca</strong>, <strong>piezas corporativas</strong> y <strong>manual básico de identidad</strong> con <strong>asesoría visual</strong> estratégica.
              </p>
              <p className="text-sm md:text-base text-zinc-400 border-l-2 border-[#00A3FF]/40 pl-4 py-1">
                Desde Pereira (Colombia), <strong>Oscar Rendón Visual</strong> trabaja con empresas consolidadas, marcas en crecimiento y emprendedores locales, nacionales e internacionales, respaldado por 30 años de experiencia en diseño visual de alto nivel.
              </p>
            </div>

            {/* Badges / Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Pereira, Colombia",
                "30 años de trayectoria",
                "Atención remota & local",
                "Entrega de editables",
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
                onClick={() => trackClickWhatsApp("Service Hero - Branding")}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all shadow-[0_10px_30px_rgba(0,163,255,0.3)] hover:shadow-[0_10px_35px_rgba(0,163,255,0.4)]"
              >
                Cotizar Identidad Visual
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proyectos"
                onClick={() => trackCtaClick("Ver Casos Reales", "Service Hero")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all"
              >
                Ver Casos Reales
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#0c2446] to-[#050B14] p-6 md:p-8 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00A3FF] opacity-10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-[#071B33] border border-white/10">
                <Image
                  src="/images/services/branding-identidad.webp"
                  alt="Servicio de Branding e Identidad Visual por Oscar Rendón"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-sans text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#00A3FF]" />
                  Enfoque Profesional & Estratégico
                </h3>
                <p className="font-sans text-zinc-300 text-sm leading-relaxed font-light">
                  Una identidad construida para diferenciar a tu empresa frente a la competencia, transmitir confianza y elevar el valor percibido de tus productos o servicios.
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
            ¿Qué incluye una Identidad Visual?
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Cada proyecto se estructura a la medida de tu negocio para garantizar una marca consistente, funcional y lista para implementarse en todos los canales.
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
              Metodología Clara
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Proceso de Trabajo
            </h2>
            <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              Un flujo de trabajo ordenado y colaborativo desde el primer contacto hasta la entrega final de tu marca.
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
              Proyectos Reales
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Casos Desarrollados
            </h2>
            <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              Descubre proyectos reales de branding e identidad visual desarrollados para diferentes sectores y marcas.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {relatedCases.map((cs) => (
            <Link
              key={cs.id}
              href={cs.href}
              className="bg-[#0c2446]/40 hover:bg-[#0c2446]/80 border border-white/5 hover:border-[#00A3FF]/40 rounded-[24px] overflow-hidden transition-all duration-300 group flex flex-col shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] w-full bg-[#050B14] overflow-hidden">
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

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-sans text-xl font-bold text-white mb-2 group-hover:text-[#00A3FF] transition-colors flex items-center justify-between">
                    {cs.title}
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[#00A3FF] transition-colors" />
                  </h3>
                  <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed mb-4">
                    {cs.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-wider text-[#00A3FF] uppercase pt-3 border-t border-white/5">
                  Ver caso de estudio
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
            Todo lo que necesitas saber antes de iniciar el proyecto de identidad visual para tu empresa.
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
            ¿Listo para crear la identidad visual de tu marca?
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg mb-10 max-w-xl font-light leading-relaxed">
            Hablemos de tus necesidades y construyamos un sistema visual sólido, memorable y profesional para tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClickWhatsApp("Service CTA Final - Branding")}
              className="inline-flex items-center justify-center gap-3 bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,163,255,0.3)] w-full sm:w-auto text-center"
            >
              Hablemos por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#contacto"
              onClick={() => trackCtaClick("Formulario de Contacto", "Service CTA Final")}
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/15 text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
            >
              Enviar Formulario
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
