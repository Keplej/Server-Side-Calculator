console.log('in client');
$(document).ready(onReady);



//This is where we will have out click functions at
function onReady() {
    console.log('onReady function');
    $('#clearButton').on('click', clearNumbers);
    $('#equalButton').on('click', tableFunctions);
    render();
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
}


//rendering the information to the DOM, using placeholder text
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