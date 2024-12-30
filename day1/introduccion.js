console.log("Hello,world");

/* Undefined */
let firstName;
console.log(firstName);

/* null */
let emptyValue = null;
console.log(emptyValue);

/* Checking type of Data */
console.log(typeof "Asabeneh"); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined

// Comment a line
/* Comment a multiply line
    other line
    and other line
*/

// Syntax
let nameOfVariable = "value";
console.log(nameOfVariable);

// Declaring different variables of different data types
let firstNameUser = "Asabeneh"; // first name of a person
let lastName = "Yetayeh"; // last name of a person
let country = "Finland"; // country
let city = "Helsinki"; // capital city
let age = 100; // age in years
let isMarried = true;

console.log(firstNameUser, lastName, country, city, age, isMarried);

// Declaring variables with number values
const gravity = 9.81; // earth gravity  in m/s2
const boilingPoint = 100; // water boiling point, temperature in °C
const PI = 3.14; // geometrical constant
console.log(gravity, boilingPoint, PI);

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = "Asabeneh",
  job = "teacher",
  live = "Finland";
console.log(name, job, live);

let first = "comments",
  second = "can",
  third = "make",
  forth = "code",
  five = "redable";

console.log(first, second, third, forth, five);

let single_commet = "Welcome to 30DaysOfJavaScript";

let name_me = "Steven";
let age_me = 23;
let adress_me = "Badalona";
let city_me = "Barcelona";

console.log("I am " + age_me + " years old");
