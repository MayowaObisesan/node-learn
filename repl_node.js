/* HOW TO USE NODE.js REPL */
// REPL - Read Evaluate Print Loop

// The _ special variable -> prints the result of the last operation.

// The Up arrow key -> gets access to the history of the previous lines of code
// executed in the current, and even previous REPL sessions.

/* Dot Commands
* .help: shows the dot commands help
* .editor: enables editor mode, to write multiline JavaScript code with ease.
*          Once in this mode, enter ctrl+D to run the code you wrote.
*          ** The REPL knows when you're typing a multi-line statement without the need to invoke .editor
* .break: when inputting a multi-line expression, entering the .break command
*         will abort further input. Same as pressing ctrl+C.
* .clear: resets the REPL context to an empty object and clears any multi-line
*         expression currently being input.
* .load: loads a JavaScript file, relative to the current working directory.
* .save: saves all you entered, in the REPL session to a file (where you specify a filename)
* .exit: exits the repl (same as pressing ctrl+C twice).
* */

/* Run REPL from JavaScript File*/
const repl = require('repl');
const local = repl.start('>>> ');   // to start the REPL command prompt
// repl.start("$ ");   // to start the REPL command prompt with a dollar-sign
// repl.start("M ");   // to start the REPL command prompt with letter M
// node repl.js    // to run the file in the command line

// To display a message while exiting the REPL
local.on('exit', () => {
    console.log('exiting repl');
    process.exit();
});

// To display a message on-start of the REPL
// local.on('start', () => {
//     console.log('starting repl');
//     process.start();
// })