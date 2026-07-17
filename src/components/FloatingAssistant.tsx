"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MessageCircle, ChevronRight, Briefcase, Paintbrush, Monitor, LayoutTemplate, Package, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { trackClickWhatsApp } from "@/utils/analytics";

export default function FloatingAssistant() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showMobileHelper, setShowMobileHelper] = useState(true);
  const phoneNumber = "573004382654";

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setShowMobileHelper(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const togglePanel = () => setIsOpen(!isOpen);
  const closePanel = () => setIsOpen(false);

  const getWaLink = (message: string) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const options = [
    {
      label: t("assistant.options.0.label"),
      icon: Paintbrush,
      message: t("assistant.options.0.message")
    },
    {
      label: t("assistant.options.1.label"),
      icon: LayoutTemplate,
      message: t("assistant.options.1.message")
    },
    {
      label: t("assistant.options.2.label"),
      icon: Monitor,
      message: t("assistant.options.2.message")
    },
    {
      label: t("assistant.options.3.label"),
      icon: Briefcase,
      message: t("assistant.options.3.message")
    },
    {
      label: t("assistant.options.4.label"),
      icon: Package,
      message: t("assistant.options.4.message")
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end">
      {/* Floating Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 w-[calc(100vw-48px)] md:w-[340px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(12,36,70,0.3)] border border-[#071B33]/5 overflow-hidden flex flex-col origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-[#0c2446] p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3FF] opacity-10 blur-[40px] rounded-full pointer-events-none" />
              
              <button 
                onClick={closePanel}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1"
                aria-label={t("assistant.ariaClose")}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-lg shrink-0">
                   <Image 
                     src="/images/home/oscar-avatar-assistant.png" 
                     alt={t("assistant.altAvatar")} 
                     fill 
                     className="object-cover object-[center_top] scale-[1.65] translate-y-[15%]" 
                   />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-white text-lg tracking-tight leading-none mb-1.5">
                    {t("assistant.greeting")}
                  </h3>
                  <p className="font-sans text-[#00A3FF] text-[11px] font-bold uppercase tracking-[0.15em] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> {t("assistant.role")}
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Options */}
            <div className="p-5">
              <p className="font-sans text-[#071B33]/80 text-sm leading-relaxed mb-5 font-light">
                {t("assistant.prompt")}
              </p>
              
              <div className="flex flex-col gap-2">
                {options.map((opt, idx) => {
                  const Icon = opt.icon;
                  return (
                    <Link
                      key={idx}
                      href={getWaLink(opt.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-[#071B33]/5"
                      onClick={() => {
                        closePanel();
                        trackClickWhatsApp("Floating Assistant - " + opt.label);
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#EAF1F8] text-[#00A3FF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00A3FF] group-hover:text-white transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-sans text-[#0c2446] text-[13px] font-medium flex-1">
                        {opt.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#071B33]/20 group-hover:text-[#00A3FF] group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* General WA Link Footer */}
            <div className="p-4 bg-[#F8FAFC] border-t border-[#071B33]/5">
              <Link
                href={getWaLink(t("assistant.directMessage"))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  closePanel();
                  trackClickWhatsApp("Floating Assistant - Direct Message");
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0c2446] hover:bg-[#00A3FF] text-white font-sans text-xs font-bold uppercase tracking-[0.1em] py-3.5 rounded-full transition-colors shadow-lg hover:shadow-[#00A3FF]/30"
              >
                <MessageCircle className="w-4 h-4" />
                {t("assistant.directButton")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Avatar Trigger */}
      <div className="relative group">
        {/* Helper Bubble (Desktop only) */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.5 }}
              className={`absolute right-full top-1/2 -translate-y-1/2 mr-3 md:mr-4 items-center md:flex ${showMobileHelper ? 'flex' : 'hidden'}`}
            >
              <div className="bg-white text-[#0c2446] font-sans text-[11px] md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-[14px] md:rounded-2xl shadow-[0_10px_25px_-5px_rgba(12,36,70,0.15)] whitespace-nowrap border border-[#071B33]/5 pointer-events-none relative">
                {t("assistant.helperText")}
                {/* Tail arrow */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-[#071B33]/5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={togglePanel}
          aria-label={t("assistant.ariaOpen")}
          className="relative flex items-center justify-center w-11 h-11 md:w-16 md:h-16 bg-white rounded-full shadow-[0_15px_30px_-10px_rgba(12,36,70,0.4)] border-[2.5px] md:border-[3px] border-white overflow-hidden hover:scale-105 transition-transform duration-300 z-10"
        >
          {isOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6 text-[#0c2446]" />
          ) : (
            <Image 
              src="/images/home/oscar-avatar-assistant.png" 
              alt={t("assistant.altAvatar")} 
              fill 
              className="object-cover object-[center_top] scale-[1.65] translate-y-[15%]" 
            />
          )}
        </button>
        {/* Subtle glow behind button */}
        {!isOpen && (
           <div className="absolute inset-0 bg-[#00A3FF] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
        )}
      </div>
    </div>
  );
}
