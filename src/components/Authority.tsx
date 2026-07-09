"use client";

import { motion } from "framer-motion";
import { Award, Globe, MapPin, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionSeparator from "@/components/ui/SectionSeparator";

export default function Authority() {
  const { t } = useLanguage();
  const stats = [
    {
      value: t("authority.stats.0.value"),
      label: t("authority.stats.0.label"),
      description: t("authority.stats.0.description"),
      icon: Award,
    },
    {
      value: t("authority.stats.1.value"),
      label: t("authority.stats.1.label"),
      description: t("authority.stats.1.description"),
      icon: Globe,
    },
    {
      value: t("authority.stats.2.value"),
      label: t("authority.stats.2.label"),
      description: t("authority.stats.2.description"),
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#050B14] to-[#071B33] relative overflow-hidden">
      <SectionSeparator className="absolute top-0" />
      
      {/* BRAND GRAPHIC SYSTEM - AUTHORITY (Discreet) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Core Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="authority-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#authority-grid)" />
          </svg>
        </div>

        {/* ORV Watermark - Subtle Background Graphic */}
        <div className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 select-none opacity-[0.02] text-white font-sans font-bold tracking-tighter" style={{ fontSize: '30vw', lineHeight: 0.8 }}>
          ORV
        </div>

        {/* Abstract Geometry (Echo of the Hero) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="85%" cy="30%" r="450" stroke="#00A3FF" strokeWidth="1" fill="none" opacity="0.3" />
          <circle cx="85%" cy="30%" r="280" stroke="#00A3FF" strokeWidth="1" fill="none" strokeDasharray="4 8" opacity="0.5" />
          <circle cx="5%" cy="80%" r="350" stroke="#00A3FF" strokeWidth="0.5" fill="none" opacity="0.2" />
        </svg>

        {/* Subtle Glows */}
        <div className="absolute right-[10%] top-[20%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-[#00A3FF] opacity-[0.04] blur-[100px]" />
      </div>

      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-white/5 hidden lg:block" />
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Statement */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#00A3FF] uppercase mb-4">
              {t("authority.tagline")}
            </h2>
            <p className="font-sans text-3xl md:text-4xl lg:text-[42px] text-white font-bold leading-[1.15] tracking-tight mb-8">
              {t("authority.title")}
            </p>
            <p className="text-zinc-300 text-base md:text-[17px] leading-relaxed mb-10 max-w-xl font-light">
              {t("authority.subtitle")}
            </p>
            <div className="inline-flex items-center gap-3 text-zinc-400 text-[13px] sm:text-[14px] border-t border-white/10 pt-8 mt-2">
              <MapPin className="w-4 h-4 text-[#00A3FF]" />
              <span className="font-medium">{t("authority.location")}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 xl:gap-8 -mt-2 md:-mt-6 lg:-mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-7 lg:p-8 rounded-[20px] ring-1 ring-zinc-100 flex flex-col justify-between group hover:ring-[#00A3FF]/20 hover:-translate-y-2 transition-all duration-500 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)]"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50/60 to-white ring-1 ring-[#00A3FF]/15 flex items-center justify-center mb-7 shadow-sm group-hover:from-blue-50 group-hover:to-blue-100/30 group-hover:ring-[#00A3FF]/30 transition-all duration-500">
                    <stat.icon className="w-6 h-6 text-[#00A3FF] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-sans text-4xl lg:text-[36px] xl:text-[40px] font-bold text-[#050B14] mb-3 tracking-tight group-hover:text-[#00A3FF] transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <h4 className="text-[11px] sm:text-[12px] font-bold tracking-[0.15em] text-[#00A3FF] uppercase mb-4">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-[13px] md:text-sm text-zinc-500 leading-relaxed mt-2 font-medium">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
