// 3)   Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
// const elementsArray = [
//   { tag: "p", text: "Елемент 1" },
//   { tag: "div", text: "Елемент 2" },
//   { tag: "span", text: "Елемент 3" },
// ];
// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
// Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію

const elementsArray = [
  { tag: "p", text: "Елемент 1" },
  { tag: "div", text: "Елемент 2" },
  { tag: "span", text: "Елемент 3" },
];

// Create section on our page

let newSection = document.createElement("section");

// Add class to our section

newSection.setAttribute("class", "first-section");

// Add text to our section

newSection.innerText = "Our new section";

// Get body tag from our page

let bodyEl = document.querySelector("body");

// Add our section to our html-page

bodyEl.prepend(newSection);

// Add our elements and data form array but first get our section again

const firstSection = document.querySelector(".first-section");

const [p, div, span] = elementsArray;

// console.log(p.tag);

let firstTag = document.createElement(`${p.tag}`);

firstTag.innerHTML = `${p.text}`;

firstSection.append(firstTag);

let secondTag = document.createElement(`${div.tag}`);

secondTag.innerHTML = `${div.text}`;

firstSection.append(secondTag);

firstSection.append(document.createElement("br"));

let thirdTag = document.createElement(`${span.tag}`);

thirdTag.innerHTML = `${div.text}`;

firstSection.append(thirdTag);

let breakRow = document.createElement("p");

breakRow.innerText = "==================Run our function==================";

newSection.append(breakRow);
// Create functon for add our elements to the page

function createEls(dataArray) {
  dataArray.forEach((data) => {
    const { tag, text } = data;
    let tagEl = document.createElement(`${tag}`);
    tagEl.innerHTML = `${text}`;
    newSection.append(tagEl);
  });
}

createEls(elementsArray);

console.log(firstSection);
