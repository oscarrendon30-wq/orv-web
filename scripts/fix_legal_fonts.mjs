import fs from 'fs';
import path from 'path';

const pages = [
  'src/app/privacy/page.tsx',
  'src/app/cookies/page.tsx',
  'src/app/terms/page.tsx'
];

for (const page of pages) {
  const filePath = path.join(process.cwd(), page);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace h1 font-serif
    content = content.replace(
      /className="font-serif (text-4xl md:text-5xl lg:text-6xl) text-white mb-8"/g,
      'className="font-sans $1 font-bold text-white mb-8 tracking-tight"'
    );
    
    content = content.replace(
      /className="text-xl font-bold text-white mb-4"/g,
      'className="font-sans text-xl md:text-2xl font-bold text-white mb-4 tracking-tight"'
    );

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed fonts in ${page}`);
  } else {
    console.log(`File not found: ${page}`);
  }
}
