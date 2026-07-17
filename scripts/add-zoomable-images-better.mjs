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

  // Ensure ZoomableImage is imported
  if (!content.includes('ZoomableImage')) {
    content = content.replace(
      /import Image from "next\/image";/,
      `import Image from "next/image";\nimport ZoomableImage from "@/components/ui/ZoomableImage";`
    );
  }

  // Replace ALL <Image with <ZoomableImage
  content = content.replace(/<Image/g, '<ZoomableImage');
  content = content.replace(/<\/Image>/g, '</ZoomableImage>');

  // Now revert <ZoomableImage back to <Image IF it contains src="/images/brand/"
  // Since we replaced all of them, the ones with src="/images/brand/" look like:
  // <ZoomableImage\n            src="/images/brand/...
  
  // A safe regex that matches <ZoomableImage and everything until src="/images/brand/" WITHOUT matching another <ZoomableImage
  // We can use [^<]*? to ensure we don't jump tags.
  content = content.replace(/<ZoomableImage([^<]*?)src="\/images\/brand\//g, '<Image$1src="/images/brand/');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${dir}/page.tsx`);
}
