
// Document Object Model (DOM) is used to create nice effects in webpage

// If we write document in the console then it will pop up all the properties of the document

// We create this document object accessing the HTML in JavaScript also access that properties.

// DOM works in a Heraricy way.

// Selecting data from the HMTL document we use DOM

const para = document.querySelector('p');
console.log(para);

// For Multiple data we use querySelectorAll

const paras = document.querySelectorAll('p');

paras.forEach(para => {
console.log(para);
});

// Accessing other data 
// all the classes named as error will be accessed

const parass = document.querySelectorAll('.error');
console.log(parass);

// Others ways to get the HTML Object in the JavaScript
// But most of the time we ise querySelector and querySelectorAll

// Get an element by ID

const title = document.getElementById('page-title');
console.log(title);

// get element by their class name

const err = document.getElementsByClassName('error');
console.log(err);

// get elements by their tag name

const par = document.getElementsByTagName('p');
console.log(par);

// One of the drawback of the above methods is that.
// We cannot use the ForEach Methods with that.
// We can iterate using the index to access the each element.

// Accesing the HTML and Adding and Changing Page Content.

// Series Starts Here
// Lecture # 01

// it select the first paragraph from the hmtl file
const p = document.querySelector('p');
console.log(p);

// to extract the innerText inside the p we use 
// the property innerText
console.log(p.innerText);

// Changing the Text of HMTL

p.innerText = 'hi the text is changed';

// += to add the content in the previous data as well
p.innerText += ' hey';

// Accessing multiple HMTL tags at onces

const pa = document.querySelectorAll('p');
pa.forEach(paraa => {
console.log(paraa.innerText);
});

// Accessing the inner HTML having class you have

const contenty = document.querySelector('.content');
console.log(contenty.innerHTML);

// Update inner HTML

contenty.innerHTML = '<h2> This is overwrite </h2>';

// Adding the content HMTL

contenty.innerHTML += '<h2> This is overwrite </h2>';

// Let say you have to add Multiple Enteries in HTML
// Let say the data is comes from database

const people = ['muhammad','ahmed','zahid'];

people.forEach(person => {
contenty.innerHTML += `<p>${person}</p>`;
});

// Lecture # 02 
// Getting and Setting Content
// href and class is the attributes

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

// Setting up the Attribute

link.setAttribute('href','https://www.facebook.com');
link.innerText = 'Go to Facebook';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');

// Also you add the attributes if not already present there

mssg.setAttribute('style','color:green');

// Lecture # 03 
// Changing the CSS Attribute

// Let say you want to set the properties of the style it override the previous property.
// using the setAttribute property so instead we use the style like as document.

const Title = document.querySelector('h1');

Title.setAttribute('style','margin: 50px;');

// so we use the style as we use document
// it will pop up all the styles it has
console.log(title.style);

console.log(Title.style);

Title.style.margin = '50px';
Title.style.color = 'crimson';

// The properties where hypen occurs between two words there we use the Camel type names
Title.style.fontSize = '30px';

// For Reset or Making null of the property we use ' '

Title.style.color = '';

// Lecture # 04

// Adding & Removing Classes

const CONTENT = document.querySelector('p');
// List all the classes it has
console.log(CONTENT);
console.log('CONTENT LIST: ',CONTENT.classList);
// Adding a class to the existing ones
CONTENT.classList.add('ahmed');

console.log('After adding the ahmed class: ', CONTENT);
// Removing the class

CONTENT.classList.remove('ahmed');

console.log('After Removing the error class: ',CONTENT)

// Above is the tricky that you change one thing and it goes on changing all occurs

const parasz = document.querySelectorAll('p');
console.log('All the Parasz: ',parasz);

// iterate and if success word found we add the success class. 
// same as if found error word we add error class in it.

parasz.forEach(p => {

  if(p.innerText.includes('error')){
   // innerText cannot span Text if the display is none.
    p.classList.add('error');
  }
  // textContent shows the text if we may hide the text.

  if(p.textContent.includes('success')){
    p.classList.add('success');

  }
});

// Toogle Class: if class not present it adds the class
// if already present it removes the class

