import { countries_data } from "./countrie_data.js";

console.log("Exercise 10");

//Level 1

const newCountries = ["Finland", "Sweden", "Norway"];

// 1

const newSet = new Set();
console.log(newSet);

const numbersToTen = new Set();

for (let i = 0; i < 11; i++) {
  numbersToTen.add(i);
}

console.log(numbersToTen);

numbersToTen.delete(10);

console.log(numbersToTen);

numbersToTen.clear();

console.log(numbersToTen);

const items = ["item1", "item2", "item3", "item4", "item5"];
const newItems = new Set(items);

console.log(newItems);

const southAmerica = [
  "Colombia",
  "Ecuador",
  "Venezuela",
  "Chile",
  "Uruguay",
  "Peru",
];

// Create a map of countries and number of characters of a country

const newSouthAmerica = new Set(southAmerica);
const countriesWithLength = new Map();

for (const country of newSouthAmerica) {
  countriesWithLength.set(country, country.length);
}

console.log(countriesWithLength);

// Level 2

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const c = [...a, ...b];

const C = new Set(c);
console.log(C);

const A = new Set(a);
const B = new Set(b);

const c2 = a.filter((num) => B.has(num));
console.log(c2);

const c3 = a.filter((num) => !B.has(num));
console.log(c3);

// Level 3

console.log(countries_data);

const mostSpokenLanguages = (countries, number) => {
  const mostSpoken = new Map();

  const allLanguages = [];

  for (const country of countries) {
    for (const item of country["languages"]) {
      allLanguages.push(item);
    }
  }

  const justLanguages = new Set(allLanguages);

  for (const lang of justLanguages) {
    const amountLanguage = allLanguages.filter((lng) => lng === lang);
    mostSpoken.set(lang, amountLanguage.length);
  }

  const orderedMostSpoken = new Map(
    [...mostSpoken.entries()]
      .sort((a, b) => {
        return b[1] - a[1];
      })
      .slice(0, number)
  );

  return orderedMostSpoken;
};

console.log(mostSpokenLanguages(countries_data, 10));

console.log(mostSpokenLanguages(countries_data, 3));
