let readlineSync = require("readline-sync");

// Wait for user's response.
let name = readlineSync.question("May I have your name? ");
console.log("Hello " + name + "." + " Welcome to either your best canoe expirence or your worst canoe expirence.");

