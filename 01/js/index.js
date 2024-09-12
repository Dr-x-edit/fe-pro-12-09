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

// Скорочений запис

age += 5;

// Альтернатива

// age = age + 5;

console.log("Змінна age тепер дорівнює:", age);

// Альтернатива але змінна має тип не число але для повідомлення користувачу буд норм?

// console.log(`Змінна age тепер дорівнює: ${parseInt(age)}`);

isStudent = true;

console.log("Змінна isStudent має булєве заначення:", isStudent);

isStudent = false;

console.log("Змінна isStudent тепер  має булєве заначення:", isStudent);

item = 10;

console.log("Змінна item дорівнює:", item);

item = "ten";

console.log("Змінна item дорівнює:", item);

item = true;

console.log("Змінна item тепер  має булєве заначення:", item);

// Все ;)
