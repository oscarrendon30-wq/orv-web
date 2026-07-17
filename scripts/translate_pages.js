const fs = require('fs');
const path = require('path');

const files = [
  'mei/page.tsx',
  'dental-techniques/page.tsx',
  'ancla-salud/page.tsx',
  'computienda/page.tsx'
];

const basePath = 'E:/Oscar Rendon Visual/orv-web/src/app/portfolio';

for (const file of files) {
  const filePath = path.join(basePath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add use client and useLanguage
  if (!content.includes('"use client";')) {
    content = `"use client";\n\n` + content;
  }
  if (!content.includes('import { useLanguage }')) {
    content = content.replace('export default function', 'import { useLanguage } from "@/context/LanguageContext";\n\nexport default function');
  }

  // 2. Add hook call
  if (!content.includes('const { t, language, setLanguage } = useLanguage();')) {
    content = content.replace(/export default function \w+\(\) {\n/, match => match + `  const { t, language, setLanguage } = useLanguage();\n\n`);
  }

  // 3. Header replacements
  content = content.replace(
    /Volver al portafolio\s*<\/Link>\s*<div className="flex items-center gap-4 opacity-100">\s*<div className="w-8 h-\[1px\] bg-\[#071B33\]\/20 hidden md:block" \/>\s*<span className="font-sans text-\[#071B33\] text-\[10px\] md:text-xs tracking-\[0\.2em\] uppercase font-bold flex items-center gap-3">\s*Oscar Rendón Visual <span className="text-\[#071B33\]\/20">\/<\/span> <span className="text-\[#071B33\] bg-\[#EAF1F8\] px-3 py-1\.5 rounded-full">Proyecto<\/span>\s*<\/span>\s*<\/div>/,
    `{t("portfolio.projectLayout.back_to_projects")}
          </Link>
          <div className="flex flex-wrap items-center gap-4 opacity-100">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 mr-2 md:mr-6">
              <button
                onClick={() => setLanguage("es")}
                className={\`font-sans text-[10px] md:text-xs font-bold tracking-widest transition-colors \${language === "es" ? "text-[#00A3FF]" : "text-[#071B33]/40 hover:text-[#071B33]"}\`}
              >
                ES
              </button>
              <span className="text-[#071B33]/20 text-[10px] md:text-xs">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={\`font-sans text-[10px] md:text-xs font-bold tracking-widest transition-colors \${language === "en" ? "text-[#00A3FF]" : "text-[#071B33]/40 hover:text-[#071B33]"}\`}
              >
                EN
              </button>
            </div>
            <div className="w-8 h-[1px] bg-[#071B33]/20 hidden md:block" />
            <span className="font-sans text-[#071B33] text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-3">
              Oscar Rendón Visual <span className="text-[#071B33]/20">/</span> <span className="text-[#071B33] bg-[#EAF1F8] px-3 py-1.5 rounded-full">{t("portfolio.projectLayout.project")}</span>
            </span>
          </div>`
  );

  // 4. Other translations
  content = content.replace(/Desarrollado por <br \/>/g, '{t("portfolio.projectLayout.developed_by")} <br />');
  content = content.replace(/Ficha [Tt]écnica/g, '{t("portfolio.projectLayout.technical_sheet")}');
  content = content.replace(/Resumen del proyecto/g, '{t("portfolio.projectLayout.project_summary")}');
  content = content.replace(/El Resultado/g, '{t("portfolio.projectLayout.the_result")}');
  content = content.replace(/Resultado del proyecto/g, '{t("portfolio.projectLayout.project_result")}');
  content = content.replace(/¿Tienes un proyecto similar\?/g, '{t("portfolio.projectLayout.similar_project")}');
  content = content.replace(/Hablemos y construyamos juntos una presencia visual que eleve tu marca\./g, '{t("portfolio.projectLayout.lets_talk_desc")}');
  content = content.replace(/>\s*Hablemos de tu marca\s*<\/Link>/g, '>\n            {t("portfolio.projectLayout.lets_talk_btn")}\n          </Link>');

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('done');
