import { uppercase, reverseString } from "./stringUtilities.js";

// Завдання 1: Отримання даних користувача з JSONPlaceholder
// Створіть функцію, яка використовує async/await для отримання даних про конкретного користувача за id JSONPlaceholder.
// Виведіть ім'я та електронну адресу користувача.
// підказка: запит за іd чи іншими параметрами https://jsonplaceholder.typicode.com/users/${userId}

class datailInformationApp {
  constructor() {
    this.hujanction();
  }
  createInputForm() {
    let bodyEl = document.querySelector("body");
    let inputWrapper = document.createElement("div");

    inputWrapper.setAttribute("class", "container input-wrapper");
    inputWrapper.style.marginBottom = "80px";

    bodyEl.appendChild(inputWrapper);

    inputWrapper = document.querySelector(".input-wrapper");

    let inputForm = `
    <form>
      <fieldset >
        <legend> Input user id for more information</legend>
        <div class="mb-3">
          <label for="TextInput" class="form-label">User id pls:</label>
          <input type="text" id="TextInput" class="form-control" placeholder="">
        </div>
        <button type="button" class="btn btn-primary msg-sender" data-bs-toggle="modal" data-bs-target="#exampleModal">Get info</button>
      </fieldset>
    </form>
    `;

    inputWrapper.insertAdjacentHTML("beforeend", inputForm);
    return inputWrapper;
  }

  getUserInput() {
    let inputField = document.querySelector("#TextInput");
    if (+inputField.value) {
      // console.log(inputField.value);
      return +inputField.value;
    } else {
      alert(`User iss not found. Please input number.`);
    }
  }

