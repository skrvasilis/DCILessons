// ARRAYS   
// variables are located inside or outside a function

// => ARRAY can contain several values 


const newArray = new Array() // empty array
console.log(newArray);
const sameArray = []; // empty array
console.log(sameArray);


const myArray = ['string', true, 332];

console.log(myArray);
console.log(typeof myArray); // ===>> object
console.log(Array.isArray(myArray)); // ===>> we check if it's array  
console.log(myArray[0]); // accessing parts of the array
console.log(myArray[2]); // accessing parts of the array
console.log(myArray.length); // ===>> 3
console.log(myArray[myArray.length - 1]); // ===>> last variable

// we want to change parts of the array
myArray[1] = false;
console.log(myArray);
delete myArray[1];
console.log(myArray);
myArray[3] = 'test'; // adding 
console.log(myArray);
myArray.push(2333); // adding at the end
console.log(myArray);


// 
const afterArray = ['Alejandra', 'Mohamed', 'Marcell', 'Daniel', 'Vassilis'];
// afterArray[7] = 'Vadim'; 
// afterArray[afterArray.length] = 'Vadim';

console.log(afterArray);

// BASIC ARRAY METHODS 

//search in an Array
console.log(afterArray.indexOf('Marcell')); // position of first occurrence
console.log(afterArray.indexOf('Robert')); // ===>> negative -1

// Add in an array
afterArray.push('Vadim'); // adds at the end of the array
// console.log(afterArray);
let newLength = afterArray.push('Andrea', 'Edgar');
console.log(newLength);
// console.log(afterArray);


// second way of adding array.prototype
let afterLength = afterArray.unshift('Lena', 'Vincenzo'); // adds in the beginning of the array
console.log(afterLength);
console.log(afterArray);

// REMOVE

afterArray.pop(); // deletes the last element in the array
console.log(afterArray);

let whoRemoved = afterArray.shift() // removes the first element
console.log(whoRemoved);
console.log(afterArray);


// REVERSING AN ARRAY
// array.prototype.reverse();
afterArray.reverse()
console.log(afterArray);


// sort
const my44Array = [23, 45, 76, 1, 88888, 54];
console.log(my44Array.sort());

const months = ['March', 'Jan', 'Feb', 'Dec', 'August'];
console.log(months.sort());
