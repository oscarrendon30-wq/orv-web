import fs from 'fs';
import path from 'path';

const portfolioDir = path.join('src', 'app', 'portfolio');
const dirs = fs.readdirSync(portfolioDir).filter(f => fs.statSync(path.join(portfolioDir, f)).isDirectory());

for (const dir of dirs) {
  const pagePath = path.join(portfolioDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf-8');

    // 1. Update Volver al inicio link
    content = content.replace(/href="\/\#portafolio"/g, 'href="/"');
    content = content.replace(/portfolio\.projectLayout\.back_to_projects/g, 'portfolio.projectLayout.back_to_home');

    // 2. Fix #contacto to /#contacto and add WhatsApp CTA
    // Search for the Link containing href="#contacto" and replace the block
    const contactRegex = /<Link\s*href="\#contacto"[\s\S]*?<\/Link>/g;
    
    content = content.replace(contactRegex, (match) => {
      // Create the new block
      return `<div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center bg-white text-[#0c2446] font-sans font-bold text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-3.5 md:py-4 rounded-full hover:bg-[#00A3FF] hover:text-white transition-colors duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(0,163,255,0.3)] w-full sm:w-auto text-center"
            >
              {t("portfolio.projectLayout.lets_talk_btn")}
            </Link>
            <a
              href="https://wa.me/573004382654"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans font-bold text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-3.5 md:py-4 rounded-full hover:bg-[#128C7E] transition-colors duration-500 shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] w-full sm:w-auto text-center"
            >
              WhatsApp
            </a>
          </div>`;
    });

    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`Updated ${pagePath}`);
  }
}
