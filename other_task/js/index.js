"use strict";

//Вираховуємо в якому підїзді та на якому поверсі знаходиться квартира
// дім 9-ти поверховий, 5 підїздів на поверсі 4 квартири

let floors = 9,
  entrances = 5,
  flats = 4;

let entranceNumberFlats = floors * flats;
let totalNumberFlats = entranceNumberFlats * entrances;

// Перевірка розрахунків

// console.log(totalNumberFlats);
// console.log(entranceNumberFlats);

// Пропонуємо користувачу ввести номер квартири

let userFlat = +prompt("Please input number of flat:", 15);

// Валідація введених даниї

while (userFlat > totalNumberFlats || userFlat < 1 || isNaN(userFlat)) {
  userFlat = +prompt(`The flat is not define. Please try again`);
}

// Визначення підїзду в якому знаходиться квартира яку вказав користувач
let entrance = Math.ceil(userFlat / entranceNumberFlats);

console.log(`Your entrance is ${entrance <= 0 ? entrance + 1 : entrance}`);

// Визначаємо поверх на якому знаходиться квартира
console.log(
  `Your floor is ${Math.ceil(
    (userFlat - (entrance - 1) * entranceNumberFlats) / flats
  )}`
);

// Перебор всіх квартир із зазначенням підїзду

// for (let index = 1; index <= totalNumberFlats; index++) {
//   Math.ceil(index / entranceNumberFlats) <= 0
// ? console.log(`${index} - ${Math.ceil(index / entranceNumberFlats) + 1}`)
// : console.log(`${index} - ${Math.ceil(index / entranceNumberFlats)}`);
// }
