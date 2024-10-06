// Використовуючи for in  виведіть значення з обєктку в console.log

const person = {
  name: "John",
  age: 25,
  occupation: "Developer",
};
console.log(`========= FIN =========`);

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві

const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 21, grade: "C" },
];

console.log(`========= FOF / FIN =========`);

for (let item of students) {
  for (let key in item) {
    console.log(`${key}: ${item[key]}`);
  }
  console.log(`=============`);
}

// Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt
// а результат гри виводити використовуючи alert (тут треба Math.random та if)

function returnUserAnswer() {
  let userAnswer = prompt(
    `Для початку гри ввведіть один з варіантів: "камінь", "ножиці" чи "папір"`
  );
  if (userAnswer == null) {
    // alert(`Зіграємо іншим разом`);
    return userAnswer;
  } else return (userAnswer = userAnswer.toLowerCase());
}

function checkInput(input) {
  if (input != null) {
    while (
      !(input === "камінь") &&
      !(input === "ножиці") &&
      !(input === "папір")
    ) {
      if (input != null) {
        alert(`Введіть один з варіантів: "камінь", "ножиці" чи "папір"`);
        input = returnUserAnswer();
        // console.log(input);
      } else return null;
    }
    return input;
  } else return input;
}

function checkWinner(userAnswer, machineAnswer, arrAnswer) {
  const [rock, scisors, paper] = arrAnswer;

  while (userAnswer) {
    if (userAnswer === arrAnswer[machineAnswer]) {
      alert(
        `Нічия! ${userAnswer.toUpperCase()} vs ${arrAnswer[
          machineAnswer
        ].toUpperCase()}`
      );
      break;
    } else if (
      (userAnswer === rock && arrAnswer[machineAnswer] === scisors) ||
      (userAnswer === scisors && arrAnswer[machineAnswer] === paper) ||
      (userAnswer === paper && arrAnswer[machineAnswer] === rock)
    ) {
      alert(
        `Ви перемогли ${userAnswer.toUpperCase()} vs ${arrAnswer[
          machineAnswer
        ].toUpperCase()}`
      );
      break;
    } else if (
      (userAnswer === rock && arrAnswer[machineAnswer] === paper) ||
      (userAnswer === paper && arrAnswer[machineAnswer] === scisors) ||
      (userAnswer === scisors && arrAnswer[machineAnswer] === rock)
    ) {
      alert(
        `Машина перемогла ${arrAnswer[
          machineAnswer
        ].toUpperCase()} vs ${userAnswer.toUpperCase()}`
      );
      break;
    }
  }
}

function gameRSP() {
  const items = ["камінь", "ножиці", "папір"];
  let randNumberItem = Math.trunc(Math.random() * 3);

  let userAnswer = returnUserAnswer();

  userAnswer = checkInput(userAnswer);

  if (userAnswer == null) {
    alert(`Зіграємо іншим разом`);
  } else {
    checkWinner(userAnswer, randNumberItem, items);

    if (confirm(`Граємо ще раз?!`)) {
      gameRSP();
    } else alert(`Ну і окей...`);
  }
}

gameRSP();

// Завдання для Math.min та Math.ma00x:

console.log(`========= Math.min та Math.max =========`);

const firstRandNumber = Math.trunc(Math.random() * 20) + 1;
const secondRandNumber = Math.trunc(Math.random() * 20) + 1;

// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
function defineMaxNumber(...args) {
  console.log(args);
  return Math.max(...args);
}
console.log(defineMaxNumber(firstRandNumber, secondRandNumber));
// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.
function defineMinNumber(...args) {
  return Math.min(...args);
}
console.log(defineMinNumber(firstRandNumber, secondRandNumber));
console.log("=======================");

// Завдання для Math.pow:

// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.
console.log(`========= Math.pow =========`);

function powerUserNumber(userNumber, userPower) {
  return Math.pow(userNumber, userPower);
}

console.log(powerUserNumber(firstRandNumber, secondRandNumber));

console.log("=======================");

// Завдання для Math.floor та Math.ceil:
console.log(`========= Math.floor та Math.ceil =========`);

const floatRandonNumber = Math.random() * 100;

console.log(floatRandonNumber);
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
function roundOff(userNumber) {
  return Math.floor(userNumber);
}

console.log(roundOff(floatRandonNumber));
console.log("=======================");

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.
function roundUp(userNumber) {
  return Math.ceil(userNumber);
}

console.log(roundUp(floatRandonNumber));
console.log("=======================");

// По классам
// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
}
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

const newUser = new Person("Jhon", 30);

console.log(newUser);

// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

Person.prototype.sayHello = function () {
  console.log(`Вітаю Вас ${this._name}`);
};

