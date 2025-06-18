console.log("Day 11");

// Destructuring and Spread

// Destructuring Arrays

const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

const names = ["Steven", "Sixto", "David", "Luis", "Enrique"];
let [firstPeron, secondPerson, thirdPerson, fourthPerson, fithPerson] = names;
console.log(firstPeron, secondPerson, thirdPerson, fourthPerson, fithPerson);

const scientificConstants = [2.72, 3.14, 9.81];
let [e, pi, gravity] = scientificConstants;
console.log(e, pi, gravity);

const fullStack = [
  ["HTML", "CSS", "JS"],
  ["Node", "Express", "MongoDB"],
];

const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

/* Omit a Value */
const numbers2 = [1, 2, 3];
let [one, , three] = numbers2; //2 is omitted
console.log(one, three);

const names2 = ["Steven", "Sixto", "Luis"];
let [, firstItem, secondItem] = names2;
console.log(firstItem, secondItem);

/* We can use default value */

const myNames = [undefined, "Sixto", "Steven"];
let [firstThing = "Me", secondThing, thirdThing, fourthThing = "Hi"] = myNames;
console.log(firstThing, secondThing, thirdThing, fourthThing);

/* We can destructure few of the first */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

/* Destructuring during iteration */
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

const newFullStack = [
  ["Html", "Css", "JS", "React"],
  ["Node", "Express", "Mongo", "Mysql"],
];

for (const [first, second, third] of newFullStack) {
  console.log(first, second, third);
}

// Destructuring Object
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

/* On object has to be same names*/
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, (perimeter = width * height));

/* Renaming during Structuring */
const newRectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width: w, height: h, area: a, perimeter: p } = newRectangle;
console.log(w, h, a, p);

/* Assigned to undefined */

const anotherRectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width: we, height: he, area: ar, perimeter: per = 60 } = anotherRectangle;
console.log(we, he, ar, per);

//Object parameter without destructuring
const rect = {
  width: 20,
  height: 10,
};

const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect));

/* Another Example */

const person = {
  firstName: "Steven",
  lastName: "Jackson",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Spanish", "English"],
};

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInfo = `${obj.firstName} ${obj.lastName}. I know ${formattedSkills} and ${skills}, I speak ${formattedLanguages}`;
  return personInfo;
};

console.log(getPersonInfo(person));

/* Object parameter with destructuring */

const calculatorNewPerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatorNewPerimeter(rect));

// Destructuring object during iteration

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

// Spread or Rest Operator

const countriesArray = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countriesArray;

console.log(gem);
console.log(fra);
console.log(nordicCountries);

//Spread operator to copy arrays
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

// Spread Operator to copy object

const user = {
  name: "steven",
  title: "Backend",
  country: "Spain",
  city: "Barcelona",
};

const copiedUser = { ...user, title: "Student" };
console.log(copiedUser);

/* Spread operator with arrow function */

const summAllNums = (...args) => {
  console.log(args);
};

summAllNums(1, 2, 3, 4, 5);

const newSumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(newSumAllNums(1, 2, 3, 4, 5));
