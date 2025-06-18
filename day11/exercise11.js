console.log("Exercise 11");

import { countries_data } from "./countries_data.js";

const constants = [2.72, 3.14, 9.81, 37, 100];

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

let [fin, est, sw, den, nor] = countries;

console.log(fin, est, sw, den, nor);

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

/* 
1. Iterate through the users array and get all the keys of the object using destructuring
2. Find the persons who have less than two skills
 */

for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

console.log("Less than two Skills");

for (const { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    console.log(name, scores, skills, age);
  }
}

console.log("Iterator Countries");
for (const { name, capital, population, languages } of countries_data) {
  console.log(name, capital, population, languages);
}

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, score, jsScore = score[2], reactScore = score[3]] = student;
console.log(name, skills, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (students) => {
  const result = [];
  for (const [nam, ski, sco] of students) {
    result.push({ name: nam, skills: ski, scores: sco });
  }
  return result;
};

console.log(convertArrayToObject(students));

const justStudent = {
  newName: "David",
  newAge: 25,
  newSkills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

/* Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets */

let { ...copyStudent } = justStudent;

copyStudent.newSkills.frontEnd.push({ skill: "BootStrap", level: 8 });
copyStudent.newSkills.backEnd.push({ skill: "Express ", level: 9 });
copyStudent.newSkills.dataBase.push({ skill: "SQL", level: 8 });
copyStudent.newSkills.dataScience.push("SQL");

console.log(copyStudent);
