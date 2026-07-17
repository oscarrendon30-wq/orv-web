"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-[400px] bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(12,36,70,0.3)] border border-[#071B33]/10 z-[100] overflow-hidden"
        >
          <div className="p-5 md:p-6">
            <p className="font-sans text-sm text-[#071B33]/80 leading-relaxed mb-5">
              {t("cookieBanner.message")}
              <Link href="/privacy" className="text-[#00A3FF] hover:underline font-semibold">
                {t("cookieBanner.privacyLink")}
              </Link>
              {t("cookieBanner.and")}
              <Link href="/cookies" className="text-[#00A3FF] hover:underline font-semibold">
                {t("cookieBanner.cookieLink")}
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto flex-1 bg-[#0c2446] text-white font-sans font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-[#00A3FF] transition-colors"
              >
                {t("cookieBanner.accept")}
              </button>
              <button
                onClick={handleReject}
                className="w-full sm:w-auto flex-1 bg-zinc-100 text-[#071B33] font-sans font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-zinc-200 transition-colors"
              >
                {t("cookieBanner.reject")}
              </button>
              <Link
                href="/cookies"
                onClick={() => setIsVisible(false)}
                className="w-full sm:w-auto flex-1 text-center text-[#071B33]/60 hover:text-[#0c2446] font-sans font-bold text-xs uppercase tracking-wider px-2 py-3 transition-colors"
              >
                {t("cookieBanner.manage")}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
