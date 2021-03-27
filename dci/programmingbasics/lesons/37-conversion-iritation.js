'use strict';

const objectLiteral = {
    key: 'Dumplings',
    properties: 'hello world',
    method: function () {
        console.log('good morning ' + this.key);
    }
};
objectLiteral.method();
console.log(objectLiteral.properties);
console.log(objectLiteral);

// ****taking the method out of the object****
let takeOutMethod = objectLiteral.method; // assign the method to a new variable
takeOutMethod = takeOutMethod.bind(objectLiteral); // bind the global variable with the object
takeOutMethod(); // calling the method

// array 
const anything = ['item1', 'item2', 'item3', 123, true];

// How can we convert and iterate items in objects/arrays

// Iteration
const myArray = [2, 4, 6, 8, 10];
for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
}
for (const anyName of myArray) {
    console.log(anyName);
    if (anyName === 4 || anyName === 10) {
        console.log(anyName * 10);
    }
}
// Iterate a string
const myString = 'Hello world';
for (const myCharacter of myString) {
    console.log(myCharacter);
}


const myObjectAgain = {
    firstName: 'Martina',
    lastName: 'Freudorfer',
    age: 36,
    cats: 2,
    married: false
};

for (const myKey in myObjectAgain) { // *in* instead of *of*
    console.log(myKey);
}
// different way to get the keys
console.log(Object.keys(myObjectAgain));
const allMyKeys = Object.keys(myObjectAgain);

for (const myKey in myObjectAgain) {
    console.log(myObjectAgain[myKey]);
}

console.log(Object.keys(myObjectAgain));
// get the values of the object 
console.log(Object.values(myObjectAgain));


// convert an array to an object

const newArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const newObject = {};
for (let i = 0; i < newArray.length; i++) {
    newObject['dayOfTheWeek' + i] = newArray[i];
}
console.log(newObject);


// convert an array to an object with for of loop

const newObjectForIn = {};
let i = 0;
for (const item of myArray) {
    newObjectForIn['dayOfTheWeek' + i] = newArray[i];
    i++
}
console.log(newObject);