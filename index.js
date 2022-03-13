// Wait for user's response.
// let name = readlineSync.question("May I have your first name?");
//Create an object for your given name: To be imported into server.js;
const giveName = {
  name: "Ryan",
};


module.exports = { giveName, canoeQuestion, lake } 

//Create an array for randomly generated name
// const compName =
//   ["Jack", "Jill", "Fred", "Steve", "John", "Sarah", "Philip", "Liana", "Maggie", "Jade", "Jodie", "Hope", "Greg",
//     "Graham", "Cory", "Reid", "Patrick", "Sam", "Samatha", "Tobey", "Brian", "Ryan", "Rachel", "Elvis", "Sidney", "Lorrie", "Carly", "Jake",
//     "Katie", "Nicole", "Evan", "Tim", "Tom", "Jaden", "Ashley", "Theodore", "Dory", "Jody", "Judy", "Peggy", "Wally", "Wallace", "Jessie", "Tony",
//     "Ethan", "Janette", "Gord", "Jenifer", "Brandon", "Betty", "Mary", "Skyler", "Tucker", "Chelsea", "Ally", "Aidan", "Andrew", "Bailey",
//     "Billy", "Bob", "Catherine", "Hayley", "Annabelle", "Kyle", "Ryder", "Marcus", "Kiera", "Zoe", "Rose", "Elena", "Elliot", "Nicolas",
//     "Julian", "Jordan", "Annie", "Frank", "Mason", "Benson", "Mark", "Blake", "Tessa", "Gabriella", "Dawson", "Christopher", "Harvey",
//     "Lucas", "Angela", "Ellie", "Aspen", "Caroline", "Zane", "Xander", "Tanner", "Sophie", "Adeline", "Brooklyn", "Gabriel", "Sean", "Chase",
//     "Heidi", "Kayla", "Anatasia", "Amy", "Stephanie", "Myles", "Kevin", "Grayson", "Poppy", "Corbin", "Hayden", "Bradley", "Weston", "Westley",
//     "Maeve", "Kylie", "Anthony", "Jax", "Barett", "Hannah", "Stella", "Jessica", "Alexa", "Aaron", "Derek", "David", "Riley", "Zander",
//     "Lilly", "Ruby", "Penelope", "Natalie", "Aurora", "Gracie", "Grace", "Maddison", "Walker", "Alicia", "Bella", "Octavia", "Brianna",
//     "Vivian", "Eleanor", "Danica", "Andrea", "Morgan", "Serena", "Alexandra", "Mackenzie", "Addison"]

// const numOfNames = compName.length;
// const randomName = Math.floor(numOfNames * Math.random());
// console.log(`\nYour canoe partner for this trip is ${compName[randomName]}.`);

//Let the usere choose a canoe

function canoeQuestion(chooseCanoe) {
  if (chooseCanoe === '1' || chooseCanoe === '"1"') {
    return ("Your choice is the Recreational Canoe, Go to this link to learn how you guys navigate this lake");
  } else if (chooseCanoe === '2' || chooseCanoe ==='"2"') {
    return ("Your choice is the Expedition Canoe, Go to this link to learn how you guys navigate this lake");
  } else {
    return ("Invalid choice, please enter {1 for Recreational Canoe or 2 for Expedition Canoe}");
  }
};
canoeQuestion();

// //Decision to stay in middle of lake or paddle near shore
function lake(location) {
  if (location === 'Middle' || location === '"Middle"') {
    return (
      "Not the best decision, the waves are really hard to manage and are splashing over into the canoe"
    );
  } else if (location === 'Side' || location === '"Side"') {
    return ("Great choice!! Waves are really manageable near the shore");
  } else {
    return ("Invalid choice, please enter {Middle or Side}");
  }
};
lake();

// //Decision tree on where to run river
// function river() {
//   const riverFork = [
//     "Run the class II rapids (MIld)",
//     "Run the class V rapids (Spicy)",
//     "Run the class III rapids (Medium)",
//   ];
//   const riverDecision = readlineSync.keyInSelect(
//     riverFork,
//     "The lake narrows into a river with three entry points. Which way do you guys go?"
//   );

//   if (riverDecision === 0) {
//     console.log(
//       "This piece a piece of cake. I could navigate this passage with my eyes closed"
//     );
//   } else if (riverDecision === 1) {
//     console.log(
//       `I'm sorry ${name} and ${compName[randomName]}, a terrible decision is leading you over a waterfall. This is a fatal fall. Would you like to play again?`
//     );
//   } else if (riverDecision === 2) {
//     console.log("The canoe is manoevering well down this passage");
//   } else {
//     console.log("Invalid choice, try again!");
//     river();
//   }
// }
// river();