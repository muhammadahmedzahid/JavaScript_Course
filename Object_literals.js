
// Object literals

let user = {
  firstName : 'ahmed',
  lastName : 'zahid',
  passion : 'web-developer',
  phoneNo : '+92 308 2541358',
  emailAddress : 'ahmedzahid21.pk@gmail.com',
  Address : 'Canda'
}

// Access the data in dot and Square braket notation

console.log(user.firstName);
console.log(user['passion']);

// Changing the literal name by dot and Square braket notation

user.firstName = 'ali';
user['lastName'] = 'ahmed';
console.log(user.firstName);
console.log(user.lastName);

// Checking type of the user

console.log('Type of user: ',typeof user);


// Define Methods inside Objects

let user_2 = {
  firstName : 'ahmed',
  lastName : 'zahid',
  passion : 'web-developer',
  phoneNo : '+92 308 2541358',
  emailAddress : 'ahmedzahid21.pk@gmail.com',
  Address : 'Canda',
  login: function(){
    console.log('user is loged in');
  },
  logout: function(){
    console.log('user is loged out');
  }
};

// Now if we want to access the above any variable
// How we do that the process is shown below
user_2.login();
user_2.logout();

// Use of THIS keyword in the JavaScript

let user_3 = {
  name: 'crystal',
  age: 30,
  email: 'ahmedzahid.pk21@gmail.com',
  location: 'berlin',
  blogs: ['Hi this is boy','you need to know'],
  login: function(){
    console.log('the user logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  // Here this is refered to the current user_3 object 
  // You may check using console.log
  logBlogs: function(){
    // ForEach needs the callback function
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  },
  // if we use the callback function above after the logBlog
  // Then it neglects the below function and it used the global context type of thing
  logBlog: () => {
    console.log('inside logBlog',this);
  },

  // IMPORTANT !!! below is the most used method case in object
  logB(){
    console.log('this is the most used case');
  }
  
};
// Here this is used it refer to this context
// Here the context is window
user_3.logBlogs();
user_3.logBlog();
user_3.logB();

// Object in Arrys

// We may store the blogs in the array as we store other dataType Objects.

const a = [
  {title: 'Hi My Name is Muhammad Ahmed',likes: 10},
  {title: 'Hey how are you?', likes: 20}
];

let user_4 = {
  name: 'ahmed',
  blogs: [{title: 'Hi My Name is Muhammad Ahmed',likes: 10},
  {title: 'Hey how are you?', likes: 20} ],

  printBlog(){
    console.log('In Print Blog');
    this.blogs.forEach(blog => {
      console.log('Title: ',blog.title,'Likes: ',blog.likes);
    });
  }
}

// printing data
user_4.printBlog();

// Math Object

// Pritning all the methods and code the Math object has
console.log(Math);

console.log(Math.PI);

console.log(Math.E);

// Different Methods

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// Random Numbers
// Mostly Math Class used for that
// this random number range is from 0 to 1
const random = Math.random();

// if we want to increase the range of the random no
console.log(random);
console.log(Math.round(random * 100));


// Primitive vs Reference Types

// Primitive Type: all other types common dataType, it is stored in stack
// Reference Type: all object types, it is stored in heap
// Pointer stored in stack and it referenced to Heap
// in Stack every new variable is stacked on the memory
// in heap not every new assigned variable stacked it
// rather it pointed to the same allocation thing.
// updating the data is the different in stack and heap memory allocation.
// How they store in memory type thing

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne:  ${scoreOne}`,`scoreTwo:  ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne:  ${scoreOne}`,`scoreTwo:  ${scoreTwo}`);

// reference values

userOne = {name: 'ahmed', age:22};
userTwo = userOne;
console.log(userOne,userTwo);

userTwo.age = 40;
console.log(userOne,userTwo);