// else if
// How many days till the weekend

let today = 'Thursday';
let daysTillWeekend = null;
if (today === 'Monday') {
    daysTillWeekend = 5;
}
else if (today === 'Tuesday') {
    daysTillWeekend = 4;
}
else if (today === 'Wednesday') {
    daysTillWeekend = 3;
}
else if (today === 'Thursday') {
    daysTillWeekend = 1;
}
else if (today === 'Friday') {
    daysTillWeekend = 2;
}
else {
    daysTillWeekend = NaN;
}
console.log(`days till the weekend: ${daysTillWeekend}`);
