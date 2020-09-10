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

let getTodos = (callback) => {
  const req = new XMLHttpRequest();
  req.addEventListener('readystatechange', () => {

    if(req.readyState === 4 && req.status === 200){
      // We get data from the network as a JSON file which is a string file.
      // We have to convert it into JavaScript file below line is responsible for that.
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

// Lecture # 07  Callback Hell

// When we have a scenario that when one result comes from a API and then we pass that data into
// another API and perform task and then so on so how to do that.
// So we write callback as you see in below but its not looks neat and nice as if we have
// a lot of callbacks so what's the solution for that the solution is Promises which we study
// in the next 8th Lecture
// We put a argument as below resource to add multiple requests.
getTodos = (resource,callback) => {

  const r = new XMLHttpRequest();

  r.addEventListener('readystatechange', () => {

    if(r.readyState === 4 && r.status === 200){
      const d = JSON.parse(r.responseText);
      callback(undefined, d);
    }else if(r.readyState === 4){
      callback('could not fetch data', undefined);
    }
  });

  r.open('GET', resource);
  r.send();

};

getTodos('muhammad.json',(err,data) => {
  console.log('First Function: ',data);
  getTodos('ahmed.json', (err, data) => {
    console.log('Second Function: ',data);
    getTodos('zahid.json', (err, data) => {
      console.log('Third Function: ',data);

    });
  });

});

// Lecture # 08 Promises Basics

// When we write the function at that we have to return new Promise() what actually it does.
// It returns the one thing either it completes its promise means returns the data.
// or it does not complete the promise means there is some kind of error in it.
// Promise take a call back function where it takes two argumnets it is not created by ourself.
// Rather it is created by the Promises API named as reslove and reject.
// We use if statement to run the resolve and reject depends on the data we get.
// We use then keyword with the function where we use the Promise keywords.
// If the resolve gets the data then we fire the first argument.
// if the reject method called then it calls the second argumnet.



// Promise Examples

const getSomething = () => {
  
  return new Promise((resolve, reject) => {
    // fetch something from the database
    // Let say we get the data successfully
    // resolve('data receieved');
    // let say data not received
    reject('error occurs');
  });

};

// in order to call the function for the promise
// we use the then keyword

getSomething().then((data) => {

  console.log(data);
  // if success this argument code runs

}, (err) => {
  // If there is something error the below code runs.
  console.log(err);
});

// the above function calling where we pass two argument function inside the function there is a better way to do that
// we may use the then and the catch keyword instead

getSomething().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});

// Now lets do some Practical Example where we read the data and shows the result.

getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const re = new XMLHttpRequest();

    re.addEventListener('readystatechange', () => {
        if(re.readyState === 4 && re.status === 200){
          const data = JSON.parse(re.responseText);
          resolve(data)
        }else if (request.readyState === 4){
          reject('error getting resource');
        }
    });
    re.open('GET',resource);
    re.send();

  });

};

// calling the function

getTodos('ahmed.json').then(data => {

  console.log('promise resolved', data);
}).catch(err => {
  console.log('promise rejected: ', err);
});

// Lecture # 09 Chaining Promises

// one of the best thing of the Promises that we can used it with the asynchoronous task.
// Below is what is chaining in the Promises.
// one thing we can put only one catch to all the then.


getTodos('muhammad.json').then( data => {

  console.log('promise 1 resolved:', data);
  return getTodos('ahmed.json', data);
  // after returning the successful of the data we called the other functions.
}).then(data => {
  console.log('promise 2 resolved: ',data);
  return getTodos('zahid.json',data);
}).then(data => {
  console.log('promise 3 resolved: ', data);
}).catch( err => {
  console.log('promise rejected: ',err);
});

// Lecture # 10 The Fetch API

// Fetch API: basically when we initially start the HTTP request on that time we used as we done previously XMLHHHTPRequest().
// But we can make a smarter way of using of Fetch API.
// It is also handling the Promises by itself that is the plus point of that.
// For that we use the fetch() and it return a promise which it means it returns the resolve or reject.
// Important!!! the err in the fetch can only be occur if there is some kind of network error.
// It cannot err if you are working on the local machine.
// 404 Resource cannot be found.

fetch('muhammad.json').then((response) => {

  console.log('Promise 1 resolved: ', response);
  // In the above code after success of the respose the data is saved in the JSON
  return response.json();
  // well the above returns the data
}).then(data => {
  // the above data we get from the return method and then we go for the another callback
  console.log(data);
}).catch((err) => {
  console.log('rejected',err);
});

// Lecture # 12 Async & Await

// It changes the promises together
// When we use the async() function it always returns a promise irrespective of the code in the function.
// for async() we cannot use the then keyword instead we use the await keyword.
// what is does it stops the output which we is the respose of the request untill this promise is not resoled.
// After that we use the response.json() to fetch the data.
// await keyword has a lot of power as it can chain many things together.
// and this one is the non-blocking.
// one time we use the then and catch keyword when we calling hte function as the sync returns a promise so we use the
// then and catch keyword to resolved that.
// if we have more data getting than one we use use the same methodology and used the await keyword at the start.
// Some Browser didnot support the async and await like internet explorer.

getTodos = async () => {
  const response = await fetch('muhammad.json');
  const data = await response.json();
  return data;
};

console.log(1)
console.log(2)

getTodos()
  .then(data => console.log('resolved:', data));

console.log(3)
console.log(4)

// Lecture # 13 Throwing & Catching Errors

// How we can throw our own errors in the asynchornous functions
// if there is no network error while using the fetch the rejection cannot occurs.
// so we can use the throw new Error('to throw error).
// and we get the data from err.message

getTodos = async () => {

  const response = await fetch('muhammad.json');

  if(response.status !== 200){
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();

  return data;

};

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:',err.message));
