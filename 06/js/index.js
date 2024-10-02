"use strict";
// Переишіть цей код використовуючи let const~
// Замість var
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// Let's make changes
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Замість var
// var message = "test";
// function example() {
//   if (true) {
//     var message = "Hello, world!";
//     console.log(message);
//   }
//   console.log(message); // Виведе 'Hello, world!'
// }

const massage = "test";
function example() {
  if (true) {
    const massage = "Hello world!";
    console.log(massage);
  }
  console.log(massage);
}

example();

// Створіть функцію яка приймає массив оброблює його map  та повертає новий масив де є імя та середній бал студента

const students = [
  { name: "Оля", scores: { math: 85, english: 78, science: 92 } },
  { name: "Іван", scores: { math: 58, english: 74, science: 80 } },
  { name: "Марія", scores: { math: 95, english: 85, science: 99 } },
  { name: "Петро", scores: { math: 70, english: 65, science: 75 } },
];

function studentsResult(arr) {
  const newArr = arr.map((value) => {
    const { math, english, science } = value.scores;
    let name = value.name;
    let averageScore = (math + english + science) / 3;
    return { name: name, scores: averageScore };
  });
  return newArr;
}

console.log(studentsResult(students));

// Відфільтруйте студентів за допомогою filter в яких середній бал вище 80 балів

console.log(
  studentsResult(students).filter((item) => {
    return item.scores > 80;
  })
);
// Використайте фільтер для того щоб отримати 2 массива з income та expense  а також за допомогою .
// Використайте map щоб зібрати всі дані в окремі масиви про  income та expense.  Та порахуйте сумарне значення для кожного з видів доходу чи роходу

const transactions = [
  { id: 1, type: "income", amount: 100 },
  { id: 2, type: "expense", amount: 50 },
  { id: 3, type: "income", amount: 150 },
  { id: 4, type: "expense", amount: 70 },
  { id: 5, type: "income", amount: 200 },
];

function filtredTransactions(arr, operation = "income") {
  const incomeTransactions = arr.filter((item) => {
    return item.type == "income";
  });

  const expenseTransactions = arr.filter((item) => {
    return item.type == "expense";
  });
  if (operation == "income") {
    return incomeTransactions;
  } else if (operation == "expense") return expenseTransactions;
}
function mapedTransactions(arr, operation = "income") {
  const incomeTransactions = arr.map((item) => {
    if (item.type == "income") {
      return item;
    } else return { amount: 0 };
  });

  const expenseTransactions = arr.map((item) => {
    if (item.type == "expense") {
      return item;
    } else return { amount: 0 };
  });

  if (operation == "income") {
    return incomeTransactions;
  } else if (operation == "expense") return expenseTransactions;
}

function accSumTransaction(arr) {
  return arr.reduce((acc, item) => acc + item.amount, 0);
}

console.log(filtredTransactions(transactions));
console.log(filtredTransactions(transactions, "expense"));

console.log(accSumTransaction(filtredTransactions(transactions)));
console.log(accSumTransaction(filtredTransactions(transactions, "expense")));

console.log(mapedTransactions(transactions));
console.log(mapedTransactions(transactions, "expense"));

console.log(accSumTransaction(mapedTransactions(transactions)));
console.log(accSumTransaction(mapedTransactions(transactions, "expense")));

// Створіть функцію, яка приймає масив чисел, фільтрує ті, що більше 10, і повертає новий масив, що містить перші три елементи результату.
let randomLenght = Math.trunc(Math.random() * 30) + 1;

function createRandomArray(
  length,
  massage = "Note number:",
  onlyNumber = false
) {
  const arr = [];
  if (!onlyNumber) {
    for (let i = 0; i < length; i++) {
      if (i % 4 === 0) {
        arr.push(`${massage} ${i}`);
      } else arr.push(Math.trunc(Math.random() * 55 + 1));
    }
  } else {
    for (let i = 0; i < length; i++) {
      arr.push(Math.trunc(Math.random() * 55 + 1));
    }
  }
  return arr;
}

const randArray = createRandomArray(randomLenght, undefined, true);

console.log(randArray);

function filterTopThreeItems(arr) {
  const newArr = arr.filter((item) => item > 10);
  console.log(newArr);
  return newArr.slice(0, 4);
}

console.log(filterTopThreeItems(randArray));
// Створіть функцію, яка приймає масив і два індекси, і повертає новий масив, що містить елементи між цими індексами, у зворотньому порядку.

function sliceArray(arr, startIndex, endIndex) {
  let newArr = arr.slice(startIndex, endIndex);
  return newArr.reverse();
}
console.log(`==============`);

console.log(sliceArray(randArray, 2, 7));

// Створіть функцію, яка приймає масив чисел, фільтрує парні числа, а потім повертає новий масив, де кожне парне число помножене на 2.

function multiplyEvenNumbers(arr) {
  let newArr = arr.filter((item) => item % 2 == 0).map((item) => item * 2);
  console.log(arr.filter((item) => item % 2 == 0));
  return newArr;
}

console.log(multiplyEvenNumbers(randArray));

// Додаткове завдання
// Використайте map щоб отримати сумму кожно вкладено массиву
const arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [10]];
console.log(
  arrayOfArrays.map((item) => item.reduce((acc, item) => acc + item), 0)
);
