"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, MapPin, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/573004382654?text=Hola%20Oscar%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20de%20dise%C3%B1o%20gr%C3%A1fico.";

  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] lg:min-h-[calc(100vh-80px)] flex flex-col justify-end lg:justify-center overflow-hidden bg-[#0c2446]"
    >
      {/* BRAND GRAPHIC SYSTEM & CINEMATIC BLEED */}
      <div className="absolute inset-0 z-0">
        {/* Core Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051124] via-[#091b35] to-[#0c2446]" />
        
        {/* Abstract Geometry (Curved vectors and structural lines) */}
        <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5%" cy="80%" r="350" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.2" />
          <line x1="28%" y1="0" x2="28%" y2="100%" stroke="#00A3FF" strokeWidth="1" opacity="0.15" />
          <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#00A3FF" strokeWidth="1" strokeDasharray="2 4" opacity="0.25" />
        </svg>

        {/* Photographic Bleed (Sangrado a la derecha) */}
        <div className="absolute top-0 right-0 w-full h-[60vh] lg:h-full lg:w-[65vw] z-10 translate-y-8 lg:translate-y-12">
          <Image
            src="/images/home/hero-oscar-rendon-home.webp"
            alt="Oscar Rendón - Diseñador Gráfico Senior"
            fill
            sizes="(max-w-1024px) 100vw, 65vw"
            priority
            className="object-cover object-[center_top] lg:object-[right_top] [mask-image:linear-gradient(to_top,transparent_0%,black_30%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_35%)]"
          />
        </div>
        
        {/* Optional Gradient Overlay for guaranteed text legibility (fades from left) */}
        <div className="absolute top-0 left-0 w-full h-full lg:w-[50vw] bg-gradient-to-t lg:bg-gradient-to-r from-[#051124] via-[#091b35]/90 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Main Container Container (Text Content) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center pt-[55vh] pb-12 lg:pt-12 lg:pb-0 pointer-events-none">
        
        {/* LEFT COLUMN: Text and branding */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center text-left pointer-events-auto lg:pr-8">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00A3FF] text-xs font-bold uppercase tracking-[0.25em] mb-5"
          >
            Oscar Rendón Visual
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl md:text-[42px] xl:text-[50px] font-bold leading-[1.15] tracking-tight mb-10 max-w-[500px]"
          >
            Diseño gráfico senior<br className="hidden lg:block" /> para marcas que necesitan<br className="hidden lg:block" /> <span className="text-[#00A3FF]">presencia visual profesional.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-300 text-base md:text-lg leading-[1.8] max-w-[500px] mb-12 font-normal"
          >
            30 años creando identidad, piezas editoriales, branding, redes, presentaciones y soluciones visuales para empresas, medios y emprendedores.
          </motion.p>

          {/* Authority Line (Horizontal Badges) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-y-3 gap-x-5 text-zinc-300 text-[13px] xl:text-sm font-medium border-t border-white/10 pt-8 mb-12"
          >
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#00A3FF]" />
              <span>Diseñador gráfico senior</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#00A3FF]" />
              <span>Pereira, Colombia</span>
            </div>
            <span className="text-white/20 hidden xl:inline">|</span>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#00A3FF]" />
              <span>30 años de experiencia</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-brand-royal text-white font-bold text-[15px] hover:bg-[#00A3FF] transition-all duration-300 shadow-lg hover:shadow-brand-royal/20 group uppercase tracking-wide"
            >
              {/* WhatsApp Icon */}
              <svg
                className="w-5 h-5 fill-current text-white transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.638 1.982 14.19 1.94 11.97 1.94c-5.438 0-9.863 4.373-9.868 9.802-.001 1.77.463 3.5 1.34 5.016l-.997 3.634 3.737-.968zm11.388-7.75c-.247-.124-1.461-.72-1.685-.8-.225-.081-.388-.124-.55.125-.162.249-.625.8-.767.962-.14.161-.281.18-.528.057-.247-.125-1.044-.385-1.988-1.229-.735-.656-1.232-1.47-1.378-1.72-.146-.249-.015-.384.109-.507.112-.111.247-.29.37-.435.125-.145.166-.248.248-.415.083-.166.042-.311-.02-.435-.062-.125-.55-1.326-.75-1.81-.197-.474-.396-.411-.55-.419-.143-.008-.307-.01-.472-.01-.166 0-.436.062-.664.311-.228.249-.873.851-.873 2.075 0 1.224.891 2.406.99 2.571.1.166 1.752 2.674 4.244 3.75.593.256 1.056.409 1.417.524.597.19 1.14.163 1.57.099.479-.071 1.462-.597 1.666-1.173.204-.576.204-1.07.142-1.173-.061-.102-.224-.165-.471-.29z" />
              </svg>
              Hablemos por WhatsApp
            </a>
            <a
              href="#portafolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/30 text-white font-bold text-[15px] hover:bg-white/5 hover:border-white transition-all duration-300 group uppercase tracking-wide"
            >
              Ver portafolio
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
