// Creating Date Object
let date = new Date();
console.log('Date Object: ' , date);

// Print timestamp

let timestamp = Date.now();
console.log('Real Timestamp: ' , timestamp);
let timestampp = new Date(timestamp);
console.log('Passed Timestamp: ' , timestampp);

// 0 means 01.01.1970 UTC+0
let mili = new Date(0);
console.log('Milli Second: ' , mili);

// now add 24 hours, get 02.01.1970 UTC+0
let twoFourHour = new Date(24 * 3600 * 1000);
console.log('Add 24 Hour in the form of millisecond' , twoFourHour)


let ndate = new Date('2017-01-26');
console.log('New Date: ',ndate)