const path = require('path');
const fs = require('fs');
const {stdout} = process;

let fileName = path.join(__dirname, 'text.txt');
let fileStream = fs.createReadStream(fileName, {encoding: 'utf8'});

fileStream.on('data', chunk => {
  stdout.write(chunk.toString());
});