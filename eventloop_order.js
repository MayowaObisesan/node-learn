const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start = () => {
    console.log('start');
    setImmediate(baz);
    new Promise((resolve, reject) => {
        resolve('bar');
    }).then((resolve) => {
        console.log(resolve);
        process.nextTick(zoo);
    });
    process.nextTick(foo);
};
start();

// prints: start foo bar zoo baz
// The Order to process eventloop is:
// process.nextTick queue -> promises microtask queue -> macrotask queue (set[Timeout, Immediate])