// 4) Створіть сторінку та підключіть до неї js
// 4.1) За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center
let headerEl = document.createElement("header");

const bodyEl = document.querySelector("body");

bodyEl.style.boxSizing = "border-box";

headerEl.style.padding = "50px";
headerEl.style.backgroundColor = "yellow";
headerEl.style.textAlign = "center";

bodyEl.prepend(headerEl);

// 4.2) const menuData = [
//     { name: 'Головна', url: '/' },
//     { name: 'Про нас', url: '/about' },
//     { name: 'Послуги', url: '/services' },
// Додайте ще пункти меню за потреби
// ];
// Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.
const menuData = [
  { name: "Головна", url: "/" },
  { name: "Про нас", url: "/about" },
  { name: "Послуги", url: "/services" },
];

menuData.forEach((link) => {
  const { name, url } = link;
  let newLink = document.createElement("a");
  newLink.innerText = name;
  newLink.setAttribute("href", `${url}`);

  //   newLink.setAttribute("target", "_blank");

  headerEl.append(newLink);
});

// 4.3) Додайте тегам А що створені в header  атрибут target з властивістю _blank

const allHeaderLinks = document.querySelectorAll("header a");

allHeaderLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
});

// 4.4)Створіть блок за допомогою js задайте блоку стиль display flex
// та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

let newDivBlock = document.createElement("div");

newDivBlock.setAttribute("class", "new-block");

newDivBlock.style.display = "flex";
newDivBlock.style.flexWrap = "wrap";
newDivBlock.style.justifyContent = "center";

headerEl.after(newDivBlock);

for (let div = 0; div < 50; div++) {
  let divEl = document.createElement("div");

  divEl.setAttribute(
    "style",
    `border-radius:50px; 
     width:50px; 
     height:50px; 
     background-color:rgba(${Math.floor(Math.random() * (255 - 0)) + 0},${
      Math.floor(Math.random() * (255 - 0)) + 0
    },${Math.floor(Math.random() * (255 - 0)) + 0},0.5)`
  );

  newDivBlock.prepend(divEl);
}

// 4.5) доадайте всім стврореним 50 div елементам класс circle-elemt

let allDivs = document.querySelectorAll(".new-block div");

console.log(allDivs);

allDivs.forEach((div) => {
  div.setAttribute("class", "circle-elemt");
});
