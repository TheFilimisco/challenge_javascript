console.log("Day 2 Exercises");
let the_quote =
  "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another";
console.log(the_quote);

let prhase_mother_teresa =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

console.log(prhase_mother_teresa);

console.log(typeof "10");
console.log(typeof 10);

console.log(typeof 10 == typeof "10");

console.log(parseFloat("9.8") == 10);

let word_python = "ptyhon";
let word_jargon = "jargon";
console.log(word_python.match("on"));
console.log(word_jargon.search("on"));

let sentence = "I hope this course is not full of jargon";
console.log(sentence.match("jargon"));

const randNum = Math.floor(Math.random() * 101); // creates random number between 0 to 100
console.log(randNum);

let randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomNumber);

const randNumMax = Math.floor(Math.random() * 256); // creates random number between 0 to 100
console.log(randNumMax);
