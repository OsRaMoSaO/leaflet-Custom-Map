const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, `maptiles`);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
  console.log("Succesfully created folder")
} else {
    console.log("Folder already exists")
}