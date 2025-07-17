console.log("Day 19");

/* Closure */

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }
  return innerFunction;
}

const innnerFunc = outerFunction();

console.log(innnerFunc());
console.log(innnerFunc());

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
