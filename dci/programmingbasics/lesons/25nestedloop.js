// nested loops

// increment or decrement
// index, iterator, counter
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log('j ', j);
    }
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log('before', i);
    for (let j = 10; j <= 13; j++) {
        console.log('inside', j);
        console.log(i);
    }
    console.log('after', i);
}

for (let i = 0; i < 10; i++) {
    let myString = '';

    myString += ' ';

    for (let j = 0; j < i; j++) {
        myString += '*';


    }
    console.log(myString);

}

for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    let myString = '';
    for (let k = 20; k > i; k--) {
        myString += 'k';
    }
    for (let j = 0; j <= i *2; j++) {
        myString += '*';
    }
    for (let l = 20; l > i; l--) {
        myString += 'l';
    }
    console.log(myString);
}

for (let i = 1; i<=10; i++) {
    let space = '';
    for (let j = i; j<10; j++) {
        space += 'j';
    }
    for (let k = 0; k<(i*2) - 1; k++) {
    space += '*';
    }
    console.log(space);
}


