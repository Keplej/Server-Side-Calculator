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

app.post('/calcformulas', (req, res) => {
    let newCalculation = req.body;
    console.log('newCalculations', newCalculation);
    testCalculation.push(newCalculation);
    res.sendStatus(201);
})