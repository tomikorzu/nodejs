const fs = require('node:fs');
const stats = fs.statSync('./texto.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)

// para leer el texto:
fs.readFile('../../README.md', 'utf-8', (err, text) => {
    console.log(text);
});


