/* 1. Declare firstName, lastName, country, city, age, isMarried, year 
variable and assign value to it and use the typeof operator to check different data types. */

let firstName = 'Steven';
let country = 'Spain';
let city = 'badalona';
let age = 23;
let isMarried = false;
let year = 2025;

console.log(typeof(firstName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

/* 2. Check if type of '10' is equal to 10 */

console.log('10' == 10); //true
console.log(parseInt('9.8') == 10); // true
console.log(parseInt('9.8'));
/* 5. Figure */
console.log('==========Figure==========');
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); //false

/* 6. Figure  */
console.log('==========Figure==========');
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); //false
console.log(!(4 < 3));// true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); //true
console.log("In both dragon and python".search("on")); // true


