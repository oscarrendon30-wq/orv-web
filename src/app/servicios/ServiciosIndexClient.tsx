"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Palette, 
  BookOpen, 
  Share2, 
  Monitor, 
  Package, 
  Award, 
  Globe2, 
  ShieldCheck, 
  Layers, 
  Briefcase,
  MapPin,
  ExternalLink
} from "lucide-react";
import { trackClickWhatsApp, trackCtaClick } from "@/utils/analytics";

export default function ServiciosIndexClient() {
  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20de%20dise%C3%B1o%20gr%C3%A1fico.";

  const services = [
    {
      id: "branding",
      title: "Branding e Identidad Visual",
      tag: "Identidad de Marca",
      desc: "Creación de marcas memorables, diseño de logotipos, manuales de identidad visual, sistemas gráficos y papelería corporativa estructurada para posicionar tu negocio con coherencia y autoridad.",
      href: "/servicios/branding-identidad-visual/",
      image: "/images/services/branding-identidad.webp",
      icon: <Palette className="w-6 h-6 text-[#00A3FF]" />,
    },
    {
      id: "editorial",
      title: "Diseño Editorial y Diagramación",
      tag: "Publicaciones & Editorial",
      desc: "Diagramación profesional de revistas, libros, periódicos, catálogos comerciales e informes corporativos en formatos impresos de alta resolución y versiones optimizadas para distribución digital.",
      href: "/servicios/diseno-editorial/",
      image: "/images/services/diseno-editorial.webp",
      icon: <BookOpen className="w-6 h-6 text-[#00A3FF]" />,
    },
    {
      id: "redes",
      title: "Diseño para Redes Sociales",
      tag: "Comunicación Digital",
      desc: "Creación de piezas visuales estratégicas, posts, historias, carruseles y campañas publicitarias digitales diseñadas para captar atención, transmitir valor y fortalecer el engagement de tu marca.",
      href: "/servicios/diseno-redes-sociales/",
      image: "/images/services/redes-sociales.webp",
      icon: <Share2 className="w-6 h-6 text-[#00A3FF]" />,
    },
    {
      id: "web",
      title: "Diseño Web",
      tag: "Presencia Online",
      desc: "Diseño de sitios web corporativos, landing pages y páginas de presentación profesionales 100% responsive, modernas y estructuradas para transmitir credibilidad y facilitar el contacto con clientes.",
      href: "/servicios/diseno-web/",
      image: "/images/services/diseno-web.webp",
      icon: <Monitor className="w-6 h-6 text-[#00A3FF]" />,
    },
    {
      id: "empaques",
      title: "Diseño de Empaques y Etiquetas",
      tag: "Packaging & Producto",
      desc: "Packaging comercial, diseño de etiquetas para envases y botellas, marquillas textiles y preparación técnica de artes finales vectoriales listos para imprenta, troquelado y producción física.",
      href: "/servicios/empaques-etiquetas/",
      image: "/images/services/empaques-publicidad.webp",
      icon: <Package className="w-6 h-6 text-[#00A3FF]" />,
    },
  ];

  const experiencePillars = [
    {
      icon: <Award className="w-6 h-6 text-[#00A3FF]" />,
      title: "30 años de trayectoria",
      desc: "Tres décadas de experiencia continua en diseño gráfico comercial y editorial, combinando solvencia técnica y criterio visual.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00A3FF]" />,
      title: "Enfoque profesional",
      desc: "Cada solución responde a objetivos claros de comunicación, posicionamiento y diferenciación para empresas y emprendimientos.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#00A3FF]" />,
      title: "Alcance local e internacional",
      desc: "Atención presencial desde Pereira (Colombia) y desarrollo de proyectos de forma remota para clientes a nivel nacional e internacional.",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#00A3FF]" />,
      title: "Soluciones a la medida",
      desc: "Asesoría directa y personalizada adaptada a las necesidades específicas de cada marca, cuidando cada detalle de entrega.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#071B33] text-white pt-24 md:pt-32 pb-0 overflow-hidden relative selection:bg-[#00A3FF]/20 selection:text-white">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[2%] left-[-20%] w-[100%] md:w-[70%] aspect-square opacity-[0.02] mix-blend-screen -rotate-12">
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
        {/* Breadcrumb */}
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start bg-[#0c2446] border border-[#00A3FF]/20 px-4 py-1.5 rounded-full font-sans text-[10.5px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Servicios Profesionales de Diseño Gráfico
            </span>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Servicios de Diseño Gráfico
            </h1>

            <div className="space-y-5 font-sans text-zinc-300 text-base md:text-lg leading-[1.8] font-light max-w-3xl mb-10">
              <p>
                En <strong>Oscar Rendón Visual</strong> desarrollo soluciones de comunicación visual y diseño gráfico para empresas, marcas y emprendimientos desde Pereira (Colombia), con atención local, nacional e internacional.
              </p>
              <p>
                Respaldado por <strong>30 años de trayectoria profesional</strong>, cada proyecto combina criterio visual, pensamiento estratégico y rigor técnico para ayudar a las marcas a construir una presencia sólida, coherente y reconocible.
              </p>
            </div>

            {/* Badges / Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Pereira, Colombia",
                "30 años de experiencia",
                "Marcas, Empresas & Emprendimientos",
                "Atención local e internacional",
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
                onClick={() => trackClickWhatsApp("Services Hub Hero")}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all shadow-[0_10px_30px_rgba(0,163,255,0.3)] hover:shadow-[0_10px_35px_rgba(0,163,255,0.4)]"
              >
                Hablemos de tu proyecto
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#catalogo"
                onClick={() => trackCtaClick("Ver Catalogo Servicios", "Services Hub Hero")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all"
              >
                Explorar Servicios
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#0c2446] to-[#050B14] p-6 md:p-8 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00A3FF] opacity-10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-[#00A3FF]" />
              </div>

              <div className="space-y-4">
                <h3 className="font-sans text-xl font-bold text-white tracking-tight">
                  Diseño Gráfico Estratégico
                </h3>
                <p className="font-sans text-zinc-300 text-sm leading-relaxed font-light">
                  Servicios profesionales estructurados para responder a las necesidades reales de comunicación de marcas y negocios en constante evolución.
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

      {/* Section: Catálogo de Servicios */}
      <section id="catalogo" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-3 block">
            Especialidades
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Nuestros Servicios de Diseño Gráfico
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Conoce cada una de las soluciones disponibles y accede a información detallada, procesos de trabajo y proyectos relacionados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#0c2446]/40 hover:bg-[#0c2446]/80 border border-white/5 hover:border-[#00A3FF]/30 rounded-[24px] overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1.5"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#050B14] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Servicio de ${service.title} - Oscar Rendón Visual`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c2446] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 font-sans text-[10px] font-bold uppercase tracking-[0.15em] bg-[#050B14]/80 backdrop-blur-md px-3 py-1 rounded-full text-[#00A3FF] border border-white/10">
                    {service.tag}
                  </span>
                </div>

                <div className="p-7">
                  <div className="w-10 h-10 rounded-[12px] bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00A3FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-0">
                <Link
                  href={service.href}
                  onClick={() => trackCtaClick(`Ver Servicio Hub - ${service.title}`, "Services Hub")}
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-[14px] bg-white/5 hover:bg-[#00A3FF] border border-white/10 hover:border-[#00A3FF] text-white font-sans text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 group/btn"
                >
                  <span>Conocer servicio</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Bloque de Experiencia */}
      <section className="relative z-10 bg-[#050B14]/80 py-20 md:py-28 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-3 block">
              Criterio & Trayectoria
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              30 años de experiencia y criterio visual
            </h2>
            <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              Un modelo de trabajo enfocado en la calidad gráfica, el entendimiento del negocio y la entrega de soluciones visuales perdurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiencePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#071B33]/60 border border-white/5 p-7 rounded-[22px] flex flex-col justify-between hover:border-[#00A3FF]/30 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="font-sans text-lg font-bold text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Proyectos y Portafolio */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="bg-gradient-to-b from-[#0c2446]/60 to-[#071B33]/80 border border-white/10 rounded-[32px] p-8 md:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-3 block">
              Casos Reales
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Proyectos Desarrollados
            </h2>
            <p className="font-sans text-zinc-300 text-base md:text-lg font-light leading-relaxed">
              Descubre proyectos reales en branding, diseño editorial, presencia web, packaging y comunicación visual desarrollados para diferentes sectores comerciales.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/#portafolio"
              onClick={() => trackCtaClick("Ver Portafolio", "Services Hub Projects")}
              className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] transition-all shadow-[0_10px_30px_rgba(0,163,255,0.3)] hover:shadow-[0_10px_35px_rgba(0,163,255,0.4)]"
            >
              Ver Portafolio Completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
            ¿Listo para potenciar la imagen de tu marca?
          </h2>
          <p className="font-sans text-zinc-300 text-base md:text-lg mb-10 max-w-xl font-light leading-relaxed">
            Conversemos sobre las necesidades de tu proyecto y encontremos la mejor solución visual para tu empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClickWhatsApp("Services Hub CTA Final")}
              className="inline-flex items-center justify-center gap-3 bg-[#00A3FF] hover:bg-[#008fe0] text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,163,255,0.3)] w-full sm:w-auto text-center"
            >
              Hablemos de tu proyecto
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#portafolio"
              onClick={() => trackCtaClick("Ver Portafolio", "Services Hub CTA Final")}
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/15 text-white font-sans font-bold text-xs md:text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
            >
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
