'use strict';

// Closures
// input => parameters - Arguments

// Closures (are about scope management-- better security for our variables)
// nested functions

function init() {
    let name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();


// modern way to write a closure

function makeFun() { // global function
    let name = 'Modern closure';
    console.log('makeFun');

    function displayName() {
        console.log(name);
    }
    return displayName;
}
makeFun(); // we don't have access to displayName()
let myFunc = makeFun(); // we declare a new function add assign the result of makeFun that contains the displayName.
myFunc(); // now we have access to both functions the main and the nested  
console.log(typeof myFunc);


// Encapsulation : Isolate scopes
// immediate calling
// IIFE === immediately Invoked Function expression  

// Anonymous function it runs only once
(function () {
    console.log('Hello babe');
})();

// Anonymous function
(function (name) {
    console.log('Hello ' + name);
})('Vasilis');


let javascriptEnabled = (function () {
    let javascriptEnable = true;
    // ... more code
    return javascriptEnable;
})();






// higher order functions

function print(string) {
    console.log(string);
}

// call back is a function passed into another function
function higherOrder(callBack) {
    let rand = Math.random();
    callBack(rand); 
    console.log(typeof callBack);
    console.log(callBack);
}

higherOrder(print);



function oneOne(x) {
    console.log(x);
}

function twoTwo(randVar, callBack) {
    callBack(randVar);
}
twoTwo((Math.random()), oneOne);


function d() {
    function e() {
        console.log('E');
    }
    return e;
}
d()();
let call = d();
call();

function multiply(firstNum) {
    return function sum(secondNum) {
        console.log('multiplication', + firstNum*secondNum);
    }
}
multiply(2)(4);
let call2 = multiply(2);
call2(4); 



