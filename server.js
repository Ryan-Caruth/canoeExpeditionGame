const express = require("express");
const res = require("express/lib/response");
const { giveName } = require('./index');

const app = express();

function echoPortNumber() {
    console.log(`Listening on port ${PORT}`);
}

const PORT = 5000;

app.listen(PORT, echoPortNumber);

app.get('/startGame', (req, res) => {
    res.send(
      "Welcome to 'Canadian eh', a game that will test your instincts in a canoe.\
    Please copy this link and paste in your terminal to continue curl http://localhost:5000/giveName?name={Enter your name here}."
    );
});

app.get('/giveName', (req, res) => {
    let name = req.query.name;
    giveName.name = name;
    res.send(
      `Hello ${name}. Please go to this link to find out who your canoe partner is curl http://localhost:5000/compName?computerName={Enter '?'}.`
    );
    console.log(name);
});

app.get('/compName', (req, res) => {
    let compName = ["Jack", "Jill", "Fred", "Steve", "John", "Sarah", "Philip", "Liana", "Maggie", "Jade", "Jodie", "Hope", "Greg",
        "Graham", "Cory", "Reid", "Patrick", "Sam", "Samatha", "Tobey", "Brian", "Ryan", "Rachel", "Elvis", "Sidney", "Lorrie", "Carly", "Jake",
        "Katie", "Nicole", "Evan", "Tim", "Tom", "Jaden", "Ashley", "Theodore", "Dory", "Jody", "Judy", "Peggy", "Wally", "Wallace", "Jessie", "Tony",
        "Ethan", "Janette", "Gord", "Jenifer", "Brandon", "Betty", "Mary", "Skyler", "Tucker", "Chelsea", "Ally", "Aidan", "Andrew", "Bailey",
        "Billy", "Bob", "Catherine", "Hayley", "Annabelle", "Kyle", "Ryder", "Marcus"];
    let numOfNames = compName.length;
    let randomName = Math.floor(numOfNames * Math.random());
    let computerName = req.query.computerName;
    
    if (computerName === '?' || computerName === '"?"') {
        res.send(
          `Your canoe partner for this trip is ${compName[randomName]}, Go to this link to choose your canoe? curl http://localhost:5000/canoeChoice?chooseCanoe={1=Recreational canoe, 2=Expedition canoe}`
        );
        console.log(
          `Your canoe partner for this trip is ${compName[randomName]}.`
        );
    } else {
        res.send("Invalid entry, please enter '?'");
    }
});

app.get('/canoeChoice', (req, res) => {
    let chooseCanoe = req.query.chooseCanoe
    if (chooseCanoe === '1' || chooseCanoe === '"1"') {
        res.send("Your choice is the Recreational Canoe");
        console.log("Your choice is the Recreational Canoe");
    } else if (chooseCanoe === '2' || chooseCanoe === '"2"') {
        res.send("Your choice is the Expedition Canoe");
        console.log("Your choice is the Expedition Canoe");
    } else {
        res.send("Invalid choice, try again!");
    }
});