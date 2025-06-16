console.log("=========Exercises==========");
console.log("============Level1=========");

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1
console.log("========Explain about before definitions=====");
console.log("ForEach iterate for a list");
console.log("Map mapped for a list and gets a new list modified");
console.log("Filter filter for a list and gets a new list filtered");
console.log("Reduce reduce for a list and gets a new just value");

// 2
const callback = (n) => {
  return n + n;
};

numbers.forEach((number) => console.log(callback(number)));

const constNewListMoreOne = numbers.map((number) => callback(number));
console.log(constNewListMoreOne);

const filterEvenNumber = numbers.filter((number) => number % 2 === 0);

console.log(filterEvenNumber);

const reduceNumbers = numbers.reduce((acc, cur) => acc + callback(cur), 0);
console.log(reduceNumbers);

// 3
countries.forEach((country) => console.log(country));
names.forEach((name) => console.log(name));
numbers.forEach((number) => console.log(number));
products.forEach((product) => console.log(product));

//Map

//6

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

const numbersSquare = numbers.map((number) => number ** 2);
console.log(numbersSquare);

const namesUpperCase = names.map((name) => name.toUpperCase());
console.log(namesUpperCase);

const productsArrange = products.map((product) => {
  if (typeof product.price === "number") {
    return product;
  } else {
    product.price = 2;
    return product;
  }
});

console.log(productsArrange);

// Filter

//11

const countriesLand = countries.filter(
  (country) => country.search(/land/gi) > 0
);

console.log(countriesLand);

const countriesLengthSix = countries.filter((country) => country.length === 6);
console.log(countriesLengthSix);

const countrieStartWithE = countries.filter((country) =>
  country.startsWith("E")
);

console.log(countrieStartWithE);

const justPrices = products.filter((product) => product.price);
console.log(justPrices);

//16

const getStringLists = (arr) => {
  return arr.filter((item) => typeof item === "string");
};

console.log(getStringLists([1, 2, 3, 4, "XD", "XDDD", true]));

//17

const sumsNumbers = numbers.reduce((acum, cur) => (acum += cur), 0);
console.log(sumsNumbers);

//18
const concatCountries = countries.reduce((sentence, cur) => {
  if (sentence.length > 0) {
    if (countries.lastIndexOf(cur) === countries.length - 1) {
      return sentence + (" and " + cur + " are north European countries");
    }
    return sentence + (", " + cur);
  }
});
console.log(concatCountries);

// 19
// Some just find first that found out
// Every have to find all items

//20

const someNames = names.some((name) => name.length > 7);
console.log(someNames);

const allContainsLand = countries.every((country) => country.includes("land"));
console.log(allContainsLand);

//22
// find find the first item and return, while that findIndex return just value

const countryWithSixLetter = countries.find((country) => country.length === 6);
console.log(countryWithSixLetter);

const countryWithSixLetterPosition = countries.findIndex(
  (country) => country.length === 6
);
console.log(countryWithSixLetterPosition);

const getNorway = countries.findIndex((country) => country === "Norway");
console.log(getNorway);

const getRussia = countries.findIndex((country) => country === "Russia");
console.log(getRussia);
