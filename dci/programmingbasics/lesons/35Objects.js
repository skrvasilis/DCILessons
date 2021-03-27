// Objects => { object }

let emptyObject = {};

const myObject = {
    name: 'Vasilis',
    lastName: 'Skrimpas'
}
console.log(myObject['name']);

let realObject = { // key explicit
    name: 'Hello world', // the key is 0 the value is 'hello world'
    1: 23, // normally we don't use numbers as keys in the object
    hasCat: true,
    hasDog : null,
    isMarried : undefined,
    hasKIds : 0,
    HowOld : '',
    isHappy : NaN
};
console.log(realObject);


console.log(realObject['name']); // call it like a string
console.log(realObject[1]);

console.log(realObject.hasCat); // another way to call but it doesn't works always but we can use it 






