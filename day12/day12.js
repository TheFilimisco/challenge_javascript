console.log("Day 12");

// Creating a pattern with RegExp Constructor

//withouth flag
/* 
let pattern = "love";
let regEx = new RegExp(pattern); 
*/

// declaring with global flag
/* 
let pattern = "love";
let flag = "gi";

let regEX = new regEX(pattern, flag); 
*/

// write inside constructor
/* 
let regEx = new RegExp("love", "gi"); 
*/

// Creating a pattern without RegExp Constructor
/* 
let regEx = /love/gi; 
*/

//RegExp Object Methods

/* Testing for a match */

// test
/* const str = "I love Javascript";
const pattern = /love/;
const result = pattern.test(str);
console.log(result); */

// Arrary containing all of the match
// match

/* const str = "I love Javascript";
const pattern = /love/;
const result = str.match(pattern);
console.log(result); */

/* const str = "I love JavaScript";
const pattern = /love/g;
const result = str.match(pattern);
console.log(result);
 */

// Search
// return position if exist
// return -1 if doesnt exist
/* const str = "I love Javascript";
const pattern = /love/g;
const result = str.search(pattern);
console.log(result); */

// Replacing a substring

/* const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

const matchReplaced = txt.replace(/Python|python/, "Javascript");
console.log(matchReplaced);
 */

/* const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

matchReplaced = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplaced); */

/* 
const txt =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

matches = txt.replace(/%/g, "");
console.log(matches);

*/

// Square Brackets
/* const pattern = "[Aa]pple";
const txt =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches = txt.match(pattern);
console.log(matches);
 */

/* 
const pattern = /[Aa]pple/g;
const txt =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches = txt.match(pattern);
console.log(matches);
 */

/* const pattern = /[Aa]pple|[Bb]anana/g;
const txt =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";

const matches = txt.match(pattern);
console.log(matches);
 */

// Escape character (\)
/*
const pattern = /\d/g;
const txt = "This regular expression example was made in January 12,  2020.";
const matches = txt.match(pattern);
console.log(matches);
 */

// One more time
/* const pattern = /\d+/g;
const txt = "This regular expression example was made in January 12,  2020.";
const matches = txt.match(pattern);
console.log(matches); */

//Period
/* 
const pattern = /[a]./g;
const txt = "Apple and banana are fruits";
const matches = txt.match(pattern);
console.log(matches); 
*/

/* 
const pattern = /[a].+/g; // . any character, + any character one or more times
const txt = "Apple and banana are fruits";
const matches = txt.match(pattern);
console.log(matches); // ['and banana are fruits']
 */

// Zero or more times

/*
const pattern = /[a].
const txt = "Apple and banana are fruits";
const matches = txt.match(pattern);
console.log(matches)  */

// Zero or one times

/* 

const txt =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
const pattern = /[Ee]-?mail/g; // ? means optional
const matches = txt.match(pattern);

console.log(matches);
 */

// Quantifier in RegExp
/* 
const txt = "This regular expression example was made in December 6,  2019.";
const pattern = /\\b\w{4}\b/g; //  exactly four character words
const matches = txt.match(pattern);
console.log(matches); //['This', 'made', '2019'] 
// */

/* 
const txt = "This regular expression example was made in December 6,  2019.";
const pattern = /\b[a-zA-Z]{4}\b/g; //  exactly four character  words without numbers
const matches = txt.match(pattern);
console.log(matches); //['This', 'made']
 */
/* 
const txt = "This regular expression example was made in December 6,  2019.";
const pattern = /\d{4}/g; // a number and exactly four digits
const matches = txt.match(pattern);
console.log(matches); // ['2019'] */

/* const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{1,4}/g   // 1 to 4
const matches = txt.match(pattern)
console.log(matches)  // ['6', '2019'] */

// Cart
// Start with
/* 
const txt = "This regular expression example was made in December 6,  2019.";
const pattern = /^This/; // ^ means starts with
const matches = txt.match(pattern);
console.log(matches); // ['This'] 
// */

//negation

/* const txt = "This regular expression example was made in December 6,  2019.";
const pattern = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches = txt.match(pattern);
console.log(matches); // ["6", "2019"] */

// Exact match
/* 
let pattern = /^[A-Z][a-z]{3,12}$/;
let myName = "Ste";
let result = pattern.test(myName);

console.log(result);
 */
