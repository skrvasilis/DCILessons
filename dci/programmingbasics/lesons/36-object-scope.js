'use strict';
// scopes 
// global/ local / function / Block {}

// const namespace = {keys : values}


const newExample = {
    hello: 'world',
    123: 456,
    myFunction: function () { // method
        console.log('hello function');
    }
}
console.log(newExample);
newExample.myFunction(); //  we call the function


const marcelLibrary = {
    sayHello: function () {
        console.log('hello');
    },
    sayGoodbye: function () {
        console.log('good bye');
    }
};
marcelLibrary.sayGoodbye();
marcelLibrary.sayHello();



Math.max(); // math is an object and max is the function inside the object
console.log(typeof (Math));
console.log(Math);
// methods are properties with function values

console.log(marcelLibrary.hasOwnProperty(123));
console.log(newExample.hasOwnProperty(123));

const martinasLibrary = {
    author: 'Martina',
    sayHello: function (name) {
        console.log('hello ' + name);
    },
    sayGoodbye: function (name) {
        console.log('good bye ' + name);
    },
    showCredits: function () {
        console.log('this library was written by ' + this.author); // *THIS* is bound to the object scope
    }
};

martinasLibrary.sayGoodbye('Bleda');
martinasLibrary.sayHello('Bleda');
martinasLibrary.showCredits();


// object, method, this

const objectLiteral = {
    property: 'some value',
    method: function () {
        return this;
    },
    secondMethod: function () {
        return this.property;
    }

}
console.log(objectLiteral.method()); // equal  to
console.log(objectLiteral); // this


const newVar = objectLiteral.secondMethod();
console.log(newVar);


// bind helps with the context 

const myModule = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

const unboundGetX = myModule.getX;
// console.log(unboundGetX()); 

const boundGetX = unboundGetX.bind(myModule);
console.log(boundGetX());