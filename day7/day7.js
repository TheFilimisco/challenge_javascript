/* Function Declaration */

/* 
//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses
 */

function square() {
    let num = 2;
    let sq = num*num;
    console.log(sq);
}

square();


function addTwoNumbers(){
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;

    console.log(sum);
}

addTwoNumbers();


/* Function return value*/

function printFullName(){
    let firstName = "Steven";
    let lastName = "Uriarte";
    let space = " ";
    let fullName = firstName + space + lastName;
    return fullName;
}

console.log(printFullName());


/* Function with a parameter */

/* 
// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed
*/

function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}

console.log(areaOfCircle(10));


function squareBothNumbers(x){
    return x*x;
}

console.log(squareBothNumbers(2));

/* Function with two Parameters */
/*
// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}
functionName(parm1, parm2) // during calling or invoking two arguments needed 
 */

function sumTwoNumbers( numOne, numTwo) {
    let sum = numOne + numTwo;
    console.log(sum);
}

sumTwoNumbers(1,2);

/* Function with many parameters */
/*  
// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
*/

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const newNumbers = [1, 2, 3, 4, 5];

console.log(sumOfArray(newNumbers));


/* Unlimited number of parameters in regular function */
function sumAllNums(){
    console.log(arguments);
}

sumAllNums(1,2,3,4);

function sumaAllNums(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumaAllNums(1,2,3,4));


/* Unlimited number of parameters in arrow function */
const printNumSum = (...args) =>{
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args);
}

printNumSum(1,2,3);


const sumaAllNumbers = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum+=args[i];
    }
    return sum;
}

console.log(sumaAllNumbers(1,2,3));


/* Anonymous Function */
const anonymousFun = function() {
    console.log('I am anonymous');
}

anonymousFun();

/* Expression Function */

const saveSquare = function(n) {
    return n*n;
}

console.log(saveSquare(2));


/* Self Invoking Functions */
(function(n){
    console.log( n * n);
})(2);


let saveSquaredNum = (function(n){
    return n * n;
})(2);

console.log(saveSquaredNum);

/* Arrow Function  */

const arrowSquare = n => n * n;

console.log(arrowSquare(3));

const arrowPrintFullName = (firstName, lastName) => `Your Name is ${firstName} ${lastName}`;
console.log(arrowPrintFullName("Steven","Uriarte"));


/* Function with default paramters */

/*
// syntax
// Declaring a function
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg) 
 */

function greetings(name = 'peter'){
    return `${name}, welcome to 30 Days Of Javascript`;
}

console.log(greetings());
console.log(greetings("steven"));


/* 
// syntax
// Declaring a function
const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg)
*/


const arrowGreetings = (nam = 'peter') =>{
    return `${nam} hi again...`;
}

console.log(arrowGreetings());
console.log(arrowGreetings("Steven"));

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