const toogle_class = document.querySelector('.toogle_class');
// It adds the class as it is not present already.
toogle_class.classList.toggle('error');
// It removes the class as the class is already present.
toogle_class.classList.toggle('error');


// Lecture # 05

// Parents , Childerns and Siblings
// Siblings: the one who are same level in the hierarchy and belongs to the same parent.
// Children: the parent who has their more subdivisions are called the childs and above hierarchy it is called the parent.

// Warning!!! we cannot able to use forEach in HMTLCollection.


const article = document.querySelector('article');
console.log(article.children);
// to convert the HTMLCollection into array we use the below method
console.log(Array.from(article.children));

// iterate in the array

Array.from(article.children).forEach(child => {
  child.classList.add('article-element');

});

// Now traverse in different ways

const t = document.querySelector('h2');
console.log('t: ',t);
// Extract the parentElement
console.log(t.parentElement);
// Parent and then further parent
console.log(t.parentElement.parentElement);
// Accessing the next sibling Element
console.log(t.nextElementSibling);
// Previous Element Sibling
console.log(t.previousElementSibling);
// Chaining
console.log(t.nextElementSibling.parentElement.children);


// Lecture # 06
// Event Basics (click events)

const button = document.querySelector('button');

// adding a click listener on button
// () in call back function as we cannot have any parameter
button.addEventListener('click',() => {
console.log('you clicked me');
});

// querySelectorAll

const items = document.querySelectorAll('li');

items.forEach(item => {

  // Adding a listener

  item.addEventListener('click',e => {
    // in the first parameter we have to specify which event we want to occur.
    // we may or may not use the second parameter as second parameters gave the result 
    // or the information which the event occurs.
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = 'line-through';
  });

});

// Lecture # 07

// Creating and Removing Elements

// To add the element at the end we use the append() method.
// To add the element at the very beginning we use the prepend() method.
// We have an issue after adding the list items.
// the New list items cannot have click listener.
// we can remove this issue by using the Delegation.

const ul = document.querySelector('ul');

// It will remove all the unordered list from the web page.
// ul.remove();

const Button = document.querySelector('button');

//  To Add the items in the list
Button.addEventListener('click', () => {

  // ul.innerHTML += '<li>something new </li>';
  // the above line also include the code into the webpage 
  // we also do that the same thing using the below code.
  // By creating the new element and it all depends on us which element we created as p,li,h1
  const li = document.createElement('li');
  li.textContent = 'something new created';
  // ul.append(li);
  ul.prepend(li);
});

//  To remove the items

const Items = document.querySelectorAll('li');

Items.forEach(item =>{

  item.addEventListener('click',e =>{
    e.target.remove();
  });

});

// Lecture # 08
// Event Bubbling and (Event Delegation)
// Solving problem: when new list elements created thier event listeners are not worked on that moment.
// Events occurs in javaScript like Bubbling E.g
// if we have an event in li after firing that it check the event listener to the ul and after if check its parent and it bubbles up to the top.
// so why is so important to learn that concept.
// Let say we are in a scenario that we have an event in both li and ul and when the listener
// of li fired it auto fires the ul listener so how to overcome that problem.
// we use the method in child as not to bubble called stopPropagation().


// Event Delegation: as we cannot put the too many listeners as it affects the performace.
// and also not new list items click listeners are working properly so we use event delegation.

// So now instead of li we use the ul.

ul.addEventListener('click',e => {

  console.log(e.target);
  // Why we write the if line as now we are sensing as ul box maybe user click between the box.
  // so that's why we are getting the target and then tagName
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});

// Lecture # 09
// More DOM Events
// We demonetrate the copy, mouse-Position & Scroll event.

// const copy = document.querySelector('.copyme');
// console.log(copy);
// copy.addEventListener('copy', () => {
//   console.log('OI my conten is copyright');
// });

const box = document.querySelector('.box')

box.addEventListener('mousemove',e => {
// console.log(e);
// console.log(e.offsetX,e.offsetY);
box.textContent = `xpos - ${e.offsetX} y pos - ${e.offsetY}`;
});
document.addEventListener('wheel', e => {

  console.log(e.pageX,e.pageY);
});


// Lecture # 10
// Building a Popup

// I am building that in a seperate Files named as
// pop_up_index, pop_up_style, pop_up_javascript