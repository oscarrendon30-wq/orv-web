import fs from 'fs';
import path from 'path';

const portfolioDirs = [
  'ancla-salud',
  'be-good',
  'computienda',
  'dental-techniques',
  'editorial',
  'mei',
  'monreve'
];

const basePath = path.join(process.cwd(), 'src/app/portfolio');

for (const dir of portfolioDirs) {
  const filePath = path.join(basePath, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Change all <ZoomableImage back to <Image
  content = content.replace(/<ZoomableImage/g, '<Image');

  // We can also remove the ZoomableImage import for a clean slate
  content = content.replace(/import ZoomableImage from "@\/components\/ui\/ZoomableImage";\n/g, '');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Reverted ${dir}/page.tsx`);
}
