/* For loop */

/* 
// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}
*/

for(let x = 0; x <= 10; x++){
    console.log(`Hello world ${x}`);
};

console.log("===========Reversed===========");

for(let x = 5; x >= 0; x--){
    console.log(`Hello World ${x}`);
}


for(let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i*i}`)
}


const countries = ['Spain','German','Italy','England'];
const countriesToUpper = [];

for(let i = 0; i < countries.length; i++){
    countriesToUpper.push(countries[i].toUpperCase());
}

console.log("============Countries============")
console.log(countries);
console.log("=========Countries Upper========")
console.log(countriesToUpper);


const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i];
}

console.log(sum);

/* Do While loop */

let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 5);


/* For of loop */

/* for (const element of arr){
// codes goes here
} */

const numbers2 = [1, 2, 3, 4, 5,];
for (const item of numbers2) {
    console.log(item);
}

/* Break */

for (let i = 0; i <= 5 ; i++) {
    if(i == 3){
        break;
    }
    console.log(i);
}


/* Continue */
for(let i = 0 ; i <= 5; i++){
    if(i == 3) {
        continue;
    }
    console.log(i);
}

