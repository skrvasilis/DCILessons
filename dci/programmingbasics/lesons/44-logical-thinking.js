'use strict';
// theory about complex code
// how complex is your code
// BIG O NOTATION


for (let i = 0; i < 10; i++) {
    console.log('big O notation');
}
// ALWAYS 10 TIMES ==> BIG O (1) ==> Constant Complexity

function bigONotation(num) {
    for (let i = 0; i < num; i++) {
        console.log('big O notation');
    }
}
// this loop will always run (num) times
// ==> big O (n) ==> Linear Complexity

function bigONotation2(num, num2) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num2; j++) {
            console.log('big O notation');
        }
    }
}
// this loop will always run (num * num2) times
// ==> big O (n*m) 


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort()
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]


// higher order function
/* array1.sort(function (a, b) {
    console.log('a', a);
    console.log('b', b);
    return a - b;  
})

console.log(array1);
 */
array1.sort(function (a, b) {
    if (a > b) {
        return 1
    } else {
        // shift the number to the left
        return -1;
    }
})

console.log(array1);