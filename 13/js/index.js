// 1 Знаходження всіх великих літер в тексті і збереження їх в масив

let textStr =
  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let capitalLetterRegExp = /[A-Z]/g;

const arr = textStr.match(capitalLetterRegExp);

console.log(arr);

// 2 Вибір числових значень з строки
let operation = "5 плюс 7 = 3";

let numbersRegExp = /\d/g;

const numberArr = operation.match(numbersRegExp);

console.log(numberArr);

// 3  Знаходження слів із певною кількістю символів:
// Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання

let fifthLetersWordsRegExp = /[a-zA-Z]{5}/g;

const wordsArr = textStr.match(fifthLetersWordsRegExp);

console.log(wordsArr);

// 4 Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage.
//  Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.
const bodyEl = document.querySelector("body");

let inputWrapperEl = document.createElement("div");
inputWrapperEl.style.marginBottom = "50px";

inputWrapperEl.setAttribute("class", "container input-wrapper");

bodyEl.appendChild(inputWrapperEl);

let inputGroupEL = `
<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons">
  <button class="btn  btn-success" type="button">Add to session storage</button>
  <button class="btn  btn-info" type="button">Display data</button>
</div>
`;
//
let inputWrapper = document.querySelector(".input-wrapper");
//
inputWrapper.insertAdjacentHTML("afterbegin", inputGroupEL);

let dataList = `
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">Active user:</li>
  <li class="list-group-item">No active user</li>
</ul>
`;
//   <li class="list-group-item">A second item</li>

let successBtn = document.querySelector(".btn-success");
let infoBtn = document.querySelector(".btn-info");
let inputEl = document.querySelector(".form-control");
let addCounter = (window.sessionStorage[`counter`] = 0);

inputWrapper.insertAdjacentHTML("beforeend", dataList);

let dataListEl = document.querySelector(".list-group");
dataListEl.classList.add("hidden");

// console.log(dataListEl);
// console.log(JSON.parse(JSON.stringify(window.sessionStorage)));
// console.log(addCounter);

infoBtn.addEventListener("click", () => {
  let dataSesionStorage = window.sessionStorage;

  if (dataSesionStorage.length == 2) {
    dataListEl.classList.toggle("hidden");

    if (!dataListEl.classList.contains("hidden")) {
      infoBtn.innerHTML = `Hide data`;
    } else infoBtn.innerHTML = `Display data`;
  } else {
    dataListEl.innerHTML = `<li class="list-group-item active" aria-current="true">Active user:</li>`;

    let data = JSON.parse(JSON.stringify(dataSesionStorage));
    for (const key in data) {
      if (data[key] !== "true" && key !== "counter") {
        let listItem = `<li class="list-group-item">${data[key]}</li>`;
        dataListEl.insertAdjacentHTML("beforeend", listItem);
      }
    }

    dataListEl.classList.toggle("hidden");

    if (!dataListEl.classList.contains("hidden")) {
      infoBtn.innerHTML = `Hide data`;
    } else infoBtn.innerHTML = `Display data`;
  }
});

successBtn.addEventListener("click", () => {
  // console.log(addCounter);
  if (!inputEl.value == "") {
    if (!dataListEl.classList.contains("hidden")) {
      dataListEl.classList.toggle("hidden");
    }
    window.sessionStorage[`userName${addCounter}`] = inputEl.value;
    inputEl.value = "";

    window.sessionStorage[`counter`] = addCounter++;

    // console.log(window.sessionStorage);
    // console.log(addCounter);
  } else alert(`Введіть ім'я користувача`);
});

// 5 Створіть форму з полями email та password  та кнопкою відправити. Та напишіть функції які перевіряють дані на валідність.
// Пароль мінімум 8 символів і повинен містити цифрові значення та літери в верхньому регістрі.
// Якщо дані невалідні не заповненні відповідно то кнопка відправити має стан disabled

let formLoginWrapper = document.createElement("div");
formLoginWrapper.setAttribute("class", "container login-form-wrapper");
formLoginWrapper.style.marginBottom = "50px";

let formLogin = `
<form class="login-form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>

  <button type="submit" class="btn btn-primary disabled" id='btn-form'>Submit</button>
</form>
`;

inputWrapper.after(formLoginWrapper);

formLoginWrapper.insertAdjacentHTML("afterbegin", formLogin);

let passwordEl = document.querySelector("#exampleInputPassword1");
let btnEl = document.querySelector("#btn-form");

let checkPasswordRegExp = /[0-9A-Z]{8,}/;
let checkPasswordRegExp1 = /[a-z]/;
// console.log(btnEl);

passwordEl.addEventListener("change", () => {
  // console.log(passwordEl.value);
  // console.log(checkPasswordRegExp1.test(passwordEl.value));

  if (
    checkPasswordRegExp.test(passwordEl.value) &&
    !checkPasswordRegExp1.test(passwordEl.value)
  ) {
    console.log(checkPasswordRegExp1.test(passwordEl.value));
    btnEl.classList.toggle("disabled");
    btnEl.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Data is valid`);
    });
  }
});

// - Модифікуйте список задач щоб він  зберігав додані пункти в localstorage і при оновлені сторінки виводив список задач які були додані до цього.
// Також реалізуйте механізм видалення данних. Щоб дані в локалсторедж синхронізувались  з станом списку задач.

let appField = document.createElement("div");
appField.setAttribute("class", "container wrapper-lisToDo");

formLoginWrapper.after(appField);

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
<ul class="list-group list-group-tasks">
  <li class="list-group-item start">Ваш спикок пустий</li>
</ul>
`;
legend.insertAdjacentHTML("afterend", listToDo);

let userTask = document.querySelector("#TaskInput");
let submitBtn = document.querySelector(".toDoList button");
let list = document.querySelector(".list-group-tasks");
console.log(list);

function createTask() {
  if (userTask.value !== "") {
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
  }
}

function addToLocalStorage() {
  const [...tasksArray] = document.querySelectorAll(
    ".list-group-tasks .list-group-item p"
  );

  const tasks = {};

  for (let item = 0; item < tasksArray.length; item++) {
    tasks[`Task-${item}`] = tasksArray[item].innerText;
  }

  const data = JSON.stringify(tasks);

  window.localStorage[`tasksList`] = data;
}

window.addEventListener("load", () => {
  const dataLocalStorage = window.localStorage[`tasksList`];

  // console.log(!(dataLocalStorage.length == 2));
  // console.log(!(dataLocalStorage == undefined));

  if (!(dataLocalStorage == undefined)) {
    if (!(dataLocalStorage.length == 2)) {
      let firstItem = document.querySelector(".start");
      let dataForRender = JSON.parse(dataLocalStorage);
      console.log(dataForRender);
      firstItem.remove();

      for (const key in dataForRender) {
        toDo = `
      <li class="list-group-item">
      <div class="d-flex justify-content-between align-items-center grid gap-3">
        <p class="mb-0">${dataForRender[key]}</p> 
        <button class="btn btn-danger">X</button>
      </div>
      </li>
      `;
        list.insertAdjacentHTML("beforeend", toDo);
      }
    }
  }
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  createTask();
  addToLocalStorage();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    if (list.childElementCount > 1) {
      e.target.offsetParent.remove();
      console.log(list.childElementCount);
      addToLocalStorage();
    } else {
      let start = `<li class="list-group-item start">Ваш спикок пустий</li>`;
      list.insertAdjacentHTML("beforeend", start);
      e.target.offsetParent.remove();
      console.log(list.childElementCount);
      addToLocalStorage();
    }
  }
});
