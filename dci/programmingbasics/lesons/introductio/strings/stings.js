'use strict';

// special characters

let myString = 'Hello world';
let mySpecialString = 'Hello\nworld!'; // new line
console.log(mySpecialString);
mySpecialString = 'Hello \" world'; // quotemark in the middle
console.log(mySpecialString);
mySpecialString = 'Hello \t world'; //  tab
console.log(mySpecialString);


/* Horizontal Tab is replaced with \t
Vertical Tab is replaced with \v
Nul char is replaced with \0
Backspace is replaced with \b
Form feed is replaced with \f
Newline is replaced with \n
Carriage return is replaced with \r
Single quote is replaced with \'
Double quote is replaced with \"
Backslash is replaced with \\  */

//string interpolation
// Only works with backticks ``
console.log(`back ticks`);
let interpolation = 'interpolation';
console.log(`back ${interpolation} ticks`);
let placeHolder = 'hello';
let secondPlaceHolder = 'world';
console.log(`${placeHolder} ${secondPlaceHolder}`);
console.log(`${placeHolder}           ${secondPlaceHolder}      i need more s p a c e s`);
console.log('s p  a c eeeees ss');
console.log(` ' " " ' `);
console.log('length of the string ' + placeHolder.length);

// make it a question with booleans
let areYouMarried = false; 
let isItACat = true;

 let loremIpsum = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse laudantium ducimus sunt. Dolores deserunt voluptas ad corrupti similique rerum veritatis quas atque quos, beatae illo, autem exercitationem tempore. Cumque, nemo!';
 console.log(loremIpsum.length);
 console.log(loremIpsum[10]);


