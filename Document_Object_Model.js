
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