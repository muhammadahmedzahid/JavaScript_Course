// there are two options to store the data.
// 1- to store on the and after that we send it from the server.
// 2- we store on the user local storage and after that when user needs that it will automatically push that data into it.
// so in the browser everything is saved in the windows object.
// there is some functions inside the local storage for our work.
// every thing stored in the local storage will be in the form of String.

// store data in local storage

localStorage.setItem('name','muhammad');
localStorage.setItem('age',50);

// go the Application mode in the developers options.
// it will gave you the key and the stored value in it.

// get data from local storage

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// updating data

localStorage.setItem('name', 'ahmed');
// directly update the data using dot notation.
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

// deleting data from local storage.
localStorage.removeItem('name');

// if you want to clear everything from the localstorage
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

// Stringifying & Parsing data

const todos = [

    {text: 'play cricket', author: 'muhammad'},
    {text: 'buy milk', author: 'ahmed'},
    {text: 'bread', author: 'zahid'}

];

// We have to convert everything into string before storing data into localStorage.
console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
// Back to JavaScript Object
console.log(JSON.parse(stored));

// Now updating the weather App

