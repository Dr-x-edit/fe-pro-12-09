// "use strict";
// push:
// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

const dataArray = [];

let randomLenght = Math.trunc(Math.random() * 20) + 1;

console.log(`METHOD PUSH:Task1`);

console.log(randomLenght);

for (let i = 0; i < randomLenght; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    dataArray.push(`Track number ${i}`);
  } else dataArray.push(Math.trunc(Math.random() * 10 + 1));
}

const createRandomArray = function (
  length,
  massage = "Note number:",
  onlyNumber = false
) {
  const arr = [];
  if (!onlyNumber) {
    for (let i = 0; i < length; i++) {
      if (i % 4 === 0) {
        arr.push(`${massage} ${i}`);
      } else arr.push(Math.trunc(Math.random() * 10 + 1));
    }
  } else {
    for (let i = 0; i < length; i++) {
      arr.push(Math.trunc(Math.random() * 10 + 1));
    }
  }
  return arr;
};

console.log(dataArray);
console.log(dataArray.length);

// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

console.log(`METHOD PUSH:Task2`);
const pushElementToArray = (arr, element) => {
  arr.push(element);

  return arr;
};

let randomElement = Math.trunc(Math.random() * 100) + 1;

console.log(randomElement);

console.log(pushElementToArray(dataArray, randomElement));

// pop:
// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

console.log(`METHOD POP:Task1`);

const newRandomArray = createRandomArray(randomLenght);

console.log(newRandomArray);

newRandomArray.pop();

console.log(newRandomArray);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.
console.log(`METHOD POP:Task2`);

const removeLastElemetArray = function (arr) {
  arr.pop();
  // console.log(arr);
  return arr;
};

console.log(removeLastElemetArray(newRandomArray));

// unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
console.log(`METHOD UNSHIFT:Task1`);

const anotherRandomArray = createRandomArray(randomLenght, "Comment number:");

anotherRandomArray.unshift("This is first comment in this array");

console.log(anotherRandomArray);

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

console.log(`METHOD UNSHIFT:Task2`);

const addNoteToStartInArray = function (
  arr,
  element = "This will be your element"
) {
  if (isNaN(element)) {
    arr.unshift(`${element}`);
  } else arr.unshift(+element);

  return arr;
};

console.log(
  addNoteToStartInArray(createRandomArray(randomLenght, "Some note number:"))
);

console.log(
  addNoteToStartInArray(
    createRandomArray(randomLenght, "Some note number:"),
    125
  )
);

console.log(
  addNoteToStartInArray(
    createRandomArray(randomLenght, "Some note number:"),
    "closer"
  )
);

// shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

const randomArrayForShiftMethod = createRandomArray(
  randomLenght,
  "Next door is:"
);

console.log(`METHOD SHIFT:Task1`);

console.log(randomArrayForShiftMethod);

console.log(randomArrayForShiftMethod.shift());

console.log(randomArrayForShiftMethod);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

console.log(`METHOD SHIFT:Task2`);

const removeFirstItemFromArray = function (arr) {
  arr.shift();

  return arr;
};

console.log(removeFirstItemFromArray(randomArrayForShiftMethod));

// fill:
// Завдання 1: Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.

const createEmptyArrySomeLength = function (length) {
  return Array(length);
};

console.log(`METHOD FILL:Task1`);

console.log(createEmptyArrySomeLength(randomLenght));

const fillArray = createEmptyArrySomeLength(randomLenght).fill(randomElement);

console.log(fillArray);

// Завдання 2: Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.
console.log(`METHOD FILL:Task2`);

const rewriteSomeNoteInArray = function (
  arr,
  elemet,
  startIndex = 0,
  endIndex = arr.length
) {
  if (endIndex > arr.length) {
    arr.fill(elemet, startIndex, arr.length);
  } else if (
    (startIndex = endIndex && startIndex > 0 && endIndex <= arr.length)
  ) {
    arr.fill(elemet, startIndex - 1, endIndex);
  } else arr.fill(elemet, startIndex, endIndex);

  return arr;
};

const newArray = rewriteSomeNoteInArray(fillArray, 98);

console.log(newArray);

const newArray1 = rewriteSomeNoteInArray(fillArray, 105, 2, 2);

console.log(newArray1);

// reverse:
// Завдання 1: Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

let randomArrayForReverseMethod = createRandomArray(
  randomLenght,
  "Any text massage"
);
console.log(`METHOD REVERSE:Task1`);

console.log(randomArrayForReverseMethod);

console.log(randomArrayForReverseMethod.reverse());

// Завдання 2: Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

const reverseArray = function (arr) {
  return Array.from(arr).reverse();
};
console.log(`METHOD REVERSE:Task2`);

console.log(reverseArray(randomArrayForReverseMethod));

// Створіть функцію, яка приймає число і повертає масив об'єктів. Кожен об'єкт має містити два поля:
// число і його квадрат. Масив повинен містити об'єкти для чисел від 1 до цьго чила .

console.log(`Task1: Create an array of objects`);

function createListObjects(numberOfObjects) {
  const arrayOfObjects = [];
  for (let i = 1; i < numberOfObjects; i++) {
    arrayOfObjects.push({ number: i, square: i ** 2 });
  }

  return arrayOfObjects;
}

