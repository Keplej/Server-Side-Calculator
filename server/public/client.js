console.log('in client');
$(document).ready(onReady);

// setting up a global for our operators

let running = [];

//This is where we will have out click functions at
function onReady() {
    console.log('onReady function');
    $('#clearButton').on('click', clearNumbers);
    $('#equalButton').on('click', tableFunctions);
    $('.functions').on('click', runningFunc);
}


//This function is for setting up for our operators
function runningFunc(calcs) {
    calcs.preventDefault();
    console.log('clicked running');
    let run = $(this).val();
    running.push(run);
    console.log(running);
}


function tableFunctions() {
    console.log('tableFunctions showing');
    let numberOne = $('#displayOne').val();
    let numberTwo = $('#displayTwo').val();
    let chosenRun = running[running.length - 1];

    let newCalculation = {
        firstNum: numberOne,
        lastNum: numberTwo,
        run: chosenRun
    }
    console.log('testing new calc', newCalculation);

    $.ajax({
        method: 'POST',
        url: '/calcformulas',
        data: newCalculation
    })
        .then(function (response) {
            console.log('adding information', response);
            gettingInformation();
        })
        .catch(function (error) {
            alert('did not work');
            console.log(error);
        })
        gettingInformation();
}


function gettingInformation() {
    $.ajax({
        method: 'GET',
        url: '/calcformulas'
    })
        .then(function (response) {
            console.log('response from the server', response);
            render(response)
        })
        .catch(function (error) {
            console.log('Error from the server', error);
            alert('Sorry!')
        })
        console.log('After making a server request...');
}


//rendering the information to the DOM, using placeholder text
//come back and work on this section because it has an error showing up!
function render(placeholder) {
    $('#information').empty();
    $('#pastCalcs').empty();
    $('#information').append(`<li>${placeholder[placeholder.length - 1].result}</li>`);
    for (let item of placeholder) {//using result when we add it in server side
        console.log(`${item.numberOne} ${item.running} ${item.numberTwo}`);
        $('#pastCalcs').append(`<p>${item.firstNum} ${item.run} ${item.lastNum} = ${item.result}</p>`)
    }
}

// Clearing the values in the two displays
function clearNumbers() {
    console.log('clearing the numbers');
    $('#displayOne').val('');
    $('#displayTwo').val('');
}