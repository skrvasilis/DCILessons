let myArray = [10, 20];
let a, b;
[a, b] = myArray;
[a] = myArray;
console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

let rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

let x, y, z;
[y, z, ...x] = [33, 55, 77, 88];
console.log(x);


// object 
// must have the same name/identifier
let i, j;
({
    i,
    j
} = {
    i: 10,
    j: 20
});

console.log(i);
console.log(j);


let k, l, m;
({
    k,
    l,
    ...m // give me the rest
} = {
    k: 10,
    u: 20, // this goes to m because the nae is different
    o: 40,
    p: 100
});
console.log(m);

// Function
function easyFunction(arr) {
    let num1, num2, num3, num4;
    [num1, num2, num3, num4] = arr;
    return (num1 + num2 + num3 + num4) / 4;
}
console.log(easyFunction([1, 2, 3, 4]));

// shorter way
function shortFunction([num1, num2, num3, num4]) {
    return (num1 + num2 + num3 + num4) / 4;
}
console.log(shortFunction([1, 2, 3, 4]));


// leave out something
const [c, , e, f] = [44, 66, 88, 99];
console.log(c);
console.log(e);
console.log(f);


const alphabet = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];
const [letterA, letterB, , , letterF] = alphabet;
console.log(letterA);
console.log(letterB);
console.log(letterF);