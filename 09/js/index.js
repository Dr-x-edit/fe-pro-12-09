// Ствоюємо таблцю
function createTable(parentEl, titleArray, bodyTable, dataTable) {
  let tableEl = document.createElement("table");
  let theadEl = document.createElement("thead");
  let trEL = document.createElement("tr");

  for (const title of titleArray) {
    let thEl = document.createElement("th");

    thEl.innerText = title;

    trEL.appendChild(thEl);
  }

  theadEl.prepend(trEL);

  tableEl.prepend(theadEl);

  parentEl.prepend(tableEl);

  bodyTable(tableEl, dataTable);
}

// Функція для створення тіла таблиці

function createBodyTable(parentEl, dataTable) {
  let bodyTableEl = document.createElement("tbody");

  parentEl.append(bodyTableEl);

  let arrHtmlDataEl = [];

  dataTable.forEach((data) => {
    const { title, year, rating } = data;

    let dataT = `
            <tr>
                <td>
                    ${title}
                </td>
                <td>
                    ${year}
                </td>   
                <td>
                    ${rating}
                </td>
            </tr>
            `;

    arrHtmlDataEl.push(dataT);
  });

  for (let dataT of arrHtmlDataEl) {
    bodyTableEl.insertAdjacentHTML("beforeend", dataT);
  }
}

const bodyEl = document.querySelector("body");
const arrOfTitle = ["Title", "Yaer", "Raring"];

const booksArray = [
  {
    title: "Пригоди Аліси в Країні Див",
    year: 1865,
    rating: 4.5,
  },
  {
    title: "1984",
    year: 1949,
    rating: 4.8,
  },
  {
    title: "Гаррі Поттер і філософський камінь",
    year: 1997,
    rating: 4.7,
  },
  {
    title: "Спогади про Другу світову війну",
    year: 2024,
    rating: 4.7,
  },
];

createTable(bodyEl, arrOfTitle, createBodyTable, booksArray);

const tableEl = document.querySelector("table");

const pagesName = [
  "diferent_element.html",
  "header.html",
  "../netflix/index.html",
];
const linkContent = ["Завдання 3", "Завдання 4", "Нетфлікс"];

pagesName.reverse();
linkContent.reverse();

for (let i = 0; i < 3; i++) {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", `${pagesName[i]}`);
  linkEl.setAttribute("target", "_blank");
  linkEl.innerText = linkContent[i];
  let brTag = document.createElement("br");

  tableEl.after(linkEl);
  tableEl.after(brTag);
}
