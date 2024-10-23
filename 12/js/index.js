let bodyEl = document.querySelector("body");
let radioButtonWrapper = document.createElement("div");
radioButtonWrapper.setAttribute("class", "container radio-button-wrapper");
const colorName = ["Green", "Orange", "Purple"];

bodyEl.prepend(radioButtonWrapper);

let inpunFormEl = `
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault0"  value="White" checked>
  <label class="form-check-label" for="Default">
    Default color
  </label>
</div>
`;

radioButtonWrapper.insertAdjacentHTML("afterbegin", inpunFormEl);

let formChekEl = document.querySelector(".form-check");

let i = 0;
colorName.forEach((item) => {
  i += 1;
  let inputEL = `
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault${i}" value=${item}>
  <label class="form-check-label" for="flexRadioDefault${i}">
    ${item} color
  </label>
</div>
`;
  radioButtonWrapper.insertAdjacentHTML("beforeend", inputEL);
});

const [...checkBoxArray] = document.querySelectorAll(".form-check-input");

checkBoxArray.forEach((item) => {
  item.addEventListener("change", () => {
    switch (item.value) {
      case "Green":
        bodyEl.style.backgroundColor = "RGB(216, 226, 220)";
        break;
      case "Orange":
        bodyEl.style.backgroundColor = "RGB(254, 197, 187)";
        break;
      case "Purple":
        bodyEl.style.backgroundColor = "RGB(225, 211, 248)";
        break;
      case "White":
        bodyEl.style.backgroundColor = "RGB(255, 255, 255)";
        break;
    }
  });
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let formDropDownWrapper = document.createElement("div");
formDropDownWrapper.setAttribute("class", "container drop-down-wrapper");
// formDropDownWrapper.style.width = "300px";

radioButtonWrapper.after(formDropDownWrapper);

let title = document.createElement("h1");
title.innerText = "Оберіть країну!";

formDropDownWrapper.append(title);

const country = ["Оберіть країну", "Ісландія", "Латвія", "Італія"];
const capital = ["Рейк'явік", "Рига", "Рим"];

let formDropDownSelect = `
<form class="drop-down-form">
  <fieldset >
    <div class="mb-3">
      <label for="Select" class="form-label">Країна:</label>
      <select id="Select" class="form-select">
      </select>
    </div>
  </fieldset>
</form>
`;

formDropDownWrapper.insertAdjacentHTML("beforeend", formDropDownSelect);
let selectEl = document.querySelector("#Select");

country.forEach((c) => {
  let nameCountry = `<option>${c}</option>`;
  selectEl.insertAdjacentHTML("afterbegin", nameCountry);
});

const [...optionArray] = document.querySelectorAll("option");

selectEl.addEventListener("change", () => {
  switch (selectEl.value) {
    case "Ісландія":
      title.innerHTML = `Країна: ${selectEl.value} - Столиця: ${capital[0]}`;
      break;
    case "Латвія":
      title.innerHTML = `Країна: ${selectEl.value} - Столиця: ${capital[1]}`;
      break;
    case "Італія":
      title.innerHTML = `Країна: ${selectEl.value} - Столиця: ${capital[2]}`;
      break;

    case "Оберіть країну":
      title.innerText = "Оберіть країну!";

      break;
  }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let timerWrapper = document.createElement("div");
timerWrapper.setAttribute("class", "container timer-wrapper");

formDropDownWrapper.after(timerWrapper);

let timerTable = document.createElement("h2");
timerTable.innerText = "0 sec";

timerWrapper.append(timerTable);

let startBtnEL = document.createElement("button");
startBtnEL.setAttribute("class", "btn btn-success");
startBtnEL.innerText = "Start";
timerWrapper.append(startBtnEL);

let counter = 0;

startBtnEL.addEventListener("click", (e) => {
  let setTimer = setInterval(() => {
    if (parseInt(timerTable.innerText) < 10) {
      counter++;
      timerTable.innerHTML = `${counter} sec`;
    } else {
      clearInterval(setTimer);
      alert(`Bingo!`);
    }
  }, 1000);
});
