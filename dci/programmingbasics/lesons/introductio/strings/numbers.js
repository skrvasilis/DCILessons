'use strict';
let helloWorld = 'hello world';

let number = 10;

console.log(`${number} ${helloWorld}`);


//integer
let integerNumber = 28;
console.log(typeof(integerNumber));

//floating point number
let floatingNumber = 3.567;
console.log(typeof(floatingNumber));


let myStringNumber = '10999 Berlin';
console.log(myStringNumber);

// converting strings into numbers
//Number.prototype.parseInt()
let myIntegerNumber = parseInt(myStringNumber);
console.log(myIntegerNumber);
console.log(parseInt(myStringNumber.substring(0, 5)));


let secondExample = 'martina bretnastr. 23';
console.log(parseInt(secondExample));
console.log(parseInt(secondExample.substring(secondExample.length- 3)));

let myStringFloat = '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899'
console.log(parseInt(myStringFloat));
console.log(parseFloat(myStringFloat)); // it keeps the first 15 characters after the coma
let secondTry = 'admiral str. 23.23';
console.log(parseFloat(secondTry));
console.log(parseFloat(secondTry.substring(secondTry.length - 5)));

let className = '28 Dumplings';
console.log(parseFloat(className));


// convert number to string
let myNumber = 23;
let myString = '' + myNumber;
console.log(myString);
let myStringAgain = myNumber + '';
console.log(myStringAgain);


// Mathematical Expressions
// + - * / % 
// Modulo
let moduloNumber = 50;
console.log(moduloNumber % 23); // 4 remains
// 23 * 2 = 46
// 50 - 46 = 4 this is what remains after the division

let modulo = 46;
console.log(modulo % 23); // remains 0

let evenNumber = 12; 
let oddNUmber = 23;

console.log(evenNumber % 2);