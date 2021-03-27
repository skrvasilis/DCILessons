'use strict';


let myString = '23';
console.log(parseInt(myString));
console.log(Number(myString));
let changed = Number(myString);
console.log(changed);


let myPi = 3.14;
console.log(parseFloat(myPi));
console.log(Number(myPi));
console.log(parseInt(myPi));

let myNumber = 23;
console.log(String(myNumber));
console.log(Boolean(myNumber));
myNumber = 0;
console.log(Boolean(myNumber));



//Number.prototype.toFixed();
console.log((100/3).toFixed(2));

// exercise And operator
let areYouWearingAMask = true;
let HowMUchDistance = 1.5;
let areWeUsingAShoppingCart = true;

let youCanEnter = areYouWearingAMask && HowMUchDistance >= 1.5 && areYouWearingAMask ? 'you can shop now' : 'stay at home';
console.log(youCanEnter);

// or operator
let price = 12.5;
let cash = 2;
let card = 2;
let nfc = 4;  
console.log((cash >= price) || (card >= price) || (nfc >= price) ? 'yes,you have enough' : 'stop being poor');

// booleans all the falsy values

console.log(Boolean(0));
console.log(false ? true : false);
console.log(''? true : false);
console.log(Boolean(NaN));
console.log('infinity ',Boolean(Infinity));
console.log(Boolean(null));

// Equality
console.log(23 == '23'); // that's true number is converted to string 
console.log(23 === '23');

console.log(true == 'true'); // false boolean doesn't auto convert
console.log(false == 0); // true their value is equal
console.log(false === 0); // false the type is not equal
console.log(0 === Number(false));

// not operator

// turning a boolean upside down
// false becomes true and true becomes false
console.log(!(true));
console.log(!(1+1) ? true : `${false} false`);

// short circuit assignment 
let something = 'something';
let backup = something || 'anything';
console.log(backup);
let backup2 = undefined || 'bla';
console.log(backup2);
let emptyValues = null || 'string';
console.log(emptyValues);
let emptyValues2 = '' || 'hello';
console.log(emptyValues2);
let emptyValues3 = NaN || '23';
console.log(emptyValues3);

let extreme = NaN || undefined || null || '';
console.log(extreme);