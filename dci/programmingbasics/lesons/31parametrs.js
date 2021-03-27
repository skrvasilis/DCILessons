'use strict';

function myFunction(cat1) {
    return function innerFunction(cat2) {
        return `My cats names are ${cat1} and ${cat2}`
    }
}

let variable = myFunction('fatma');
console.log(variable('tosum'));
console.log(myFunction('fatma')('tosum'));

// other way
function myFunction2(cat1, cat2) {
    function innerFunction() {
        return `My cats names are ${cat1} and ${cat2}  `
    }
    return innerFunction();
}
console.log(myFunction2('fatma', 'tosum'));

// make it arrow

/* const myArrowFunction = (cat1) => {
    return innerFunction = (cat2) => {
        return `My cats names are ${cat1} and ${cat2}`
    }
}
console.log(myArrowFunction('fatma')('tosum')); */

// second arrow
const myArrowFunction2 = (cat1) => {
    const innerFunction = (cat2) => {
        return `My cats names are ${cat1} and ${cat2}`
    }
    return innerFunction;
}
console.log('second arrow:', myArrowFunction2('fatma')('tosum'));

// 3. arrow
const myArrowFunction3 = (cat1) => {
    return cat2 =>
        `My cats names are ${cat1} and ${cat2}`
    return innerFunction;
}
console.log('3 arrow:', myArrowFunction3('fatma')('tosum'));


// IIFE = immediately invoked function expression
// SIAF = self invoked anonymous Function
// 1. both SIAF and IIFE
console.log((function (name) {
    return 'Hello ' + name;
})('Vasilis'));

// 2. both SIAF and IIFE
let save = (function (name) {
    return 'Hello ' + name;
})('Vasilis');
console.log(save);

// not anonymous IIFE 
(function myFunk(dog) {
    console.log(dog);
})('atari');


// Advanced Parameters 
// default parameters
function defaultParameters(cat1 = 'kitty', cat2 = 'guru', cat3 = 'mofu') {
    console.log(`my cat names are ${cat1} and ${cat2} and ${cat3} `)

}
defaultParameters();


// flexible input arguments 
// in case that we don't know how many arguments we have
function kittyParty(...args) {
    for (let i = 0; i < args.length; i++)
        console.log(`hey, welcome to the party ${args[i]}`);
}
kittyParty('chewie', 'boyoz', 'Don');