newUser.sayHello();

// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person {
  constructor(name, age, studentId, subject) {
    super(name, age);
    this._studentId = studentId;
    this._subject = subject;
  }

  study() {
    console.log(`Студент ${this._name} вивчає ${this._subject}`);
  }
}

const randSutdentId = Math.trunc(Math.random() * 100) + 1;

const newStudent = new Student("Natalia", 35, randSutdentId, "Java Script");

console.log(newStudent);

newStudent.study();

// ========== Додаткова задача ==========
// Створіть клас Book, який представляє книгу з наступними властивостями:
// Властивості:
// title (назва книги)
// author (автор)
// year (рік публікації)
// genres (масив жанрів)
// ratings (масив чисел, що представляють оцінки читачів)
// ========== Геттери та сеттери: ==========
// Геттер averageRating — обчислює та повертає середню оцінку книги.
// Сеттер для year — дозволяє встановити рік публікації з перевіркою, що рік не в майбутньому.
// Сеттер для genres — дозволяє додавати нові жанри, але не допускає дублювання жанрів.
// Методи:
// addRating(rating) — додає оцінку до масиву ratings, перевіряючи, що оцінка є числом від 1 до 5.
// getInfo() — повертає рядок з інформацією про книгу у форматі: "Назва: ..., Автор: ..., Рік: ..., Жанри: ..."..

// Запозичено з якабу:

const genres = ["Історія", "Воєнна історія"];
const bookName = "Спогади про Другу світову війну. У 2 томах";
const author = "Вінстон Черчилль";
const year = 2023;
const ratings = [5, 4, 5, 5, 5, 5, 5];

class Book {
  constructor(title, author, year, genres, ratings) {
    this._tittle = title;
    this._author = author;
    this._year = year;
    this._genres = genres;
    this._ratings = ratings;
  }

  get averageRating() {
    return +(
      Array.from(this._ratings).reduce((acc, item) => acc + item, 0) /
      Array.from(this._ratings).length
    ).toFixed(2);
  }

  set changeYaer(year) {
    this._year = year;
  }

  set addGener(newGaner) {
    if (!this._genres.includes(newGaner)) {
      this._genres.push(newGaner);
      alert(`Ви додали жанр: ${newGaner}  `);
    } else alert(`Такий жанр (${newGaner}) вже вказаний до цієї книги.`);
  }

  getRatingFromUser() {
    return +prompt(`Введіть свою оцінку киниги від 1 до 5`);
  }

  set addRating(userRating) {
    if (userRating < 1 || userRating > 5) {
      alert(`Ви ввели не вірне число`);
      return;
    } else return this._ratings.push(userRating);
  }

  getInfo() {
    console.log(
      `"Назва: ${this._tittle}, Автор: ${this._author}, Рік: ${this._year}, Жанри: ${this._genres}`
    );
  }
}

// Створюємо нови об'єкт

const newBook = new Book(bookName, author, year, genres, ratings);

console.log(newBook);

console.log(newBook.averageRating);

newBook.changeYaer = 2024;

console.log(newBook);

newBook.addGener = "Історія";

newBook.addGener = "Інше";

console.log(newBook._genres);

newBook.addRating = newBook.getRatingFromUser();

console.log(newBook);

console.log(newBook.averageRating);

newBook.getInfo();

// Ще задачі на робботу з класами
// Клас User
// Властивості:
// username (ім'я користувача)
// password (пароль користувача)
// role (роль користувача, наприклад, "admin", "editor", "viewer")
// isActive (логічне значення, чи активний користувач)
// Методи:
// login(password) — перевіряє, чи збігається введений пароль з паролем користувача. Якщо так, виводить повідомлення про успішний вхід; якщо ні, виводить повідомлення про помилку.
// logout() — виводить повідомлення про вихід користувача.
// Геттер info — повертає рядок з інформацією про користувача у форматі: "Користувач: ..., Роль: ..., Статус: ...".

class User {
  _isActive = false;
  constructor(username, password, role) {
    this._username = username;
    this._password = password;
    this._role = role;
    this._isActive;
  }
  get isActive() {
    return this._isActive;
  }

  set isActive(active) {
    return (this._isActive = active);
  }

  getPasswordFromUser() {
    return prompt(`Введіть будь ласка ваш пароль (admin)`);
  }

  login(password) {
    if (this._isActive) {
      alert(`Ви вже ввійшли до акаунту!`);
    } else {
      while (!(password === this._password)) {
        alert(`Ви ввели не вірний пароль. Спробуйте ще раз`);
        password = this.getPasswordFromUser();
      }

      alert(`Вітаємо вас ${this._username}`);
      this.isActive = true;
    }
  }

