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
  Monitor, 
  Smartphone, 
  Layout, 
  Building2, 
  MessageSquare, 
  Search, 
  MapPin, 
  Award,
  ExternalLink
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

export default function DisenoWebClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20Dise%C3%B1o%20Web.";

  const includes = [
    {
      icon: <Monitor className="w-6 h-6 text-[#00A3FF]" />,
      title: "Diseño Visual del Sitio",
      desc: "Interfaz gráfica moderna y personalizada, estructurada en total armonía con la identidad visual, colores, tipografías y personalidad de tu marca.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#00A3FF]" />,
      title: "Diseño Responsive",
      desc: "Adaptación óptima y fluida para computadores de escritorio, portátiles, tablets y dispositivos móviles con excelente usabilidad.",
    },
    {
      icon: <Layout className="w-6 h-6 text-[#00A3FF]" />,
      title: "Estructura de Contenidos",
      desc: "Organización estratégica y clara de tus servicios, información corporativa, portafolio de proyectos y secciones de valor.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#00A3FF]" />,
      title: "Páginas Corporativas",
      desc: "Sitios profesionales diseñados para empresas, marcas y emprendimientos que buscan consolidar credibilidad y autoridad en su sector.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#00A3FF]" />,
      title: "Integración de Contacto",
      desc: "Conexión directa a chat de WhatsApp, botones de llamada rápida y formularios de contacto adaptados a los objetivos de tu negocio.",
    },
    {
      icon: <Search className="w-6 h-6 text-[#00A3FF]" />,
      title: "Optimización Visual y SEO Básico",
      desc: "Estructura semántica limpia, metadatos, jerarquía de encabezados y buenas prácticas básicas para facilitar la indexación en buscadores.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Diagnóstico y objetivos",
      desc: "Análisis del modelo de negocio, público objetivo, identidad de marca y metas clave de la presencia digital de tu empresa.",
    },
    {
      number: "02",
      title: "Arquitectura y contenidos",
      desc: "Estructuración del mapa del sitio, definición de secciones principales, flujo de navegación y jerarquía informativa.",
    },
    {
      number: "03",
      title: "Diseño visual",
      desc: "Creación de la interfaz gráfica (UI/UX) cuidando la composición visual, contrastes, tipografías y coherencia de marca.",
    },
    {
      number: "04",
      title: "Desarrollo y adaptación responsive",
      desc: "Maquetación y ajuste técnico para asegurar que el sitio web funcione con fluidez y rapidez en todos los dispositivos.",
    },
    {
      number: "05",
      title: "Revisión y publicación",
      desc: "Pruebas integrales de funcionamiento, verificación de formularios, enlaces, optimización de velocidad y puesta en línea.",
    },
  ];

  const relatedCases = [
    {
      id: "dental-techniques",
      title: "Dental Techniques",
      category: "Odontología & Salud",
      desc: "Identidad visual, papelería comercial y diseño de sitio web con comunicación clara y profesional.",
      image: "/images/portfolio/dentaltechniques/dental-techniques-card.webp",
      href: "/portfolio/dental-techniques/",
    },
    {
      id: "monreve",
      title: "Monreve Solutions",
      category: "Servicios & Eco-Friendly",
      desc: "Identidad corporativa, presencia digital y diseño de interfaz web para servicios ecológicos.",
      image: "/images/portfolio/monreve/monreve-showcase-v2.webp",
      href: "/portfolio/monreve/",
    },
    {
      id: "ancla-salud",
      title: "Ancla Salud",
      category: "Salud & Bienestar",
      desc: "Sistema de comunicación visual, papelería y presencia web enfocada en autocuidado y bienestar.",
      image: "/images/portfolio/ancla-salud/ancla-salud-card.webp",
      href: "/portfolio/ancla-salud/",
    },
  ];

  const faqs = [
    {
      question: "¿Qué tipo de páginas web puedes diseñar?",
      answer: "Se diseñan sitios web corporativos, landing pages de servicios o productos, páginas de presentación para empresas y portafolios profesionales con estructura moderna y enfocada en comunicar valor y facilitar el contacto.",
    },
    {
      question: "¿La página funciona correctamente en celulares?",
      answer: "Sí. Todos los proyectos se desarrollan bajo principios responsive, garantizando que los textos, imágenes, menús y botones se adapten de forma fluida a cualquier tamaño de pantalla (smartphones, tablets y computadores).",
    },
    {
      question: "¿Puedo utilizar mi identidad visual actual?",
      answer: "Totalmente. El diseño web se adapta e integra fielmente a tu logotipo, paleta de colores, tipografías y línea gráfica existente para asegurar coherencia y reconocimiento de marca.",
    },
    {
      question: "¿El sitio puede incluir WhatsApp y formulario de contacto?",
      answer: "Sí. Se integran enlaces directos a chat de WhatsApp, botones de llamada, formularios de contacto para cotizaciones y enlaces a tus redes sociales para facilitar la comunicación con clientes potenciales.",
    },
    {
      question: "¿Trabajas solamente con empresas de Pereira?",
      answer: "No. Aunque Oscar Rendón Visual tiene su base en Pereira (Colombia), el servicio de diseño web se presta a nivel regional, nacional e internacional mediante metodologías ágiles, revisiones virtuales y comunicación constante.",
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
            Diseño Web
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start bg-[#0c2446] border border-[#00A3FF]/20 px-4 py-1.5 rounded-full font-sans text-[10.5px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Diseño Web Profesional
            </span>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Diseño Web Profesional
            </h1>

            <div className="space-y-5 font-sans text-zinc-300 text-base md:text-lg leading-[1.8] font-light max-w-2xl mb-10">
              <p>
                Un <strong>diseño web</strong> profesional debe representar correctamente la <strong>identidad visual</strong> de tu empresa, comunicar sus servicios con máxima claridad y facilitar el contacto con clientes potenciales.
              </p>
              <p>
                Desarrollo <strong>páginas web profesionales</strong> y <strong>sitios corporativos</strong> con <strong>diseño responsive</strong> pensado para ofrecer una excelente <strong>experiencia de usuario</strong> en computadores, tablets y celulares, estructurando <strong>portafolios</strong> y <strong>páginas para empresas</strong> que elevan su <strong>presencia digital</strong>.
              </p>
              <p className="text-sm md:text-base text-zinc-400 border-l-2 border-[#00A3FF]/40 pl-4 py-1">
                Desde Pereira (Colombia), <strong>Oscar Rendón Visual</strong> crea soluciones web para marcas, empresas y emprendedores locales, nacionales e internacionales, respaldado por 30 años de criterio y experiencia en diseño gráfico.
              </p>
            </div>

            {/* Badges / Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Pereira, Colombia",
                "Diseño 100% Responsive",
                "Integración con WhatsApp",
                "30 años de experiencia visual",
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
                onClick={() => trackClickWhatsApp("Service Hero - Diseno Web")}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all shadow-[0_10px_30px_rgba(0,163,255,0.3)] hover:shadow-[0_10px_35px_rgba(0,163,255,0.4)]"
              >
                Cotizar Diseño Web
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proyectos"
                onClick={() => trackCtaClick("Ver Proyectos Web", "Service Hero")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all"
              >
                Ver Proyectos Web
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#0c2446] to-[#050B14] p-6 md:p-8 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00A3FF] opacity-10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-[#071B33] border border-white/10">
                <Image
                  src="/images/services/diseno-web.webp"
                  alt="Servicio de Diseño Web por Oscar Rendón"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-sans text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#00A3FF]" />
                  Presencia Digital Moderna & Confiable
                </h3>
                <p className="font-sans text-zinc-300 text-sm leading-relaxed font-light">
                  Interfaces limpias, intuitivas y elegantes diseñadas para que tu negocio transmita credibilidad, conecte con tus clientes y facilite el contacto comercial.
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
            ¿Qué incluye el Servicio de Diseño Web?
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Soluciones web estructuradas a la medida de tu empresa para garantizar una presencia digital moderna, rápida y funcional.
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
              Metodología Estructurada
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Proceso de Trabajo
            </h2>
            <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              Un flujo de trabajo ordenado desde el diagnóstico inicial hasta la publicación final de tu sitio web.
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
              Sitios Web Reales
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Proyectos Desarrollados
            </h2>
            <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              Descubre proyectos reales donde el diseño web y la identidad visual se integran para fortalecer marcas comerciales.
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
            Todo lo que necesitas saber antes de iniciar el diseño del sitio web para tu empresa.
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
            ¿Listo para crear la página web de tu negocio?
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg mb-10 max-w-xl font-light leading-relaxed">
            Construyamos un sitio web moderno, atractivo y alineado con la identidad visual de tu marca.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClickWhatsApp("Service CTA Final - Web")}
              className="inline-flex items-center justify-center gap-3 bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,163,255,0.3)] w-full sm:w-auto text-center"
            >
              Cotizar Diseño Web
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#portafolio"
              onClick={() => trackCtaClick("Ver Proyectos Web", "Service CTA Final")}
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/15 text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
            >
              Ver Proyectos Web
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
