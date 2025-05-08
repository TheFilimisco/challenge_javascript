console.log("Hello world");

let isLigthOn = true;
let isRaining = false;

let isfiveMajorThantSix = 4>3;

console.log(isLigthOn);
console.log(isRaining);
console.log(isfiveMajorThantSix);

/* Undefinied */

let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet

/* Null */

let name = null;
console.log(name);


/* Operators */
/* Equals = */
let myFirstName  = 'Steven';
let myLastName = 'Uriarte';
console.log(myFirstName+myLastName);


/* Anothers */
let numOne = 4;
let numTwo = 3;

let sum = numOne+numTwo;
let diff = numOne-numTwo;
let mult = numOne*numTwo;
let div = numOne / numTwo;
let remainder = numOne%numTwo;
let powerOf = numOne ** numTwo;

console.log(sum,diff,mult,div,remainder,powerOf);

const PI = 3.14;
let radius = 100;

const areaCircle = PI * radius ** 2;
console.log(areaCircle);

const gravity = 9.81;
let mass = 72;

const weight = gravity * mass;
console.log(weight);


const boilingPoint = 100;
const bodyTemp = 37;

console.log(` The boiling point of water is ${boilingPoint} oC.
 Human body temperature is ${bodyTemp} oC.
 The gravity of earth is 9.81 m/s2.`);

/* Comparision Operators */

console.log(3>2);
console.log(3>=2);
console.log(3<2);
console.log(3<=2);
console.log(3==2);
console.log(3!=2);

console.log("Ojo con esto!")
/* OJITO!!! */
console.log(3 == '3'); // Compara solamente el valor
console.log(3 === '3'); // Compara el valor y el tipo de dato
console.log(3 !== '3'); // True Compara si es diferente del tipo de dato y valor en este caso es verdadero por el tipo de dato
console.log(3 != '3'); // False Compara solamente el valor por el valor

console.log(3 != 3); //False
console.log(3 !== 3); //false esto compara que debe ser el valor y el tipo diferente
console.log( 3 !== '4'); 

/* Haber conclusiones el !== -> Es que debe ser diferente tanto el valor como el tipo */
/* En el caso de != -> El valor nada mas, da igual el tipo */

/* Equivalent */

console.log(0 == false);
/* Ojo con esto */
console.log("0 === false: ", (0===false));
console.log(0 == '');
console.log(0 == ' ');
console.log(0 === '');
console.log(undefined == null);
console.log(NaN == NaN);
console.log(NaN === NaN);

console.log(typeof NaN);


console.log('mango'.length == 'avocado'.length);
console.log('mango'.length === 'avocado'.length);
console.log('apple'.length === 'lemon'.length);
console.log('apple'.length == 'lemon'.length);
console.log('apple'.length == 5);
console.log('apple'.length === 5);

console.log('mango'.length != 'avocado'.length);
console.log('mango'.length < 'avocado'.length);


console.log("Logical Opearators");
/* && ampersand operator example */
const check = 4 > 3 && 10 > 5;
console.log(check);
const check2 = 4 >3 && 10 < 5;
console.log(check2);

/* || pipe or operator */

const check3 = 4 > 3 || 10 > 5;
console.log(check3);


/* ! Negation */
let checkNegation = 4 > 3;
console.log(checkNegation);
console.log(!checkNegation);

/* Increment Operator*/
/* Pre */
let count = 0;
console.log(++count);
console.log(count);

let count2 = 0;
console.log(count2++);
console.log(count2);

/* Decrement Operator */
let count3 = 0;
console.log(--count3);
console.log(count3);

let count4 = 0;
console.log(count4--);
console.log(count4);


/* Ternary Operators */

let isRainingNow = false;
isRainingNow ? console.log('You need a rain coat.') : console.log('No need for a rain coat.');

isRainingNow = true;
isRainingNow ? console.log('You need a rain coat.') : console.log('No need for a rain coat.');

let number = 5;
number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`);

number = -5;
number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`);

/* Windows Methods */

// alert(message);

/* alert('Welcome buddy!'); */

/* Windows prompt() */
//prompt('required text', 'optional text');

/* let numberPropt = prompt('Enter number', 'number goes here');
console.log(numberPropt); */

/* const agree = confirm('Are you sure you like to delete?');
console.log(agree); */

console.log("==========Data Object===========");
let todayDate = new Date();
console.log(todayDate.getFullYear());
console.log(todayDate.getMonth());
console.log(todayDate.getDay());
console.log(todayDate.getHours());
console.log(todayDate.getMinutes());
console.log(todayDate.getSeconds());
console.log(todayDate.getDay());
console.log(todayDate.getTime());

