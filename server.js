const express = require("express");
const res = require("express/lib/response");
const { giveName, randomName, chooseACanoe, navigateTheLake, riverDirectionChoice, doTheyCommunicate, waitOrGoOnWater } = require('./index');

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
      `Hello ${name}. Please go to this link to find out who your canoe partner is curl http://localhost:5000/generatedName.`
    );
    console.log(name);
});

app.get('/generatedName', (req, res) => {
  res.send(`Your canoe partner for this trip is ${randomName}. Please go to this link to decide what canoe to have curl http://localhost:5000/canoeChoice?chooseCanoe={1-Recreational Canoe, 2-Expedition Canoe}`);
  console.log(`${randomName}`);
});


app.get('/canoeChoice', (req, res) => {
    let chooseCanoe = req.query.chooseCanoe;
    let answer = chooseACanoe(chooseCanoe);
    res.send(`${answer}.`);
    console.log(answer);
});

app.get('/onTheWater', (req, res) => {
  let location = req.query.location;
  let answer = navigateTheLake(location);
  res.send(`${answer}.`);
  console.log(answer);
});

app.get('/onTheriver', (req, res) => {
  let direction = req.query.direction;
  let answer = riverDirectionChoice(direction);
  res.send(`${answer}.`);
  console.log(answer);
});

app.get('/hazard', (req, res) => {
  res.send(`Uh oh, ${randomName}, who is sitting in the front of the canoe sees a hazard up ahead. Do they communicate with ${giveName.name}?
          Please go here to answer the question. curl http://localhost:5000/communicateWithStern?talking={enter yes or no}`);
});

app.get('/communicateWithStern', (req, res) => {
  let talking = req.query.talking;
  let answer = doTheyCommunicate(talking);
  res.send(`${answer}.`);
  console.log(answer);
});

app.get('/madeItToSite', (req, res) => {
  res.send(`Hooray!! You too had a very successful day out on the water today. Now rest up at this campsite and leave bright and early tomorrow morning.
          Please go to this link to see what happens next. curl http://localhost:5000/nextDay `)
})

app.get('/nextDay', (req, res) => {
  res.send(`Rise and shine time to hit the water. Uh oh you guys see thunder clouds rolling in. Do you risk it and go on the water on wait on land.
          Please go to this link to answer the question: curl http://localhost:5000/doWeRiskIt?decision={enter wait or go}`);
})

app.get('/doWeRiskIt', (req, res) => {
  let choice = req.query.choice;
  let answer = waitOrGoOnWater(choice);
  res.send(`${answer}.`);
  console.log(answer);
})
