// dates and times

// Below is the constructor of the Date Class.
// Basically it is used to initiate the Class Object.
let now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times

console.log('getFullYear',now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate',now.getDate());
console.log('getDay', now.getDay());
console.log('getHours:',now.getHours());
console.log('getMinutes: ', now.getMinutes());
console.log('getSeconds: ', now.getSeconds());

// Time Stamp
// Really used to calculate the time between the two specified dates.
// It is calculated from the 1st Junuary 1970 till 12:00 today.

console.log('timestamp', now.getTime());
// the above is in milli seconds till now.

// Data Strings

console.log(now.toDateString());
console.log(now.toTimeString());
// Local Time on your Machine/Computer
console.log(now.toLocaleString());

// timestamps

const before = new Date('February 1 2020 7:30:59');
// There are many formats to put the date we want to enter
// This is one of its method.
now = new Date();

// Making difference of that dates.

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`the blog was written ${days} ago`);

// converting timestamps into date objects

const timestamp = 16758522466;
console.log(new Date(timestamp));