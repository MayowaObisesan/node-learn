const path = require('path');

/*
* dirname: get the parent folder of a file.
* basename: get the filename part
* extname: get the file extension
* */

const notes = '/users/joe/notes.txt';
console.log(notes);
console.log("===================");
console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log("Filename without extension: " + path.basename(notes, path.extname(notes)));
console.log(path.extname(notes));


/* WORKING WITH PATHS */
//Join two or more parts of a path by using path.join()
const name = "joe";
console.log(path.join('/', 'users', name, 'notes.txt'));

// Get the absolute path calculation of a relative path using path.resolve()
console.log(path.resolve('joe.txt'));
console.log(path.resolve('tmp', 'joe.txt'));
console.log(path.resolve('/etc', 'joe.txt')); // absolute path resolution
console.log(path.normalize('/Users/Mayowa/../test.txt'));