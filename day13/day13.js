console.log("Day 13");

/* Console Object Methods */

/* console.log() */
/* Showing output on browser console */
console.log("30 Days of Javascript");

/* Substitution */
console.log("%d %s of Javascript", 30, "Days");

/* Css */
console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
); // log output green red and yellow text

/* console.warn() */
console.warn("This is a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
);
console.warn("Warning is different from error");

/* console.error() */

console.error("This is an error message");
console.error("We all make mistakes");

/* console.table() */
const names = ["David", "Eugenio", "Derbez", "Malefico"];
console.table(names);

/* Object */
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

/* console.time() */
const newCountries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < newCountries.length; i++) {
  console.log(newCountries[i][0], newCountries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

/*console.info()*/
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");

/* console.assert() */
console.assert(4 > 3, "4 is greater than 3"); // no result
console.assert(3 > 4, "3 is not greater than 4"); // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

/* console.group() */

const newNames = ["Alejandro", "Miguel", "Brook", "Euceda"];
const newsCountries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const newUser = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const newUsers = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(newNames);
console.groupEnd();

console.group("Countries");
console.log(newsCountries);
console.groupEnd();

console.group("Users");
console.log(newUser);
console.log(newUsers);
console.groupEnd();

/* console.count() */

const func = () => {
  console.count("Function has been called");
};

func();
func();

/* console.clear() */
/* Its works on console  */
