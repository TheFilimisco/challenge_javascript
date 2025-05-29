/* Level 1 */

import {users} from './listUsers.js';
import {products} from './products.js';


//1 Create an empty object called dog

const dog = {
};

console.log(dog);

dog.name = 'Toby';
dog.age = 12;
dog.bark = function() {
     return `woof woof`;
};
/* dog = {
    name: 'Toby',
    age: 12,
    bark: function() {
       
    }
}; */
console.log(dog);
console.log(dog.bark());


console.log(dog.name);
console.log(dog.age);

// Setting

dog.name = 'Toby2';
dog.age = 20;
dog.bark = function() {
    return `woof`;
};

console.log(dog);
console.log(dog.bark());


// Users
console.log("================Users================")
/* console.log(users); */


let maxSkills = -99999999999999;
let userWithManySkills = "";

const valuesOfUsers = Object.values(users);
/* const entries = Object.entries(users); */

/* for (const item in valuesOfUsers) {
    if (valuesOfUsers[item]['skills'].length > maxSkills) {
        maxSkills = valuesOfUsers[item].length;
        userWithManySkills = item;
        console.log(maxSkills);
        console.log(userWithManySkills);
    }
    console.log(valuesOfUsers[item]);
}
 */
/* console.log('Item: ', userWithManySkills);
console.log('With skills: ', maxSkills);
 */


// Set your name in the users object  without modifying the original users object

const copyOfValuesOfUsers = Object.assign({},valuesOfUsers);
copyOfValuesOfUsers.name = 'Steven';
/* 
console.log(copyOfValuesOfUsers); */


const keyOfValuesOfUsers = Object.keys(valuesOfUsers);
/* console.log(keyOfValuesOfUsers); */

const valuesOfValuesOfUsers = Object.values(valuesOfUsers);
/* console.log(valuesOfValuesOfUsers);
 */
/* lEVEL 3 */

/* Create an object literal called personAccount. It has firstName, lastName, incomes(ingresos), expenses(gastos) 
properties and it has totalIncome,
totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description. */

/* This Object Complete */
const personAccount = {
    firstname : 'Steven',
    lastName : 'Uriarte',
    incomes : 0,
    expenses: 0,
    totalExpense: function (){
        console.log(`Total Expense: ${this.totalExpense}`);
    },
    accountInfo : function () {
        console.log(`Your info is ${this.firstname} and ${this.lastName}`);
    },
    addIncome: function (amount) {
        this.incomes+=amount
        console.log(`Add income: ${amount}`);
    },
    addExpense : function (amount) {
         this.expenses+=amount
         console.log(`Add expense: ${amount}`);
    },
    accountBalance : function (){
        console.log(`Your Balance`);
        console.log(`Your incomes ${this.incomes}`);
        console.log(`Your expense ${this.expenses}`);
        console.log(`Your Balance ${this.incomes - this.expenses}`);
    }
}

console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());
personAccount.addIncome(20);
personAccount.addIncome(30);
personAccount.addIncome(40);
personAccount.addExpense(10);

console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());


// Questions 2



console.log(users);
console.log(products);








