"use strict";

// Припустимо, що всі змінні в майбутньому будуть змінюватися інакше userNickname
// та userScore можна позначити через const, бо за умовами завдання вони не змінюються

// const userNickname = "Zyama";
// const userScore= 23

//Оголошуемо змінні. правда менш читабельний варіант але припустимий

let userNickname, userScore, age, isStudent, item;

// Використовуємо змінні

userNickname = "Zyama";

userScore = 179;

// Вивід результату

// console.log(userNickname, userScore);

// Перевірка типу змінних

// console.log(typeof userNickname, typeof userScore);

age = 28;

console.log("Змінна age дорівнює:", age);

const firstArrayItem = `Змінна age дорівнює: ${age}`;
// Скорочений запис

age += 5;

// Альтернатива

// age = age + 5;

console.log("Змінна age тепер дорівнює:", age);

// Альтернатива але змінна має тип не число але для повідомлення користувачу буд норм?

// console.log(`Змінна age тепер дорівнює: ${parseInt(age)}`);

const secondArrayItem = `Змінна age тепер дорівнює: ${age}`;

isStudent = true;

console.log("Змінна isStudent має булєве заначення:", isStudent);

const thirdArrayItem = `Змінна isStudent має булєве заначення: ${isStudent}`;

isStudent = false;

console.log("Змінна isStudent тепер  має булєве заначення:", isStudent);

const fourthArrayItem = `Змінна isStudent тепер має булєве заначення: ${isStudent}`;

item = 10;

console.log("Змінна item дорівнює:", item);

const fifthArrayItem = `Змінна item дорівнює: ${item}`;

item = "ten";

console.log("Змінна item дорівнює:", item);

const sixthArrayItem = `Змінна item тепер дорівнює: ${item}`;

item = true;

console.log("Змінна item тепер  має булєве заначення:", item);

const seventhArrayItem = `Змінна item тепер дорівнює: ${item}`;
// Все ;)
// Ні тут просто імпровізація, таке не сильно вірно але...

const itemsArray = [
  firstArrayItem,
  secondArrayItem,
  thirdArrayItem,
  fourthArrayItem,
  fifthArrayItem,
  sixthArrayItem,
  seventhArrayItem,
];

// console.log(itemsArray);

// Отримуємо заголовок першого рівня для подальшого додавання потрібних елементів

let header = document.querySelector("h1");

// console.log(header);

// Створюємо змінну для запису в неї заголовків

let itemText;

// Циклом додаємо заголовок другого рівня до нашої сторінки після заголовку першого рівня
// Погрався ще зі зміною розміру заголовків
let hederSize = 6;

for (let itemArray of itemsArray.reverse()) {
  // створюэмо заголовок певного рівня
  header.after((itemText = document.createElement(`h${hederSize}`)));
  // Додаємо значення з нашого масиву до заголовку
  itemText.innerHTML = `${itemArray}`;
  // Якщо значення розміру заголовку більше 1 то ми зменшуємо, (НАСПРАВДІ ЗБІЛЬШУЄМО) заголовок....
  if (hederSize > 1) {
    hederSize -= 1;
  } else hederSize = 1;
}

// Примітивна логіка але...
