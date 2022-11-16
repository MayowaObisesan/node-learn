const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// on => adds a callback function that's going to be executed when the created event is triggered.
eventEmitter.on('start', () => {
    console.log('started');
});

// emit => triggers an event
eventEmitter.emit('start');


/* SINGLE ARGUMENT */
eventEmitter.on('start', number => {
    console.log(`started ${number}`);
});
eventEmitter.emit('start', 23);


/* MULTIPLE ARGUMENTS */
eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 10);

/* ONCE EVENT EMITTER METHOD - Adds a one-time listener */
eventEmitter.once('start', (start, end) => {});

/* OFF OR REMOVE LISTENER EVENT EMITTER METHOD - Removes an event listener from an event */
eventEmitter.removeListener('start', (start, end) => {});

/* REMOVE ALL LISTENER EVENT EMITTER METHOD - Removes all listeners from an event */
eventEmitter.removeAllListeners('start', (start, end) => {});