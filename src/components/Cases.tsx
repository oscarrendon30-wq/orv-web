"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Cases() {
  const caseStudies = [
    {
      id: "case-be-good",
      name: "Be Good",
      category: "Branding & Packaging Comercial",
      logo: "/images/portfolio/be-good-logo.jpg",
      image: "/images/portfolio/be-good/be-good-showcase.webp",
      details: [
        {
          title: "Contexto",
          content: <><span translate="no" className="notranslate">Be Good</span> es una marca de moda que promueve el consumo ético ('Moda con propósito'). El cliente necesitaba una identidad que combinara la sofisticación del diseño textil de autor con la honestidad del compromiso sostenible.</>,
        },
        {
          title: "Reto Visual",
          content: "Transmitir la idea de vuelo, ligereza y sustentabilidad sin perder el peso premium de una marca de moda. El packaging debía sentirse duradero, sobrio y transformarse en una pieza de autopromoción por sí sola.",
        },
        {
          title: "Solución Gráfica",
          content: "Creación de un monograma 'BG' dorado flanqueado por alas detalladas y simétricas, combinado con un lema manuscrito que aporta calidez humana. Diseño de empaques (bolsas kraft) con impresión limpia y alto contraste.",
        },
        {
          title: "Valor para la Marca",
          content: "El empaque y la papelería física (marquillas y tarjetas) elevaron el valor percibido de las prendas, reforzando la lealtad de marca del consumidor final y creando un unboxing memorable para retail.",
        },
      ],
      impacts: ["Aumento de Valor Percibido", "Empaque Ecológico Premium", "Reconocimiento de Marca"],
    },
    {
      id: "case-mei",
      name: "MEI Uñas & Spa",
      category: "Identidad & Comunicación Digital",
      logo: "/images/portfolio/mei-logo.jpg",
      image: "/images/portfolio/mei/mei-portada-caso.webp",
      imagePosition: "object-[20%_center]",
      details: [
        {
          title: "Contexto",
          content: "MEI es un spa y salón de uñas boutique que buscaba posicionarse en un segmento de mercado premium, diferenciándose de las estéticas comunes mediante una experiencia visual lujosa y de extrema pulcritud.",
        },
        {
          title: "Reto Visual",
          content: "Comunicar elegancia y profesionalismo técnico sin caer en clichés del sector de belleza. Se necesitaba un logotipo sólido y una estructura de feed para Instagram que reflejara un orden visual milimétrico.",
        },
        {
          title: "Solución Gráfica",
          content: "Diseño de un logotipo con tipografía de alto contraste (serif) entrelazada con una flor de loto en oro y negro satinado. Para redes sociales, se desarrolló una grilla de publicaciones organizada por patrones cromáticos y texturas físicas.",
        },
        {
          title: "Valor para la Marca",
          content: "Consolidación de una identidad corporativa que transmite confianza inmediata. El feed unificado permitió incrementar la tasa de interacción y posicionar la marca como un referente de estética premium en la región.",
        },
      ],
      impacts: ["Branding Coherente", "Estructura de Redes", "Estética Premium"],
    },
  ];

  return (
    <section className="pt-16 pb-32 bg-gradient-to-b from-[#050B14] to-[#071B33] relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-brand-border/20 hidden xl:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-brand-border/20 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-24">
          <h2 className="text-[#00A3FF] text-[11px] font-bold uppercase tracking-[0.15em] mb-4">
            DETALLE DE PROYECTOS
          </h2>
          <h3 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            Proyectos destacados.
          </h3>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light max-w-2xl">
            Un desglose detallado de la estrategia gráfica, los retos visuales y el impacto comercial detrás de proyectos de diseño reales.
          </p>
        </div>

        {/* Case Studies Loop */}
        <div className="space-y-32">
          {caseStudies.map((cs, index) => (
            <div
              key={cs.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div
                className={`lg:col-span-5 relative ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <div className="relative aspect-[4/5] bg-[#071B33] rounded-[24px] border border-white/5 overflow-hidden group shadow-2xl">
                  {/* Subtle blur background glow */}
                  <div className="absolute inset-0 bg-[#00A3FF]/5 opacity-50 z-0 pointer-events-none" />

                  <Image
                    src={cs.image}
                    alt={cs.name}
                    fill
                    sizes="(max-w-768px) 100vw, 40vw"
                    className={`object-cover transition-transform duration-700 group-hover:scale-[1.02] z-10 ${cs.imagePosition || 'object-center'}`}
                  />

                  {/* Logo overlay at top */}
                  <div className="absolute top-6 left-6 z-20 bg-white p-2.5 rounded-[12px] shadow-lg border border-white/10 max-w-[100px] max-h-[50px] flex items-center justify-center">
                    <Image
                      src={cs.logo}
                      alt={`${cs.name} logo`}
                      width={90}
                      height={40}
                      className="object-contain max-h-[40px]"
                    />
                  </div>
                </div>
              </div>

              {/* Details side */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#00A3FF]">
                    {cs.category}
                  </span>
                  <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-8">
                    <span translate="no" className="notranslate">{cs.name}</span>
                  </h3>

                  {/* Structured Details */}
                  <div className="space-y-6 border-l border-white/10 pl-6 ml-1">
                    {cs.details.map((detail) => (
                      <div key={detail.title}>
                        <h4 className="text-[11px] font-bold tracking-[0.1em] text-zinc-300 uppercase mb-1">
                          {detail.title}
                        </h4>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed">
                          {detail.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impacts Tags */}
                <div className="mt-8 pt-8 border-t border-white/5">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-4">
                    Impacto e Hitos del Proyecto
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {cs.impacts.map((imp) => (
                      <span
                        key={imp}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/5 text-xs font-medium text-zinc-300 rounded-full"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3FF]" />
                        {imp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
