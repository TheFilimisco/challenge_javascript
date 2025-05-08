/* Conditionals */

/* if */
/* // syntax
if (condition) {
  //this part of code runs for truthy condition
} */

let num = 3;
if (num > 0) {
    console.log(`${num} is a positive number`);
}

let isRaining = true;
if (isRaining) {
    console.log("Today is raning");
}


/* If Else */
/* 
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
*/

let num2 = 3;
if (num2 > 0) {
    console.log(`${num2} is a positive number`);
} else {
    console.log(`${num2} is a negative number`);
}


/*  If Else if Else */

/* 
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code
}
*/

/* let inputNumber = prompt('Enter number', 'number goes here');
console.log(typeof(parseInt(inputNumber))); */

let inputNumber = 0;

if (inputNumber > 0) {
    console.log(`${inputNumber} is a positive number`);
} else if (inputNumber < 0) {
    console.log(`${inputNumber} is a negative number`);
} else if (inputNumber === 0){
    console.log(`${inputNumber} is zero`);
} else {
    console.log(`${inputNumber} is not a number`);
}



/* Switch */

/* 
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
*/

/* let dayUserInput = prompt('What day is today ?'); */

/* let day = dayUserInput.toLocaleLowerCase(); */

let day = 'monday';

switch(day) {
    case 'monday':
        console.log("Today is Monday");
        break;
    case 'tuesday':
        console.log("Today is Tuesday");
        break;
    case 'wednsday':
        console.log("Today is Wednsday");
        break;
    case 'thursday':
        console.log("Today is Thursday");
        break;
    case 'friday':
        console.log("Today is Friday");
        break;
    default:
        console.log("It's not a week day");
}

/* Ternary Operators */

let isRainingToday = true;
isRaining ? console.log('You need a rain coat') : console.log('You dont need a coat');

