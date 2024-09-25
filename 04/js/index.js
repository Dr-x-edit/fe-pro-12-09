"use strict";

//ВАЖЛИВО ДО НАЗВ ФУНКЦІЙ ДОДАНІ СЛОВА
//DECLARATION, EXPRESSION ТА ARROW ТІЛЬКИ ДЛЯ ЇХ  КОРРЕКТНОГО ВИКЛИКУ

// =====================================
// Task1
// =====================================

const userName = [
  "Наталія",
  "Марина",
  "Анастасія",
  "Максим",
  "Ігор",
  "Володимир",
  "Павло",
  "Анна",
  "Євген",
  "Таня",
];

console.log("_________________________________");
console.log("Task1");
console.log("_________________________________");

// function declaration

welcomeUserDeclaration(userName, hiUserDeclaration);

function hiUserDeclaration(user) {
  console.log(`Вітаю ${user}!`);
}

function welcomeUserDeclaration(data, greeting) {
  for (let userIndex = 0; userIndex < data.length; userIndex++) {
    greeting(data[userIndex]);
  }
  console.log("=================");
}

// function expression

const hiUserExpression = function (user) {
  console.log(`Вітаю ${user}!`);
};

const welcomeUserExpression = function (data, greeting) {
  for (let userIndex = 0; userIndex < data.length; userIndex++) {
    greeting(data[userIndex]);
  }
  console.log("=================");
};

welcomeUserExpression(userName, hiUserExpression);

// for each + arrow function

userName.forEach((user) => console.log(`Вітаю ${user}!`));

// зробив окремо щоб стрілочна була в один рядок =)
console.log("=================");

// =================================
// Task2
// =================================

console.log("_________________________________");
console.log("Task2");
console.log("_________________________________");

// functon declaration

function returnDefaultArgDeclaration(user = "Incognito") {
  console.log(`${user}`);
  console.log("=================");
}

returnDefaultArgDeclaration();

// // function expression

const returnDefaultArgExpression = function (user = "Incognito") {
  console.log(`${user}`);
  console.log("=================");
};

returnDefaultArgExpression();

// arrow function

const returnDefaultArgArrow = (user = "Incognito") => console.log(`${user}`);

returnDefaultArgArrow();

// зробив окремо щоб стрілочна була в один рядок =)
console.log("=================");

// =================================
// Task3
// =================================
console.log("_________________________________");
console.log("Task3");
console.log("_________________________________");

// arrow function
const multiplyValues = (a, b, c) => a * b * c;

console.log(multiplyValues(1, 1, 1));

//  to function declaration
function multiplyValuesDeclaration(a, b, c) {
  return a * b * c;
}

console.log(multiplyValuesDeclaration(2, 2, 2));

// to function expressiion
const multiplyValuesExpression = function (a, b, c) {
  return a * b * c;
};
console.log(multiplyValuesExpression(3, 3, 3));

// =================================
// Task4
// =================================
console.log("_________________________________");
console.log("Task4");
console.log("_________________________________");
// first variatn

const evenNumberArray = [];

const addNumberToArray = (array, lengthSequense) => {
  for (let index = 0; index <= lengthSequense; index++) {
    if (index % 2 == 0) {
      array.push(index);
    } else continue;
  }
  return array;
  // console.log(array);
  //   console.log(`${array}`);
};

console.log(addNumberToArray(evenNumberArray, 8));
console.log("=================");

// second variant
const evenNumberArraySecond = new Array();

console.log(addNumberToArray(evenNumberArraySecond, 8));
console.log("=================");

// =================================
// Task5
// =================================
console.log("_________________________________");
console.log("Task5");
console.log("_________________________________");

let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідний"];

const checkMyPlans = (...args) => {
  const arr = args;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      //   console.log(arr[i][j]);
      if (i + 1 < arr.length) {
        console.log(`Сьогодні ${arr[i][j]} у вас такі плани ${arr[i + 1][j]}`);
      } else break;
    }
  }
};

checkMyPlans(days, plans);

// =================================
// Task6
// =================================
console.log("_________________________________");
console.log("Task6");
console.log("_________________________________");

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

// v1

const checkArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
};

console.log(checkArray(checkArr));

// v2;

let checkArr1 = [];

checkArr.forEach((value) => {
  if (value < 0) {
    checkArr1.push(0);
  } else checkArr1.push(value);

  return checkArr1;
});

console.log(checkArr1);

// v3
checkArr = checkArr.map((value) => {
  if (value < 0) {
    return (value = 0);
  } else return value;
});
console.log(checkArr);

// =================================
// Task7
// =================================
console.log("_________________________________");
console.log("Task7");
console.log("_________________________________");

let checkArr2 = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

// v1
const summArray = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    result += arr[i];
  }
  return result;
};

console.log(summArray(checkArr2));

// v2

let sumArr = checkArr2.reduce((acc, value) => acc + value);

console.log(sumArr);

// =================================
// Task8
// =================================
console.log("_________________________________");
console.log("Task8");
console.log("_________________________________");

const firstArr = [1, 2, 3, 4];

// v1
let squareArray = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] ** 2);
  }
  return newArray;
};

console.log(squareArray(firstArr));

// v2
let newArray = firstArr.map((value) => value ** 2);

console.log(newArray);

// v3
let m = [];

firstArr.forEach((value) => {
  return m.push(value ** 2);
});
console.log(m);