  logout() {
    alert(`Вихід виконано успішно`);
    this.isActive = false;
  }

  get info() {
    return `Користувач: ${this._username}, Роль: ${this._role}, Статус: ${this._isActive}`;
  }
}

const superUser = new User("SuperUser", "admin", "Admin");
console.log(superUser);

superUser.login(superUser.getPasswordFromUser());

console.log(`User activity ${superUser.isActive}`);
console.log(superUser);

superUser.logout();

console.log(`User activity ${superUser.isActive}`);
console.log(superUser);

console.log(superUser.info);

// Клас UserManager
// Властивості:
// users (масив користувачів)
// Методи:
// addUser(user) — додає користувача до системи. Перевіряє, чи користувач з таким username вже існує; якщо так, виводить повідомлення про помилку.
// removeUser(username) — видаляє користувача з системи за іменем користувача.
// getUser(username) — повертає користувача з системи за іменем користувача.
// getActiveUsers() — повертає масив активних користувачів.
// authenticate(username, password) — перевіряє, чи існує користувач з таким іменем та паролем; якщо так, повертає користувача; якщо ні, виводить повідомлення про помилку.
// updateUserRole(username, newRole) — оновлює роль користувача, перевіряючи, що нова роль є однією з дозволених ("admin", "editor", "viewer").

const userMaksym = new User("slastonm", "teacher", "Teacher");
userMaksym.isActive = true;
const userTanya = new User("Tanya", "admin", "Admin");
userTanya.isActive = true;
const userMaryna = new User("arnmary", "1234", "Student");
const userAnastasiia = new User("Laskaridi", "5678", "Student");

const userAnastasia = new User("ashonuok", "6548", "Sutdent");
const userIhor = new User("Ihor_0406", "4311", "Sutdent");
userIhor.isActive = true;

const userVolodymyr = new User("MRXsss", "8945", "Student");

const users = [
  userMaksym,
  userTanya,
  userVolodymyr,
  userMaryna,
  userAnastasia,
  userAnastasiia,
  userIhor,
];

console.log(users);

// let user = "Tanya";

// console.log(users.some((data) => data._username === user));

// console.log((Math.floor(Math.random() * (9999 - 1000) + 1) + 1000).toString());

// console.log(users.findIndex((s) => s._username === "Ihor_0406"));
// users.splice(users.indexOf(username), 1);

// console.log(users.filter((e) => e ));

// console.log(users[users.indexOf('')] );

class UserManager {
  constructor(users) {
    this._users = users;
  }

  addUser(user) {
    if (this._users.some((data) => data._username === user)) {
      alert(`Користувач з ім'ям ${user} вже існує!`);
    } else {
      this._users.push(
        new User(
          user,
          (Math.floor(Math.random() * (9999 - 1000) + 1) + 1000).toString(),
          "Student"
        )
      );
      alert(
        `Вітаємо вас ${
          this._users.at(-1)._username
        }. Ваш згенерований пароль: ${this._users.at(-1)._password}`
      );
    }
  }

  removeUser(username) {
    return this._users.splice(
      this._users.findIndex((s) => s._username === username),
      1
    );
  }

  getUser(username) {
    return console.log(
      this._users[this._users.findIndex((s) => s._username === username)]
    );
  }

  getActiveUsers() {
    return this._users.filter((dataUser) => dataUser._isActive === true);
  }

  authenticate(username, password) {
    if (
      this._users.some(
        (data) => data._username === username && data._password === password
      )
    ) {
      alert(
        `Такий юзер ${
          this._users[this._users.findIndex((s) => s._username === username)]
            ._username
        } з таким паролем існує`
      );
    } else
      alert(
        `Немає такого юзера (${
          this._users[this._users.findIndex((s) => s._username === username)]
            ._username
        }) з ТАКИМ паролем`
      );
  }

  updateUserRole(username, newRole) {
    const roles = ["admin", "editor", "viewer"];

    if (roles.some((item) => item === newRole)) {
      this._users[
        this._users.findIndex((s) => s._username === username)
      ]._role = newRole;
    } else alert(`Відповідної ролі немає ${newRole}`);
  }
}

const userData = new UserManager(users);

userData.addUser("Tanya");

userData.addUser("Emma");

const newUserData = userData._users.slice();

console.log(newUserData);

userData.removeUser("Emma");

console.log(userData);

userData.getUser("Ihor_0406");

console.log(userData.getActiveUsers());

userData.authenticate("Tanya", "admin");
userData.authenticate("MRXsss", "8945");
userData.authenticate("MRXsss", "3311");

userData.updateUserRole("arnmary", "editor");

userData.getUser("arnmary");

userData.updateUserRole("MRXsss", "MegaMan");
