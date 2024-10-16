"use strict";

// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір

let bodyEl = document.querySelector("body");

let firstTaskTitle = document.createElement("h2");

firstTaskTitle.innerText = "1. Onclick:";

bodyEl.prepend(firstTaskTitle);

function genRandColor() {
  return `rgba(${Math.floor(Math.random() * (255 - 0)) + 0},${
    Math.floor(Math.random() * (255 - 0)) + 0
  },${Math.floor(Math.random() * (255 - 0)) + 0},0.7)`;
}

let btnChangeTextColor = document.createElement("button");

btnChangeTextColor.innerText = "Change color";

let paragraphEl = document.createElement("p");

paragraphEl.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique pariatur minima, asperiores corrupti, tenetur dolorum itaque ipsam fugit voluptatem eligendi cupiditate obcaecati assumenda sed iste ipsa. Ipsam velit dignissimos hic!`;

firstTaskTitle.after(btnChangeTextColor);
btnChangeTextColor.after(paragraphEl);

btnChangeTextColor.onclick = function () {
  paragraphEl.style.color = genRandColor();
};

// btnChangeTextColor.addEventListener("click", function () {
//   paragraphEl.style.color = genRandColor();
// });

// 2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).
let secondTaskTitle = document.createElement("h2");
secondTaskTitle.innerText = "2. Ondblclick:";

paragraphEl.after(secondTaskTitle);

let pageEl = document.createElement("div");

pageEl.style.width = "50px";
pageEl.style.height = "50px";
pageEl.style.backgroundColor = genRandColor();

secondTaskTitle.after(pageEl);

pageEl.ondblclick = function () {
  this.style.cssText = `
      width: ${parseInt(this.style.width) * 2}px;
      height: ${parseInt(this.style.height) * 2}px;   
      background-color: ${genRandColor()}
    `;
};

// pageEl.addEventListener("dblclick", function () {
//   this.style.cssText = `
//           width: ${parseInt(this.style.width) * 2}px;
//           height: ${parseInt(this.style.height) * 2}px;
//           background-color: ${genRandColor()}
//         `;
// });

// 3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1.
// Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

let thirdTaskTitle = document.createElement("h2");
thirdTaskTitle.innerText = "3. AddEventListener і removeEventListener:";

pageEl.after(thirdTaskTitle);

let counter = 1;
let textEl = document.createElement("p");
textEl.innerText = 0;
let btnCounter = document.createElement("button");
btnCounter.innerText = "Click for count";

thirdTaskTitle.after(textEl);
textEl.after(btnCounter);

function addCount() {
  if (counter <= 10) {
    textEl.innerHTML = `${counter}`;
    counter++;
  } else {
    btnCounter.removeEventListener("click", () => {
      btnCounter.addEventListener("click", addCount);
    });
  }
}

btnCounter.addEventListener("click", addCount);

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div).
// Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

let fourthTaskTitle = document.createElement("h2");
fourthTaskTitle.innerText = "4. Button and Ten Div-element:";

btnCounter.after(fourthTaskTitle);

let wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("class", "wrapper");

wrapperDiv.style.cssText = `
    // border: 1px solid black;
    display: flex;
    justify-content: space-around
`;
fourthTaskTitle.after(wrapperDiv);

for (let i = 0; i < 10; i++) {
  let divElement = document.createElement("div");
  divElement.style.cssText = `
    width: 100px;
    height: 100px;
    background-color: ${genRandColor()};
    border: 1px solid black;
    border-radius: 50px;
  `;
  wrapperDiv.appendChild(divElement);
}

wrapperDiv.getAttribute;

wrapperDiv.addEventListener("click", (e) => {
  if (!(e.target.getAttribute("class") === "wrapper")) {
    e.target.remove();
  }
});

// 5.event.target
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік

let fifthTaskTitle = document.createElement("h2");

fifthTaskTitle.innerText = "5. Event.target:";

wrapperDiv.after(fifthTaskTitle);

let blockContainerEl = document.createElement("div");
blockContainerEl.setAttribute("class", "blockContainer");
blockContainerEl.style.cssText = `
    border: 1px solid black;
    display: flex;
    justify-content: space-around
`;

fifthTaskTitle.after(blockContainerEl);

const arrClass = ["first", "second", "third"];

arrClass.forEach((element) => {
  let btn = document.createElement("button");
  btn.innerText = `Button ${element}`;
  btn.setAttribute("class", `button.${element}`);
  blockContainerEl.appendChild(btn);
});

blockContainerEl.addEventListener("click", (e) => {
  console.log();
  if (!(e.target.getAttribute("class") === "blockContainer")) {
    alert(`Ви на тиснули на кнопку ${e.target.getAttribute("class")}`);
  }
});

// 6. onclick + робота з css
// створіть кнопку та список з лінками.Кнопка має текст "Відкрити меню".
//  І по кліку на кнопку відкриває меню яке заховане за допомгою css та змінює текст в середині на "Закрити меню"
let sixthTaskTitle = document.createElement("h2");
sixthTaskTitle.innerText = `6. Onclick + робота з css:`;

blockContainerEl.after(sixthTaskTitle);

let btnNavList = document.createElement("button");
btnNavList.innerText = "Відкрити меню";

sixthTaskTitle.after(btnNavList);

let ulEl = document.createElement("ul");

const arrNameLink = ["Home", "News", "About"];

btnNavList.after(ulEl);

arrNameLink.forEach((element) => {
  let liEl = document.createElement("li");
  let linkEl = document.createElement("a");
  linkEl.innerText = element;
  liEl.append(linkEl);
  ulEl.appendChild(liEl);
});

ulEl.setAttribute("class", "hidden");

btnNavList.addEventListener("click", () => {
  ulEl.classList.toggle("hidden");
  if (!ulEl.classList.contains("hidden")) {
    btnNavList.innerHTML = "Закрити меню";
  } else btnNavList.innerHTML = "Відкрити меню";
});
