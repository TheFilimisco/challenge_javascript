/* Level 2 */
import { countries } from "./countries.js";
import { webTechs } from "./webTechs.js"; 

console.log(countries);
console.log(webTechs);

/* 2.First remove all the punctuations and change the string to array and count the number of words in the array */
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanText = text.replace(/[.,]/g,'');
let itemOfText = cleanText.split(/\. |\s+/);


console.log(itemOfText);
console.log(itemOfText.length);

/* In the following shopping cart add, remove, edit items */

const shoppingCart = ['Milk', 'Coffe', 'Tea', 'Honey'];

let inputDecision = "sugar";
inputDecision.toLowerCase();

if ( inputDecision == "add") {
    shoppingCart.push('Meal')
} else if (inputDecision == "sugar") {
    shoppingCart.push('Sugar');
}

console.log(shoppingCart);


/* In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
If it does not exist add to the countries list. */

let country = "Ethiopia";
console.log(countries.indexOf(country));
console.log(countries.includes(country));

if (countries.indexOf(country) != -1 ){
    console.log("ETHIOPIA");
} else{
    console.log(`Not exist ${country}`);
}


if (countries.includes(country)){
    console.log("ETHIOPIA");
} else{
    console.log(`Not exist ${country}`);
}

function CamelCase(str) { 
  let pattern = /[- *%]/;
  let newStr = str.split(pattern)
  let result = []

  for (const word of newStr) {
    if (word.length === 0) {
        let newWord = word[0].toUpperCase( ) + word.slice(1).toLowerCase();
        result.push(newWord);
    }
  }

  // code goes here  
  return result.join(''); 
}
   
// keep this function call here 
console.log(CamelCase(readline()));