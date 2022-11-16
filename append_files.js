const fs = require('fs');
const content = 'Some content';
const file_path = '/Users/Mayowa/test.txt';

fs.appendFile(file_path, content, err => {
    if (err) {
        console.error(err);
    }
    // File has been appended.
});


// Example with Promises
async function example() {
    try {
        const content = 'Some Content';
        await fs.appendFile(file_path, content);
    } catch(err) {
        console.error(err);
    }
}

example();