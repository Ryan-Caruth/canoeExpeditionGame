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
    "Jenifer", "Brandon", "Betty", "Mary", "Skyler", "Tucker", "Chelsea",
    "Ally", "Aidan", "Andrew", "Bailey", "Billy", "Bob", "Catherine",
    "Hayley", "Annabelle", "Kyle", "Ryder", "Marcus", "Kiera", "Zoe", "Rose",
    "Elena", "Elliot", "Nicolas", "Julian", "Jordan", "Annie", "Frank",
    "Mason", "Benson", "Mark", "Blake", "Tessa", "Gabriella", "Dawson",
    "Christopher", "Harvey", "Lucas", "Angela", "Ellie", "Aspen",
    "Caroline", "Zane", "Xander", "Tanner", "Sophie", "Adeline",
    "Brooklyn", "Gabriel", "Sean", "Chase", "Heidi", "Kayla", "Anatasia",
    "Amy", "Stephanie", "Myles", "Kevin", "Grayson", "Poppy", "Corbin",
    "Hayden", "Bradley", "Weston", "Westley", "Maeve", "Kylie", "Anthony",
    "Jax", "Barett", "Hannah", "Stella", "Jessica", "Alexa", "Aaron", 
    "Derek", "David", "Riley", "Zander", "Lilly", "Ruby", "Penelope", 
    "Natalie", "Aurora", "Gracie", "Grace", "Maddison", "Walker", "Alicia",
    "Bella", "Octavia", "Brianna", "Vivian", "Eleanor", "Danica", "Andrea",
    "Morgan", "Serena", "Alexandra", "Mackenzie", "Addison"]

const numOfNames = compName.length

const randomName = Math.floor(numOfNames * Math.random());

console.log(`Your canoe partner for this trip is ${compName[randomName]}.`);