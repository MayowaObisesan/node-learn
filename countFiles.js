const fs = require('fs').promises;
const path = require('path');

let files = 0;

async function countFiles(folderPath) {
    try {
        const usablePath = path.resolve(folderPath);    // get the full path
        const contents = await fs.readdir(usablePath);  // read the directory

        contents.forEach(() => {
            files = files + 1
        });  // add 1 for every file in the directory

        return files;
    } catch(err) {
        // most likely be triggered if folderPath does not exist (is not a real path).
        throw new Error(`It seems there was a problem. Are you sure ${folderPath} is a valid Path?`);
    }
}

module.exports = countFiles