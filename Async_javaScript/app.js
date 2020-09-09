// Lecture # 01 Async JavaScript.
// It is something which starts now but finish later.
// JavaScript is a single threading language because it executes one line at a time that is called Syncronous javascript.
// But we can make this problem over with a Async JavaScript.
// So sync let say a line fetch the code from the database then the till the result we cannot found.
// the below code stops and called blocking code.
// so whats the solution it is simple we make the line where it request the data from the database.
// to pass through the Asynchronous and this will run outside the thread and when this come
// back the result on that time the function runs for it.

// Lecture #02 Demontrate the code

console.log(1);
console.log(2);

// Below is the Asynchoronous function as it gave you the result later as it runs the below code 
// and it cannot block the code.

setTimeout(() => {

  console.log('callback function fired');

},2000);

console.log(3);
console.log(4);


// Lecture # 03 What are HTTP Requests

// https://jsonplaceholder.typicode.com/
// We request data from the server.
// In Reponse the server sends data to us.
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// The above website used to check the request/response which it actually made.


const request = new XMLHttpRequest();

// 2nd we can function

request.addEventListener('readystatechange',() => {

  console.log(request, request.readyState);
  // the above line updates up what is the current
  // state of our code and 4 means that its process is done.

  if(request.readyState === 4 && request.status === 200){
    // Below line of code runs if we actually get the data
    console.log(request,request.responseText);
  }else if(request.readyState === 4){
    console.log('could not fetch the data');
  }

});

// 1st we write the below code.
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

// Lecture # 04 Response Status
// 404 cannot find the resource which we want to access.
// 200 means everything is OK.
// 100 range, 200 range, 300 range, 400 range everything had different meaning to that.


// Maybe you entered an invalid the URL so the response is not 200.
// so we can add this condition into the above code.

// Lecture # 05 Callback
// A little bit more reuseable code with adding the callback functions

const getTodos = (callback) => {
  const req = new XMLHttpRequest();
  req.addEventListener('readystatechange', () => {

    if(req.readyState === 4 && req.status === 200){
      const data = JSON.parse(req.responseText);
      callback(undefined, data);
    }else if(req.readyState === 4){
      callback('could not fetch data',undefined);
    }
  });

  req.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  // We can write our own json and then we can convert it into JavaScript Object.
  // req.open('GET', 'todo.json');
  req.send();

};

console.log(1);
console.log(2);

getTodos((err, data) => {
// it is a way to write the error first and data second.
  console.log('callback fired');
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});


console.log(3);
console.log(4);

// Here the 1,2,3,4 console can run first and then the when the result came back it run the further data.

// Lecture # 06 JSON Data

// We get the JSON Javascript Object Notation basically as a string.
// it looks like Object but it is not.
// we have to convert that string into object by using JSON.parse() function.
// Everything in the JSON has to be in Double Quotes.
// a number may or may not be written in the double quotes.
// Also booleans we cannot use that in strings also.