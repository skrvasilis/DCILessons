'use strict';
// function scope === local scope 

const myName = 'Vasilis'; // global

const hellWorld = (name) => { // the function is global scope 
    console.log(myName); // i can call that because is global scope but is bad 
    console.log('hello world', name);
    console.log(name);
}

// console.log(name) this is not available
hellWorld(myName);
hellWorld(13);
hellWorld(true);

const heyWorld = (name, greeting) => {
    console.log('name:', name);
    console.log('greeting:', greeting); // undefined
}

heyWorld('Maria');
heyWorld('Maria', 'Giorgos'); // define name and greeting
heyWorld(undefined, 'vasilis');



const helloKitty = (cat2) => {
    const cat1 = 'Fatma'; // constant
    console.log('Hello kitties', cat1 , cat2);
    cat2 = 'Fatma'; // i can overwrite cat 2 but no cat1 
    console.log('Hello kitties', cat1 , cat2);
}
helloKitty();
helloKitty('Tosum');



const helloKitty2 = (cat) => {
    const cat1 = 'Fatma';
    const cat2 = cat; // this way we cannot overwrite cat2
    console.log('Hello kitties', cat1 , cat2);
    cat2 = 'overwrite';
    console.log('Hello kitties', cat1 , cat2);
}
helloKitty();
helloKitty('cat2');