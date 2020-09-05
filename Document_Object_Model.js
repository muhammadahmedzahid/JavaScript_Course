
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
