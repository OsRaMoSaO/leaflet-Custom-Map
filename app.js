const path = require('path'); // Imports the Node.js path module for handling file paths.
const express = require('express');
const app = express();

const PORT = 3000;
 
app.get('/getTile/:z/:x/:y', (req, res) => {
    var {z, x, y} = req.params
    console.log(z + " | "+  x + " | " + y)
    if (x == 0) x = 1
    if (y == 0) y = 1
    const imagePath = path.join(__dirname, `maptiles/${z}/${x}/${y}/tile.jpg`);
    res.sendFile(imagePath); // Express handles Content-Type and stream
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});