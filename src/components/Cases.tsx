"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Cases() {
  const { t } = useLanguage();
  const caseStudies = [
    {
      id: "case-be-good",
      name: "Be Good",
      category: t("cases.items.beGood.category"),
      logo: "/images/portfolio/be-good-logo.jpg",
      image: "/images/portfolio/be-good/be-good-showcase.webp",
      details: [
        {
          title: t("cases.items.beGood.details.0.title"),
          content: <><span translate="no" className="notranslate">Be Good</span> {t("cases.items.beGood.details.0.content").replace("Be Good ", "")}</>,
        },
        {
          title: t("cases.items.beGood.details.1.title"),
          content: t("cases.items.beGood.details.1.content"),
        },
        {
          title: t("cases.items.beGood.details.2.title"),
          content: t("cases.items.beGood.details.2.content"),
        },
        {
          title: t("cases.items.beGood.details.3.title"),
          content: t("cases.items.beGood.details.3.content"),
        },
      ],
      impacts: [t("cases.items.beGood.impacts.0"), t("cases.items.beGood.impacts.1"), t("cases.items.beGood.impacts.2")],
    },
    {
      id: "case-mei",
      name: "MEI Uñas & Spa",
      category: t("cases.items.mei.category"),
      logo: "/images/portfolio/mei-logo.jpg",
      image: "/images/portfolio/mei/mei-portada-caso.webp",
      imagePosition: "object-[20%_center]",
      details: [
        {
          title: t("cases.items.mei.details.0.title"),
          content: t("cases.items.mei.details.0.content"),
        },
        {
          title: t("cases.items.mei.details.1.title"),
          content: t("cases.items.mei.details.1.content"),
        },
        {
          title: t("cases.items.mei.details.2.title"),
          content: t("cases.items.mei.details.2.content"),
        },
        {
          title: t("cases.items.mei.details.3.title"),
          content: t("cases.items.mei.details.3.content"),
        },
      ],
      impacts: [t("cases.items.mei.impacts.0"), t("cases.items.mei.impacts.1"), t("cases.items.mei.impacts.2")],
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
            {t("cases.tagline")}
          </h2>
          <h3 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            {t("cases.title")}
          </h3>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light max-w-2xl">
            {t("cases.subtitle")}
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
                    {t("cases.impactsTagline")}
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
