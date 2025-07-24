const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const IMAGES_DIR = path.join(__dirname, 'post/images');

app.use('/post/images', express.static(IMAGES_DIR));

// API trả về danh sách file ảnh
app.get('/api/images', (req, res) => {
  fs.readdir(IMAGES_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: 'Cannot read images directory' });
    // Lọc file ảnh
    const images = files.filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));
    res.json(images.map(f => `/post/images/${f}`));
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 