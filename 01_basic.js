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


// Lose vs Strict Comparison

age = 25;
// Lose Comparison where the string converted into numbers then compare it.
console.log(age == 25);
console.log(age == '25');
// Strict Comparison where it cannot convert any type of string to number conversion.
// It just direct compare the thing well it is ok or not.
console.log(age === 25);
console.log(age === '25');

// Data Type Conversion

// implicit vs explicit conversion

// implicit -> JavaScript itself converts it behind.
// explicit -> We itself convert one data type to another.
// Also Called Type Casting
let num = '25';
result = Number(num);
console.log('Result: ',result, typeof result);
num = 25;
result = String(num);
console.log('Result: ',result,typeof result);

// Control Flow Basics
// For Loop

for(let i = 0; i < 5; i++){
  console.log("i= ",i);
}
// in the end of the For Loop their is no semicolon
let databaseNames = ['ali','ahmed','saqib'];
// save data in the html object through loop
for (let i = 0; i < 3; i++){
  html=`<h1>Current name is ${databaseNames[i]}</h1>`;
  console.log(html);
}

// While loop

let i = 0;
while(i < databaseNames.length){
  console.log('i: ',databaseNames[i]);
  i++;
}

// Do While Loops
// such conditions where you want to run the code atleast for onces and then check by condition
// here also we cannot add the semicolon at the end of the code block

 i=0;
 do{
   console.log('i:: ',i);
   i++;
 }while(i < 4);

 // if, else and else if conditional statement
 // it also cannot have the semicolon at the end of the if block

 if(4 < 5){
   console.log('Hey, I am in if block'); 
 }else if(5 > 8){
  console.log('Hey, I am in else if block');
 }else{
   console.log('Hey, I am in else block');
 }

 // Logical Operators && AND (and) || OR Operators
 
 if(2>5 || 3<5){
   console.log('condition is true');
 }else{
   console.log('condition is false');
 }


//  Logical NOT
let no = false;
if(!no){
  // it runs the condition of if is true
  console.log('as if condition is true');
}

// Break & Continue
// Beak get out of the Loop
// Continue keyword after that it agian go to the loop and ignore the below code

let scores = [20,25,0,30,100,120];
for (let i = 0; i< scores.length; i++){
  if(scores[i] === 0){
    continue;
    // after that keyword the below code is not going to run
  }else if(scores[i] === 100){
    console.log('Congratulation you go the highest marks');
    break;
  } 
}

// Switch Statments

// Onces any of the condition is true it also execute the other block also
// and to tackle the above problem we use the {break} keyword


let grade = 'C';

switch(grade){
  case 'A':
    console.log('You got A Grade!');
    break;
  case 'B':
    console.log('You got B Grade!');
    break;
  case 'C':
    console.log('You got C Grade!');
    break;
  case 'D':
    console.log('You got D Grade!');
    break;
  default:
    console.log('Not a valid number');
    break;
}

// Variables and the Local Scope


// if we are using the {var} keyword that makes an issue/ complexity as the variable
// is accessable outside of it's block
let laptopNum = 2;

if(true){
  // it allows to redefine the same name of the variable inside the block also
  //laptopNum = 40; // Accesing the Global Variable
  let laptopNum = 60; // Local Scope 
  // the scope of the variable is limited to the brakets not far from that.

  console.log('inside the block ',laptopNum);
}
console.log('outside the block ',laptopNum);