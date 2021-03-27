'use strict';
console.log(typeof null);
let myNUmber = 12;
let myString = String(myNUmber);
console.log(typeof myString);
console.log(myString.length);
myString = 'This is the end of the world';
console.log(myString.length);
console.log(myString.substring(20));
console.log(myString.includes('world'));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
let aNumber = 12.434343434;
aNumber = aNumber.toFixed(2);
console.log(aNumber);



let myArray = [12 ,23, 34, 12];
console.log(myArray[2]);
myArray.push(1);
console.log(myArray);
myArray[0]=14.66;
console.log(myArray);
console.log(Array.isArray(myArray));

let x = 34;
let y = (x === 34) ? 'it is 34' : 'it is not 34';
console.log(y);