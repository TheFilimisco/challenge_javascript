console.log("Exercises Day 15");

/* Level 1 */

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  sound() {
    return "Sound";
  }
  walk() {
    return "moving";
  }
  eat() {
    return "eating";
  }

  get getName() {
    return this.name;
  }
  get getAGE() {
    return this.age;
  }
  get getColor() {
    return this.color;
  }
  get getLegs() {
    return this.legs;
  }

  set setName(name) {
    this.name = name;
  }
  set setAGE(age) {
    this.age = age;
  }
  set setColor(color) {
    this.color = color;
  }
  set setLegs(legs) {
    this.legs = legs;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, owner) {
    super(name, age, color, legs);
    this.owner = owner;
  }
  sound() {
    return "Woof";
  }

  get getOwner() {
    return this.owner;
  }

  set setOwner(owner) {
    this.owner = owner;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, hisStreet) {
    super(name, age, color, legs);
    this.hisStreet = hisStreet;
  }
  sound() {
    return "Meow";
  }

  get getHisStreet() {
    return this.hisStreet;
  }

  set setHisStreet(hisStreet) {
    this.hisStreet = hisStreet;
  }
}

const animal = new Animal("Cocodrile", 2, "green", 4);
console.log(animal);
console.log(animal.sound());
console.log(animal.eat());
console.log(animal.walk());

const blackCat = new Cat("Tom", 1, "Black", 4, false);
console.log(blackCat);
console.log(blackCat.eat());
console.log(blackCat.sound());
console.log(blackCat.walk());

const huskyDog = new Dog("Oliver", 2, "Black/White", 4, "Martin");
console.log(huskyDog);
console.log(huskyDog.eat());
console.log(huskyDog.sound());
console.log(huskyDog.walk());

// Level 3

class Statics {
  constructor(nums) {
    this.nums = nums;
  }
  count() {
    return this.nums.length;
  }
  sum() {
    const sum = this.nums.reduce((num1, num2) => num1 + num2);
    return sum;
  }
  min() {
    let numMin = 999999999;
    for (const num of this.nums) {
      if (num < numMin) {
        numMin = num;
      }
    }
    return numMin;
  }
  max() {
    let numMax = -999999999;
    for (const num of this.nums) {
      if (num > numMax) {
        numMax = num;
      }
    }
    return numMax;
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return this.sum() / this.count();
  }
  median() {
    const numsOrdered = this.nums.sort();
    const pos = Math.floor(numsOrdered.length / 2);
    return numsOrdered[pos];
  }
  mode() {
    const justNumbers = new Set(this.nums);
    const list = [];
    for (const nu of justNumbers) {
      const amountNum = this.nums.filter((num) => num === nu).length;
      list.push({ nu, amountNum });
    }
    return list.sort((a, b) => b.amountNum - a.amountNum).slice(0, 1);
  }
  describe() {
    return this.nums;
  }
}

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const objectStatic = new Statics(ages);
console.log(objectStatic.describe());
console.log(objectStatic.count());
console.log(objectStatic.sum());
console.log(objectStatic.min());
console.log(objectStatic.max());
console.log(objectStatic.range());
console.log(objectStatic.mean());
console.log(objectStatic.median());
console.log(objectStatic.mode());
