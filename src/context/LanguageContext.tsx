"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { es } from "@/translations/es";
import { en } from "@/translations/en";

export type Language = "es" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("orv_lang") as Language;
    if (savedLang === "es" || savedLang === "en") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("orv_lang", lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  // Helper to get nested properties by string path (e.g. "hero.title")
  const getNestedTranslation = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  const t = (key: string): string => {
    const translations = language === "es" ? es : en;
    const value = getNestedTranslation(translations, key);
    
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    return value;
  };

  // Prevent hydration mismatch by keeping it simple or hiding until mounted if critical.
  // We'll render children normally and accept potential hydration mismatch warnings in dev
  // to preserve SEO and fast first paint for the default Spanish version.

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
