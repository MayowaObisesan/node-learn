const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}`);
    readline.close();
});

// To handle password (*) symbol, use the readline-sync package

// DO MORE ON THE COMMAND LINE WITH inquirer.js package.
// npm install inquirer