const fs = require('fs');
const path = require("path");

/*
* Check if a folder exists.
* fs.access()
*/

/* Create a new folder
* fs.mkdir() or fs.mkdirSync() or fsPromises.mkdir() to create a new folder */
const folderName = '/Users/Mayowa/test_folder/';

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
} catch (err) {
    console.error(err);
}


/* Read the contents of a directory
* Use: fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the contents of a directory */
const folderPath = '/Users/Mayowa';
fs.readdirSync(folderPath)

// To get the full path of the folder
fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName);
});

// Filter out results to return files and exclude folders
const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
};

fs.readdirSync(folderPath)
    .map(fileName => {
        return path.join(folderPath, fileName);
    })
    .filter(isFile);


/* Rename a Folder
* Use: fs.rename() or fs.renameSync() or fsPromises.rename() to rename folder. */
fs.rename(file_path, '/Users/MayowaNew', err => {
    if (err) {
        console.error(err);
    }
    // Folder rename successful.
});

// Synchronous file rename
try {
    fs.renameSync(file_path, 'Users/MayowaNew');
} catch (err) {
    console.error(err);
}

// Promise-based file rename
// const fs = require('fs/promises');
async function example() {
    try {
        await fs.rename(file_path, '/Users/MayowaNew');
    } catch(err) {
        console.error(err);
    }
}

example();


/* Remove a folder
* Use: fs.rmdir() or fs.rmdirSync() or fsPromises.rmdir to remove a folder */
const dir_to_remove = '/Users/MayowaNew'
fs.rmdir(dir_to_remove, err => {
    if (err) {
        throw err;
    }
    console.log(`${dir_to_remove} is deleted.`);
});

// To remove a folder that has contents use; fs.rm() with the option {recursive: true} to
// recursively remove the contents. (using force: true makes it that no exceptions will
// be ignored if the folder does not exist.
fs.rm(dir_to_remove, {recursive: true, force: true}, err => {
    if (err) {
        throw err;
    }
    console.log(`${dir_to_remove} is deleted`);
});