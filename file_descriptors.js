const fs = require('fs');

fs.open('/test.txt', 'r', (err, fd) => {
    // fd is our file descriptor
});