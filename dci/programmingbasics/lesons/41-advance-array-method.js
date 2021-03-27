// H.O.F = higher order function 
// Passing the function as an argument!
function tripleMe(num) {
    return num * 3;
}

function doubleMe(num) {
    return num * 2;
}

function callBackFunction(callBack, num) {

    console.log(callBack(num));

}

callBackFunction(doubleMe, 5);
callBackFunction(tripleMe, 5);




const myArray = ['Fatma', 'Mofu', 'Guru', 'Boyoz'];
for (const value of myArray) {
    console.log(value);
}
// FOREACH()
/* Array.prototype.forEach(); // void means it doesn't return anything */

myArray.forEach(function (value, index, array) {
    console.log(value.toUpperCase());
    array[index] = value.toUpperCase();

});
console.log(myArray);


function toLowerCase(value, index, array) {
    array[index] = value.toLowerCase();
};
myArray.forEach(toLowerCase);
console.log(myArray);



const numberArray = [10, 11, 33, 5];
numberArray.forEach(function (value, index, array) {
    array[index] = value * 2;
})
console.log(numberArray);

/// make it 0
numberArray.forEach(function (v, index, array) { // we don't need the value but it must be there cause the first arg is always the value cause the order is always the same
    array[index] = 0;
})
console.log(numberArray);


// ADVANCE ARRAY METHODS
// MAP
// MAP excepts an array as an input and returns an array as a result
const oldArray = [4, 7, 10, 30];
// map function

// const newArray = [5, 8, 11, 31];
const newArray = oldArray.map(function (value, index, array) {
    return value + 1;
});
console.log(newArray);
console.log(oldArray);
// sort way
const shortNewArray = oldArray.map((value) => value + 1);
console.log('sort', newArray);
console.log('sort', oldArray);

//how many of the items are even numbers?
// REDUCE 
Array.prototype.reduce
const evenNumbers = oldArray.reduce(function (previousValue, currentValue, currentIndex, array) {
    if (currentValue % 2 === 0) {
        return previousValue + 1;
    }
    return previousValue;
}, 0); // 0 is the previous number. if we don't give it starts with the first item of the array
console.log(evenNumbers);


oldArray2 = [12, 3, 22, 33, 4, 54, 5]
const evenNumbers2 = oldArray2.reduce((previousValue, currentValue) => currentValue % 2 === 0 ? previousValue + 1 : previousValue, 0);
console.log(evenNumbers2);

const highestNum = oldArray2.reduce(function (previous, current) {
    if (previous > current) {
        return previous;
    } else {
        return current; // the cuValue becomes the prValue in the next iteration
    }
})
// the sort way
const highestNum2 = oldArray2.reduce((previous, current) => previous > current ? previous : current);



const multipleNum = oldArray2.reduce(function (previous, current) {
    return previous * current;

})

console.log(multipleNum);
console.log(highestNum);
console.log(highestNum2);


// filter
// array.prototype.filter
const myFilterArray = [10, 15, 30, 45, 66];
const outPut = myFilterArray.filter(function (value) {
    return value % 2 === 0;
});
console.log(outPut);


// filter 2
const cats = ['Kathy', 'Nian', 'Benny', 'Lua', 'Chappy'];
// get the cats that ends with y
const catsOutput = cats.filter(function (value) {
    // return  value[value.length-1] === 'y';
    return value.endsWith('y');
})
console.log(catsOutput);

// sort 
const catsOutput2 = cats.filter((value) => value.endsWith('y'));
console.log(catsOutput2);