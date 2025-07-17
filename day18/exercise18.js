console.log("Exercise 18");

function hi(name, callback) {
  console.log(`Hola, ${name}`);
  callback();
}

/* hi("Natalia", () => {
  console.log("This is CallBack");
}); */

function waitAndHi(name, callBack) {
  setTimeout(() => {
    console.log(`Hi next 2 seconds, ${name}`);
    callBack();
  }, 2000);
}

waitAndHi("Steven", () => {
  console.log("End Hi");
});
