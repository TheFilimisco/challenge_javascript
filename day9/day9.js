console.log("Day 9");

/* Callback */

// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

/* Returning function */

console.log("Return function");
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return n + m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

// Using For Each

const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};

console.log(sumArray(numbers));

// The above example can be simplified as follows:
const numbers2 = [1, 2, 3, 4];
const simpSumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(simpSumArray(numbers2));

// Setting Interval using a setInterval function

/* // syntax
function callback() {
  // code goes here
}
setInterval(callback, duration) */

// Example

function sayHello() {
  console.log("Hello");
}
/* setInterval(sayHello, 1000); */ // it prints hello in every second, 1000ms is 1s

//Setting a time using a setTimeout

// syntax
/* function callback() {
  // code goes here
}
setTimeout(callback, duration); // duration in milliseconds */

function sayHello2() {
  console.log("Hello2");
}
/* setTimeout(sayHello2, 2000); */ // it prints hello after it waits for 2 seconds.

/* Functional Programming */

/* 

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})


// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})


// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr)) 
*/

// For Each
console.log("For Each");

let sum = 0;
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach((num) => console.log(num));
// This 0 because you never assigned a change for thi value
console.log(sum);

numbers3.forEach((num) => (sum += num));
console.log(sum);

const countries = [
  "Finland",
  "Denmark",
  "Spain",
  "Ecuador",
  "Norway",
  "Iceland",
];

countries.forEach((element) => console.log(element.toUpperCase()));

// Map
console.log("Map");

/* const modifiedArray = arr.map(function (element, index, arr) {
  return element;
});
 */
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
/* 

const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);

console.log(numbersSquare); 

*/
const cities = ["Barcelona", "Madrid", "Valencia", "Badalona"];
const upperCaseCities = cities.map((city) => city.toUpperCase());
console.log(upperCaseCities);

const southAmerica = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const countriesFirstThreeLetters = southAmerica.map((country) =>
  country.toUpperCase().slice(0, 3)
);

console.log(countriesFirstThreeLetters);

console.log("Filter");
// Filter

//Filter countries containing land
const countriesContainingLand = southAmerica.filter((country) => {
  if (country.search(/land/gi) > 0) {
    return true;
  }
});

console.log(countriesContainingLand);

const countriesEndsByIA = southAmerica.filter((country) =>
  country.endsWith("IA")
);

console.log(countriesEndsByIA);

const countriesHaveFiveLetters = southAmerica.filter(
  (country) => country.length === 5
);

console.log(countriesHaveFiveLetters);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

// Reduce

console.log("Reduce");

/* 

arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
  return;
}, initialValue); 

*/

const numbersNew = [1, 2, 3, 4, 5, 6];
const sumReduce = numbersNew.reduce((acc, cur) => acc + cur, 0);
console.log(sumReduce);

const letters = ["a", "b", "c", "c", "b"];

const conteo = letters.reduce((acum, letter) => {
  acum[letter] = (acum[letter] || 0) + 1;
  return acum;
}, {});

console.log(conteo);

// every

console.log("Every");

const names = ["Adrian", "Steven", "Maria", "Alejandro", "Miguel", "Oliver"];

// The Question is All are Strings?...
const areAllStr = names.every((name) => typeof name === "string");

console.log(areAllStr);

const bools = [true, true, false, true];
const areAllTrue = bools.every((b) => b === true);
console.log(areAllTrue);

// Find
// Returns always first
console.log("Find");

const ages = [2, 20, 3, 5, 34, 1, 3, 20];
const age = ages.find((age) => age > 30);
console.log(age);

const names2 = ["Adrian", "Steven", "Maria", "Alejandro", "Miguel", "Oliver"];
const result = names2.find((name) => name.length > 7);
console.log(result);

const scores3 = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresMajorThanOneHundred = scores3.find((user) => user.score === 100);
console.log(scoresMajorThanOneHundred);

// findIndex
console.log("findIndex");

// if it doesnt found a valid condition returns -1
const names3 = ["Adrian", "Steven", "Maria", "Alejandro", "Miguel", "Oliver"];
const ages2 = [24, 22, 25, 32, 35, 18];

const resultNames = names3.findIndex((name) => name.length > 6);
console.log(resultNames);

const resultAges = ages2.findIndex((age) => age < 19);
console.log(resultAges);

//Some
console.log("Some");

const names4 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const bool4 = [true, false, false, false];

const areSomeTrue = bool4.some((b) => b === true);
console.log(areSomeTrue); //true

const areAllStrSome = names4.some((name) => typeof name === "number"); // Are all strings ?
console.log(areAllStrSome); // false

// Sort
// Sorting string values
console.log("Sort");
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());

//Sorting Numeric Values
const differentNumbers = [9.81, 3.14, 100, 37];
//Order just strings lexicographic
console.log(differentNumbers.sort());

/* differentNumbers.sort(function (a, b) {
  return a - b;
}); */

differentNumbers.sort(function (a, b) {
  return b - a;
});

console.log(differentNumbers);

//Sorting Object Arrays
// Whenever we sort objects in an array, we use the object key to compare. Let us see the example below

/* 

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})
  
*/

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];

users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});

console.log(users);
