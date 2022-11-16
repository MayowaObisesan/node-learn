const fs = require('fs');

const file_path = '/Users/Mayowa/test.txt';
fs.readFile(file_path, 'utf8', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


// Or the sync version of node readFile Method - readFileSync
try {
    const data = fs.readFileSync(file_path, 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}

// Or the promise-based - fsPromises.readFile() method
async function example() {
    try {
        const data = await fs.readFile(file_path, {encoding: 'utf8'});
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

example();