// ERRORS

'use strict';

let vassilis = 'hello';
//let vassilis = 'bye';
// syntaxError

// arr= [];
// ReferenceError (something is not defined)


// LogicalError
// 1
if (true) {
    console.log('hello');
} else {
    console.log(false); // never meets the else case
}
// 2
function average(a, b) {
    return a + b / 2 // should be (a+b)/2;
}
console.log(average(1, 2)); // expect 1.5

// 3.
let array = [1, 2, 3, 4];
console.log(array[4]); // undefined



//Debugging
//node inspect ...
//chrome://inspect
console.log('before');
//debugger; // does not work with node
console.log('after');



// inspect scope in chrome
function myFunction() {
    let myVar = 'hello again';
    // debugger;
    console.log('run after debugger');

    let obj = {
        name: 'fatma',
        method: function () {
            // debugger;
            console.log(this.name);
        }
    }
    obj.method();
}

myFunction();

function helloName(name) {
    console.log(name);
}

helloName();

function map(mapThisFunction) {
    if (mapThisFunction) {
        return [1, 2, 3, 4].map(mapThisFunction);
    }
}

map(); // undefined
console.log(map(element => element * 2));

//better
// tryCatch
function tryCatch(mapThisFunction) {
    try {
        return [1, 2, 3, 4].map(mapThisFunction);
    } catch (error) {
        console.error('error occurred', error);
    }
    console.log('after catch try');
}

tryCatch(); // undefined
console.log(tryCatch(element => element * 2));

try {
    nonExistenceFunction()
} catch (e) {
    console.error('other error', e);
}

console.log('the rest is working');

// error object
const martinaError = new Error('give another message to the error object');
// Throw an error
try {
    // if something is going wrong
    if (false) {
        throw ReferenceError('reference ' + vassilis)
    } else {
        throw martinaError;
    }
} catch (e) {
    console.error(e);
}