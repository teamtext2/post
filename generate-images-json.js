const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'post/images');
const OUTPUT_FILE = path.join(__dirname, 'images.json');

fs.readdir(IMAGES_DIR, (err, files) => {
  if (err) throw err;
  const images = files.filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(images, null, 2));
  console.log('Generated images.json:', images);
}); 