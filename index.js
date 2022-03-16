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
  if (location === "Middle" || location ==="middle") {
    return "Not the best decision, the waves are really hard to manage and are splashing over into the canoe";
  } else if (location === "Side" || location ==="side") {
    return "Great choice!! Waves are really manageable near the shore. Lake soon narrows into a river with three directions. Which way do you go? curl http://localhost:5000/onTheRiver?direction={Enter left, right or middle}";
  } else {
    return "Invalid choice, please enter {Middle or Side}";
  }
}

// //Decision tree on where to run river
function riverDirectionChoice(direction) {
  if (direction === "left" || direction ==="Left") {
    return "This is a piece of cake. I could navigate this passage with my eyes closed. Please go here to see what happens next: curl http://localhost:5000/collisionOnRock";
  } else if (direction === "right" || direction ==="Right") {
    return `I'm sorry ${giveName.name} and ${randomName}, a terrible decision is leading you over a waterfall. This is a fatal fall. Would you like to play again?`;
  } else if (direction === "middle" || direction === "Middle" ) {
    return "The canoe is manoevering well down this passage. Please go here to continue the story curl http://localhost:5000/hazard";
  } else {
    return "Invalid choice, please enter {left, right or middle}";
  }
}

//Function for what to do when capsized
function inWaterDecision(option, paddle) {
  if (option === "grab" || option === "Grab") {
    if (paddle === "shore" || paddle === "Shore") {
      return `You guys were able to get back in the canoe and paddle to shore. Please click here to find out what your decision is: curl http://localhost:5000/canoeToShore?shoreChoice={go or stay} `;
    } else if (paddle === "continue" || paddle === "Continue") {
      return `You guys are troopers for carrying on soaked`;
    } else
      return `Invalid entry`;
  } else if (option === "land" || option === "Land") {
    if (paddle === "abandoned" || paddle === "Abandoned") {
      return `You guys choose to swim to shore and abandon the canoe. Now there is no more option for self-rescue. Please click this link to see what happens next: curl http://localhost:5000/choiceOnShore?survive={find or shore}`;
    } else {
      return `Invalid entry`;
  }
  } else {
      return `Invalid entry`;
  }
}

function canoeToShore(shoreChoice) {
  if (shoreChoice === "stay" || shoreChoice === "Stay") {
    return "You guys decide to stay on shore and wait for help. Please click here to find out what happens next: "
  } else if (shoreChoice === "Go" || shoreChoice === "go") {
    return "You guys decided to push despite being cold and wet. Please click here to find out what happens next: "
  } else {
    return "Invalid answer. Please enter {stay or choice}"
  }
}

//front of canoe communicate with back of canoe
function doTheyCommunicate(talking) {
  if (talking === "yes" || talking === "Yes") {
    return "You guys successfully manover around the hazard. Please go to this link to continue the story: curl http://localhost:5000/madeItToSite";
  } else if (talking === "no" || talking === "No") {
    return "Bang!! Canoe hits a log in the water and taco's, all of your camping supplies are either at the bottom of the river or swept away Please go here to see what happens next: curl http://localhost:5000/capsize";
  } else {
    return "Invalid choice, please enter {yes or no}";
  }
}

//Function for decision on shore 
function onShore(survive) {
  if (survive === "find" || survive === "Find") {
    return "Cold, bruised and no food, you start venturing into the woods in hopes of finding civilization. The end. Play again?"
  } else if (survive ==="shore" || survive ==="Shore") {
    return "Cold, bruised and no food, you guys wait on shore for other canoers to spot you. The end. Play again?"
  } else {
    return "Invalid choice, please enter {find of shore}"
  }
}

//Do you guys go out in a thunderstorm or not, is therre lightning
function thunderAndLightning(choice) {
  let isLightning = ["true", "false"];
  let numOfChoices = isLightning.length;
  let randomNum = Math.floor(numOfChoices * Math.random());
  let lightning = isLightning[randomNum];
    
  if (choice === "go" && lightning === 'true' || choice === "Go" && lightning === 'true') {
      return 'You guys decided to risk it and go out during a storm. You guys got struck by lightning. Play again?'
  } else if (choice === "go" && lightning === 'false' || choice === "Go" && lightning === 'false') {
      return `You are Lucky! You too have managed to escape the storm injury free. Please click this link to see what happens next: curl http://localhost:5000/hooray`
  } else if (choice === "wait" || choice === "Wait") {
      return `Smart choice, within one hour the storm stopped. The lake became very flat and still, perfect for a paddle. Please click this link to see what happens next: http://localhost:5000/hooray `
  } else {
      return "Invalid chioce, please enter {wait or go}";
    }
  }

module.exports = {
  giveName,
  randomName,
  chooseACanoe,
  navigateTheLake,
  riverDirectionChoice,
  doTheyCommunicate,
  thunderAndLightning,
  onShore,
  inWaterDecision,
  canoeToShore
};
