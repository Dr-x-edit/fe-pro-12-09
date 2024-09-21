"use strict";

// Пихаємо всі наші завдання в один класс, ну чисто по фану, немає в цьому ніякої логіки просто тому що можемо XD XD XD

class HomeWork {
  constructor(inputValue) {
    this.inputValue = inputValue;
  }
  //   Насправді можна було "ЗАПОЗИЧИТИ" і адаптувати таку перевірку (там стрілочні + методи які я не пам'ятаю  і оператор rest напевно алеж не spred)
  //   const validInputs = (...inputs) =>
  // inputs.every((input) => Number.isFinite(input));
  //  АЛЕ я не зовсім пам'ятаю всіх nих штук(скорочень)  тому пишу поки просто

  //   Функція-валідо, яка є зарезервоаною. НУ типу краще її не змінювати...
  _validationInputs = function (validValue, textMassage, reverse = false) {
    // записуємо те що ввів користувач
    validValue = prompt(`${textMassage}`);
    // чекаємо чи не натиснув він кнопку відміни чи ввів пусте значення, якщо  так то завершуємо функцію
    if (validValue != null) {
      if (reverse) {
        while (!isNaN(validValue)) {
          alert(`Please input valid data (text)!`);
          validValue = prompt(`${textMassage}`);
        }
        //   інкше ретьорнимо дані
        return validValue;
      } else {
        // перевіряємо чи це число, якщо ні то просимо користувача не випробовувати наші нерви
        while (isNaN(+validValue)) {
          alert(`Please input valid data (number)!`);
          validValue = +prompt(`${textMassage}`);
        }
        //   інкше ретьорнимо дані
        return +validValue;
      }
    } else return alert(`Stop function!`);
  };

  //   функція-метод для перевірки числа на парність
  checkEvenNumber = function () {
    // Значення після перевірки записуємо в змінну
    this.evenNumber = this._validationInputs(
      this.inputValue,
      "Please input any number:"
    );
    // ну і власне дізнаємося чи парне число
    if (this.evenNumber % 2 == 0) {
      return console.log(`This number (${this.evenNumber}) is Even`);
    } else return console.log(`OMG this number (${this.evenNumber}) is OOOODD`);
  };

  //   функція-метод для перевірки віку користувача суть майже та сама
  checkAgeRestriction = function () {
    this.age = this._validationInputs(
      this.inputValue,
      "Please input your age:"
    );
    if (this.age >= 18) {
      return alert(`Congratulation you can use materials from this site`);
    } else return alert(`FBI open up! =D  Please, call the police! `);
  };

  //   функція-метод підрахунку покупок користувача ну тут розписав коментарі
  calcSumPurchasedItems = function () {
    // пустий масив для кількості одиниць
    const numberItems = [];
    // пустий масив для цін на продукти
    const priceItems = [];

    // Просимо користувача ввести кількість та суму покупок
    this.itemNumber = this._validationInputs(
      this.inputValue,
      "Please, input number of purchased items"
    );
    this.itemPrice = this._validationInputs(
      this.inputValue,
      "Please input pirce of item."
    );

    // Перевіряємо чи правильно введено дані якщо ні то просимо користувача оновити сторінку та вірно ввести дані
    if (this.itemNumber == undefined || this.itemPrice == undefined) {
      return alert(`Please enter valid data. Refresh page!`);
    } else {
      // Додаємо введені дані до відповідних масивів
      numberItems.push(this.itemNumber);
      priceItems.push(this.itemPrice);

      // Ну тут я зробив так, поки користувач вводить дані ми додаємо їх до масивів інакше перериваємо цикл і переходими до підрахунку суми
      while (this.itemNumber && this.itemPrice) {
        this.itemNumber = this._validationInputs(
          this.inputValue,
          "Please, input number of purchased items. If items ends please press Cancel"
        );
        this.itemPrice = this._validationInputs(
          this.inputValue,
          "Please input pirce of item. If items ends please press Cancel"
        );
        if (this.itemNumber && this.itemPrice) {
          numberItems.push(this.itemNumber);
          priceItems.push(this.itemPrice);
        } else break;
      }
      //   оголошення змінної для підрахунку суми покупки однієї позиції
      let sumItem;
      //   змінна для запису загальної суми покупок
      let totalSum = 0;

      //   технічна частина, просто чекав результат  =)
      //   console.log(numberItems);
      //   console.log(priceItems);

      //   Маємо на увазі що масиви одинакової довжини (по моєму там не можуть бути масиви не одинакової довжини, можливо я помиляюся) і тому перебором по черзі дістаємося до кількості та відповідної вартості
      // Рахуємо суму покупок однієї позиції а потім додаємо її до тотальної суми

      for (let index = 0; index < numberItems.length; index++) {
        const item = numberItems[index];
        const price = priceItems[index];
        sumItem = item * price;
        totalSum += sumItem;
      }
      //   Ретьорним тотальну суму покупок

      return console.log(
        `Сума ваших покупок складає: ${totalSum} умовних одиниць`
      );
    }
  };

  //   функція-метод підрахунку знижки
  calcDiscount = function () {
    this.sumDiscount = this._validationInputs(
      this.inputValue,
      "Please input purchase amount"
    );
    return alert(`${this.sumDiscount * 0.5}`);
  };

