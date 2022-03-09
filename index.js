let readlineSync = require("readline-sync");

// Wait for user's response.
let name = readlineSync.question('May I have your first name?');
console.log(`\nHello ${name}. Welcome to either your best canoe expirence or your worst canoe expirence.`);

//Create an array for randomly generated name
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
console.log(`\nYour canoe partner for this trip is ${compName[randomName]}.`);

//Let the usere choose a canoe
function canoeQuestion() {
    const canoeType = ['Recreational Canoe', 'Expedition Canoe'];
    const type = readlineSync.keyInSelect(canoeType, 'Which type of canoe do you want?');


    if (type === 0) {
        console.log('Great choice guys!!');
    } else if (type === 1) {
        console.log('I\'m sorry that canoe has holes in it. Please try again');
            canoeQuestion()
    } else {
        console.log('Invalid choice, try again!');
            canoeQuestion()
    }
};
canoeQuestion();

console.log('Your canoe is equipped with all of the proper safety gear, looks like you guys know what you\'re doing.');

console.log(`\nFinally you guys have made it to the campsite. Don\'t get to comfy though. You guys are going to be on the water bright and early. Expect to be on the water for at least two days`);




