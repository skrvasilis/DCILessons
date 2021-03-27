// clones vs references


// simple data types => ALWAYS A CLONE
let oldNumber = 42;
let myString = 'hello world';
let myBoolean = false;
// copy into a new variable => CREATE A NEW CLONE
let newNumber = oldNumber;
newNumber = 33
console.log(newNumber);
console.log(oldNumber);





// complex data types => ALWAYS REFERENCE
// (function)
let oldArray = [1, 2, 3];
// copy in a new variable 
let myNewArray = oldArray; // creating a new pointer t the same value
console.log(myNewArray);
myNewArray.push(4); // changes also the original
console.log(myNewArray);
console.log(oldArray); // old will change too and it's problematic 
// we need to copy in another way
let oldObject = {
    one: 1,
    two: 2,
    three: 3
}
let newObject = oldObject;
newObject['four'] = 4;
console.log(oldObject);
console.log(newObject);


// copy with clones not with a reference
// we use a trick :spread operator
// ... => unpack any complex data type


// shallow cloning of arrays and objects
let cloneArray = [...oldArray]; // this way the old array doesn't change
console.log(cloneArray);
cloneArray.push(5);
console.log(cloneArray);
console.log(oldArray);

// for objects
let cloneObject = {
    ...oldObject
};
console.log(cloneObject);
cloneObject['five'] = 5;
console.log(cloneObject);
console.log(oldObject);



let crazyObject = {
    1: 'one', // first level
    2: {
        3: 'three', // second level
        4: {
            5: 'five' // third level
        }
    }
}
console.log(crazyObject);

let cloneCrazy = {
    ...crazyObject //recursive function => for each level it will call itself again until it reach the Deepest point
};
console.log(cloneCrazy);

// recursive functions stop in the bottom case
console.log(cloneCrazy[2][4][5]); // output => five

let crazyObject2 = {
    'one': 1, // first level
    'two': {
        'three': 3, // second level
        'four': {
            'five': 5 // third level
        }
    }
}
console.log(crazyObject2.two.four.five); // output => 5