/* String Methods */

// length
let java_script = "JavaScript";
console.log(java_script.length); // 10
let first_name = "Stephen";
console.log(firstName.length); // 6

// toUpperCase

let string = "JavaScript";
console.log(string.toUpperCase()); // JAVASCRIPT

// toLowerCase

let string_toLowerCase = "JavaScript";
console.log(string_toLowerCase.toLowerCase()); // javascript

// substr

let string_substr = "JavaScript";
console.log(string_substr.substr(4, 6)); // Script

// substring

let string_substring = "JavaScript";
console.log(string_substring.substring(4, 10)); // Script

// split

let string_split = "JavaScript";
console.log(string_split.split("")); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]

// trim

let string_trim = "   JavaScript   ";
console.log(string_trim.trim()); // JavaScript

// includes
let string_includes = "30 Days Of JavaScript";

console.log(string_includes.includes("Days")); // true
console.log(string_includes.includes("days")); // false - it is case sensitive!
console.log(string_includes.includes("Script")); // true
console.log(string_includes.includes("script")); // false
console.log(string_includes.includes("java")); // false
console.log(string_includes.includes("Java")); // true

// replace

/* string.replace(oldsubstring, newsubstring); */

let new_string = "30 Days Of JavaScript";
console.log(new_string);
console.log(new_string.replace("JavaScript", "Python")); // 30 Days Of Python
console.log(new_string);

// charAt()

/* string.charAt(index) */

let string_charat = "30 Days Of JavaScript";
console.log(string_charat.charAt(0)); // 3

let lastIndex = string_charat.length - 1;
console.log(string_charat.charAt(lastIndex)); // t

//charCodeAt()
/* string.charCodeAt(index); */

let string_charcodeat = "30 Days Of JavaScript";
console.log(string_charcodeat.charCodeAt(3)); // D ASCII number is 68

let lastIndex_charcodeat = string.length - 1;
console.log(string_charcodeat.charCodeAt(lastIndex_charcodeat)); // t ASCII is 116

// IndexOf
/* string.indexOf(substring); */

let string_indexof = "30 Days Of JavaScript";

console.log(string_indexof.indexOf("D")); // 3
console.log(string_indexof.indexOf("Days")); // 3
console.log(string_indexof.indexOf("days")); // -1
console.log(string_indexof.indexOf("a")); // 4
console.log(string_indexof.indexOf("JavaScript")); // 11
console.log(string_indexof.indexOf("Script")); //15
console.log(string_indexof.indexOf("script")); // -1

//lastindexof
//syntax
/* string.lastIndexOf(substring) */
let string_last_indexof =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(string_last_indexof.lastIndexOf("love")); // 67
console.log(string_last_indexof.lastIndexOf("you")); // 63
console.log(string_last_indexof.lastIndexOf("JavaScript")); // 38

//concat
/* string.concat(substring, substring, substring); */
let string_concat = "30";
console.log(string_concat.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript

//startsWith

//syntax
/* string.startsWith(substring) */

let string_love = "Love is the best to in this world";

console.log(string_love.startsWith("Love")); // true
console.log(string_love.startsWith("love")); // false
console.log(string_love.startsWith("world")); // false

//endsWith
/* string.endsWith(substring) */

let country_finland = "Finland";

console.log(country_finland.endsWith("land")); // true
console.log(country_finland.endsWith("fin")); // false
console.log(country_finland.endsWith("Fin")); //  false

//search

/* string.search(substring) */

let string_search =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string_search.search("love")); // 2
console.log(string_search.search(/javascript/gi)); // 7

/* / delimit */
/* g global */
/* i indiferent for uppercase or lowercase */

//match
let string_match = "Me encanta javaScript y aprender JavaScript.";
let resultado = string_match.match(/javascript/gi);
let result_without_delimited = string_match.match(/JavaScript/);
console.log(resultado);
console.log(result_without_delimited);

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

// repeat

/* string.repeat(n) */

let string_repeat = "love";
console.log(string_repeat.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
