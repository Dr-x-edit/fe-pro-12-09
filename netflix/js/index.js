// Додаємо актуальну дату на нашу сторінку

// Отримуємо поточну дату

let weekday = Intl.DateTimeFormat("en-GB", {
  weekday: "long",
}).format(new Date());

let month = Intl.DateTimeFormat("en-GB", {
  month: "long",
}).format(new Date());

let day = Intl.DateTimeFormat("en-GB", {
  day: "numeric",
}).format(new Date());

const dateNow =
  weekday +
  ` ${month}` +
  ` ${
    +day === 1
      ? day + "st"
      : +day === 2
      ? day + "nd"
      : +day === 3
      ? day + "rd"
      : day + "th"
  }`;

// Отримуємо необхідний контейнер

const dateEl = document.querySelector(".header__text");

// Розміщуємо в наш контейнер динамічну дату

dateEl.innerHTML = dateNow;

// Змінюємо жанри

const genresArray = ["Horror", "Documentary", "Crime"];

//отримуємо жанри зі сторінкии

const genres = document.querySelectorAll(".main__sub-title span");

for (let i = 0; i < genres.length; i++) {
  genres[i].innerHTML = genresArray[i];
}

let lastGenreTag = Array.from(genres).at(-1);

lastGenreTag.style.borderRight = "none";

// Додаємо рейтинг на сторінку

const ratingArray = [5, 4, 4, 5, 5, 3];

// const ratingArray = [5, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 5, 5, 3];

const intRating = Math.floor(
  ratingArray.reduce((acc, i) => acc + i) / ratingArray.length
);

const ratingEl = document.querySelector(".rating");

let ratingTags = document.querySelectorAll(".rating .fa-star");

for (let i = 1; i <= ratingTags.length; i++) {
  if (i <= intRating) {
    ratingTags[i - 1].setAttribute("class", "fa-solid fa-star stars-fill");
  } else {
    ratingTags[i - 1].setAttribute("class", "fa-regular fa-star stars");
  }
}

// Додаємо динамічно картки

const descArray = [
  "Breaking Bad",
  "The rain",
  "Life in a year",
  "Money heist: Korea",
  "Squid game",
];

const cardWrapper = document.querySelector(".card-wrapper");

for (let i = 0; i < descArray.length; i++) {
  const element = descArray[i];
  let cardItem = `
<div class="card-item">
<img src="img/film-0${i + 1}.png" alt="${element}" />
</div>
`;
  cardWrapper.insertAdjacentHTML("beforeend", cardItem);
}
