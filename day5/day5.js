/* Arrays */

// Constructor
//Using Constructor
const arr = Array();
//or
// let arr = new Array();
console.log(arr);

//Using Square
const arrSquare = [];
console.log(arrSquare);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log('Numbers: ' + numbers);
console.log('Length of Numbers: ', numbers.length);

const fruits =  ['Apple','Pear','Grapes','Cucumber','Avocado'];
console.log('Fruits: ' + fruits);
console.log('Length of Fruits: ', fruits.length);

/* Ojo el array puede tener diferentes tipo de datos dentro de el */
const arrayMultiple = [
    'Steven',
    23,
    true,
    {country: 'Spain', city: 'Badalona'}
];
console.log(arrayMultiple);


/* Creating an array using Split */
let js = 'Javascript';
const charsInJavascript = js.split('');

console.log(charsInJavascript);

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const getCompanies = companies.split(',');
console.log(getCompanies);


/* Accesing array Items using Index */

const vegetable = ['Tomato', 'Onion', 'Potato', 'Carrot'];
console.log(vegetable);
let firstVegetable = vegetable[0];
console.log(firstVegetable);

// Last fruit
/* let lastIndex = vegetable.length -1;
let lastVegetable = vegetable[lastIndex]; */
let lastVegetable = vegetable[vegetable.length -1];
console.log(lastVegetable);

/* Modifying Array Element */
const orderNumbers = [1, 2, 3, 4, 5];
console.log(orderNumbers);
orderNumbers[0] = 10;
orderNumbers[1] = 20;
console.log(orderNumbers);


/* Methods to manipulate Array */

console.log("===========Methods Array============");

//Array constructor
const arrayConstructor = new Array();
console.log(arrayConstructor);

const eightEmptyValues = Array(8);
console.log(eightEmptyValues);

// Creating Static Values with fill
const arrayFillOfX = Array(8).fill('X');
console.log(arrayFillOfX);

const arrayFillNumber = Array(8).fill(0);
console.log(arrayFillNumber);

// Concat array using concat
const firstArrayConcat = [1,2,3];
const secondArrayConcat = [4,5,6];
console.log(firstArrayConcat);
console.log(secondArrayConcat);

const arrayComplete = firstArrayConcat.concat(secondArrayConcat);
console.log(arrayComplete);


/* Get length Array */

console.log(arrayComplete.length);

/* Check if existing a number inside array */
const numbersPosition = [1, 2, 3, 4, 5];
console.log(numbersPosition.indexOf(5));
console.log(numbersPosition.indexOf(6));
console.log(numbersPosition.indexOf(0));

// With String

const items = ["sword", 'field', 'poison', 'health'];
console.log(items.indexOf('field'));
console.log(items.indexOf('health'));


/* Getting last index of an element in array */
// lastIndexOf: it gives the position of the last item in the array. it doesnt exist return -1

const numbersRepeats = [1, 2, 3, 1, 1, 2, 3];
console.log(numbersRepeats.lastIndexOf(1));


/* Includes verified if exist return boolean */
console.log(numbersRepeats.includes(1));
console.log(numbersRepeats.includes(0));


/* Checking Array */
const thisIsArray = [1,2,3,4];
const notIsArray = 1234;

console.log(Array.isArray(thisIsArray));
console.log(Array.isArray(notIsArray));

const numbersForJoiner = [1, 2, 3 , 4 , 5];
console.log(numbersForJoiner.join());
console.log(typeof(numbersForJoiner.join()));
console.log(numbersForJoiner.join("#"));

/* Slice Array Elements */
const sliceArray =  [1 , 2 , 3 , 4 , 5];
console.log(sliceArray.slice()); // Copy all Items
console.log(sliceArray.slice(0)); // same above

// Ojo al detalle
console.log(sliceArray.slice(1,3)); 

/* Splice Array Elements */
/* array.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...) */
const spliceArray2 = [1,2,3,4,5];
spliceArray2.splice(0 , 1);
console.log(spliceArray2);

const spliceArray3 = [1, 2, 3, 4, 5, 6];
console.log(spliceArray3);
spliceArray3.splice(3, 3, 7, 8, 9);
console.log(spliceArray3.splice(3, 3, 7, 8, 9));
console.log(spliceArray3);

/* Adding item to an Array using push */
/* 
// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr)
// ['item1', 'item2','item3','new item']
*/

const arrayDummy = [1, 2, 3, 4, 5];
arrayDummy.push(2);
arrayDummy.push('2');
console.log(arrayDummy);

arrayDummy.pop();
console.log(arrayDummy);

/* Removing an element from the beginning */
const anotherNumbers = [1,2,3,4,5];
anotherNumbers.shift();
console.log(anotherNumbers);

/* Add an eleement from the beginning */
anotherNumbers.unshift(0);
console.log(anotherNumbers);

/* Reversing array Order */
const numbersReversed = [1,2,3,4,5];
numbersReversed.reverse();
console.log(numbersReversed);


/* Sorting eleemnts  */
const webTechnology = ['Html', 'Css', 'Javascript', 'React', 'Java'];
console.log(webTechnology);
webTechnology.sort();
console.log(webTechnology);

const numberUnordered = [1, 2, 4, 2, 1, 4, 3];
console.log(numberUnordered.sort());

/* Array of Arrays */
const firstNums = [1, 4, 8];
const secondNums = [0, 2, 6];

const arrayOfArrays = [[1,2,3], [4,5,6]];
const arrayMatch = [firstNums,secondNums];
console.log(arrayOfArrays);
console.log(arrayMatch);