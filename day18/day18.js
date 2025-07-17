console.log("Day 18");

/* Callbacks */

/* const doSomething = (callBack) => {
  setTimeout(() => {
    const skills = ["Html", "Javascript", "Css"];
    callBack("It did not go well", skills);
  }, 2000);
};

const callBack = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callBack);
 */

/* const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};

const callBack = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callBack); */

// Promise Constructor
/* 
// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
*/

/* const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["Html", "Css", "Javascript"];
    if (skills.includes("Node")) {
      resolve("Fullstack Developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
 */

/* Fetch API */
/* const url = "https://restcountries.com/v3.1/all?fields=name"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    console.log(data);
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens */

/* Async Await */
/* const square = async function (n) {
  return n * n;
};
console.log(square(2));
 */

/* 
const square = async function (n) {
  return n * n;
};
const value = await square(2);
console.log(value); 
*/

/* Promise */
/* const url = "https://restcountries.com/v3.1/all?fields=name";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error)); */

/* async and await */

/* const url = "https://restcountries.com/v3.1/all?fields=name";

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();
 */

/* Exercise Level 1 */

/* const url = "https://restcountries.com/v3.1/all?fields=name";

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
    const allCountries = [];
    for (const country of countries) {
      allCountries.push(country["name"]["common"]);
    }
    return allCountries;
  } catch (error) {
    console.error(error);
  }
};

const result = await fetchData();
console.log("Result de Fetch Data", result); */
