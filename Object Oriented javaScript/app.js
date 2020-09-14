// Lecture # 1
// Everything in javascript is an object that's not true.
// We have primitive types like: number, strings, booleans that are not objects.
// we cannot have the general properties and methods in primitive types.
// so how we can use that methods and properties on that.
// that is why the javascript temporary wrapup the primitive type and make it object.

// let say an example of Boolean and string.

// Primitive type
const first_name = 'ahmed';
// Object form
const second_name = new String('zahid');
// Object form
const condition = new Boolean(true);

// Lecture # 2

const userOne = {

    username: 'ahmed',
    email: 'ahmed@ja.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};
console.log(userOne.email, userOne.username);
const usertwo = {

    username: 'muhammad',
    email: 'muhammad@ja.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};
console.log(userOne.email, userOne.username);
userOne.login();

// the above two users we are using the same code again and again.
// but this is some kind of making complex code.
// We can code in somehow efficient way.

// const userThree = new user('zahid@hah.com','zahid');

// Lecture 3

// Classes are the blueprints of object.
// it means when we created an object it has some kind of information.
// like the color of the car etc.

// Lecture 4 Class constructor

// the 'new' keyword
// 1- it creates a new empty object {}
// 2- it binds the value of 'this' ti the new empty object.
// 3- it calls the constructor function to 'build' the object.

class User{
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
    }
}

const userOn = new User('ahmed','ahmed@unknown.com');
const userTw = new User('zahid','zahid@unknow.com');
console.log(userOn,userTw);

// Lecture 5 Class Methods and Chaining

// In objects we make difference using the comma ,
// but we cannot use the , in the classes.
// by default in javascript when we cannot return any value from the function.
// on that time we call the function undefined and then call on other's the not going ok.

class User1 {
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

// we use the return (this) if we are chaining the method.
// otherwise we are getting the undefined.

const userOne1 = new User1('ahmed','ahmed@unkonw.com');
const usertwo1 = new User1('zahid','zahid@ham.com');

console.log(userOne1,usertwo1);
userOne1.login().incScore().incScore().logout();

// Lecture 5 Class Inheritance(subclasses)
// it automatically call the other class constructor if we cannot have the constructor in the new class.
// and how we make the current class constructor also.
// we will see that.

class Admin extends User1{

    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
    }
}

const userThree = new Admin('ali','ali@super.com');

console.log(userThree);
let users = [userOne1, usertwo1, userThree];
console.log(users);

userThree.deleteUser(usertwo1);
console.log(users);

// Lecture 6 Super()
// if we have constructor both in inherited and class which inherits.
// we have to call the parent constructor before calling the constructor of its child.

class admin extends User1{
    constructor(name,email,title){
        super(name,email);
        this.title = title;
    }
}
const u = new admin('ahmed','ahmed@xyz.com','Professor');
console.log(u);

// Lecture 7 Constructor under the hood.

// prototype models to build same as class.
// as previously classes are not defined in javascript.
// Below is the code which is used under the head of class.

function Uzer(username, email){
    this.username = username;
    this.email = email;
    // what if we write a function in it.
    this.login = function(){
        console.log(`${this.username} has logged in`);
    };
    // we have better way to write which is prototype
}

const newUser = new Uzer('mu','mu@g.com');
console.log('newUser: ', newUser);

// Lecture 8 prototype model

// so every thing is under the hood of __proto__

function Uzzer(username, email){
    this.username = username;
    this.email = email;
    // what if we write a function in it.
    
}
// so below is the way to write it in good way.

Uzzer.prototype.login = function(){
    console.log(`${this.username} has logged in`);    
    return this;
}
// if we adding another function
Uzzer.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
}

const Uzzeruser = new Uzzer('ahmed','ahmed@h.com');
Uzzeruser.login();
// Method in chaining
Uzzeruser.login().logout();

// Lecture 9 Prototypal Inheritance
// Here call is the same as we are calling the super method.
// newclass.protype = Object.create(inhertedclass.prototype)

function admmin(username,email,title){
    // first argument is like which is the object so this refers to the current object.
    Uzzer.call(this,username,email);
    this.title = title;
}

admmin.prototype = Object.create(Uzzer.prototype);

// Adding the delete method to the admmin class.

admmin.prototype.deleteUser = function(){
    // delete a user
};

const admminUzzer = new admmin('ahmed','zahid@ga.com','teacher');

// Lecture 10 Built-in Objects

// the word Object is the base of all the objects we made
// at the end we have inheritance and then we continous moves down and get that object.