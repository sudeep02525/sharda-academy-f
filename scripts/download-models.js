const fs = require('fs');
const path = require('path');
const https = require('https');

const MODELS = [
  { name: 'laptop', url: 'https://vazxmixjirvzicqfhdjz.supabase.co/storage/v1/object/public/models/macbook/model.gltf' },
  { name: 'book', url: 'https://vazxmixjirvzicqfhdjz.supabase.co/storage/v1/object/public/models/book/model.gltf' },
  { name: 'globe', url: 'https://vazxmixjirvzicqfhdjz.supabase.co/storage/v1/object/public/models/earth/model.gltf' },
  { name: 'trophy', url: 'https://vazxmixjirvzicqfhdjz.supabase.co/storage/v1/object/public/models/trophy/model.gltf' }
];

const TARGET_DIR = path.join(__dirname, '../public/models');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
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

async function downloadModel(model) {
  const modelDir = path.join(TARGET_DIR, model.name);
  if (!fs.existsSync(modelDir)) {
    fs.mkdirSync(modelDir, { recursive: true });
  }

  const gltfDest = path.join(modelDir, 'model.gltf');
  console.log(`Downloading ${model.name} GLTF...`);
  
  try {
    await downloadFile(model.url, gltfDest);
    
    // Parse GLTF to find buffers and images
    const gltfData = JSON.parse(fs.readFileSync(gltfDest, 'utf8'));
    const baseUrl = model.url.substring(0, model.url.lastIndexOf('/') + 1);

    const downloads = [];

    if (gltfData.buffers) {
      for (const buffer of gltfData.buffers) {
        if (buffer.uri && !buffer.uri.startsWith('data:')) {
          const bufferUrl = baseUrl + buffer.uri;
          const bufferDest = path.join(modelDir, buffer.uri);
          console.log(`Downloading buffer: ${buffer.uri}`);
          downloads.push(downloadFile(bufferUrl, bufferDest));
        }
      }
    }

    if (gltfData.images) {
      for (const image of gltfData.images) {
        if (image.uri && !image.uri.startsWith('data:')) {
          const imgUrl = baseUrl + image.uri;
          const imgDest = path.join(modelDir, image.uri);
          console.log(`Downloading image: ${image.uri}`);
          downloads.push(downloadFile(imgUrl, imgDest));
        }
      }
    }

    await Promise.all(downloads);
    console.log(`Successfully downloaded ${model.name}`);
  } catch (err) {
    console.error(`Error downloading ${model.name}:`, err.message);
  }
}

async function main() {
  for (const model of MODELS) {
    await downloadModel(model);
  }
}

main();
