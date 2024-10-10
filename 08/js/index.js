// =============ЗАГОТОВКИ=============

// Функція створення рандомного масиву
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

// рандомна довжина масиву
let randomLenght = Math.trunc(Math.random() * 20) + 1;

// Функція створення елементу після вказаного елементу

function createHTMLElemet(
  previousElement,
  nameCreatedElement,
  conten,
  positon = "before"
) {
  let createdElement;
  if (positon === "after") {
    previousElement.after(
      (createdElement = document.createElement(`${nameCreatedElement}`))
    );
  } else if (positon === "before") {
    previousElement.before(
      (createdElement = document.createElement(`${nameCreatedElement}`))
    );
  }

  return (createdElement.innerHTML = `${conten}`);
}

// Тема: Spread
// Напишіть функцію, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.

// Отримуємо елемент зі сторінки
let bodyTag = document.querySelector("body").lastChild;

// власне функція

function joinArrays(...args) {
  return [...args];
}

const firstRandArray = createRandomArray(randomLenght, undefined, true);

const secondRandArray = createRandomArray(randomLenght, undefined, true);

const arrayContent = joinArrays(firstRandArray, secondRandArray);

const titleFristTask = createHTMLElemet(bodyTag, "h2", `Об'єданання масивів:`);
const contetnFirstArray = createHTMLElemet(
  bodyTag,
  "p",
  `Перший масив: [${firstRandArray}]`
);

const contetnSecondArray = createHTMLElemet(
  bodyTag,
  "p",
  `Другий масив: [${secondRandArray}]`
);

const contenJoinArrays = createHTMLElemet(
  bodyTag,
  "p",
  `Об'єданний масив: [${arrayContent}]`
);

// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest.
// Функція повинна вивести рядок і масив.

function stringArrayValue(text, ...args) {
  for (let value of [text, args]) {
    if (typeof value === "string") {
      createHTMLElemet(bodyTag, "p", `${value} - ${typeof value}`);
    } else createHTMLElemet(bodyTag, "p", `[${args}] - ${typeof args}`);
  }
}

const titleSecondTask = createHTMLElemet(bodyTag, "h2", `Рядок та масив:`);

const textString = stringArrayValue("Let's learn JS it's fun", 1, 23, 54, 89);

const contentSecondTask = console.log(bodyTag);

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

function sunnArgs(...args) {
  //   console.log(args);
  return args
    .filter((number) => typeof number === "number")
    .reduce((acc, val) => acc + val);
}

const titleThirdTask = createHTMLElemet(
  bodyTag,
  "h2",
  `Функція суми аргументів:`
);

const contentThirdTask = createHTMLElemet(
  bodyTag,
  "p",
  `Сума аргументів: ${sunnArgs(1, 5, 3, "testText", 5)}`
);

// Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.

function determinateTypeOfArgument(userArgument) {
  return createHTMLElemet(
    bodyTag,
    "p",
    `Type of your argement (${userArgument}) is ${typeof userArgument}`
  );
}

const titleFourthTask = createHTMLElemet(
  bodyTag,
  "h2",
  `Функція визначеня типу:`
);

determinateTypeOfArgument("Omg");

// Напишіть функцію, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

function typeOfArgument(userArgument) {
  switch (typeof userArgument) {
    case "number":
      createHTMLElemet(
        bodyTag,
        "p",
        `Type of your argement (${userArgument}) is ${typeof userArgument}`
      );
      break;
    case "string":
      createHTMLElemet(
        bodyTag,
        "p",
        `Type of your argement (${userArgument}) is ${typeof userArgument}`
      );
      break;
    default:
      createHTMLElemet(
        bodyTag,
        "p",
        `Type of your argement (${userArgument}) is another type`
      );
  }
}

const titleFifthTask = createHTMLElemet(
  bodyTag,
  "h2",
  `Функція визначеня типу:`
);

typeOfArgument(1);
typeOfArgument("hhhh");
typeOfArgument([1, 1, 2]);

// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.

function returnUserAge() {
  const year = new Date().toLocaleString("uk-UA", {
    year: "numeric",
  });
  let userAge = +prompt(
    `Введіть свій вік, будь ласка для розрахунку вашого року народження:`
  );
  while (isNaN(userAge)) {
    alert(`Введіть вік числом`);
    userAge = +prompt(`Введіть свій вік, будь ласка:`);
  }

  console.log(`Рік вашого народження ${year - userAge}`);
  createHTMLElemet(bodyTag, "p", `Рік вашого народження ${year - userAge}`);
}

const titleSixthTask = createHTMLElemet(
  bodyTag,
  "h2",
  `Функція виводу віку користувача:`
);

returnUserAge();

// Завдання для Date.toLocaleString:

// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.

function createReadDateTime() {
  createHTMLElemet(
    bodyTag,
    "p",
    `${new Date().toLocaleString("uk-UA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`
  );
}

const titleSeventhTask = createHTMLElemet(
  bodyTag,
  "h2",
  `Функція виводу дати зручного формату:`
);

createReadDateTime();

// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

const usreNames = "Laskaridi MRXsss armary slastonm Ihor_0406 ashonuok";

function arrUsers(string) {
  let arrUsers = string.toUpperCase().split(" ");
  console.log(arrUsers);
  createHTMLElemet(bodyTag, "p", `Масив користувачів: [ ${arrUsers} ]`);
}

const titleEighthTask = createHTMLElemet(
  bodyTag,
  "h2",
  `Функція виводу масиву користувачів:`
);

arrUsers(usreNames);

//і ще таких легких по document
// Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

function createSectionPage() {
  let head = document.createElement("header");

  head.setAttribute("id", "header");

  let header = bodyTag.before(head);

  let section = document.createElement("section");
  section.classList.add("header-section");

  header = document.getElementById("header");

  header.append(section);

  let div = document.createElement("div");

  div.id = "uniceDiv";

  section.append(div);

  let title = document.createElement("h2");

  title.classList.add("header-title");

  title.innerHTML = "Title in header section";

  div.append(title);
}

const titleNinehthTask = createHTMLElemet(
  bodyTag,
  "h2",
  `Хедер секція та дів:`
);

createSectionPage();

console.log(document.getElementById("header"));
console.log(document.getElementsByClassName("header-section"));
console.log(document.getElementsByTagName("div"));

// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
// - останній елемент списку
// - 3 елемент списку
// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив

const titleTenthTask = createHTMLElemet(bodyTag, "h2", `Список ul:`);

let ulList = document.createElement("ul");

bodyTag.before(ulList);

for (let i = 0; i < 5; i++) {
  let liRow = document.createElement("li");
  liRow.innerHTML = i;
  ulList.append(liRow);
}

let i = 0;
console.log(document.querySelector("li:first-child"));
console.log(document.querySelector("li:last-child"));
// console.log(document.querySelectorAll("li:nth-child(-n+3)"));
console.log(document.querySelector("li:nth-child(3)"));
console.log(document.querySelectorAll("li"));
console.log(Array.from(document.querySelectorAll("li")));

const titleEleventhTask = createHTMLElemet(
  bodyTag,
  "h2",
  `Список ul 2:`,
  "before"
);

let createNavTag = document.createElement("nav");
createNavTag.id = "some-id";

bodyTag.before(createNavTag);

let getNavTag = document.querySelector("#some-id");

let secondUl = document.createElement("ul");
secondUl.classList.add("nav");

for (let i = 0; i < 5; i++) {
  let liRow = document.createElement("li");
  liRow.innerHTML = i + 1;
  secondUl.append(liRow);
}
getNavTag.append(secondUl);

let listItems = document.querySelectorAll("ul.nav>li");
let listItem = document.querySelectorAll("li:nth-child(2)");

console.log(listItems);
console.log(listItem);
