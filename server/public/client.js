console.log('in client');
$(document).ready(onReady);



//This is where we will have out click functions at
function onReady() {
    console.log('onReady function');
    $('#clearButton').on('click', clearNumbers);
    $('#equalButton').on('click', tableFunctions);
    gettingInformation();
}

function tableFunctions() {
    console.log('tableFunctions showing');
    let newCalculation = {
        numberOne: $('#displayOne').val(),
        running: $('#operation').val(),
        numberTwo: $('#displayTwo').val(),
        equals: $('#equalButton').val(),
        clear: $('#clearButton').val()
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
    for (let item of placeholder) {
        console.log(`${item.numberOne} ${item.running} ${item.numberTwo}`);
        $('#information').append(`
           <li>
           ${placeholder.numberOne}
           ${placeholder.running}
           ${placeholder.numberTwo}
           ${placeholder.equals}
           ${placeholder.clear}
           </li>                 
        `)
        
    }
}

// Clearing the values in the two displays
function clearNumbers() {
    console.log('clearing the numbers');
    $('#displayOne').val('');
    $('#displayTwo').val('');
}