  async getUserInfo(userId) {
    try {
      let jsonplaceholderRsponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!jsonplaceholderRsponse.ok) {
        throw new Error(`User with this id is not found.Please try another id`);
      }
      let done = await jsonplaceholderRsponse.json();

      // console.log(done);

      let modalEl = document.querySelector(".modal-body");

      modalEl.setAttribute("class", "modal-body bg-success-subtle");
      modalEl.innerHTML = `${done["name"]} - <a href="mailto:${done["email"]}">${done["email"]}</a>`;
      let modalTitleEl = document.querySelector(".modal-title");
      modalTitleEl.innerHTML = `Detail information about user: <em>${done["name"]}</em>`;
    } catch (err) {
      // alert(err);
      // console.log(err);
      let modalEl = document.querySelector(".modal-body");
      modalEl.setAttribute("class", "modal-body bg-warning-subtle");
      modalEl.innerHTML = `${err}`;
      let modalTitleEl = document.querySelector(".modal-title");
      modalTitleEl.innerHTML = `Something went wrong`;
    }
  }

  renderModalWindow(el) {
    let modalWindowEl = `
          <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Detail information about user</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body"></div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-clear"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    // inputWrapper = document.querySelector(".input-wrapper");

    el.insertAdjacentHTML("beforeend", modalWindowEl);
  }

  hujanction() {
    let wrapperEl = this.createInputForm();
    let submittBtn = document.querySelector(".msg-sender");
    this.renderModalWindow(wrapperEl);
    const myModal = new bootstrap.Modal(
      document.getElementById("exampleModal"),
      {}
    );

    submittBtn.addEventListener("click", () => {
      let uData = this.getUserInput();
      let data = this.getUserInfo(uData);
      console.log(myModal);
      myModal.show();

      let clearBtn = document.querySelector(".btn-clear");

      clearBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-clear")) {
          let modalEl = document.querySelector(".modal-body");
          let inputField = document.querySelector("#TextInput");
          inputField.value = "";
          modalEl.innerHTML = ``;
        }
      });
    });
  }
}

const newApp = new datailInformationApp();

// Завдання 2: Виведення інформації про фільм з SWAPI
// Використайте async/await для запиту інформації про конкретний фільм з SWAPI. Виведіть назву фільму та дату виходу.

class detailFilmInfoApp {
  constructor() {
    this.runApp();
  }

  createInputForm() {
    let inputWrapperEl = document.querySelector(".input-wrapper");
    let inputWrapper = document.createElement("div");

    inputWrapper.setAttribute("class", "container input-film-wrapper");
    inputWrapper.style.marginBottom = "80px";

    inputWrapperEl.after(inputWrapper);

    inputWrapper = document.querySelector(".input-film-wrapper");

    let inputForm = `
    <form>
      <fieldset >
        <legend>Input name of film</legend>
        <div class="mb-3">
          <label for="exampleDataList" class="form-label">Name of film please:</label>
          <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
          <datalist id="datalistOptions"></datalist>
        </div>
        <button type="button" class="btn btn-primary film-sender" data-bs-toggle="modal" data-bs-target="#exampleModal1">Get info</button>
      </fieldset>
    </form>
    `;

    inputWrapper.insertAdjacentHTML("afterbegin", inputForm);

    return inputWrapper;
  }

  async getFilmsInfo() {
    try {
      let jsonplaceholderRsponse = await fetch(`https://swapi.dev/api/films/`);
      if (!jsonplaceholderRsponse.ok) {
        throw new Error(`User with this id is not found.Please try another id`);
      }
      let done = await jsonplaceholderRsponse.json();
      // console.log(done);
      return done;
    } catch (err) {
      alert(err);
    }
  }

  async getNameOfFilms() {
    let result = await this.getFilmsInfo();
    let info = [];

    result.results.forEach((element) => {
      info.push(element.title);
    });
    // console.log(info);
    return info;
  }

  async renderFilmsVariant() {
    let filmsArr = await this.getNameOfFilms();
    // console.log(filmsArr);
    let detailsEl = document.querySelector("#datalistOptions");
    filmsArr.forEach((film) => {
      let optionEl = `<option value="${film}"></option>`;

      detailsEl.insertAdjacentHTML("afterbegin", optionEl);
    });
  }

  getUserInput() {
    let inputField = document.querySelector("#exampleDataList");
    if (!(inputField.value == "")) {
      // console.log(inputField.value);
      console.log(inputField.value);
      return inputField.value;
    } else {
      alert(`Please enter the name of film.`);
    }
  }

  renderModalWindow(el) {
    let modalWindowEl = `
          <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Detail information about film</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body modal-body-films"></div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-clears"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    // inputWrapper = document.querySelector(".input-wrapper");

    el.insertAdjacentHTML("beforeend", modalWindowEl);
  }

  async renderDetailInfo(userInput, detail) {
    let modalEl = document.querySelector(".modal-body-films");

    // let detail = await this.getFilmsInfo();
    console.log(detail.results.filter((e) => e.title == userInput)[0]);

    detail = detail.results.filter((e) => e.title == userInput)[0];

    // Завдання 3: Імпорт утиліти для роботи з текстом
    // Створіть файл stringUtilities.js, де будуть функції для роботи з рядками, наприклад, функція для перетворення рядка в uppercase
    // і функція для обернення рядка. Експортуйте ці функції. В index.js імпортуйте та використовуйте ці функції.

    let detailEl = `
      <div><p>Title: ${uppercase(detail.title)}</p></div>
      <div><p>Director: ${detail.director}</p></div>
      <div><p>Episod: ${detail.episode_id}</p></div>
      <div><p>Release date: ${detail.release_date}</p></div>
      <div><p>Director: ${reverseString(detail.director)}</p></div>

    `;
    modalEl.innerHTML = detailEl;
  }

  async runApp() {
    let data = await this.getFilmsInfo();
    let wrapperEl = this.createInputForm();
    await this.renderFilmsVariant();
    this.renderModalWindow(wrapperEl);

    let bntEl = document.querySelector(".film-sender");
    bntEl.addEventListener("click", () => {
      let res = this.getUserInput();
      this.renderDetailInfo(res, data);
    });
    let clearBtn = document.querySelector(".btn-clears");

    clearBtn.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-clears")) {
        let modalEl = document.querySelector(".modal-body-films");
        let inputField = document.querySelector("#exampleDataList");
        inputField.value = "";
        modalEl.innerHTML = ``;
      }
    });
  }
}

const filmDetail = new detailFilmInfoApp();

// Завдання 3: Імпорт утиліти для роботи з текстом
// Створіть файл stringUtilities.js, де будуть функції для роботи з рядками, наприклад, функція для перетворення рядка в uppercase
// і функція для обернення рядка. Експортуйте ці функції. В index.js імпортуйте та використовуйте ці функції.

// +++++++++++++++++++++++++++++++++++++++++++++
// ЗАВДАННЯ ВИКОНАНО ВИЩЕ
// +++++++++++++++++++++++++++++++++++++++++++++
