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

  // Replace <Image with <ZoomableImage ONLY if it's not a brand logo background
  // The backgrounds typically have src="/images/brand/...".
  // Let's use a regex that matches <Image tag up to its src.
  // Actually, we can replace all `<Image` and `</Image>` tags that are inside the hero or blocks, 
  // but a simpler way is to just replace `<Image` with `<ZoomableImage` if the `src` is in `/portfolio/` and not `brand`.
  // Wait, in React/Next, Image tags are usually self-closing `<Image ... />`.
  
  // A safe regex: match <Image followed by anything until src="/images/portfolio/...
  const imageRegex = /<Image([\s\S]*?)src="\/images\/portfolio\/([^"]+)"([\s\S]*?)\/>/g;
  
  content = content.replace(imageRegex, (match, p1, p2, p3) => {
    // p2 is the path after /images/portfolio/, e.g., 'portada.webp'
    return `<ZoomableImage${p1}src="/images/portfolio/${p2}"${p3}/>`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${dir}/page.tsx`);
}
