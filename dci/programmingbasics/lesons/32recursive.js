'use strict';

// recursive functions
// functions that call itself


(function selfInvoking() {
    console.log('i am a self invoking function');
})();


// recursive function
function recursiveFunction() {
    console.log('I am a recursive function');
    recursiveFunction(); // calling itself inside the function
    // produces an infinite loop
};
// recursiveFunction();
let sum = 0;

function sumToZero(num) {
    sum += num;
    if (num === 0) { // bottom case or base case 
        return sum;
    } else {
        return sumToZero(num - 1);
    }
}
let result = sumToZero(10);
console.log(result);




// super sort version
let sumNumRecursive = num => num ? sumNumRecursive(num - 1) + num : 0

console.log(sumNumRecursive(10));

//  factorization
function factorization(num) {
    let sum = 1;
    for (let i = num; i > 0; i--) {
        sum *= i;
    }
    return sum;
}
console.log(factorization(5));

// as recursive
let sum2 = 1

function factorizationRecursive(num) {
    if (num === 0) {
        return sum2;
    } else {
        sum2 *= num;
        return factorizationRecursive(num - 1);
    }
}

console.log(factorizationRecursive(5));
