'use strict';

// CLASSES
// They can be reused

// Date === class;
const newDate = new Date(); // this way we use the class
// we use *new* to call the class
console.log(newDate.getDate);


// make our own class
class MyFirstClass {
    // Definition of the class
    constructor(myName, myAge) {
        this.name = myName // property of the class
        this.age = myAge;
        this.boolean = true;
        this.method = function () {
            console.log('hello world');
        }
    }
}

const myFirstInstance = new MyFirstClass('Vasilis', 33);
console.log(myFirstInstance);
console.log(myFirstInstance.name);


const mySecondInstance = new MyFirstClass();
console.log(mySecondInstance);
mySecondInstance.age = 3;
console.log(mySecondInstance.age);
mySecondInstance.method();


// Whats the purpose

class Person {
    constructor(id, userName, age, gender, sessionCookie, language = 'english') {
        this.id = id;
        this.userName = userName;
        this.age = age;
        this.gender = gender;
        this.sessionCookie = sessionCookie;
        this.logoutMethod = function () {
            delete this.sessionCookie;
        }
        this.language = language;
    }
}

const lena = new Person(1221, 'Lena', 25, 'female', '12fvfrovfovobvgvv', 'ukrainian');
console.log(lena);
lena.logoutMethod();
console.log(lena);


// empty 
const emptyPerson = new Person();
emptyPerson.userName = 'Mohamed';
console.log(emptyPerson);

emptyPerson.addStuff = 'we can add stuff'; // not recommended
console.log(emptyPerson);
console.log(emptyPerson.userName);

// Inheritance classes

class Animal { // parent class
    constructor(isMammal, name, isFur,color, age) {
        this.isMammal = true;
        this.name = name;
        this.isFur = isFur;
        this.age = age;
        this.color = color;

    }
}

class Cat extends Animal { // child class of Animal
    constructor(catName, color, race, age) {
        super(true, 'cat', true, 4) // calls the parent class
        this.catName = catName;
        this.color = color;
        this.race = race;
        this.miaou = function () {
            console.log('miaou');
        }
    }
}

const fatma = new Cat('fatma', 'black', 'house cat', 23);
console.log(fatma);
fatma.miaou();