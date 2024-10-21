// Завдання 'onMouseOver' і 'onMouseOut': Створіть область на сторінці (наприклад, div), яка змінює свій фоновий колір,
// коли користувач наводить на неї курсор миші, та повертає початковий колір, коли курсор покидає цю область.

function genRandColor() {
  return `rgba(${Math.floor(Math.random() * (255 - 0)) + 0},${
    Math.floor(Math.random() * (255 - 0)) + 0
  },${Math.floor(Math.random() * (255 - 0)) + 0},0.7)`;
}

let bodyEl = document.querySelector("body");

function createTitle(element, textMsg, clas, after = false) {
  if (after) {
    let title = document.createElement("h2");
    title.innerText = textMsg;
    title.setAttribute("class", clas);
    console.log(title);

    element.after(title);
    return document.querySelector(`.${clas}`);
  } else {
    let title = document.createElement("h2");
    title.innerText = textMsg;
    title.setAttribute("class", clas);
    console.log(title);

    element.prepend(title);
    return document.querySelector(`.${clas}`);
  }
}

bodyEl.style.display = "flex";
bodyEl.style.alignItems = "center";
bodyEl.style.flexDirection = "column";

let containerEl = document.createElement("div");
containerEl.style.cssText = `
    width: 100px;
    height: 100px;
    background-color: green;
`;

let firstTitle = createTitle(
  bodyEl,
  "Завдання 'onMouseOver' і 'onMouseOut':",
  "first-title"
);

firstTitle.after(containerEl);

const defaulColor = getComputedStyle(containerEl).backgroundColor;

containerEl.addEventListener("mouseover", function (e) {
  this.style.backgroundColor = genRandColor();
});
containerEl.addEventListener("mouseout", function (e) {
  this.style.backgroundColor = defaulColor;
});

// Завдання 'onContextMenu':
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера
// з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру",
// "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент". Складніший варіант зробити щоб при кліку на меню текст в блоці вирівнювався

let textEl = document.createElement("p");
textEl.style.cssText = `
    width: 200px
`;

textEl.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quaerat sunt fugiat ad, dolor, ducimus aspernatur maxime voluptates libero ratione dolores doloribus id blanditiis inventore? Et nesciunt neque architecto sunt?`;

let secondTitle = createTitle(
  containerEl,
  "Завдання 'onContextMenu':",
  "secont-title",
  true
);
secondTitle.after(textEl);

let wrapperContextMenu = document.createElement("div");

let contextMenu = `
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action bg-success text-white">Вирівняти по центру</button>
  <button type="button" class="list-group-item list-group-item-action bg-success text-white">Вирівняти по правому краю</button>
  <button type="button" class="list-group-item list-group-item-action bg-success text-white">Вирівняти по лівому краю</button>
  <button type="button" class="list-group-item list-group-item-action bg-success text-white">Приховати елемент</button>

</div>
`;

wrapperContextMenu.insertAdjacentHTML("afterbegin", contextMenu);

textEl.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  wrapperContextMenu.setAttribute("class", "wrapper-context-menu");
  wrapperContextMenu.style.cssText = `
        width: 300px;
        position: absolute;
        top: ${e.pageY}px;
        left: ${e.pageX}px;
        box-shadow: 2px 6px 17px 0px rgba(159,209,159,1);
  `;
  bodyEl.prepend(wrapperContextMenu);
});

bodyEl.addEventListener("click", function (e) {
  wrapperContextMenu.style.display = "none";
});

wrapperContextMenu.addEventListener("click", function (e) {
  switch (e.target.innerText) {
    case "Вирівняти по центру":
      textEl.style.textAlign = "center";
      break;
    case "Вирівняти по правому краю":
      textEl.style.textAlign = "right";
      break;
    case "Вирівняти по лівому краю":
      textEl.style.textAlign = "left";
      break;
    case "Приховати елемент":
      textEl.style.display = "none";
      break;
  }
});

// Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок.
// Рух об'єкта повинен зупинятися, коли клавіша відпущена

let playingField = document.createElement("div");
playingField.style.cssText = `
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center; 
    width: 500px;
    height: 500px;
    border: 1px solid black;
    margin: 0 0 20px 0
`;

let thirdTitle = createTitle(
  textEl,
  `Завдання 'keyup'(натисни на поле щоб почати):`,
  "third-title",
  true
);

thirdTitle.after(playingField);
const maxPosX = parseInt(getComputedStyle(playingField).width);
const maxPosY = parseInt(getComputedStyle(playingField).height);

let playEl = document.createElement("div");
playEl.contentEditable = "true";

playEl.style.cssText = `
    position: absolute;
    // top: 0 px;
    // left: 0px;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50px;
    background-color: green;
    color: transparent;  
