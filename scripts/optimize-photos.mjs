import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = String.raw`C:\Users\hersh\Proton Drive\grlopez90\My files\Roberto & Yalaniz - Boda - Denilson Palacios`;
const OUTPUT_DIR = path.resolve('public/gallery');
const MAX_WIDTH = 1600;
const THUMB_WIDTH = 400;
const QUALITY = 80;

// Get all image files, sorted alphabetically
const files = fs.readdirSync(SOURCE_DIR)
  .filter(f => /\.(jpe?g|png)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

console.log(`Found ${files.length} photos. Optimizing...`);

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const num = String(i + 1).padStart(3, '0');
  const srcPath = path.join(SOURCE_DIR, file);

  try {
    // Full-size optimized
    await sharp(srcPath)
      .resize(MAX_WIDTH, undefined, { withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(path.join(OUTPUT_DIR, `${num}.webp`));

    // Thumbnail
    await sharp(srcPath)
      .resize(THUMB_WIDTH, undefined, { withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(path.join(OUTPUT_DIR, `${num}-thumb.webp`));

    const pct = Math.round((i + 1) / files.length * 100);
    process.stdout.write(`\r${pct}% (${i + 1}/${files.length})`);
  } catch (err) {
    console.error(`\nError on ${file}:`, err.message);
  }
}

console.log(`\nDone! ${files.length} photos optimized to ${OUTPUT_DIR}`);
