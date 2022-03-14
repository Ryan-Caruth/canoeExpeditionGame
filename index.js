// Wait for user's response.
// let name = readlineSync.question("May I have your first name?");
//Create an object for your given name: To be imported into server.js;
const giveName = {
  name: " ",
};

let randomName = generateRandomName();

//Create a function for creating an array for randomly generated name
function generateRandomName() {
  let namesList = [
    "Jack",
    "Jill",
    "Fred",
    "Steve",
    "John",
    "Sarah",
    "Philip",
    "Liana",
    "Maggie",
    "Jade",
    "Jodie",
    "Hope",
    "Greg",
    "Graham",
    "Cory",
    "Reid",
    "Patrick",
    "Sam",
    "Samatha",
    "Tobey",
    "Brian",
    "Ryan",
    "Rachel",
    "Elvis",
    "Sidney",
    "Lorrie",
    "Carly",
    "Jake",
    "Katie",
    "Nicole",
    "Evan",
    "Tim",
    "Tom",
    "Jaden",
    "Ashley",
    "Theodore",
    "Dory",
    "Jody",
    "Judy",
    "Peggy",
    "Wally",
    "Wallace",
    "Jessie",
    "Tony",
    "Ethan",
    "Janette",
    "Gord",
    "Jenifer",
    "Brandon",
    "Betty",
    "Mary",
    "Skyler",
    "Tucker",
    "Chelsea",
    "Ally",
    "Aidan",
    "Andrew",
    "Bailey",
    "Billy",
    "Bob",
    "Catherine",
    "Hayley",
    "Annabelle",
    "Kyle",
    "Ryder",
    "Marcus",
  ];
  let numOfNames = namesList.length;
  let randomIndex = Math.floor(numOfNames * Math.random());
  return namesList[randomIndex];
}
//Let the usere choose a canoe

function chooseACanoe(chooseCanoe) {
  if (chooseCanoe === "1" || chooseCanoe === '"1"') {
    return "Your choice is the Recreational Canoe. Early into your trip you guys come across some windy weather. Go to this link to learn how you guys navigate this lake: curl http://localhost:5000/onTheWater?location={Middle or Side}";
  } else if (chooseCanoe === "2" || chooseCanoe === '"2"') {
    return "Your choice is the Expedition Canoe. Early into your trip you guys come across some windy weather. Go to this link to learn how you guys navigate this lake: curl http://localhost:5000/onTheWater?location={Middle or Side}";
  } else {
    return "Invalid choice, please enter {1 for Recreational Canoe or 2 for Expedition Canoe}";
  }
}

// //Decision to stay in middle of lake or paddle near shore
function navigateTheLake(location) {
  if (location === "Middle" || location === '"Middle"') {
    return "Not the best decision, the waves are really hard to manage and are splashing over into the canoe";
  } else if (location === "Side" || location === '"Side"') {
    return "Great choice!! Waves are really manageable near the shore. Lake soon narrows into a river with three directions. Which way do you go? curl http://localhost:5000/onTheRiver?direction={Enter left, right or middle}";
  } else {
    return "Invalid choice, please enter {Middle or Side}";
  }
}

// //Decision tree on where to run river
function riverDirectionChoice(direction) {
  if (direction === "left" || direction === '"left"') {
    return "This piece a piece of cake. I could navigate this passage with my eyes closed";
  } else if (direction === "right" || direction === '"right"') {
    return `I'm sorry ${giveName.name} and ${randomName}, a terrible decision is leading you over a waterfall. This is a fatal fall. Would you like to play again?`;
  } else if (direction === "middle" || direction === '"middle"') {
    return "The canoe is manoevering well down this passage. Please go here to continue the story curl http://localhost:5000/hazard";
  } else {
    return "Invalid choice, please enter {left, right or middle}";
  }
}

//front of canoe communicate with back of canoe
function doTheyCommunicate(talking) {
  if (talking === "yes" || talking === '"yes"') {
    return "You guys successfully manover around the hazard. Please go to this link to continue the story: curl http://localhost:5000/madeItToSite";
  } else if (talking === "no" || talking === '"no"') {
    return "Bang!! Canoe hits a log in the water and taco's, all of your camping supplies are either at the bottom of the river or swept away";
  } else {
    return "Invalid choice, please enter {yes or no}";
  }
}
//Do you guys go out in a thunderstorm or not
function waitOrGoOnWater(choice) {
  if (choice === "go" || choice === '"go"') {
    return "Hopefully this gamble dosen't end in a disater. You guys decide to keep going";
  } else if (choice === "wait" || choice === '"wait"') {
    return "Smart choice, within one hour the storm stopped. The lake became very flat and still, ideal conditions for a paddle";
  } else {
    return "Invalid chice, please enter {wait or go}";
  }
}
    



module.exports = { giveName, randomName, chooseACanoe, navigateTheLake, riverDirectionChoice, doTheyCommunicate, waitOrGoOnWater };
