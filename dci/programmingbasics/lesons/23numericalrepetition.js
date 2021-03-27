'use strict';
// DRY principle ==> don't repeat yourself

// i = index = counter variable
let i =29; // global scope

// for loop 
let sum = 0;
for (let i=1; i<=10;  i++ ) { // blok scope
    console.log(i);
    sum += i; 
}
console.log(sum);
console.log(i);

while (i<35) {
    console.log('while loop' , i);
    i++;
}
for (let i2 = 0, sum2 = 0; i2<10; i2++) { // 2 different let statements 
    sum2 += i2;
    console.log(sum2);
}
// shortest for loop ever!!!
/* for (;;) {
    console.log('endless');
} */

// nested loop
for (let i3 = 0; i3 <5 ; i3++) {
    console.log(i3);
    for (let j = 0; j <3; j++) {
        console.log('this is j ' , j);
    }
}


// continue
// we want to print 12456789
for (let i = 0; i <10; i++) {
    if (i === 3){
        continue; // goes to the next
    }
    console.log(i);
}

// break is the opposite of continue it stops the loop
// it stops at 3
let myVar = 0;
while (myVar <6 ) {
    if (myVar === 3) {
        break;
    }
    myVar++ ;
}
// it stops at 5
console.log(myVar);
for (let myNum = 1; myNum<=10; myNum++) {
    if (myNum ===5) {
        break
    }
    console.log(myNum);
}
