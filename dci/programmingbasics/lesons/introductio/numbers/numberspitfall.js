'use strict';

// number pitfalls
let calculate = 'hello world' * 5; // cannot convert string to number
console.log(calculate); // NaN
console.log(typeof(calculate)); // typeof NaN is number


// checking if something is not a number
console.log(isNaN('hello world'));
console.log(isNaN(16));
console.log(isNaN(NaN));

console.log(0.1+0.2); // javascript is not a perfect calculator
console.log(600.90/200.30);  


// constants in math
console.log(Math.PI); // it cuts after 15 digits


// math.toFixed()
let money = 100;
let partyGuests = 13;
let tip = money / partyGuests;
console.log(tip);
console.log(tip.toFixed(2)); // cuts of after the second digit and convert it to a string!
let tipAfter = tip.toFixed(2);
console.log(typeof(tipAfter));


let myNumber = 1/2;
console.log(myNumber.toFixed()); // it's like it uses math.round
myNumber = 1/3;
console.log(myNumber.toFixed());


let myRoundingError = 0.1 + 0.2;
myRoundingError = myRoundingError.toFixed(1); //cutting off
myRoundingError = parseFloat(myRoundingError);// make it a number again
console.log(myRoundingError);

// NaN
let bla = 3 / 'hello';

console.log(bla === NaN ? 'it\'s a NaN' : 'it\'s not a NaN');

let hello = Infinity;
console.log(typeof hello);
console.log(Infinity === Infinity); // true
console.log(5 * Infinity); // infinity
console.log(5 / Infinity); // everything divided by infinity is zero
console.log(5 / -Infinity);
console.log(Infinity - Infinity); 

