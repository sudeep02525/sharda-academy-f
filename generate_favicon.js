const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

const logoUrl = 'https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png';
const publicDir = 'c:\\Sharda_academy\\sharda-academy-f\\public';
const logoPath = path.join(publicDir, 'source-logo.png');

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) return reject(new Error('Failed to fetch'));
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function processFavicon() {
  console.log('Downloading logo...');
  await download(logoUrl, logoPath);
  
  console.log('Processing with sharp...');
  
  // 1. First get the original trimmed buffer
  let trimmedBuffer = await sharp(logoPath).trim().toBuffer();
  
  // 2. Get its metadata
  const metadata = await sharp(trimmedBuffer).metadata();
  console.log(`Trimmed size: ${metadata.width}x${metadata.height}`);
  
  let size = Math.min(metadata.width, metadata.height);
  let extractRegion = {
    left: 0,
    top: 0,
    width: size,
    height: size
  };
  
  // 3. Extract the leftmost square (which usually holds the brand icon in horizontal logos)
  // If it's already square or vertical, this will just take the top/left square
  const iconBuffer = await sharp(trimmedBuffer)
    .extract(extractRegion)
    .toBuffer();

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  console.log('Generating PNG favicons...');
  for (const s of sizes) {
    await sharp(iconBuffer)
      .resize(s.size, s.size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(publicDir, s.name));
    console.log(`Created ${s.name}`);
  }

  console.log('Generating favicon.ico...');
  const icoBuffer = await pngToIco([
    path.join(publicDir, 'favicon-16x16.png'),
    path.join(publicDir, 'favicon-32x32.png')
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Created favicon.ico');

  // Clean up
  fs.unlinkSync(logoPath);
  fs.unlinkSync(path.join(__dirname, 'generate_favicon.js'));
  console.log('Done!');
}

processFavicon().catch(console.error);
