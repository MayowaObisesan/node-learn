/* HOW TO READ ENVIRONMENT VARIABLES FROM NODE.js */
// the below code runs app.js and sets USER_ID and USER_KEY
// USER_ID=239482 USER_KEY=foobar node app.js
// Access the above env variables by:
// process.env.USER_ID;
// process.env.USER_KEY;

// If a .env file exists in the same directory,
// .env contains the below
// USER_ID="239482"
// USER_KEY="foobar"
// NODE_ENV="development"

require('dotenv').config();

// process does not require a "require", it is automatically available.
// The process core module of Node.js provides the env property
// which hosts all the environment variables that were set at the moment the process was started
process.env.USER_ID;
process.env.USER_KEY;
process.env.NODE_ENV;

// You can run your js file with node -r dotenv/config index.js command
// if you don't want to import the package in your code.