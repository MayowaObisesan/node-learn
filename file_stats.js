const fs = require('fs');

fs.stat('/User/Mayowa/test.txt', (err, stats) => {
    if (err) {
        console.error(err);
    }
    // we now have access to the file stats in 'stats'
});


// Sync version of the file stats
try {
    const stats = fs.statSync('/User/Mayowa/test.txt');
} catch(err) {
    console.error(err);
}

// Async version of the file stats
fs.stat('/Users/Mayowa/test.txt', (err, stats) => {
    if (err) {
        console.error(err);
    }
    stats.isFile();
    stats.isDirectory();
    stats.isSymbolicLink();
    stats.size;
});