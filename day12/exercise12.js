console.log("Exercise 12");

const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const pattern = /\d+/g;
const matches = text.match(pattern);
console.log(matches);

let [salaryMounth, bonusAnual, bonusOnline] = matches;

console.log(salaryMounth, bonusAnual, bonusOnline);

let totalAnnualIncome = salaryMounth * 12 + bonusOnline * 12 + bonusAnual;
console.log(totalAnnualIncome);

console.log("New");

const is_valid_variable = (str) => {
  const pattern = /^first_?name/;
  const matches = pattern.test(str);
  return matches;
};

console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));

const tenMostFrequentWords = (str, number) => {
  const pattern = /[A-Za-z]+/gi;
  const matches = str.match(pattern);

  const words = new Set(matches);
  const countWords = [];

  for (const word of words) {
    const amountWord = matches.filter((match) => match === word);
    countWords.push({ word: word, count: amountWord.length });
  }
  const ordered = countWords.sort((a, b) => b.count - a.count).slice(0, number);
  return ordered;
};

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph, 10));

console.log("===========Level 3=============");

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (str) => {
  const pattern = /[^A-Za-z ]+/gi;
  const result = str.replace(pattern, "");
  return result;
};

console.log(cleanText(sentence));

const mostFrequentWords = (str) => {
  const pattern = /[A-Za-z]+/gi;
  const matches = str.match(pattern);

  const words = new Set(matches);
  const result = [];

  for (const word of words) {
    const amountWord = matches.filter((match) => match === word);
    result.push({ word: word, count: amountWord.length });
  }

  return result.sort((a, b) => b.count - a.count).slice(0, 3);
};

console.log(mostFrequentWords(cleanText(sentence)));
