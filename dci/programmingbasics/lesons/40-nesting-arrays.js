'use strict';

// nested array two dimensional array
const months = ['january', 'february', 'march'];
const daysOfJanuary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 31];
const daysOfFebruary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28];
const daysOfMarch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 31];
const year = [
    daysOfJanuary,
    daysOfFebruary,
    daysOfMarch
];
console.log(year);
// access the first item of the first array
console.log(year[0][0]);
// the last
console.log(year[year.length - 1][year[year.length - 1].length - 1]);


const myObject = {
    january: {
        first: 1,
        second: 2,
        third: 3
    },
    february: {
        first: 1,
        second: 2,
        third: 3
    },
    march: {
        first: 1,
        second: 2,
        third: 3
    }
}
console.log(myObject);
console.log(Object.values(myObject.march));
console.log(Object.keys(myObject.march));
const keys = Object.keys(myObject)
console.log(keys);




// accessing a nested object
console.log(myObject.january.first);
console.log(myObject["january"]["first"]);
// get the last
const lastKey = keys[keys.length - 1];
console.log(lastKey);
const NestedKeys = Object.keys(myObject[lastKey]);
console.log(NestedKeys);
const lastNestedKey = NestedKeys[NestedKeys.length - 1];
console.log(lastNestedKey)
console.log(myObject[lastKey][lastNestedKey]);



// THE PROPERTY CHAIN
const propertyObject = {
    one: {
        two: {
            three: {
                four: 'five'
            }
        }
    }
};
console.log(propertyObject);

// access
console.log(propertyObject.one.two.three.four); // property chain
console.log(propertyObject['one']['two']['three']['four']);


// array inside object
const combineArrayAndObject = {
    array: [
        1, 2, 3, 4, 5
    ]
};
// first number
console.log(combineArrayAndObject.array[0]);

const last = combineArrayAndObject.array.length - 1;
console.log(combineArrayAndObject.array[last]);


const objectInsideArray = [{
        one: '1',
        two: '2',
        three: '3'
    },
    {
        one: '1',
        two: '2',
        three: '3'
    },
    {
        one: '1',
        two: '2',
        three: '3'
    }

];

// accessing item
console.log(objectInsideArray[0]['one']);
console.log(objectInsideArray[0].one);

//last one
console.log(objectInsideArray[objectInsideArray.length - 1]);
const lastObject = Object.keys(objectInsideArray[objectInsideArray.length - 1]);
const lastObjectKey = lastObject[lastObject.length - 1];
console.log(objectInsideArray[objectInsideArray.length - 1][lastObjectKey]);


// iterating over the object in the array

for (const obj of objectInsideArray) {
    console.log('for:', obj);
}
for (const obj of objectInsideArray) {
    console.log(Object.values(obj));
    console.log(...Object.values(obj));
}
// iterating over the array
for (const obj of objectInsideArray) {
    // iterating over the object
    for (const key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
}