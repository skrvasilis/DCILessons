'use strict';

let title = 'hello welcome to my website';

console.log(title.length);
console.log(title[title.length-1]);
console.log(title[0]);
// goal: make all big
//basic string method
console.log(title.toUpperCase());
console.log(title);
title = title.toUpperCase();
console.log(title);
title = title.toLocaleLowerCase();
console.log(title);
// substring method: String.prototype.substring()
console.log(title.substring(1, 5));
title = (title[0].toUpperCase() + title.substring(1));
console.log(title);

// Goal Website
title = ( title.substring(0, 20) + title[20].toUpperCase() + title.substring(21));
// substring inclusive start  / exclusive end 
console.log(title);

let newExample = 'Vadim  Natia Daniel Edgar Marcell Voldemort';
console.log(newExample.includes('Natia'));
console.log(newExample.includes('Lena'));
console.log(newExample.includes('Vadim') ? 'Yes' : 'No');
console.log(newExample.includes('Natia', 43)); // it starts counting from 43position

// remove padding spaces
// String.prototype.trim()

let userName = '         martina     odos    ';
console.log(userName);
userName = userName.trim(); // spaces in the middle of the string will be preserved
console.log(userName);
