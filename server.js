const express = require("express");
const res = require("express/lib/response");
const {
  startGame,
  giveName,
  randomName,
  chooseACanoe,
  navigateTheLake,
  riverDirectionChoice,
  collisionOnRock,
  hazardUpAhead, 
  doTheyCommunicate,
  arriveAtSite,
  nextDay,
  fallInWater,
  thunderAndLightning,
  onShore,
  inWaterDecision,
  continueSoaked,
  hypoQuestion,
  canoeToShore,
  trueOrFalse, 
  waitOnShore,
  congrats,
  canoePartner} = require('./model/index');

const app = express();

function echoPortNumber() {
    console.log(`Listening on port ${PORT}`);
}

const PORT = 5000;

app.listen(PORT, echoPortNumber);

app.get('/startGame', (req, res) => {
  let startMessage = startGame();
  res.send(`${startMessage}`);
});

app.get('/giveName', (req, res) => {
    let name = req.query.name;
    giveName.name = name;
    res.send(
      `Hello ${name}. 
      Please go to this link to find out who your canoe partner is curl http://localhost:5000/generatedName.`
    );
    console.log(name);
});

app.get('/generatedName', (req, res) => {
  let partner = canoePartner();
  res.send(`${partner}`);
  console.log(`${randomName}`);
});

app.get('/canoeChoice', (req, res) => {
    let chooseCanoe = req.query.chooseCanoe;
    let answer = chooseACanoe(chooseCanoe);
    res.send(`${answer}.`);
    console.log(answer);
});

app.get('/canoeToShore', (req, res) => {
  let shoreChoice = req.query.shoreChoice;
  let answer = canoeToShore(shoreChoice);
  res.send(`${answer}.`);
  console.log(answer);
});

app.get('/continueSoaked', (req, res) => {
  let keepGoing = continueSoaked(); 
  res.send(`${keepGoing}`);
});

app.get('/hypoQuestion', (req, res) => {
  let hypothermia = hypoQuestion();
  res.send(`${hypothermia}`);
});

app.get('/hypoAnswer', (req, res) => {
  let knowledge = req.query.knowledge;
  let answer = trueOrFalse(knowledge);
  res.send(`${answer}.`);
  console.log(answer);
})

app.get('/waitOnshore', (req, res) => {
  let onShore = waitOnShore()
  res.send(`${onShore}`);
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

app.get('/inWater', (req, res) => {
  let option = req.query.option;
  let paddle = req.query.paddle;
  let answer = inWaterDecision(option, paddle)
  res.send(`${answer}`);
  console.log(`${answer}`);
});

app.get('/collisionOnRock', (req, res) => {
  let collideWithRock = collisionOnRock();
  res.send(`${collideWithRock}`);
});

app.get('/hazard', (req, res) => {
  let hazardInWater = hazardUpAhead()
  res.send(`${hazardInWater}`);
});

app.get('/communicateWithStern', (req, res) => {
  let talking = req.query.talking;
  let answer = doTheyCommunicate(talking);
  res.send(`${answer}.`);
  console.log(answer);
});

app.get('/capsize', (req, res) => {
  let capsize = fallInWater();
  res.send(`${capsize}`);
})

app.get('/choiceOnShore', (req, res) => {
  let survive = req.query.survive;
  let answer = onShore(survive);
  res.send(`${answer}`);
  console.log(answer);
})

app.get('/madeItToSite', (req, res) => {
  let campsite = arriveAtSite();
  res.send(`${campsite}`)
})

app.get('/nextDay', (req, res) => {
  let day = nextDay();
  res.send(`${day}`);
})

app.get('/doWeRiskIt', (req, res) => {
  let choice = req.query.choice;
  let answer = thunderAndLightning(choice);
  res.send(`${answer}.`);
  console.log(answer);
})

app.get('/hooray', (req, res) => {
  let finished = congrats();
    res.send(`${finished}`);
  });