`;

playingField.appendChild(playEl);

playingField.addEventListener("keydown", function (e) {
  e.preventDefault();
  // console.log(e.target.offsetTop);
  // let topPosPlayEl = parseInt(getComputedStyle(playEl).top);
  // let leftPosPlayEl = parseInt(getComputedStyle(playEl).left);

  let topPosPlayEl = e.target.offsetTop;
  let leftPosPlayEl = e.target.offsetLeft;

  playEl.style.cssText += `
  top: ${topPosPlayEl}px; 
  left: ${leftPosPlayEl}px;
  `;

  switch (e.key) {
    case "ArrowUp":
      // console.log(topPosPlayEl);
      // console.log(leftPosPlayEl);
      if (topPosPlayEl >= 0) {
        playEl.style.cssText += `
        top: ${topPosPlayEl - 5}px;
        // left: ${leftPosPlayEl}px; 
        `;
      }
      break;
    case "ArrowDown":
      if (topPosPlayEl <= maxPosY - 55) {
        playEl.style.cssText += `
        top: ${topPosPlayEl + 5}px;
        `;
      }
      break;
    case "ArrowRight":
      if (leftPosPlayEl <= maxPosX - 55) {
        playEl.style.cssText += `
        left: ${leftPosPlayEl + 5}px;
        `;
      }
      break;
    case "ArrowLeft":
      if (leftPosPlayEl >= 0) {
        playEl.style.cssText += `
        left: ${leftPosPlayEl - 5}px;
        `;
      }
      break;
  }
  // console.log(e.key);
});

// Завдання з інпутами
// Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

// Інструкції:
// Створіть два поля введення: одне для суми, друге для курсу обміну.
// Додайте кнопку, яка виконає конвертацію при її натисканні.
// При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
// Виведіть результат конвертації на сторінку.

let curencyField = document.createElement("div");
curencyField.setAttribute("class", "curency-wrapper");
curencyField.style.marginBottom = "20px";

let fourthTitle = createTitle(
  playingField,
  "Конвертер валют",
  "fourth-title",
  true
);

fourthTitle.after(curencyField);

const currentArray = ["UAH", "USD", "EUR", "JPY", "CHF", "CNY"];

let formBody = `
<form class="currency">
  <fieldset >
    <legend>Введіть сумму та виберіть валюту</legend>
    <div class="mb-3">
      <label for="TextInput" class="form-label">Введіть сумму:</label>
      <input type="text" id="SumInput" class="form-control" placeholder="5.5">
    </div>
    <div class="mb-3">
      <label for="convertCurrency" class="form-label">Валюта в яку потрібно конвертувати</label>
      <select id="convertCurrency" class="form-select">
        <option>${currentArray[0]}</option>
        <option>${currentArray[1]}</option>
        <option>${currentArray[2]}</option>
        <option>${currentArray[3]}</option>
        <option>${currentArray[4]}</option>
        <option>${currentArray[5]}</option>
      </select>
    </div>
        <div class="mb-3">
      <label for="convertedCurrency" class="form-label">Валюта з якої потрібно конвертувати</label>
      <select id="convertedCurrency" class="form-select">
        <option>${currentArray[0]}</option>
        <option>${currentArray[1]}</option>
        <option>${currentArray[2]}</option>
        <option>${currentArray[3]}</option>
        <option>${currentArray[4]}</option>
        <option>${currentArray[5]}</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Конвертувати</button>
  </fieldset>
</form>

`;

curencyField.insertAdjacentHTML("beforeend", formBody);

let userInputSumm = document.querySelector("#SumInput");
let convertCurrency = document.querySelector("#convertCurrency");
let convertedCurrency = document.querySelector("#convertedCurrency");
let fieldConvertResult = document.querySelector(".currency legend");
let btnConvert = document.querySelector(".currency button");

// ДІСТАВ ЗІ ШПАРГАЛКИ
function getJSON(url, errorMsg = "Щос пішло не так.") {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`${errorMsg}(${response.status})`);
    }
    return response.json();
  });
}

// let currencyData = [
//   {
//     currency: "EUR/USD",
//     value: "1.08673",
//     date: "2024-10-20 11:27:01",
//     type: "original",
//   },
// ];

btnConvert.addEventListener("click", function (e) {
  e.preventDefault();
  getJSON(
    `https://currencydatafeed.com/api/data.php?currency=${convertedCurrency.value}/${convertCurrency.value}&token=hfaxwix7jtrz6liwjh0x`
  ).then(function (data) {
    console.log(data);
    fieldConvertResult.innerHTML = `${
      userInputSumm.value == ""
        ? +userInputSumm.getAttribute("placeholder")
        : userInputSumm.value
    } ${convertedCurrency.value} дорівнює ${(
      parseFloat(
        userInputSumm.value == ""
          ? +userInputSumm.getAttribute("placeholder")
          : userInputSumm.value
      ) * data["currency"][0].value
    ).toFixed(2)} ${convertCurrency.value}`;
  });
});

