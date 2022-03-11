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
    res.send(`Hello ${name}`)
    console.log(name);
});

