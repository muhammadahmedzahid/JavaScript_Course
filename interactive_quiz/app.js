const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {

  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers

  userAnswers.forEach((answer, index) => {

    if(answer === correctAnswers[index]){
      score += 25;
    }
  });
  // console.log('You scored: ',score);
  // show result on page

  scrollTo(0,0);
  result.classList.remove('d-none');

  let output = 0;

  const timer = setInterval(() => {

    result.querySelector('span').textContent = `${output}% `;
    if(output === score){
      clearInterval(timer);
    }else{
      output++;
    }
  },10);

});
// How we scroll to the top when we submit the form.
// We can solve this problem using window object.
// window object is the global javascript frontend object.
// to access the properties of the window we cannot write like that window.function/property name.
// instead we write it directly.
console.log('hello');
window.console.log('hello');
// above 2 lines gave you the same result.
// as console is on the window so we cannot write that keyword window.
// document object also stored in window as window is the mother of all that.
// alert is also a method

// fire the code after sometime also stored in window object.

setTimeout(() => {
alert('hello ninjas');

},3000);

// Continously firing the code after some interval of time.

let i =0;

const timer = setInterval(() => {
  console.log('hello');
  i++;
  if(i === 5){
    // as to stop timer we first store the complete function then we pass that function into StopInterval
    clearInterval(timer);
  }
},1000);
