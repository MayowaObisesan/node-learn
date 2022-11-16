/*
* MAYOWA OBISESAN
* NODE LEARN
* WRITE FILES
* NOVEMBER 15, 2022.
* */

const fs = require('node:fs');
const content = 'Some content';

file_path = '/Users/Mayowa/test.txt';
fs.writeFile(file_path, content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});

/*
To modify the overwriting the file using writeFile, specify a flag:
fs.writeFile(file_path, content, {flag: 'a+'}, err => {});
*/


// Write a file synchronously
try {
    fs.writeFileSync(file_path, content);
    // file written successfully
} catch(err) {
    console.error(err);
}


// Promise-based method
async function example() {
    try {
        await fs.writeFile(file_path, content);
        // file written successfully.
    } catch (err) {
        console.error(err);
    }
}
