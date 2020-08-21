// Additional lecture on Strings

let title = 'HMTL,CSS & JavaScript';
let autor = 'Ahmed Zahid';
let likes = 10000;

// String Contatenate

let result = 'The course named as '+ title + ' author name is ' + autor + ' crossed likes '+ likes;
console.log('Query : ',result);

// String Template

result = `The course named as ${title} author name is ${autor} crossed likes ${likes}`;
console.log('Query :',result);

// HTML Tempalte

let html = `

<h1> The course named as ${title}</h1>
<p> author name is ${autor}</p>
<span> crossed like ${likes} </span>

`;
console.log('html Object: ',html);

// Arrays

// Declaration of the array

let names = ['ahmed','zahid','muhammad'];

// Access the value

console.log(names[1]);

// change the value in the array

names[1] = 'boy';

console.log(names[1]);

// integer array

let age = [13,14,15,16,17,18];
console.log('age location at index 5',age[5])

// Random array having different data types

let randomArray = ['muhammad','ahmed',25,'old']
console.log('RandomArray: ',randomArray);

// length of the Array

let arrayLength = randomArray.length;
console.log('arrayLength: ',arrayLength);

// Join the arary into single string

let joinString = randomArray.join('');
console.log('joinString: ',joinString);

// Return the index of the String search

let currentIndex = names.indexOf('ahmed');
console.log('currentIndex: ',currentIndex);

// Contatenate two Arrays

let bigString = names.concat(['family1','family2']);
console.log('bigString: ',bigString);

// Push and Pop array element

let pushElement = names.push('25');
// it returns the length after adding the 25
console.log('pushElement: ',pushElement);

let popElement = names.pop();
// it returns will element it pop
console.log('popElement: ',popElement);

// NULL and Undefined

let Age;

console.log(Age,Age + 3 , `My age is ${Age}`);
Age = null;
console.log(Age,Age + 3 , `My age is ${Age}`);

// Boolean & Comparisons

console.log(true,false,"true","false");

// methods can return booleans 

let email = 'ahmedzahid.pk21@gmail.com';
let familyNames = ['muhammad','ahmed','zahid'];

result = email.includes('.');
console.log('if present return true: ',result);
result = familyNames.includes('muhammad');
console.log('if names present return true: ',result);


// comaprison operators

age = 25;
// returns ture if the below condition meets
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

name = 'saqib';
// return true if the condition meets
console.log(name == 'saqib');
// it is case-sensitive
// it compare alphabetically s > c it right returns true
console.log(name > 'crystal');

// the weightage of the lowercase is greater than uppercase
console.log(name > 'Saqib');
console.log(name > 'zahid');
console.log(name > 'Zahid');
