console.log("Hello world");
// Classes

/* 
syntax
class ClassName {
    // code goes here
}
*/

// Example
/* Class Person empty */
/* class Person {
  // code goes here
} */

/* Class Instantiation */

/* class Person {}

const person = new Person();
console.log(person); */

/* Class Constructor */

class Person {
  constructor(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("Selena", "Gomez");
console.log(person);

const person2 = new Person("Selena2", "Gomez2");
console.log(person2);

/* Making more properties */

class Pet {
  constructor(name, breed, age, color) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
  }
}

const cat = new Pet("Michi", "Egypcian", 2, "Black");
console.log(cat);

/* Default values with constructor */

class Robot {
  constructor(
    name = "Not Name",
    power = "Not power",
    skills = "Not Skills",
    dateCreated = "Not date"
  ) {
    this.name = name;
    this.power = power;
    this.skills = skills;
    this.dateCreated = dateCreated;
  }
}

const robot = new Robot();
const fillRobot = new Robot("Newto", "Fire", ["Walk", "Singer"], Date.now());

console.log(robot);
console.log(fillRobot);

/* Class Methods */

class Character {
  constructor(
    name = "NPC",
    weapon = "hand",
    skills = "Not skills",
    isAlive = true,
    health = 100
  ) {
    this.name = name;
    this.weapon = weapon;
    this.skills = skills;
    this.isAlive = isAlive;
    this.health = health;
  }
  getFullInformation() {
    return `You ${this.name} is using ${this.weapon} with life ${this.health}`;
  }
}

const warrior = new Character("Alakran", "Sword", ["Attack", "Shield"]);
console.log(warrior);
const npc = new Character();
console.log(npc);

/* Propierties with initial value */

class Game {
  constructor(name = "Not name", date = Date.now(), score = 0) {
    this.name = name;
    this.date = date;
    this.score = score;
  }
  getAllInformation() {
    return `${this.name} have started ${this.date} with a score: ${this.score}`;
  }
}

const newGame = new Game("First");
const simpleGame = new Game();
console.log(newGame.date);
console.log(simpleGame);

/* Getter and Setter */

class Home {
  constructor(
    ubication = "unknown",
    rooms = 0,
    hasPool = false,
    hasSolarPanel = false
  ) {
    this.ubication = ubication;
    this.rooms = rooms;
    this.hasPool = hasPool;
    this.hasSolarPanel = hasSolarPanel;
  }
  get getUbication() {
    return this.ubication;
  }
  get getRooms() {
    return this.rooms;
  }
  get getHasPool() {
    return this.hasPool;
  }
  get getHasSolarPanel() {
    return this.hasSolarPanel;
  }
  set setUbication(ubication) {
    this.ubication = ubication;
  }
  set setRooms(rooms) {
    this.rooms = rooms;
  }
  set setHasPool(hasPool) {
    this.hasPool = hasPool;
  }
  set setHasSolarPanel(hasSolarPanel) {
    this.hasSolarPanel = hasSolarPanel;
  }
}

const avgHome = new Home();
const fancyHome = new Home("Barcelona", 4, true, true);
console.log(fancyHome);
console.log(avgHome);

console.log(avgHome.getHasPool);
avgHome.setHasPool = true;
console.log(avgHome.getHasPool);

/* Static Method */

class PersonComplete {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

console.log(PersonComplete.favoriteSkill());
console.log(PersonComplete.showDateTime());

/* Inheritance */

/* 
// syntax
class ChildClassName extends {
 // code goes here
}
*/

/* 

class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
}

const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo()); 
*/

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const s1 = new Student(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki",
  "Male"
);
const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
s1.setScore = 1;
s1.setSkill = "HTML";
s1.setSkill = "CSS";
s1.setSkill = "JavaScript";

s2.setScore = 1;
s2.setSkill = "Planning";
s2.setSkill = "Managing";
s2.setSkill = "Organizing";

console.log(s1);

console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

console.log(s2.saySomething());
console.log(s2.getFullName());
console.log(s2.getPersonInfo());
