"use client";

import { motion } from "framer-motion";
import SectionSeparator from "@/components/ui/SectionSeparator";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const steps = [
    {
      num: "01",
      name: t("process.steps.step1.name"),
      desc: t("process.steps.step1.desc"),
    },
    {
      num: "02",
      name: t("process.steps.step2.name"),
      desc: t("process.steps.step2.desc"),
    },
    {
      num: "03",
      name: t("process.steps.step3.name"),
      desc: t("process.steps.step3.desc"),
    },
    {
      num: "04",
      name: t("process.steps.step4.name"),
      desc: t("process.steps.step4.desc"),
    },
    {
      num: "05",
      name: t("process.steps.step5.name"),
      desc: t("process.steps.step5.desc"),
    },
  ];

  return (
    <section id="proceso" className="scroll-mt-28 pt-16 md:pt-24 pb-16 md:pb-24 bg-gradient-to-b from-[#071B33] to-[#050B14] relative">
      <SectionSeparator className="absolute top-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00A3FF] mb-4">
            {t("process.tagline")}
          </h2>
          <p className="font-sans text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            {t("process.title")}
          </p>
          <p className="font-sans text-zinc-400 text-base md:text-lg leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 relative">
          {/* Horizontal connection line on desktop */}
          <div className="absolute top-8 left-0 right-0 h-[1px] bg-white/10 hidden md:block z-0 pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col relative z-10 group"
            >
              {/* Step indicator */}
              <div className="w-16 h-16 rounded-[16px] bg-[#0c2446] border border-white/5 flex items-center justify-center mb-6 group-hover:border-[#00A3FF]/40 group-hover:bg-[#0c2446]/80 group-hover:shadow-[0_10px_30px_-10px_rgba(0,163,255,0.2)] transition-all duration-500">
                <span className="font-sans text-xl font-bold text-[#00A3FF] transition-colors">
                  {step.num}
                </span>
              </div>

              {/* Step Details */}
              <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#00A3FF] transition-colors duration-300">
                {step.name}
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Separador de Cierre */}
      <SectionSeparator className="absolute bottom-0 rotate-180" />
    </section>
  );
}
