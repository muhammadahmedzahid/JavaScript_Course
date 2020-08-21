
// Object literals

let user = {
  firstName : 'ahmed',
  lastName : 'zahid',
  passion : 'web-developer',
  phoneNo : '+92 308 2541358',
  emailAddress : 'ahmedzahid21.pk@gmail.com',
  Address : 'Canda'
}

// Access the data in dot and Square braket notation

console.log(user.firstName);
console.log(user['passion']);

// Changing the literal name by dot and Square braket notation

user.firstName = 'ali';
user['lastName'] = 'ahmed';
console.log(user.firstName);
console.log(user.lastName);

// Checking type of the user

console.log('Type of user: ',typeof user);