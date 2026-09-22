"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import SectionSeparator from "@/components/ui/SectionSeparator";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const specialties = [
    t("about.specialties.0"),
    t("about.specialties.1"),
    t("about.specialties.2"),
    t("about.specialties.3"),
    t("about.specialties.4"),
    t("about.specialties.5"),
  ];

  return (
    <section id="sobre-mi" className="scroll-mt-28 py-24 md:py-32 bg-gradient-to-b from-[#050B14] to-[#071B33] relative">
      <SectionSeparator className="absolute top-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Logo Brand Sello Side */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-square bg-[#F8FAFC] p-10 rounded-[32px] shadow-[0_20px_50px_-10px_rgba(0,163,255,0.1)] border-[1.5px] border-[#0c2446]/10 flex flex-col items-center justify-center group hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,163,255,0.2)] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#00A3FF] opacity-[0.03] blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              
              <Image
                src="/images/brand/logo-stacked.webp"
                alt="Oscar Rendón Visual Sello"
                width={280}
                height={280}
                className="object-contain relative z-10 mix-blend-multiply"
              />
              
              <div className="absolute bottom-6 text-center z-10">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#0c2446]/80">
                  {t("about.location")}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Details Side */}
          <div className="lg:col-span-7">
            <h2 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-4">
              {t("about.tagline")}
            </h2>
            <h3 className="font-sans text-4xl sm:text-5xl font-bold text-white leading-tight mb-8 tracking-tight">
              {t("about.name")}
            </h3>
            
            <div className="space-y-6 font-sans text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
              <p>
                {t("about.p1_1")}{" "}
                <strong className="text-white font-bold">{t("about.p1_bold1")}</strong>
                {t("about.p1_2")}{" "}
                <strong className="text-white font-bold">{t("about.p1_bold2")}</strong>
                {t("about.p1_3")}
              </p>
              <p>
                {t("about.p2")}
              </p>
              <p>
                {t("about.p3_1")}{" "}
                <strong className="text-white font-bold">{t("about.p3_bold")}</strong>
                {t("about.p3_2")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A3FF]/70 mb-5">
                {t("about.specialtiesTagline")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialties.map((spec) => (
                  <div key={spec} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-[#00A3FF]" />
                    </div>
                    <span className="font-sans text-sm text-zinc-400 leading-relaxed">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Separador de Cierre */}
      <SectionSeparator className="absolute bottom-0 rotate-180" />
    </section>
  );
}
