'use strict';

// check what month we have

let month = 3;
// print the month as a string
if (month === 1) {
    console.log('is January');
} else if (month === 2) {
    console.log('is February');
} else if (month === 3) {
    console.log('is March');
} else if (month === 4) {
    console.log('is April');
} else {
    console.log('error case');
}
// that would be too long wit but with 12 cases
// with switch case for easy comparisons but not for bigger smaller only for equality
switch (month) {
    case 1:
        console.log('is January');
        break;
    case 2:
        console.log('is february');
        break;
    case 3:
        console.log('is march')
        break;
    default: // the else case
        console.log(`It's an error case`)
}
let myMonth = 'January';
switch (myMonth) {
    case 'January':
        console.log('1st month');
        break
    case 'february':
        console.log('2nd month');
        break
}
// we cannot use && || > < 

const expr = 'mangos';
switch (expr) {
    case 'oranges':
        console.log('oranges cost 2euro');
        break
    case 'papayas': // or
    case 'mangos':
        console.log(`mangos and papayas cost 3euro`);
        break
    default: {
        console.log(`sorry we don't have ${expr}`);
    }

}
month = 16;
let daysInThisMonth = null;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInThisMonth = 31;
        break;
    case 2:
        daysInThisMonth = 28;
        break;
    case 2:
    case 4:
    case 6:
    case 9:
    case 11:
        daysInThisMonth = 30;
        break;
    default: // the else case
    daysInThisMonth =`It's an error case`;
}
console.log(daysInThisMonth);