"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PROJECTS_ORDER = [
  "be-good",
  "monreve",
  "mei",
  "editorial",
  "dental-techniques",
  "ancla-salud",
  "computienda"
];

interface ProjectNavigationProps {
  currentProject: string;
}

export default function ProjectNavigation({ currentProject }: ProjectNavigationProps) {
  const { t } = useLanguage();
  
  const currentIndex = PROJECTS_ORDER.indexOf(currentProject);
  const nextIndex = currentIndex === -1 || currentIndex === PROJECTS_ORDER.length - 1 ? 0 : currentIndex + 1;
  const nextProject = PROJECTS_ORDER[nextIndex];

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
      <Link
        href="/#portafolio"
        className="inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors font-sans text-xs font-bold tracking-[0.2em] uppercase group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        {t("portfolio.nav.back_to_portfolio") || "Volver al portafolio"}
      </Link>
      
      <Link
        href={`/portfolio/${nextProject}`}
        className="inline-flex items-center gap-3 text-white/50 hover:text-[#00A3FF] transition-colors font-sans text-xs font-bold tracking-[0.2em] uppercase group"
      >
        {t("portfolio.nav.next_project") || "Siguiente proyecto"}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
