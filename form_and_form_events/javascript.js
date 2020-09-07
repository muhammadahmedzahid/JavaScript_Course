// When we submit the form we cannot attach the event handler to the submit button
// We attach the event listener to the form which are going to be submit.

const form = document.querySelector('.signup-form');

//1st way to submit the form but not recommended or smart thing which is comment

// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
// Use submit keyword instead of click as it also check for click and keyboard enter.
// When you submit the form the browser has its own property to refresh its page by default.
// We can prevent that by using the below code.
e.preventDefault();
// 1st way to submit the form which is comment
// console.log(username.value);
 console.log(form.username.value);

});

// Lecture # 02
// Regular Expressions
// https://regex101.com/ where you use the expressions to test.
// it is used to get the text enter in the edittext.
// its starts fron / and end from /
// if we write a simple keyword it searches in the whole text.
// ^ ahmed $ it only search that nothing is in start and nothing is in the end.
// ^[a-z]$ or ^[c-p]$ it search the aphabets between them.
// ^[a-zA-z]{6,10}$ either a/A or z/Z and digits are between six to ten.
// ^[a-zA-z0-9]$
// .{6-10} as . means you write any alphabet or any special symbol.

// Testing RegEx => Regular Expression

const username = 'ahmedz';
const pattern = /^[a-z]{6,}$/;
const usernamePattern = /^[a-zA-Z]{6,12}$/

// the above line matches it must be a-z and has atleast 6 characters in number.
let result = pattern.test(username);
// if it matches the condition it returns true other false.
// one more thing is something matches in the middle it returns its index.

if(result){
  console.log('regex test passes :)');
}else{
  console.log('regex test has passed');
}

// Lecture #03
// Basic Form validation

const form1 = document.querySelector('.signup-form');
const feedback1 = document.querySelector('.feedback');
form1.addEventListener('submit',e => {

  e.preventDefault();
  // Validation
  const username1 = form1.username.value;
  
  if(usernamePattern.test(username1)){
    // feedback good info
    feedback1.textContent = 'that username is valid';
  }else{
    // feedback help info
    feedback1.textContent = 'username must contain letters only & be between 6 & 12 characters long';
  }
});

// Lecture # 03 
// keyboard Events

// Live feedback
// Here we are gonna check wheather user enters what.

form.username.addEventListener('keyup', e => {

  console.log(e.target.value, form.username.value);
  // the above line of code gave us the same result.
  if(usernamePattern.test(e.target.value)){
   console.log('passed');
    // form.username.setAttribute('class','success');
    form.username.setAttribute('class','success');
  }else{
    form.username.setAttribute('class','error');
    console.log('failed');
  }

});