// Домашня робота:
// Перетворення тексту: Створіть функцію, яка приймає рядок і повертає promise.
// promise має перетворювати рядок у верхній регістр після 2 секундної затримки.
// Використайте setTimeout для створення затримки.
// Після завершення, використайте then для виведення результату і catch для обробки помилок.
let bodyEl = document.querySelector("body");

let inputWrapper = document.createElement("div");

inputWrapper.setAttribute("class", "container input-wrapper");
inputWrapper.style.marginBottom = "80px";

bodyEl.appendChild(inputWrapper);

inputWrapper = document.querySelector(".input-wrapper");

let inputForm = `
<form>
  <fieldset >
    <legend> Input your massage</legend>
    <div class="mb-3">
      <label for="TextInput" class="form-label">Massage pls:</label>
      <input type="text" id="TextInput" class="form-control" placeholder="">
    </div>
    <button type="submit" class="btn btn-primary msg-sender">Send msg</button>
  </fieldset>
</form>
`;

inputWrapper.insertAdjacentHTML("beforeend", inputForm);

let inputField = document.querySelector("#TextInput");
let submittBtn = document.querySelector(".msg-sender");

function formatStr(msg) {
  let promise = new Promise(function (resolve, reject) {
    if (msg == "") {
      reject(`The massage is empty`);
    } else {
      setTimeout(() => {
        resolve(msg.toUpperCase());
      }, "2000");
      inputField.value = "";
    }
  });
  promise
    .then((massage) => alert(massage))
    .catch((error) => {
      console.error(error);
      alert(error);
    });
}

submittBtn.addEventListener("click", (e) => {
  console.log(inputField.value);
  e.preventDefault();
  formatStr(inputField.value);
});

// Напишіть функцію, яка приймає два числа як аргументи і повертає promise.
// promise має вирішуватися з повідомленням про те, яке з чисел більше,
// або відхилятися, якщо числа рівні, з повідомленням "Числа рівні".

function biggestNumber(fisrtNumber, secondNumber) {
  let secondPromise = new Promise(function (resolve, reject) {
    if (fisrtNumber > secondNumber) {
      resolve(
        `First number (${fisrtNumber}) biggest then second number (${secondNumber})`
      );
    } else if (secondNumber > fisrtNumber) {
      resolve(
        `Second number (${secondNumber}) biggest then first number (${fisrtNumber})`
      );
    } else if (secondNumber == fisrtNumber) {
      reject(`The numbers is identity`);
    }
  });
  secondPromise
    .then((msg) => alert(msg))
    .catch((error) => {
      console.error(error);
      alert(error);
    });
}

biggestNumber(2, 5);
biggestNumber(7, 3);
biggestNumber(1, 1);

// Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).
// https://jsonplaceholder.typicode.com/users
// Виведіть імена та електронні адреси користувачів  на веб-сторінку.

let nameHolder = document.createElement("div");
nameHolder.setAttribute("class", "container name-holder");
nameHolder.style.marginBottom = "80px";

inputWrapper.after(nameHolder);

nameHolder = document.querySelector(".name-holder");

function getJSON(url, errorMsg = "Щос пішло не так.") {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`${errorMsg}(${response.status})`);
    }
    return response.json();
  });
}

getJSON("https://jsonplaceholder.typicode.com/users").then(function (data) {
  console.log(data);
  data.forEach((element) => {
    let title = document.createElement("h2");
    title.innerHTML = `${element["name"]} - <a href="mailto:${element["email"]}">${element["email"]}</a>`;
    nameHolder.appendChild(title);
  });
});

// Додаткова робота:
// Зробити сторінку з кнопкою, при натиску на кнопку робиться запит до
// http swapi.dev/api/planets/ та вивести картки з даними з запиту.
// При кліку на кратку отримайте id та виведіть додатккову інформацію про планету отримавши дані з запиту наприклад
// swapi.dev/api/planets/1/  ( замість 1 може бути будьяке id планети)

let planetInfoWrapper = document.createElement("div");
planetInfoWrapper.setAttribute(
  "class",
  "container px-4 text-center planet-info-wrapper"
);
planetInfoWrapper.style.marginBottom = "80px";
let rowEl = document.createElement("div");
rowEl.setAttribute("class", "row  gy-5");

nameHolder.after(planetInfoWrapper);

let renderBtn = document.createElement("btn");
renderBtn.innerHTML = `Show ifno`;
renderBtn.setAttribute("class", "btn btn-info");

planetInfoWrapper.append(renderBtn);
planetInfoWrapper.append(rowEl);

getJSON("https://swapi.dev/api/planets/").then(function (data) {
  console.log(data);

  planetsData = data.results;

  renderBtn.addEventListener("click", (e) => {
    e.preventDefault();
    planetsData.forEach((element) => {
      let cardEl = `
      <div class="col-6">
      <div class="p-3 d-flex justify-content-center">
      <div class="card" style="width: 18rem;">
        <img src="img/planet_icon_149820.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element["name"]}</h5>
          <div class="p-3 hidden details">
          <p class="card-text "><strong>Climate:</strong> ${element["climate"]}</p>
          <p class="card-text "><strong>Population:</strong> ${element["population"]}</p>
          <p class="card-text "><strong>Terrain:</strong> ${element["terrain"]}</p>
          </div>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>
      </div>
    </div>
      `;
      rowEl.insertAdjacentHTML("beforeend", cardEl);
    });
  });
  rowEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-primary")) {
      e.target.previousElementSibling.classList.toggle("hidden");
    }
  });
});
