// while loop

// endless loop
/* while(true) {
    console.log('hello world');
} */


let index = 0;
while(index <10) {
    console.log(index+' hello world');
    index++;
}
console.log(`${index} after the while loop`);

let num = 0;
while(num<10) {
    num++;
    console.log(num+' hello world');
}
console.log(`${num} after the while loop`);

while(false) {
    console.log('fuck off world');
}
let myNum = 100;
while (myNum>0) {
    console.log(myNum + ' times');
    myNum--;
}


// Second way
let myNum2 = 0;
do {
    console.log(myNum2);
    myNum2++
} while (myNum2<10)


let i =0;
while (i<10) {
    if (i%2===0) {
        console.log(i ,'yes');
       }   else {
        console.log(i ,'no');
    }
    i++;
}

let ii =0;
do {
    if (ii%2===0) {
        console.log(ii);
       }   else {
        console.log('nanna');
    }
    ii++;
} while(ii<10)
