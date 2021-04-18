const express = require('express');

const app = express();
const port = 5000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening to port', port);
});

//Our global variable 
let testCalculation = [];



//creating a place were we can store our functions 
app.get('/calcformulas', (req, res) => {
    console.log('testing calcformulas');
    res.send(testCalculation)//need to add in an array or function
})

//this is where we put our function and if statement in so it shows up on the server
app.post('/calcformulas', (req, res) => {
    let newCalculations = req.body;
    console.log('newCalculations', newCalculations);
    newCalculations.result = 0;
    if (newCalculations.run === '+') {
        newCalculations.result = parseInt(newCalculations.firstNum) + parseInt(newCalculations.lastNum);//we use two parseInt for + because it will show up as a sting if not
    } else if (newCalculations.run === '-') {
        newCalculations.result = parseInt(newCalculations.firstNum - newCalculations.lastNum);
    } else if (newCalculations.run === '*') {
        newCalculations.result = parseInt(newCalculations.firstNum * newCalculations.lastNum);
    } else if (newCalculations.run === '/') {
        newCalculations.result = parseInt(newCalculations.firstNum / newCalculations.lastNum);
    }
    testCalculation.push(newCalculations);
    res.sendStatus(201);
})