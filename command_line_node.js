/* Running Node from the command-line */
// #!/usr/bin/env node

// your code

// To use a shebang, your file shoudl have executable permission.
// You can give your file the executable permission by running: chmod u+x app.js


/* Pass string as argument to node instead of file path */
// node -e "console.log(123)"


/* Restart the application automatically - Use the nodemon module. */
// Install the nodemon module globally to system path.
// npm i -g nodemon

// Install nodemon as a development dependency.
// npm -i --save-dev nodemon

// This local installation of nodemon can be run by calling it from npm script
// such as npm start or using npx nodemon

// Run the application using the nodemon command followed by the application's file name
// nodemon app.js