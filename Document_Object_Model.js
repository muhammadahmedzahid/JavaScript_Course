
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