'use strict';

let arrayInAnArray = [
    [1, 2, 3, 4],
    [8, 11, 7, 9],
    [7, 0, 5, 8, 9],
    [12, 22, 3, 44, 2],
    [3, 10, 26, 7]
];


// console.log(arrayInAnArray[0][1]);

for (let i = 0; i < arrayInAnArray.length; i++) {
    for (let j = 0; j < arrayInAnArray[i].length; j++) {
        console.log(arrayInAnArray[i][j])
    }
}