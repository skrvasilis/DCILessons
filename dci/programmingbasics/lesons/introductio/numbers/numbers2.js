'use strict';

// math library

let cake = 13;
let party = 5;
let calculation = cake / party;
console.log(calculation);

let money = 100;
let partyGuests = 13;
let spend = money / partyGuests;
console.log(spend);

console.log(Math);
// Round up numbers
// Math.ceil()
console.log(Math.ceil(spend));
console.log(`round up ${Math.ceil(3.4444444)}`);

// round down numbers
// Math.floor()
console.log(Math.floor(spend));

// to get the pi
console.log(Math.PI);



console.log(Math.round(3.444)); // <0.5 rounds down so here we get 3
console.log(Math.round(3.555)); // >0.5 rounds up so here we get 4


// Generate random numbers
console.log(Math.random()); // generates a number between 0(inclusive) and 1 (exclusive)

// let's generate a integer between 0 and 10
let myNumber = Math.random();
myNumber *= 10; 
console.log(myNumber);
myNumber = Math.round(myNumber);
console.log(myNumber);
let parseBig = parseInt(myNumber);
console.log(parseBig);


// Math.max()  Math.min()
console.log(Math.max(1 ,2 ,3 ,4 ,5));
console.log(Math.min(100 , 0 ,12, -2));

console.log(Math.max(100000, Infinity));
console.log(Math.min(100000, -Infinity));





