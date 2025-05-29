// Windows Global Object
/* a = 'Javascript';  */// declaring a variable without let or const make it available in window object and this found anywhere
/* b = 10; */ // this is a global scope variable and found in the window object

function letLearnScope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}

/* console.log(typeof(a), typeof(b)); */


// Global Scope
/* let a = 'Javascript';
let b = 10;
function letsLearnScope() {
    console.log(a, b);
    if (true) {
        let a = 'Python';
        let b = 100;
        console.log(a, b);
    }
    console.log(a, b);
}

letsLearnScope();
console.log(a, b); */

// Local Scope

/* let a = 'Javascript';
let b = 10; */

function letsLearnScope(){
    console.log(a, b);
    let value = false;

    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a = 'Python';
        let b = 20;
        let c = 30;
        let d = 40;

        value = !value;
        console.log(a, b, c, value);
    }

    console.log(a, b, value);
}

/* letsLearnScope();
console.log(a, b); */

// Var
// Nunca usarlo, pero esta bien saberlo
//scope.js
/* function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}; */

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
/* Por ejemplo aqui estas saliendo del alcance */
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3

/* Vale var se puede usar hasta afuera de los bloques, verdad? */

/* 
console.log(letsLearnScope); */
// console.log(gravity), Uncaught ReferenceError: gravity is not defined



/* Object */

//Creating an empty object
const personEmpty = {};

//Creating an objecting with values
const rectangle = {
    length: 20,
    with: 20
};

console.log(rectangle);

const person = {
    firstName: 'Steven',
    lastName: 'Uriarte',
    age: 23,
    skills: [
        'HTML',
        'CSS',
        'Javascript'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    'phone number' : '+3456455423'
};

console.log(person);

// Getting values from an object

// accessing values using .
console.log(person.firstName);
console.log(person.age);

//value can be accessed using square bracket and key name
console.log(person['firstName']);
console.log(person['lastName']);
// La unica forma de acceder a ese tipo es con brackets al parecer
console.log(person["phone number"]);

// Creating Object Methods
console.log(person.getFullName());


// Setting new key for an object
const Pet = {
    name : 'Tom',
    breed: 'Husky',
    age: 2,
    skills : [
        'Run',
        'Eat'
    ],

    fullName: function() {
        return `${this.name} ${this.breed} ${this.age} ${this.skills}`
    }
};

console.log(Pet.fullName());

Pet.name = 'Tom2';
Pet.age = 4;
Pet.skills.push('Sleep');

console.log(Pet.fullName());

Pet.getPetInfo = function(){
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length -1).join(', ');
    let lastSkill = this.skills.splice(this.skills.length - 1)[0];

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
    let fullName = this.fullName();

    return `${fullName} and your ${skills}`;
}


console.log(Pet);
console.log(Pet.getPetInfo());


//Object Methods
const newPerson = {
    firstName: 'Julio',
    lastName: 'Aquilez',
    city: 'Madrid',
    skills: ['Html', 'Css', 'Javascript'],
    address: {
        street: 'Avenue',
        post_cod: 2131
    },
    getPersonInfo: function () {
        return `My name is ${this.firstName} ${this.lastName} and live in ${this.city}` 
    }
}

/* Object.assign: To copy an object without modifying the original object */

const copyNewPerson = Object.assign({}, newPerson);
console.log(copyNewPerson);

// Getting object keys using Object.keys()
const keysOfNewPerson = Object.keys(newPerson);
console.log(keysOfNewPerson);

const keyOfNewPersonAddress = Object.keys(newPerson.address);
console.log(keyOfNewPersonAddress);

//Getting object values using Object.values()
const valuesNewPerson = Object.values(newPerson);
console.log(valuesNewPerson);


//Getting object keys and values using Object.entries()
const entries = Object.entries(valuesNewPerson);
console.log(entries);

//Checking Properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyNewPerson.hasOwnProperty('name'));
console.log(copyNewPerson.hasOwnProperty('firstName'));