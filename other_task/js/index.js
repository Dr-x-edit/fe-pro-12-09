"use strict";

//Вираховуємо в якому підїзді та на якому поверсі знаходиться квартира
// дім 9-ти поверховий, 5 підїздів на поверсі 4 квартири

// let floors = 9,
//   entrances = 5,
//   flats = 4;

// let entranceNumberFlats = floors * flats;
// let totalNumberFlats = entranceNumberFlats * entrances;

// // Перевірка розрахунків

// // console.log(totalNumberFlats);
// // console.log(entranceNumberFlats);

// // Пропонуємо користувачу ввести номер квартири

// let userFlat = +prompt("Please input number of flat:", 15);

// // Валідація введених даниї

// while (userFlat > totalNumberFlats || userFlat < 1 || isNaN(userFlat)) {
//   userFlat = +prompt(`The flat is not define. Please try again`);
// }

// // Визначення підїзду в якому знаходиться квартира яку вказав користувач
// let entrance = Math.ceil(userFlat / entranceNumberFlats);

// console.log(`Your entrance is ${entrance <= 0 ? entrance + 1 : entrance}`);

// // Визначаємо поверх на якому знаходиться квартира
// console.log(
//   `Your floor is ${Math.ceil(
//     (userFlat - (entrance - 1) * entranceNumberFlats) / flats
//   )}`
// );

// // Перебор всіх квартир із зазначенням підїзду

// // for (let index = 1; index <= totalNumberFlats; index++) {
// //   Math.ceil(index / entranceNumberFlats) <= 0
// // ? console.log(`${index} - ${Math.ceil(index / entranceNumberFlats) + 1}`)
// // : console.log(`${index} - ${Math.ceil(index / entranceNumberFlats)}`);
// // }

class highRiseBuilding {
  constructor(floors, entrances, numberFlat) {
    this.floors = floors;
    this.entrances = entrances;
    this.numberFlat = numberFlat;
  }

  _validInput(inputValue) {
    while (
      inputValue > this.totalNumberFlats ||
      inputValue < 1 ||
      isNaN(inputValue)
    ) {
      inputValue = +prompt(`Квартира не знайдена. Введіть іншу квартиру`);
    }

    return +inputValue;
  }

  _calcEntranceNumberFlats(consoleLog = true) {
    this.entranceNumberFlats = this.floors * this.numberFlat;

    if (consoleLog) {
      console.log(`Всього квартир у під'їзді ${this.entranceNumberFlats}`);
    }

    return this;
  }

  _calcTotalNumberFlats(consoleLog = true) {
    this.totalNumberFlats = this.entranceNumberFlats * this.entrances;
    if (consoleLog) {
      console.log(`Всього квартиру у будинку ${this.totalNumberFlats}`);
    }
    return this;
  }

  defineEntrance() {
    this.userFlat = +prompt(`Введіть номер квартири:`);

    this._calcEntranceNumberFlats(false);
    this._calcTotalNumberFlats(false);
    this.userFlat = this._validInput(this.userFlat);

    this.entrance = Math.ceil(this.userFlat / this.entranceNumberFlats);

    console.log(
      `Ваша квартира знаходиться в ${
        this.entrance < 1 ? this.entrance + 1 : this.entrance
      } підїзді.`
    );

    return this;
  }

  defineFloor() {
    this.userFlat = +prompt(`Введіть номер квартири:`);

    this._calcEntranceNumberFlats(false);
    this._calcTotalNumberFlats(false);
    this.userFlat = this._validInput(this.userFlat);

    this.floor = Math.ceil(
      (this.userFlat - (this.entrance - 1) * this.entranceNumberFlats) /
        this.numberFlat
    );

    console.log(`Ваша квартира знаходиться на ${this.floor} поверсі`);

    return this;
  }
}

// let nineHighRiseBuilding = new highRiseBuilding(9, 5, 4);

// nineHighRiseBuilding
//   ._calcEntranceNumberFlats()
//   ._calcTotalNumberFlats()
//   .defineEntrance(userFlat)
//   .defineFloor(userFlat);

let fifeHighRiseBuilding = new highRiseBuilding(5, 4, 4);

fifeHighRiseBuilding.defineEntrance().defineFloor();
