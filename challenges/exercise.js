// 1

const CamelCase = (str) => {
  let pattern = /[^a-zA-Z0-9]+/;
  let words = str.split(pattern);
  let result = [];

  for (const word of words) {
    if (word.length === 0) continue;
    let capatalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
    result.push(capatalized);
  }
  let joined = result.join("");
  let camelCased = joined[0].toLowerCase() + joined.slice(1);
  return camelCased;
};

// 1. camelCase Básico
// Convierte una frase separada por espacios o caracteres especiales en camelCase.

/* input: "hello world-test_example"
output: "helloWorldTestExample" */

const camelCaseBasic = (str) => {
  let pattern = /[^a-zA-Z0-9]+/;
  let words = str.split(pattern);
  let result = [];

  for (const word of words) {
    if (word.length === 0) continue;
    let capatalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
    result.push(capatalized);
  }
  let joined = result.join("");
  let camelCased = joined[0].toLowerCase() + joined.slice(1);
  return camelCased;
};

// kebab-case
// Convierte cualquier frase en kebab-case (todo-en-minusculas-con-guiones).

const kebabCase = (text) => {
  const pattern = /[^A-Za-z0-9]+/;
  const listWords = text.split(pattern);
  const result = [];
  for (const word of listWords) {
    result.push(word.toLowerCase());
  }
  const resultMatch = result.join("-");
  return resultMatch.substring(0, resultMatch.length - 1);
};

/* input: "This is Spinal Tap!"
output: "this-is-spinal-tap" */

//3. Contar palabras
//Cuenta cuántas palabras reales hay en un string, ignorando signos y números.
/* input: "Hello! How are you? 123"
output: 4 */

const amountWordOfText = (text) => {
  const pattern = /[^A-Za-z]+/;
  const wordText = text.split(pattern);
  let amountWord = 0;
  for (const word of wordText) {
    if (word === "") {
      continue;
    }
    amountWord += 1;
  }
  return amountWord;
};

//Eliminar caracteres especiales
//Deja solo letras, números y espacios.
/* input: "Th!s i$ #crazy@"
output: "Ths i crazy" */

const deleteEspecialCharacter = (text) => {
  const pattern = /[^A-Za-z0-9]+/g;
  const newText = text.replace(pattern, " ");
  return newText;
};

/* console.log(deleteEspecialCharacter("Th!s i$ #crazy@")) */

//  Capitalizar frases
// Convierte la primera letra de cada palabra a mayúscula.

/* input: "esto es una frase"
output: "Esto Es Una Frase"*/

const captilzaedWords = (text) => {
  const result = [];
  const listWords = text.split(" ");
  for (const word of listWords) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
};

const anotherForm = (text) => {
  const result = [];
  const listWords = text.split(" ");
  for (const word of listWords) {
    word[0].toLowerCase();
    result.push(word);
  }
  return result.join(" ");
};

/* console.log(captilzaedWords("esto es una frase")); */
/* console.log(anotherForm("esto es una frase")); */

const codelandUsernameValidation = (str) => {
  pattern = /[^A-Za-z0-9_]/;
  if (str.length < 4 || str.length > 25) {
    return false;
  } else if (str[0] == str[0].toUpperCase) {
    return false;
  } else if (str.search(pattern) > 0) {
    return false;
  } else if (str[str.length - 1] == "_") {
    return false;
  }
  return true;
};

/* console.log(codelandUsernameValidation("aa_"));
console.log(codelandUsernameValidation("u_hello_world123")) */

/* Input: "aa_"
Output: false */
/* Input: "u_hello_world123"
Output: true */

const extractToAmount = (inputSentence) => {
  const totalAmount = 10000;
  const result = [];
  for (item of inputSentence) {
    if (item[item.length - 1] === "h") {
      const value = item.charAt(item.length - 2);
      const hourToMinutes = 60;
      const valueConverted = value * hourToMinutes;
      result.push(item.substring(0, item.length - 2) + valueConverted + "m");
    } else {
      result.push(item);
    }
  }
  let amountDivide = 0;
  for (item of result) {
    amountDivide += parseInt(item.slice(item.length - 3, item.length - 1));
  }
  const lastAmount = totalAmount / amountDivide;
  for (let i = 0; i < result.length; i++) {
    let number = result[i].substring(
      result[i].length - 3,
      result[i].length - 1
    );
    result[i] =
      result[i].substring(0, result[i].length - 3) +
      `${lastAmount * parseInt(number)}`;
  }

  console.log(result);
};

console.log(extractToAmount(["SKYFALL,30m", "STYLO,30m", "MAIN TITLES,1h"]));
console.log(extractToAmount(["SKYFALL,50m", "STYLO,50m"]));

/* Input: ["SKYFALL,50m","STYLO,50m"]
Output: ["SKYFALL,5000","STYLO,5000"] */

/* Input: ["SKYFALL,30m","STYLO,30m","MAIN TITLES,1h"]
Output: ["MAIN TITLES,5000","SKYFALL,2500","STYLO,2500"] */

/* console.log(10000/120 * 30); */

/* const StockPicker = (arr) =>{
    let target = -1;

    for (let i = arr.length; i > 0; i--) {
        if (i === arr.length) continue;
        console.log("jump")
        for (let j = i; j < arr.length; j++) {
            console.log(arr[j]);
            if (arr[i] < arr[j]){
                if (target < arr[j]) {
                    target = arr[j]-arr[i];
                }
            } 
        }
    }

    return target;
} */

// if pointer bucle in reverse
//slip out first point
//next point with side rigth evaluation if is major than right no save
//instead is less than right save
//When appear another compare if a is more big then another

/* console.log(StockPicker([10,12,4,5,9])); */

/* Input: [10,12,4,5,9]
Output: 5 */

const StockPicker = (arr) => {
  let target = -1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const profit = arr[j] - arr[i];
        if (profit > target) {
          target = profit;
        }
      }
    }
  }

  return target;
};

console.log(StockPicker([14, 20, 4, 12, 5, 11]));
