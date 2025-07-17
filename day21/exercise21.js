console.log("Exercise Day 21");

const firstTitle = document.querySelector("span");

console.log(firstTitle);

function changeColorAzar() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  return `rgb(${a},${b},${c})`;
}

console.log(changeColorAzar());

setInterval(() => {
  firstTitle.style.color = changeColorAzar();
}, 1000);

const itemsInside = document.querySelectorAll("li");
itemsInside.forEach((item, index) => {
  if (item.textContent.includes("1")) {
    item.style.backgroundColor = "green";
  } else if (item.textContent.includes("2")) {
    item.style.backgroundColor = "yellow";
  } else {
    item.style.backgroundColor = "red";
  }
});

const h2 = document.querySelector("h2");
const h3 = document.createElement("h3");

function getDateNow() {
  const timeStamp = Date.now();
  const date = new Date(timeStamp);
  return date;
}

setInterval(() => {
  h3.style.backgroundColor = changeColorAzar();
  h3.textContent = getDateNow();
}, 1000);

h2.insertAdjacentElement("afterend", h3);
