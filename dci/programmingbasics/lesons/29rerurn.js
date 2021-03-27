function returnSomething(a, b) {
    console.log('inside', a + b);
    return a + b;
}

let output = returnSomething(2, 3);
console.log(output);

console.log(returnSomething(6, 7));



const shorterFunction = (greeting, name) => greeting + name;

let greet = shorterFunction('hey', ' Vasilis');
console.log(greet);
let greet2 = shorterFunction('hello ', 'you');
console.log(greet2);