const fs = require('fs/promises');

async function example() {
    try {
        const stats = await fs.stat('/Users/joe/test.txt');
        stats.isFile();
        stats.isDirectory();
        stats.isSymbolicLink();
        stats.size;
    } catch (err) {
        console.log(err);
    }
}

example();

let example = async () => {
    try {
        const stats = await fs.stat('/Users/joe/test.txt');
        stats.isFile();
        stats.isDirectory();
        stats.isSymbolicLink();
        stats.size;
    } catch (err) {
        console.log(err);
    }
}
