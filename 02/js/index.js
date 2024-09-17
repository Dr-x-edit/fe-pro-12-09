"use strict";

// ========================================================================================

// Створюємо дві змінні number1 та number2

// Присвоюємо змінній number1 рандомне число trunc - виділяє цілу частину числа, множимо на 100 щоб отримани  числа від 1 до 99, + 1 щоб отримати 100

let number1 = Math.trunc(Math.random() * 100) + 1;

// аналогічно з другим числом

let number2 = Math.trunc(Math.random() * 100) + 1;

// Стверджуэмо що "видумані" нами числа рівні та говоримо про це користувачу

alert(
  `Числа number1 (${number1}) та number2 (${number2}) є рівними: ${
    number1 === number2
  }`
);

// Через умовний оператор IF

if (number1 === number2) {
  alert(`Числа number1 (${number1}) та number2 (${number2}) є рівними!`);
} else if (number1 > number2) {
  alert(`Число number1 (${number1}) більше за  number2 (${number2})`);
} else alert(`Число number1 (${number1}) менше за  number2 (${number2})`);

// Через тернарний оператор (НЕ СУПЕР ЧИТАБЕЛЬНО ) Типу у нас є умова і потім дії при  true та false (Згадав без шпори =) )

number1 === number2
  ? alert(`Так числа number1 (${number1}) та number2 (${number2}) є рівними`)
  : alert(`Ні числа number1 (${number1}) та number2 (${number2}) не рівні`);

// =======================================================================================
// Розраховуємо площу прямокутника

// Дізнаємося довжину та ширину прямокутника

// let lengthRectangle = Number(prompt("Введіть довжину прямокутника:", "8.52"));

// let widthRectangle = Number(prompt("Введіть ширину прямокутника:", "7.52"));

// console.log(
//   `Площа прямокутника дорівнює: ${
//     lengthRectangle * widthRectangle
//   } квадратних одиниць`
// );

// console.log(!lengthRectangle);

// декларуєм змінні ширини та довжини

let lengthRectangle;

let widthRectangle;

// Проголошення функції розрахунку  площі прямокутника ЩЕ Є ФУНКЦІОНАЛЬНИЙ ВИРАЗ function declaration and function expression там ще є стрілочні функції самий клас але я вже не зовсім ппам'ятаю їх
function squareRectangle(length, width) {
  console.log(`Площа прямокутника дорівнює: ${length * width} кв од`);
}

// функція-валідол перевірки вводу даних

function checkParams(length, width, operation) {
  length = Number(prompt("Введіть довжину прямокутника:", "8.52"));

  width = Number(prompt("Введіть ширину прямокутника:", "7.91"));
  // Перевіряємо чи є введені дані числом, якщо ні то просимо користувача ввести коректні дані
  while (!length || !width) {
    alert(`Будь ласка введіть числом довжину та ширину`);
    length = Number(prompt("Введіть довжину прямокутника:", "8.52"));

    width = Number(prompt("Введіть ширину прямокутника:", "7.91"));
  }
  //   Якщо ж він справився з завданням то його чекає винагорода =) Викликаєму раніше прописану нами функцію розрахунку площі та передаємо в неї введені користувачем аргументи
  operation(length, width);
}

// Викликаємо функцію
checkParams(lengthRectangle, widthRectangle, squareRectangle);

// ===============================================================
// Розрахунок периметра прямокутника

function perimeterRectangle(length, width) {
  console.log(`Периметр прямокутника дорівнює: ${(length + width) * 2} од`);
}

// користуємося  тією ж функцією але передаємо функцію котра розраховує периметр прямокутника
checkParams(lengthRectangle, widthRectangle, perimeterRectangle);

// =========================================================================
// Конвертація градусів Цельсія в Фаренгейти

// Стрілочна функція
let degreesCelsium;

let calcTemperature = (degree) => {
  console.log(
    `${degree} градусів Цельсія дорівнює ${
      (degree * 9) / 5 + 32
    } градусів Фаренгейта`
  );
};

function checkParam(degree) {
  degree = Number(prompt("Введіть температуру в градусах Цельсія:", "8.5"));

  // Перевіряємо чи є введені дані числом, якщо ні то просимо користувача ввести коректні дані
  while (!degree) {
    alert(`Будь ласка введіть числом градуси Цельсія`);
    degree = Number(prompt("Введіть температуру в градусах Цельсія:", "8.5"));
  }
  //   Якщо ж він справився з завданням то його чекає винагорода =) Викликаєму раніше прописану нами функцію розрахунку площі та передаємо в неї введені користувачем аргументи
  return calcTemperature(degree);
}

checkParam(degreesCelsium);

// ==========================================================================================
// Об'єм циліндра

let calcCylinderVolume = (radius, height) => {
  console.log(
    `Об'єм циліндра дорівнює ${(Math.PI * radius ** 2 * height).toFixed(
      2
    )} куб од`
  );
};

let radiusCylinder;
let heightCylinder;

function checkParamCylinder(radius, height) {
  radius = Number(prompt("Введіть радіус циліндра:", "4.6"));
  height = Number(prompt("Введіть висоту циліндра:", "2.1"));

  // Перевіряємо чи є введені дані числом, якщо ні то просимо користувача ввести коректні дані
  while (!radius || !height) {
    alert(`Будь ласка введіть числом градуси Цельсія`);
    radius = Number(prompt("Введіть радіус циліндра:", "4.6"));
    height = Number(prompt("Введіть висоту циліндра:", "2.1"));
  }
  //   Якщо ж він справився з завданням то його чекає винагорода =) Викликаєму раніше прописану нами функцію розрахунку площі та передаємо в неї введені користувачем аргументи
  return calcCylinderVolume(radius, height);
}

checkParamCylinder(degreesCelsium);

// ====================================================================
