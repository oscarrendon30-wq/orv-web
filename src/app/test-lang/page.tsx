"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TestLang() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div style={{ padding: 100, color: 'white' }}>
      <h1>TEST LANG PAGE</h1>
      <p>Current Language: {language}</p>
      <p>Translation: {t("header.inicio")}</p>
      <button style={{ padding: 10, background: 'blue', marginRight: 10 }} onClick={() => setLanguage("es")}>SET ES</button>
      <button style={{ padding: 10, background: 'red' }} onClick={() => setLanguage("en")}>SET EN</button>
    </div>
  );
}
