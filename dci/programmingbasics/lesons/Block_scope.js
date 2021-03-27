// block scope
let globalScope = 'hello global scope'

if (true) {
    let blockScope = 'hello block scope';

    // only inside the if is available
    console.log(blockScope);
} else {
    console.log(globalScope);
    //  console.log(myVar); // myVar is not defined
}

// console.log(myVar); // myVar is not defined
console.log(globalScope);


// variables
// var is available globally even ig you have declared it inside a block 
{
    var hello = 'world';
    var hello = 'hello'; // there is no check for existing variables
}
console.log(hello);



let globally = 'i need this everywhere';
// the let statement declares a block-scoped local variable,  
let hello2 = 'world';
// let hello = 'hello' // error
// const is like let in scopes
{
    const MY_NAME = 'Peter';
    console.log(MY_NAME);
}
// Console.log(MY_NAME); error

// when should i ise if, when should i use ternary operator
let date = 'wednesday';
if (date === 'wednesday') {
    console.log('it is 2 days until the weekend');
}

console.log(date === 'wednesday' ? 'it is 2 days until the weekend' : 'it is not wednesday');

if (date === 'wednesday') {
    console.log('it is 2 days until the weekend');
}
if (date === 'tuesday') {
    console.log('it is 3 days until the weekend');
}
if (date === 'monday') {
    console.log('it is 4 days until the weekend');
}

// math problems
let number = 42;

if (number % 2 === 0) {
    console.log(number/2);
    console.log(number/2/2);
}
console.log(number%2 === 0?` ${number/2}  ${number/2/2} `: number);
