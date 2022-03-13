const express = require("express");
const res = require("express/lib/response");
const { giveName, randomName, chooseACanoe, navigateTheLake, riverDirectionChoice, doTheyCommunicate } = require('./index');

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
      `Hello ${name}. Please go to this link to find out who your canoe partner is curl http://localhost:5000/compName.`
    );
    console.log(name);
});

app.get('/compName', (req, res) => {
  res.send(`Your canoe partner for this trip is ${randomName}. Please go to this link to decide what canoe to have curl http://localhost:5000/canoeChoice?chooseCanoe={1-Recreational Canoe, 2-Expedition Canoe}`);
});


app.get('/canoeChoice', (req, res) => {
    let chooseCanoe = req.query.chooseCanoe;
    let answer = chooseACanoe(chooseCanoe);
    res.send(`${answer}.`);
    console.log(answer);
});

app.get('/onTheWater', (req, res) => {
  let direction = req.query.direction;
  let answer = navigateTheLake(direction);
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
          Please go here to answer the question. curl http:localhost:5000/communicateWithStern?communicate={enter yes or no}`);
});

app.get('/communicateWithStern', (req, res) => {
  let communicate = req.query.communicate;
  let answer = doTheyCommunicate(communicate);
  res.send(`${answer}.`);
  console.log(answer);
});
