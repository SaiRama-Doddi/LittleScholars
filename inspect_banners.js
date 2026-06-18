import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const banners = ['banner1.webp', 'banner2.webp', 'banner3.webp', 'about_school.webp'];

async function inspect() {
  for (const banner of banners) {
    const filePath = path.join(assetsDir, banner);
    if (fs.existsSync(filePath)) {
      const metadata = await sharp(filePath).metadata();
      const stats = fs.statSync(filePath);
      console.log(`${banner}:`);
      console.log(`  Size: ${(stats.size / 1024).toFixed(2)} KB`);
      console.log(`  Dimensions: ${metadata.width}x${metadata.height}`);
      console.log(`  Format: ${metadata.format}`);
    } else {
      console.log(`${banner} does not exist at ${filePath}`);
    }
  }
}

inspect().catch(err => console.error(err));
