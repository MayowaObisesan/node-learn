/* BASIC OUTPUT USING THE CONSOLE MODULE */
const x = 'x';
const y = 'y';
console.log(x, y);

console.log('My %s has %d ears', 'dog', 2);
/* pretty format in console:
* %s: formats a variable as a string
* %d: formats a variable as a number
* %i: formats a variable as it's integer part only
* %o: formats a variable as an object
* */

console.log('%o', Number);

/* CONSOLE.CLEAR */
console.clear();    // clears the node console.


/* CONSOLE.COUNT */
console.count();    // counts the number of times a string is printed, and prints the count next to it.
const oranges = ['orange', 'orange'];
const apples = ['just one apple'];

oranges.forEach(fruit => {
    console.count(fruit);
}); // prints: orange: 1; orange: 2

apples.forEach(fruit => {
    console.count(fruit);
}); // prints: just one apple: 1


/* CONSOLE.COUNTRESET*/
console.countReset();   // Resets the value counter to zero.


/* CONSOLE.TRACE - PRINT THE STACK TRACE */
// "There might be cases where it's useful to print the call stack trace of a function,
// maybe to answer the question: how did you reach that part of the code?"
// quote from nodejs.dev/en/learn/output-to-the-command-line-using-nodejs
console.trace();

const function2 = () => console.trace();
const function1 = () => function2();
function1();


/* CONSOLE.TIME and CONSOLE.TIMEEND CALCULATE THE TIME SPENT */
const doSomething = () => console.log('test');
const measureDoingSomething = () => {
    console.time('doSomething');
    // do something, and measure the time it takes
    doSomething();
    console.timeEnd('doSomething()');
};
measureDoingSomething();


/* stdout and stderr */
// console.log -> stdout;
// console.error -> stderr;


/* COLOR THE OUTPUT */
// Color the output of your text in the console by using escape sequences
// An escape sequence is a set of characters that identifies a color.
console.log('\x1b[33m%s\x1b[0m', 'hi'); // prints hi in yellow.

// Chalk -> A Library to color the console and other styling facilities (bold, italics, underlined).
// npm install chalk@4
// const chalk = require('chalk');
// console.log(chalk.yellow('hi'));


/* CREATE A PROGRESS BAR */
// Progess -> A Package to create a progress bar in the console.
// npm install progress

/*
// Creates a 10-step progress bar and every 100ms, one step is completed.
// When the bar completes, we clear the interval.
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', {total: 10});
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);
* */
