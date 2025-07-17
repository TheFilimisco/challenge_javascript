console.log("Day 17");
/* LocalStorage => this save for alwyas in your browser
    SessionStorage => This mantaince until close your browser's tab

    Web Storage objects:

localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/

/* Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. See the example below. */

/* 
//syntax
localStorage.setItem('key', 'value')
*/

const tools = ["Computer", "Phone", "Pen"];
const toolsJson = JSON.stringify(tools, undefined, 4);
localStorage.setItem("tools", toolsJson);

let swords = [
  { name: "Blood", level: 10 },
  { name: "Ice", level: 3 },
  { name: "Smile", level: 1 },
  { name: "Wood", level: 4 },
];

let swordsJSON = JSON.stringify(swords, undefined, 4);
localStorage.setItem("swords", swordsJSON);

const user = {
  firstName: "Filimisco",
  age: 90,
  skills: ["Reader", "Writter", "Poet"],
};

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userText);

localStorage.clear();

console.log(localStorage);

/* Getting Item from LocalStorage */

/* 
//syntax
localStorage.getItem('key')
*/
