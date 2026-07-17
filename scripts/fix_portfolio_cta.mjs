import fs from 'fs';
import path from 'path';

const portfolioDir = path.join(process.cwd(), 'src/app/portfolio');
const projects = ['ancla-salud', 'be-good', 'computienda', 'dental-techniques', 'editorial', 'mei', 'monreve'];

const originalCTA = `<Link
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
            </a>`;

const newCTA = `<a
              href="https://wa.me/573004382654"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#0c2446] font-sans font-bold text-sm uppercase tracking-[0.15em] px-8 md:px-10 py-3.5 md:py-4 rounded-full hover:bg-[#00A3FF] hover:text-white transition-colors duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(0,163,255,0.3)] w-full sm:w-auto text-center"
            >
              {t("portfolio.projectLayout.lets_talk_btn")}
            </a>`;

for (const project of projects) {
  const filePath = path.join(portfolioDir, project, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Normalize line endings and whitespace to match reliably
    const normalizedContent = content.replace(/\r\n/g, '\n');
    const normalizedOriginal = originalCTA.replace(/\r\n/g, '\n');
    
    // The exact indentation might differ, let's use a regex
    const regex = /<Link\s+href="\/#contacto"\s+className="inline-flex items-center justify-center bg-white text-\[#0c2446\] font-sans font-bold text-sm uppercase tracking-\[0\.15em\] px-8 md:px-10 py-3\.5 md:py-4 rounded-full hover:bg-\[#00A3FF\] hover:text-white transition-colors duration-500 shadow-\[0_10px_30px_rgba\(255,255,255,0\.1\)\] hover:shadow-\[0_10px_30px_rgba\(0,163,255,0\.3\)\] w-full sm:w-auto text-center"\s*>\s*\{t\("portfolio\.projectLayout\.lets_talk_btn"\)\}\s*<\/Link>\s*<a\s+href="https:\/\/wa\.me\/573004382654"\s+target="_blank"\s+rel="noopener noreferrer"\s+className="inline-flex items-center justify-center bg-\[#25D366\] text-white font-sans font-bold text-sm uppercase tracking-\[0\.15em\] px-8 md:px-10 py-3\.5 md:py-4 rounded-full hover:bg-\[#128C7E\] transition-colors duration-500 shadow-\[0_10px_30px_rgba\(37,211,102,0\.2\)\] hover:shadow-\[0_10px_30px_rgba\(37,211,102,0\.4\)\] w-full sm:w-auto text-center"\s*>\s*WhatsApp\s*<\/a>/g;
    
    if (regex.test(normalizedContent)) {
      content = normalizedContent.replace(regex, newCTA);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${project}`);
    } else {
      console.log(`Could not match regex in ${project}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
}
