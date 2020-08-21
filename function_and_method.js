

// Function Declaration
sum(); // cannot throw an error it is fine
function sum(){
  let num1 = 10;
  let num2 = 20;
  console.log('Sum of number is',num1+num2);
}

sum();
// you can define the above function below and call the function first it cannot throw an issue

// Function Expression
// This is gonna be widely used in future.
//Sum();   // this will throw an error
let Sum = function(){

  console.log('sum in expression function is: ',20);
  // important!!! you have to put the semi-colon at the end of that.
};
Sum();


// Argument vs Parameters
// the variables written in the below is called Parameters

let result = function(firstname,lastname){
  console.log('in result function',firstname,lastname);
}
// the values which we gave to the reuslt is known as Arguments
result('muhammad','ahmed');

// the function where we set up an initial name

let print = function(firstname = 'ali', secondname = 'haider'){

  console.log('Complete Name: ',firstname,' ',secondname);
}
print('ahmed');

// Return value from the function

let calArea = function(radius){
  area = 3.14 * radius ** 2;
  return area;
};
let newArea = calArea(5);
console.log('Area of the circle: ',newArea);


// Arrow Functions 

// we cannot bound to write the function keyword
// if we have no parameter we only write ().
// if we have only one parameter then we have the power to remove the () this braket.
// we change the start of the function body by replacing the =>
// if our code in the block is only one line and we want to remove the return keyword we
// may remove the keyword return and the paraenthesis


// Let rewrite the function of calArea

let aCalArea = aRadius => area = 3.14 * aRadius ** 2;
let aCalArea2 = (a,b) => {
let c= a + b;
return c;
};

console.log('Area in the Arrow Function: ',aCalArea(10));
let sumAB = aCalArea2(5,10);
console.log('sum of A and B: ',sumAB);


// Functions and Methods

// Functions we call them directly

let funA = () => 'Hello';
console.log('result of funA: ',funA());


// Methods are the functions which are associated with one of the 7 datatype in which Object are 
// the part and we access them by using the (.) dot keyword

let myName = 'ahmed';

console.log(myName.toUpperCase());


// Callback Functions
// It is the function which in the function

// in that first of all you write your function as traditionally.
// you call your function as traditionally.
// you write the complete function in the calling function as you write the function separatly
// you write the arbitary name in the original function which is to be called.
// // when you called that arbitary name you also pass the paramenters which you defined in the
// function where you are calling from

const printName = (myName)=>
{
  let na = 'ahmed';
  myName(na);
};

printName(function(copiedName){
console.log('My Name: ',copiedName);
});

// Another Example

const sumAb  = (SUM) =>{
  let a= 5;
  let b = 10;
  SUM(a,b);
};
sumAb(function(A,B){
  console.log('Sum of A and B: ',A + B);
});

// the above function sumAb can be rewrite as below

sumAb((A,B) => {
console.log('Sum of A and B: ', A + B);
});

// Another Scenario

let familyMembers = ['muhammad','ahmed','zahid','ali','saqib'];

// forEach Function is the function which is an anonmyous function which takes an
// function whichin an function

familyMembers.forEach(function(){
  console.log('hello');
});

// Rewrite the above two lines of code

familyMembers.forEach(function(indexValue){
console.log('index Value: ',indexValue);
});

// Rewrite the above code short and also add one parameter of index also in it.

familyMembers.forEach((indexValue,currentindex) => {
console.log(currentindex , indexValue);
});

// Passing the anonmyous function inside that

let lastExample = (curVal,curInd) => {
 console.log('smart Output',curInd,curVal);
};

familyMembers.forEach(lastExample);


// Callback function in action

// Getting data from the HTML File.
const ul = document.querySelector('.people');

const peoples = ['ali','muhammad','ahmed','zahid','boyz'];
html = ``;
// The used case of the anonmyous function 
peoples.forEach(function(eachperson){
html += `<li style = "color: purple">${eachperson} </li>`;
});
console.log('hmtl data: ',html);

// Now are pushing the data into the HMTL file.
ul.innerHTML = html;