let readlineSync = require("readline-sync");

// Wait for user's response.
let name = readlineSync.question("May I have your first name? ");
console.log("Hello " + name + "." + " Welcome to either your best canoe expirence or your worst canoe expirence.");

const compName = ["Jack", "Jill", "Fred", "Steve", "John", "Sarah", "Philip",
    "Liana", "Maggie", "Jade", "Jodie", "Hope", "Greg", "Graham", "Cory",
    "Reid", "Patrick", "Sam", "Samatha", "Tobey", "Brian", "Ryan", "Rachel",
    "Elvis", "Sidney", "Lorrie", "Carly", "Jake", "Katie", "Nicole", "Evan", "Tim",
    "Tom", "Jaden", "Ashley", "Theodore", "Dory", "Jody", "Judy", "Peggy",
    "Wally", "Wallace", "Jessie", "Tony", "Ethan", "Janette", "Gord",
    "Jenifer", "Brandon", "Betty", "Mary", "Skyler", "Tucker", "Chelsea"]

const numOfNames = compName.length

const randomName = Math.floor(numOfNames * Math.random());

console.log("Your partner for this trip is " + compName[randomName] + ".");