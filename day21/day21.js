console.log("Day 21");

/* Getting Element */

/* Getting elements by tag name */

/* 
// syntax
document.getElementsByTagName('tagname')
*/

const allTitles = document.getElementsByTagName("h1");
console.log(allTitles);
console.log(allTitles.length);

for (const title of allTitles) {
  console.log(title);
}

/*Getting elements by class name*/

/*  
//syntax
document.getElementsByClassName('classname')
*/

const allTitlesTwo = document.getElementsByClassName("title");
console.log(allTitlesTwo);
console.log(allTitlesTwo.length);

for (const title of allTitlesTwo) {
  console.log(title);
}

/* Getting an element by id */

/* 
//syntax
document.getElementById('id')
*/
let firstTitle = document.getElementById("first-title");
console.log(firstTitle);

/* Getting elements by using querySelector methods */

let firstTitleNow = document.querySelector("h1");
console.log(firstTitleNow);
let secondTitleNow = document.querySelector("#first-title");
console.log(secondTitleNow);

let thirdTitle = document.querySelector(".title");
console.log(thirdTitle);

/* querySelectorAll */

const allTitlesNew = document.querySelectorAll("h1");
console.log(allTitlesNew);

for (const title of allTitlesNew) {
  console.log(title);
}

console.log("This on Class");
const allTitlesByClass = document.querySelectorAll(".title");
allTitlesByClass.forEach((title) => console.log(title));

/* Adding attribute */
/* Adding attribute without setAttribute */

const titlesAdding = document.querySelectorAll("h1");
titlesAdding[0].className = "title";
titlesAdding[3].id = "fourth-title";

console.log(titlesAdding);

/* Adding attribute using setAttribute */
const tiitlesSet = document.querySelectorAll("h1");
tiitlesSet[3].setAttribute("class", "new-title");
tiitlesSet[3].setAttribute("id", "new-fourth-title");

console.log(tiitlesSet);

/* Adding class using classList */
/* This add new class for element */

tiitlesSet[3].classList.add("title", "header-title");
console.log(tiitlesSet);

/* Removing class using remove */
tiitlesSet[3].classList.remove("title", "header-title");
console.log(tiitlesSet);

/* Adding Text to HTML element */

/* Adding Text content using textContent */
const anotherTitles = document.querySelectorAll("h1");
anotherTitles[3].textContent = "Fourth Title";

/* Adding Text Content using innerHTML */
const anotherTitlesAgain = document.querySelectorAll("h1");

/* Adding style */
/* Adding Style Color */

const titlesColors = document.querySelectorAll("h1");
titlesColors.forEach((title, i) => {
  title.style.fontSize = "24px";
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});

/* Adding Style Background Color */
const titlesBackground = document.querySelectorAll("h1");
titlesBackground.forEach((title, i) => {
  title.style.fontSize = "24px";
  if (i % 2 === 0) {
    title.style.backgroundColor = "red";
  } else {
    title.style.backgroundColor = "green";
  }
});

/* Adding Style Font Size */

const titlesFontSize = document.querySelectorAll("h1");
titlesFontSize.forEach((title, i) => {
  title.style.fontSize = "24px";
  if (i % 2 === 0) {
    title.style.fontSize = "20px";
  } else {
    title.style.fontSize = "30px";
  }
});
