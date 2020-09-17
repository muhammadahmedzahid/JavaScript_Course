// Lecture 01

// rest parameters
// it is used when we are not sure how many parameters are we getting in the array.

const double = (...nums) => {
    // do something here
    console.log(nums);
    // and it returns the passing arguments into an array form.
    return nums.map(num => num*2);
}

const result = double(1,2,3,4,5,6,7,8,9);
console.log(result);

// spread syntax (arrays)

const people = ['muhammad', 'ahmed', 'zahid'];
// convert an  array into a single foam
console.log(...people);

const members = ['hello','newmember', ...people];
console.log(members);

// spread syntax (objects)

const person = {name: 'muhammd', age:30, job: 'Web'};
// the below line of code cannot actually copy the code rahter it reference to other variable.

const personClone = person;

// so how we make actually code to that.

const personCloneActual = {...person};
console.log(personCloneActual);

// Lecture # 02 Sets
// Sets: they allow unique values only.

const namesArray = ['muhammad','ahmed','zahid','ahmed'];

console.log('namesArray output: ',namesArray);

const namesSet = new Set(namesArray);
// Below it is not an array
console.log('unique names: ', namesSet);
// how to convert it into array we use the spread syntax

const namesArr = [...namesSet];
console.log('namesArr: ',namesArr);
// We can write the above two things in one line also.

const shoarr = [...new Set(namesArray)];
console.log('one line output: ', shoarr);
// adding data into sets
const ages = new Set();
ages.add(20);
ages.add(30).add(40);
ages.add(20);
// it only add the unique values
console.log(ages);
// you may delete a particular value
ages.delete(20);
console.log('size of the set: ',ages.size);
// if value are in array or not return boolean
console.log(ages.has(30));

const ar = new Set([
    {name:'muhammad', age:30},
    {name: 'ahmed', age: 29},
    {name: 'zahid', age:32}
]);

ar.forEach(element => {

    console.log(element.name, element.age);
});

// Lecture 03 Symbols
// it looks identical but they are not.
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

// let make an object.
const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';
//  now here is the part where we can gave a unique symbol to that.
ninja[symbolOne] = 'muhmmad';
ninja[symbolTwo] = 'ahmed';
console.log(ninja);

