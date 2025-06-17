console.log("Day 10");

// Set
/* Creating a empty Set */
const companies = new Set();
console.log(companies);

/* Creating set from array */
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

/* Iterable object */

for (const language of setOfLanguages) {
  console.log(language);
}

/* Adding an element to a set */
const companiesSet = new Set();
console.log(companiesSet.size);

companiesSet.add("Google");
companiesSet.add("Facebook");
companiesSet.add("Amazon");

console.log(companiesSet.size);
console.log(companiesSet);

/* We can use loop to add element to a set */
const companiesLoop = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const setOfCompanies = new Set();
for (const company of companiesLoop) {
  setOfCompanies.add(company);
}

/* Deleting an element a Set */
console.log(setOfCompanies.delete("Google"));
console.log(setOfCompanies.delete("Facebook"));
console.log(setOfCompanies.delete("Facebooks"));
console.log(setOfCompanies.size);

/* Checking an element in the set*/
console.log(setOfCompanies.has("Apple"));
console.log(setOfCompanies.has("Oracle"));

/* Clearing the set */
setOfCompanies.clear();
console.log(setOfCompanies);

/* Example use */

const languagesUse = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const langSetUse = new Set(languagesUse);
console.log(langSetUse);
console.log(langSetUse.size);

const counts = [];
const count = {};

for (const lan of langSetUse) {
  const filteredLang = languagesUse.filter((lng) => lng === lan);
  console.log(filteredLang);
  counts.push({ lang: lan, count: filteredLang.length });
}

console.log(counts);

/*Aonther Case of Use*/

const numbers = [5, 3, 2, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers);

/* Union of Sets*/

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

/* Intersections of Sets */
let a2 = [1, 2, 3, 4, 5];
let b2 = [3, 4, 5, 6];

let A2 = new Set(a2);
let B2 = new Set(b2);

let c2 = a2.filter((num) => B2.has(num));
let C2 = new Set(c2);

console.log(C2);

/* Difference of Sets */

let a3 = [1, 2, 3, 4, 5];
let b3 = [3, 4, 5, 6];

let A3 = new Set(a3);
let B3 = new Set(b3);

let c3 = a3.filter((num) => !B3.has(num));
let C3 = new Set(c3);
console.log(C3);

/* Map */

/* const map = new Map();
console.log(map); */

const countriesMap = [
  ["Finland", "Helsinki"],
  ["Sweeden", "Stockholm"],
  ["Norway", "Oslo"],
];

const map = new Map(countriesMap);
console.log(map);
console.log(map.size);

/* Adding values to the Map */
const countriesNewMap = new Map();
console.log(countriesNewMap.size);

countriesNewMap.set("Finland", "Helsinki");
countriesNewMap.set("Sweeden", "Stockholm");
countriesNewMap.set("Norway", "Oslo");

console.log(countriesNewMap);
console.log(countriesNewMap.size);

/* Getting a value from map */

console.log(countriesNewMap.get("Finland"));

/* Cheking key in map */
console.log(countriesNewMap.has("Finland"));

/* Iterator a map */

for (const country of countriesNewMap) {
  console.log(country);
}

for (const [country, city] of countriesNewMap) {
  console.log(country, city);
}
