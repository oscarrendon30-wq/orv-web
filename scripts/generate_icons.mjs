import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImg = path.join(process.cwd(), 'public/orv-favicon.png');
const appDir = path.join(process.cwd(), 'src/app');

async function generate() {
  try {
    if (!fs.existsSync(sourceImg)) {
      console.error('Source image not found at', sourceImg);
      return;
    }

    // icon.png (default Next.js App Router icon)
    await sharp(sourceImg)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(path.join(appDir, 'icon.png'));
    console.log('Created icon.png (512x512)');

    // apple-icon.png
    await sharp(sourceImg)
      .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(path.join(appDir, 'apple-icon.png'));
    console.log('Created apple-icon.png (180x180)');

    // favicon.ico (Next.js can also serve this directly)
    // Note: To create .ico files in Sharp without a special plugin, we actually output a PNG, 
    // but name it .ico (browsers and Next.js can handle PNG-based .ico, or standard PNG 32x32)
    // However, since it's Next.js, we can also just use the icon.png and omit favicon.ico, 
    // but the user requested favicon.ico. I will create a 32x32 PNG renamed to .ico
    await sharp(sourceImg)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFormat('png')
      .toFile(path.join(appDir, 'favicon.ico'));
    console.log('Created favicon.ico (32x32 png based)');

    console.log('All icons generated successfully!');
  } catch (err) {
    console.error('Error generating icons:', err);
  }
}

generate();
