const fs = require('node:fs/promises');

// or const fs = require('fs').promises - before node.js v14

async function example() {
    let filehandle;
    try {
        filehandle = await fs.open('/Users/joe/test.txt', 'r');
        console.log(filehandle.fd);
        console.log(await filehandle.readFile({encoding: 'utf8'}));
    } finally {
        if (filehandle) await filehandle.close();
    }
}

example();