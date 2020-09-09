// Lecture # 01 dates and times

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
// Lecture # 02
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

// Lecture # 03 Digital Clock 

const clock = document.querySelector('.clock');

// function which is updating every single second.

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span> 
  `;
  clock.innerHTML = html;
};

// This will fire in every second and it is an infinite amount of time.
setInterval(tick, 1000);

// Lecture # 04 Date & Time Utility
// https://date-fns.org/
// Search for format in documentation.

now = new Date();

console.log(dateFns.isToday(now));
// the above line returns true or false as the compare date is today or not

// formatting options

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now,'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd', 'Do', 'MMMM', 'YYYY'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// Comparing Dates

const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now,before));
// To put the keyword ago
console.log(dateFns.distanceInWords(now,before, {addSuffix: true}));