console.log(createListObjects(randomLenght));

const firstKey = "number";

const secondKey = "square";

function createListObjectsAnotherMethod(numberOfObjects) {
  const arrayOfObjects = [];
  for (let i = 1; i < numberOfObjects; i++) {
    const numberSquareObject = {};

    numberSquareObject[firstKey] = i;
    numberSquareObject[secondKey] = i ** 2;

    arrayOfObjects.push(numberSquareObject);
  }

  return arrayOfObjects;
}

console.log(createListObjectsAnotherMethod(randomLenght));

// Створіть функцію, яка приймає два масиви: масив імен та масив віків.
// Функція повинна повернути масив об'єктів, де кожен об'єкт представляє користувача з ім'ям і віком.

console.log(`Task2: Create an array of objects`);

let names = ["Оля", "Іван", "Марія"];
let ages = [25, 30, 22];

// function checkMinlength(arr) {
//   const arrLength = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrLength.push(arr[i].length);
//   }

//   return Math.min(...arrLength);
// }

function createPeoplesObject(...args) {
  const peopleArray = [];
  for (let i = 0; i < args.length; i++) {
    // console.log(args[i]);
    for (let j = 0; j < args[i].length; j++) {
      if (i + 1 < args.length) {
        // console.log(args[i + 1][j]);
        peopleArray.push({ name: args[i][j], age: args[i + 1][j] });
      } else break;
    }
  }
  return peopleArray;
}

console.log(createPeoplesObject(names, ages));

// Дано масив чисел видаліть найбільший елемент з масиву
console.log(`Task: Delete the bigest number in array`);

const arr = createRandomArray(randomLenght, undefined, true);

console.log(arr);

console.log(arr.sort((a, b) => a - b).pop());

console.log(arr);

console.log(arr.sort((a, b) => b - a).shift());

console.log(arr);

// Напишіть функцію, яка приймає масив чисел, сортує його за спаданням, потім замінює перші три елементи масиву значенням 10
console.log(`Task1: Modified array`);

const randArray = createRandomArray(randomLenght, undefined, true);

function modifiedArray(arr) {
  arr.sort((a, b) => b - a);
  console.log(arr);
  rewriteSomeNoteInArray(arr, 10, 0, 3);

  return arr;
}

console.log(modifiedArray(randArray));

// Напишіть функцію, яка приймає масив чисел, видаляє всі повторювані елементи, сортує залишки за спаданням і видаляє найбільший елемент.
console.log(`Task2: Modified array`);

const anotherRandArray = createRandomArray(randomLenght, undefined, true);

// const ar = [6, 8, 1, 4, 4, 8, 4, 9, 6, 2, 8, 7, 2, 5, 3, 2];

// функцію писав поетапно методом спроб

function deleteReapetInArray(arr) {
  console.log(arr);
  let ar = Array.from(arr);
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      // console.log(`${arr[i]}-${arr[j]}`);
      if (ar[i] == ar[j]) {
        delete ar[j];
      }
    }
  }
  console.log(ar.sort((a, b) => b - a).shift());

  // дописав уже після знаходження функції з інтернету. Прибрав пусті слоти
  let newArr = ar.filter((element) => {
    return element != undefined;
  });

  return newArr;
}

// запозичена з інтернету. Сам нажаль до такого не додумався XD
function deleteReapetInArrayFromInternet(arr) {
  let uniqueChars = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });

  console.log(uniqueChars.sort((a, b) => b - a).shift());

  return uniqueChars;
}

// console.log(deleteReapetInArray(ar));
console.log(deleteReapetInArray(anotherRandArray));
console.log(deleteReapetInArrayFromInternet(anotherRandArray));

// Напишіть функцію, яка приймає два масиви чисел, об'єднує їх, сортує у порядку зростання і видаляє останні 4 елементи.
console.log(`Task3: Modified array`);

const randArr1 = createRandomArray(randomLenght, undefined, true);
const randArr2 = createRandomArray(randomLenght, undefined, true);

console.log(randArr1);
console.log(randArr2);

function unionArrs(steps = 1, ...args) {
  let arr;
  arr = args.flat(steps);
  console.log(arr);
  arr.sort((a, b) => a - b);
  console.log(arr);
  arr.splice(arr.length - 4, 4);

  return arr;
}

console.log(unionArrs(undefined, randArr1, randArr2));

// У вас є масив об'єктів, які представляють користувачів. Кожен користувач має ім'я та вік.
// Напишіть функцію, яка відфільтрує користувачів старших за 18 років, відсортує їх за віком у порядку зростання і видалить наймолодшого.

let users = [
  { name: "Оля", age: 17 },
  { name: "Іван", age: 25 },
  { name: "Петро", age: 19 },
  { name: "Марія", age: 30 },
];

function sortUser(arr) {
  let newArr = arr.filter((user) => {
    if (user.age > 18) {
      return user;
    }
  });

  newArr.sort((a, b) => a.age - b.age);
  console.log(newArr);
  newArr.shift();

  return newArr;
}

console.log(sortUser(users));
