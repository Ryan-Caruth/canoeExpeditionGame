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
  if (chooseCanoe === "1") {
    return "Your choice is the Recreational Canoe. Early into your trip you guys come across some windy weather. Go to this link to learn how you guys navigate this lake: curl http://localhost:5000/onTheWater?location={Middle or Side}";
  } else if (chooseCanoe === "2") {
    return "Your choice is the Expedition Canoe. Early into your trip you guys come across some windy weather. Go to this link to learn how you guys navigate this lake: curl http://localhost:5000/onTheWater?location={Middle or Side}";
  } else {
    return "Invalid choice, please enter {1 for Recreational Canoe or 2 for Expedition Canoe}";
  }
}

// //Decision to stay in middle of lake or paddle near shore
function navigateTheLake(location) {
  if (location === "Middle") {
    return "Not the best decision, the waves are really hard to manage and are splashing over into the canoe";
  } else if (location === "Side") {
    return "Great choice!! Waves are really manageable near the shore. Lake soon narrows into a river with three directions. Which way do you go? curl http://localhost:5000/onTheRiver?direction={Enter left, right or middle}";
  } else {
    return "Invalid choice, please enter {Middle or Side}";
  }
}

// //Decision tree on where to run river
function riverDirectionChoice(direction) {
  if (direction === "left") {
    return "This piece a piece of cake. I could navigate this passage with my eyes closed";
  } else if (direction === "right") {
    return `I'm sorry ${giveName.name} and ${randomName}, a terrible decision is leading you over a waterfall. This is a fatal fall. Would you like to play again?`;
  } else if (direction === "middle") {
    return "The canoe is manoevering well down this passage. Please go here to continue the story curl http://localhost:5000/hazard";
  } else {
    return "Invalid choice, please enter {left, right or middle}";
  }
}

//front of canoe communicate with back of canoe
function doTheyCommunicate(talking) {
  if (talking === "yes") {
    return "You guys successfully manover around the hazard. Please go to this link to continue the story: curl http://localhost:5000/madeItToSite";
  } else if (talking === "no") {
    return "Bang!! Canoe hits a log in the water and taco's, all of your camping supplies are either at the bottom of the river or swept away";
  } else {
    return "Invalid choice, please enter {yes or no}";
  }
}
//Do you guys go out in a thunderstorm or not, is therre lightning
function thunderAndLightning(choice) {
  let isLightning = ["true", "false"];
  let numOfChoices = isLightning.length;
  let randomNum = Math.floor(numOfChoices * Math.random());
  let lightning = isLightning[randomNum];
    
  if (choice === "go" && lightning === 'true') {
      return 'You guys decided to risk it and go out during a storm. You guys got struck by lightning. Play again?'
  } else if (choice === "go" && lightning === 'false') {
      return `You are Lucky! You too have managed to escape the storm injury free. Please click this link to see what happens next: http://localhost:5000/hooray`
  } else if (choice === "wait") {
      return `Smart choice, within one hour the storm stopped. The lake became very flat and still, perfect for a paddle. Please click this link to see what happens next: http://localhost:5000/hooray `
  } else {
      return "Invalid chioce, please enter {wait or go}";
    }
  }

 module.exports = { giveName, randomName, chooseACanoe, navigateTheLake, riverDirectionChoice, doTheyCommunicate, thunderAndLightning };
