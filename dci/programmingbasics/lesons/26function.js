'use strict';

// the parts which we give inside a function called 
// outside of the function: function arguments/ args 
// inside the function: parameters / input vars

//function<name>(parameters) {}

function myFunction(num) {
    console.log(num + 5);
}

myFunction(25); // calling the function with arg 25
myFunction(150); // calling the function with arg 150

console.log(typeof (myFunction));

function otherFunction() {
    console.log('my first function');
}


otherFunction();
otherFunction();
otherFunction();
otherFunction();


function addTwoNumbers(a=1, b=1) {// default parameters
    console.log(a + b);
}

addTwoNumbers(); // calling the function with the default parameters
addTwoNumbers(4, 2);

// better way to write a function anonymous function
const plusTwoNumbers = function (a=2, b = 12) {
    console.log(a+b)
} 

plusTwoNumbers(123,11);
plusTwoNumbers();

const isHotelBooked = function (date,hotelFull) {
    if (hotelFull || date === '31.12') {
        console.log('full');
    }
    else {
        console.log('you, can come');
    }
}
isHotelBooked('21.12',false);

// third way of writing a function(arrow function)
const newFunction = (a,b) => {
    console.log(a/b);
} 
newFunction(12,2);