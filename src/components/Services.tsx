"use client";

import { motion } from "framer-motion";
import { Layers, Share2, BookOpen, Presentation, Laptop, Package, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Branding e identidad visual",
      description: "Creación de logotipos, manuales de marca, tipografías y paletas de colores que transmiten solidez, profesionalismo y valor de mercado.",
      icon: Layers,
    },
    {
      title: "Diseño para redes sociales",
      description: "Piezas visuales atractivas, coherentes y estructuradas estratégicamente para destacar la presencia de tu marca en Instagram y LinkedIn.",
      icon: Share2,
    },
    {
      title: "Diseño editorial",
      description: "Diagramación de libros, revistas, catálogos, folletos y memorias corporativas con un alto sentido de jerarquía, lectura y estética editorial.",
      icon: BookOpen,
    },
    {
      title: "Presentaciones corporativas",
      description: "Diseño de diapositivas e impacto visual para presentaciones de negocios, informes de gestión, lanzamientos y ponencias ejecutivas de alto nivel.",
      icon: Presentation,
    },
    {
      title: "Diseño web",
      description: "Estructuración y diseño de interfaces web modernas y minimalistas (UI/UX) que conectan tu marca con tus clientes de forma fluida y premium.",
      icon: Laptop,
    },
    {
      title: "Empaques, etiquetas y piezas publicitarias",
      description: "Diseño de packaging comercial, etiquetas de producto, marquillas, banners, cartelería y papelería corporativa de alta recordación y calidad.",
      icon: Package,
    },
  ];

  return (
    <section id="servicios" className="py-32 bg-brand-deep relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-3">
              Especialidades
            </h2>
            <p className="font-editorial text-4xl sm:text-5xl font-medium text-brand-text-primary leading-tight">
              Soluciones visuales que estructuran valor.
            </p>
          </div>
          <p className="text-brand-text-secondary text-base leading-relaxed max-w-sm mt-6 md:mt-0">
            Cada proyecto se aborda bajo un estricto criterio estético y una dirección de arte pulcra orientada a resultados comerciales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-brand-card p-10 rounded-sm border border-brand-border flex flex-col justify-between group hover:border-brand-gold/30 hover:bg-brand-card/75 transition-all relative overflow-hidden"
            >
              {/* Subtle gold line on top */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
              
              <div>
                <div className="w-12 h-12 rounded-sm bg-brand-deep border border-brand-border flex items-center justify-center mb-8 group-hover:border-brand-gold/30 group-hover:text-brand-gold transition-colors text-brand-text-secondary">
                  <service.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-editorial text-xl font-semibold text-brand-text-primary mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-brand-gold uppercase mt-auto group-hover:text-brand-gold-bright transition-colors cursor-pointer">
                Saber más
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
