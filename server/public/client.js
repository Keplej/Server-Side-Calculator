console.log('in client');
$(document).ready(onReady);



//This is where we will have out click functions at
function onReady() {
    console.log('onReady function');
    $('#add-button').on('click', adding);
}

function adding() {
    console.log('we pressed adding');
    operator = '+';
}