  //   функція-метод визначення максимального числа
  defineMaxNumber = function () {
    const numbersArray = [];

    for (let index = 0; index < 3; index++) {
      let number = this._validationInputs(
        this.inputValue,
        "Please input any number:"
      );
      numbersArray.push(+number);
      //   console.log(numbersArray);
    }
    return console.log(`Biggest number is ${Math.max(...numbersArray)}`);
  };
  //   функція-метод визначення  сезону по номеру його місяця
  defineSeason = function () {
    const months = {
      1: "Зима",
      2: "Зима",
      3: "Весна",
      4: "Весна",
      5: "Весна",
      6: "Літо",
      7: "Літо",
      8: "Літо",
      9: "Осінь",
      10: "Осінь",
      11: "Осінь",
      12: "Зима",
    };
    this.monthNumber = this._validationInputs(
      this.inputValue,
      "Please input number of month:"
    );

    for (const key in months) {
      if (+this.monthNumber <= 0 || +this.monthNumber > 12) {
        console.log(`Season is not define =) please try again!`);
        break;
      } else if (+key === +this.monthNumber) {
        const seasonName = months[key];
        return console.log(`${seasonName}`);
      } else continue;
    }
  };

  defineNumber = function () {
    this.userNumber = this._validationInputs(
      this.inputValue,
      "Input any number:"
    );
    if (this.userNumber == 0) {
      return console.log(`Your number is zero!`);
    } else if (this.userNumber > 0) {
      return console.log(`Your number is positive!`);
    } else return console.log(`Your number is negative!`);
  };

  defineSides = function () {
    this.inputValue = this._validationInputs(
      this.inputValue,
      "Please input name of figure коло, трикутник or квадрат",
      true
    );
    switch (String(this.inputValue).toLowerCase()) {
      case "коло":
        return console.log(`${this.inputValue} has not sides`);
      case "трикутник":
        return console.log(`${this.inputValue} has 3 sides`);
      case "квадрат":
        return console.log(`${this.inputValue} has 4 sides`);
      default:
        return console.log(`Figure is not define`);
    }
  };
  calcSumEvenNumbers = function () {
    this.lengthSequence = this._validationInputs(
      this.inputValue,
      "Please input length of sequence:"
    );
    let number = 0;
    let sumResult = 0;
    while (number <= this.lengthSequence) {
      if (number % 2 == 0) {
        sumResult += number;
        number++;
      } else continue;
      number++;
    }

    return console.log(`Sum even numbers in your sequence = ${sumResult}`);
  };

  reverseCounter = function () {
    this.lengthCounter = this._validationInputs(
      this.inputValue,
      "Please input length of counter:"
    );

    for (let index = +this.lengthCounter; index >= 1; index--) {
      console.log(index);
    }
  };
  defineAngle = function () {
    this.angle = this._validationInputs(
      this.inputValue,
      "Please input deegrease of angle:"
    );

    return Number(this.angle) == 0
      ? console.log(`Zero its zero =)`)
      : Number(this.angle) == 90
      ? console.log(`Angle - ${this.angle} is right angle`)
      : Number(this.angle) > 90
      ? console.log(`Angle - ${this.angle} is obtuse angle`)
      : console.log(`Angle - ${this.angle} is acute angle`);
  };

  defineFirstEvenNumber = function () {
    for (let index = 1; index < 10; index++) {
      if (index % 2 == 0) {
        console.log(index);
        break;
      }
    }
  };

  definePlanet = function () {
    this.planetName = this._validationInputs(
      this.inputValue,
      "Please input planet name:",
      true
    );

    this.planetName =
      String(this.planetName).charAt(0).toUpperCase() +
      String(this.planetName).slice(1).toLocaleLowerCase();

    switch (this.planetName) {
      case "Меркурій":
        return console.log(`${this.planetName} in our solar system!`);
      case "Венера":
        return console.log(`${this.planetName} in our solar system!`);
      case "Земля":
        return console.log(`${this.planetName} in our solar system!`);
      case "Марс":
        return console.log(`${this.planetName} in our solar system!`);
      case "Юпітер":
        return console.log(`${this.planetName} in our solar system!`);
      case "Сатурн":
        return console.log(`${this.planetName} in our solar system!`);
      case "Уран":
        return console.log(`${this.planetName} in our solar system!`);
      case "Нептун":
        return console.log(`${this.planetName} in our solar system!`);
      default:
        return console.log(`Planet is not define in our solar system`);
    }
  };
}

let inputValue;

const homeWork03 = new HomeWork(inputValue);

// Чекаємо чи парне число котре ввів користувач:
homeWork03.checkEvenNumber();

// Чекаєм чи може користувач продовжувати користуватися сайтом
homeWork03.checkAgeRestriction();

// Рахуємо суму покупок
homeWork03.calcSumPurchasedItems();

// Розраховуємо суму знижки у розмірі 50%
homeWork03.calcDiscount();

// Визначаємо найбільше число з 3-х
homeWork03.defineMaxNumber();

// Виводимо сезон
homeWork03.defineSeason();

// Виводимо тип числа
homeWork03.defineNumber();

// Виводимо кількість сторін
homeWork03.defineSides();

//Виводими суму парних чисел
homeWork03.calcSumEvenNumbers();

//реверсивний лічильник
homeWork03.reverseCounter();

// Чекаємо тип кута
homeWork03.defineAngle();

// ПЕрше парне число
homeWork03.defineFirstEvenNumber();

// Планети сонячноъ системи
homeWork03.definePlanet();
