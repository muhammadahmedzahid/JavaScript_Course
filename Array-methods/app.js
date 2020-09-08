// Lecture # 01 Filter Method nondestructive method
// nondestructive method: such method which cannot alter the original array

const scores = [10, 30, 15, 25, 50, 40, 5];

// Array Method name: filter;
// it return true/false depend on the result.

let filter_score = scores.filter( () => {
  return true;
});
// so it return the complete array.
console.log('Same array as above: ',filter_score);

filter_score = scores.filter(() => {
return false;
});

// this will return an empty array.
console.log('Empty Array: ',filter_score);

// Let put some more example

filter_score = scores.filter( score => {
  return score > 20;
});
console.log('Score greater than 20: ',filter_score);

// A complex example

const users = [
  {name: 'ahmed', premium: true},
  {name: 'muhammad', premium: false},
  {name: 'zahid', premium: false},
  {name: 'yeap', premium: true}
];

// filter out premium user

let premium_users = users.filter((user) => {
  return user.premium;
});
console.log('Premium users: ', premium_users);

// You may write the above function like that as it has only one statment inside its function body.

premium_users = users.filter(user => user.premium);
console.log('Smart line code: ',premium_users);

// Lecture # 02 Map Method
// change original data depending upon present data.

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price/2);
console.log('salePrices: ',salePrices);

const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50}
];

const saleProducts = products.map((product) => {
if(product.price > 30){
  // Here why we cannot do that like
  // product.price = product.price/2;
  // As the above line changes the code for the input array also so we cannot want to do that.
  return {name: product.name, price: product.price/2};
}else{
  return product;
}
});
console.log(saleProducts);

// Lecture # 03 Reduce Method
// Array, Number or String you can return from this method.
// it has first argument as callback function where first is accumulator and second is current position
// second argument is acculator initialization.

console.log('reduce Method: ', scores);

const result = scores.reduce((acc,curr) => {
  if(curr > 20){
    acc++;
  }
  // return acc means it returns the previous 
  return acc;

},0);
console.log('result: ',result);

// A little challenging example on reduce method.

const data = [
  {player: 'muhammad',score: 20},
  {player: 'ahmed',score: 30},
  {player: 'zahid', score: 70},
  {player: 'ahmed', score: 60}
];

const marioTotal = data.reduce((acc,curr) => {

  if(curr.player === 'ahmed'){
    acc += curr.score;
  }
  return acc;

},0);
console.log('marioTotal: ',marioTotal);

// Lecture # 04 Find Method

// it returns the first value as it finds in the array.
// and it will be return true or false.

const soc = [10, 5, 0, 40, 30, 10, 90, 70];

const firstHighScore = soc.find(score => score > 50);

console.log('firstHighScore', firstHighScore);

// Lecture # 05 Sort Method
// this is a destructive method.
// it is only looking for the first number/alphabet only.
// reverse method to reverse the array. first element become last and last become first.

// Example 1- sorting strings

const names = ['mario', 'shaun', 'chun-li', 'yoshi','luigi'];

names.sort();
console.log('sorted names: ',names);
names.reverse();
console.log('reverse array: ', names);

// Example 2- sorting numbers

const marks = [10, 50, 20, 5, 35, 70, 45];

marks.sort();
console.log('sorted marks: ',marks);
marks.reverse();
console.log('reverse marks array: ', marks);

// Example 3- sorting objects

const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];

players.sort((a,b) => {

  if(a.score > b.score){
    return -1;
  }else if(b.score > a.score){
    return 1;
  }else{
    return 0;
  }

});

console.log(players);
// negative no to return first no.
// positive no to return second no.
// 0 no means no need to worry at all.

// We can reduce the above player sort code by
// just using the below line.

players.sort((a,b) => b.score - a.score);

console.log(players);

// Lecture # 06 Chaining Array Methods

const Products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

const filtered = Products.filter(product => product.price > 20);

let promos = filtered.map(product => {

  return `the ${product.name} is ${product.price /2} pounds`;
});

console.log('promos: ',promos);
// the above two lines for that we can used it for onces.

promos = products
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is ${product.price /2} pounds`);
console.log('promos: ',promos);