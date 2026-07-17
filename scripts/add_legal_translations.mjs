import fs from 'fs';
import path from 'path';

function addTranslations(filePath, newTranslationsStr) {
  let content = fs.readFileSync(filePath, 'utf-8');
  // Insert before the last closing brace
  content = content.replace(/\n};?\s*$/, `,\n${newTranslationsStr}\n};`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

const esContent = `
  legal: {
    privacy: "Política de Privacidad",
    cookies: "Política de Cookies",
    terms: "Aviso Legal",
    consent: "He leído y acepto la política de privacidad y el tratamiento de mis datos personales.",
    privacyTitle: "Política de Privacidad",
    cookiesTitle: "Política de Cookies",
    termsTitle: "Aviso Legal"
  }`;

const enContent = `
  legal: {
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    terms: "Legal Notice",
    consent: "I have read and accept the privacy policy and the processing of my personal data.",
    privacyTitle: "Privacy Policy",
    cookiesTitle: "Cookie Policy",
    termsTitle: "Legal Notice"
  }`;

const esPath = path.join('src', 'translations', 'es.ts');
const enPath = path.join('src', 'translations', 'en.ts');

addTranslations(esPath, esContent);
addTranslations(enPath, enContent);
