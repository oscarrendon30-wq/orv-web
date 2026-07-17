const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/app/portfolio');
const dirs = fs.readdirSync(baseDir);

const oldClass = 'className="text-[#00A3FF] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-6"';
const newClass = 'className="inline-block text-[#00A3FF] bg-[#061B33]/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-4 py-1.5 md:px-0 md:py-0 rounded-full font-sans text-[10.5px] md:text-xs font-bold uppercase tracking-[0.25em] mb-6 border border-white/10 md:border-transparent shadow-lg md:shadow-none"';

for (const dir of dirs) {
  const pagePath = path.join(baseDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    if (content.includes(oldClass)) {
        content = content.replace(oldClass, newClass);
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Updated eyebrow in ${pagePath}`);
    } else {
        console.log(`Could not find oldClass in ${pagePath}`);
    }
  }
}