// Динамічний список задач
// Мета: Створити додаток для управління списком задач, де користувач може додавати та видаляти задачі.

// Інструкції:
// Створіть поле введення для введення назви задачі.
// Додайте кнопку для додавання задачі до списку.
// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.
// Додайте можливість видалення задачі зі списку.\

let appField = document.createElement("div");
appField.setAttribute("class", "wrapper-lisToDo");

let fifthTitle = createTitle(
  curencyField,
  "Динамічний список задач",
  "fifth-title",
  true
);
fifthTitle.after(appField);

let bodyForm = `
<form class="toDoList">
<fieldset >
<legend>Ваш особистий список завдань</legend>
<div class="mb-3">
  <label for="TextInput" class="form-label">Введіть задачу:</label>
  <input type="text" id="TaskInput" class="form-control" placeholder="Виконати ДЗ">
</div>
<button type="submit" class="btn btn-primary">Записати</button>
</fieldset>
</form>
`;

appField.insertAdjacentHTML("beforeend", bodyForm);

document.querySelector(".toDoList").style.marginBottom = "20px";

let legend = document.querySelector(".toDoList legend");

let listToDo = `
<ul class="list-group">
  <li class="list-group-item start">Ваш спикок пустий</li>
</ul>
`;
legend.insertAdjacentHTML("afterend", listToDo);

let userTask = document.querySelector("#TaskInput");
let submitBtn = document.querySelector(".toDoList button");
let list = document.querySelector(".list-group");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let firstItem = document.querySelector(".start");
  if (firstItem == null) {
    toDo = `
    <li class="list-group-item">
    <div class="d-flex justify-content-between align-items-center grid gap-3">
      <p class="mb-0">${userTask.value}</p> 
      <button class="btn btn-danger">X</button>
    </div>
    </li>
    `;
    list.insertAdjacentHTML("beforeend", toDo);
    userTask.value = "";
  } else {
    firstItem.remove();
    toDo = `
    <li class="list-group-item">
    <div class="d-flex justify-content-between align-items-center grid gap-3">
      <p class="mb-0">${userTask.value}</p> 
      <button class="btn btn-danger">X</button>
    </div>
    </li>
    `;
    list.insertAdjacentHTML("beforeend", toDo);
    userTask.value = "";
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    if (list.childElementCount > 1) {
      e.target.offsetParent.remove();
      console.log(list.childElementCount);
    } else {
      let start = `<li class="list-group-item start">Ваш спикок пустий</li>`;
      list.insertAdjacentHTML("beforeend", start);
      e.target.offsetParent.remove();
      console.log(list.childElementCount);
    }
  }
});

// list.addEventListener("change", (e) => {
//   console.log(`dsldl`);
//   if ((list.childElementCount = 0)) {
//     let start = `<li class="list-group-item start">Ваш спикок пустий</li>`;
//     list.insertAdjacentHTML("beforeend", start);
//   }
// });

// Додаткове Завдання
// 'onMouseDown' і 'onMouseUp': Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області,
// використовуючи події натискання та відпускання кнопки миші.

let sixthTitle = createTitle(
  appField,
  "Додаткове Завдання 'onMouseDown' і 'onMouseUp':",
  "sixth-title",
  true
);

let playingSecondField = document.createElement("div");
playingSecondField.style.cssText = `
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center; 
    width: 500px;
    height: 500px;
    border: 1px solid black;
    margin: 0 0 20px 0;
    z-index: 2
`;

sixthTitle.after(playingSecondField);

let playSecondEl = document.createElement("div");
playSecondEl.setAttribute("class", "item");
// playSecondEl.contentEditable = "true";

playSecondEl.style.cssText = `
    position: absolute;
    // top: 0 px;
    // left: 0px;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50px;
    background-color: red;
    color: transparent;  
`;

playingSecondField.appendChild(playSecondEl);

function callBack(entries, observer) {
  if (entries.isIntersecting) {
    arlert(`Egh`);
  }
}
const options = {
  root: null,
  threshold: 0,
};
const observer = new IntersectionObserver(callBack, options);
let gameObjSizeX = 47;
let gameObjSizeY = 47;

observer.observe(document.querySelector(".item"));

playSecondEl.addEventListener("mousedown", function (e) {
  playingSecondField.addEventListener("mousemove", function d(ev) {
    console.log(ev);
    let topPosPlayEl = ev.layerY - gameObjSizeY;
    let leftPosPlayEl = ev.layerX - gameObjSizeX;

    playSecondEl.style.cssText += `
    top: ${topPosPlayEl}px;
    left: ${leftPosPlayEl}px;
    z-index: 25
    `;
    playingSecondField.addEventListener("mouseup", (e) => {
      playingSecondField.removeEventListener("mousemove", d);
    });
  });
});
