'use strict';

function birthdayGreeting(name, year) {
    // const currentDate = new Date(1984, 5, 9); // today before 36 years
    const currentDate = new Date('9 jun 1984');
    console.log(currentDate);

    const isoDate = new Date(); // international standard thats preferred
    console.log(isoDate);
    console.log(isoDate.getFullYear());

    const shortDate = new Date('06/09/1984');
    console.log(shortDate);

    const unixTime = isoDate.getTime();
    console.log(unixTime);

    const today = new Date().getDay();
    console.log(today); // sunday is 0, monday is 1 ...saturday 6!

    console.log(Date.now()); // we get the unix time

    console.log(`Happy birthday ${name}! It's your ${isoDate.getFullYear() - year} birthday`);

}

birthdayGreeting('Martina', 1984);

const newDate = new Date();
newDate.setFullYear(2018,10,30);
console.log(newDate.toLocaleDateString());