const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
  throwError('Afiletowatchmustbespecified!');
}

fs.watch(filename, () => console.log(`File${filename}changed!`));

console.log(`Nowwatching${filename}forchanges...`);
