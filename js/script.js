"use strict"

/* 
let usersNames = ["Slava", "Piter", "Lina"];
console.log(usersNames);
 */


/* 
let usersNames = ["Slava", "Piter", "Lina"];
console.log(usersNames);
console.log(usersNames[1]);
 */


// let usersNames = ["Slava", "Piter", "Lina"];
/* 
for (let i = 0; i < usersNames.length; ++i) {
    console.log(usersNames[i]);
}
 */





// метод беребору масиву!!!!!!!!!!!!!!

/* 
usersNames.forEach(userName => {
    console.log(userName);
 });
  */


//   додати елемент в масив
// push ---  додає елемент до масиву
/* 
let usersNames = ["Slava", "Piter", "Lina"];
console.log(usersNames);
usersNames.push("Tina");
console.log(usersNames);
 */

// Чи є елемент в масиві (пошук елементу)
/* 
let usersNames = ["Slava", "Piter", "Lina"];
console.log(usersNames);
console.log(usersNames.includes("Lina"));
 */

/* 
if (!usersNames.includes(10)) {
    usersNames.push(10);
    console.log(usersNames);
}
 */



// Чи це масив!!!!!!
/* 
let usersNames = ["Slava", "Piter", "Lina"];
console.log(Array.isArray(usersNames));
 */

// Сортування чисел!!!!!!!!!!
/* 
let arrTwo = [22, 7, 12];
console.log(arrTwo.sort());


function compareNumeric(a, b) {
    
    console.log(`Порівнюємо ${a} і ${b}`);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

    return a - b
}

console.log(arrTwo.sort(compareNumeric)); 
*/

// З масива у рядок
/* 
let usersNames = ["Slava", "Piter", "Lina"];

  let usersNamesStr = usersNames.join('>');

  console.log(usersNamesStr); 

  */

//   Функції
/* 
Наприклад, функції, починаючи з 
"show..." зазвичай що-то показують,
"get..." повертають значення,
"calc..." що-то вичисляють,
"create..." що-то перевіряють,
"check..." що-то перевіряють і повертають логічно 
*/

/* 
// приклади імен

showMessage
getOptions
calcSum
 */
/* 
function showMessage() {
    console.log('Hello');
}

showMessage(); 
 */
/* 
const numOne = 10;
const numTwo = 30;

console.log(numOne + numTwo);
 */



/* 
const numOne = 10;
const numTwo = 30;

function calcSum(a, b) {
    console.log(a + b);
}
calcSum(numOne, numTwo);
 */

/* 
const numOne = 10;
const numTwo = 30;

function calcSum(a, b) {
    return a + b;
}

function showSum(sum) {
    console.log(sum);
}

const calcSumResul = calcSum(numOne, numTwo);

showSum(calcSumResul);

 */


// Область видимості
/* 
let someVar;

function someFunc() {
    someVar = 20
}

someFunc();

console.log(someVar);


 */

// Стрілочні функції

// Функція в один рядок
/* 
let showText = function (text) { console.log(text); }
// let showText = (text) => console.log(text);


// Функція де більше рядків

let showText = (text) => {
    console.log(text);
    console.log(text);
    console.log(text);
    console.log(text);
}

showText ('Hello!');

 */


//   ================= DOM ==============

//  Window
/* 
let windowWidth = window.innerWidth;
console.log(windowWidth);


let windowHeight = window.innerHeight
console.log(windowHeight);
 */

// BOM
// Navigator

// Дані про браузер

// console.log(navigator.userAgent);

// Платформа 
// console.log(navigator.platform);

// Location

// console.log(location.href);

// alert('Hello')

// Confirm
/* 
let confirmAnswer = confirm("Запитання!");

console.log(confirmAnswer);
 */
// Prompt 
/* 
let promptAnswer = prompt("Запитання!")
console.log(promptAnswer);

 */



//======== Document Object Model =======

// Навігація по документу!!!


/* 
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

console.log(bodyElement);

 */



// Перший та останній дочірній елемент
/* 
const bodyElement = document.body;

const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;

console.log(firstChild);
console.log(lastChild);

 */

// Усі дочірні елементи (колекція)

/* 
const bodyElement = document.body;
 
const childNodes = bodyElement.children;
console.log(childNodes);
 */

// Перебір колекції!!!!!!!!!!!!
/* 
for (let i = 0; i < childNodes.length; ++i) {
    console.log(childNodes[i]);  
}
 */
// For ..... of метод перебору для колекцій
/* 
for (let childNode of childNodes) {
    console.log(childNode);
}
 */


//  Навігація до батьківських та сусідніх елементів
/* 
const bodyElement = document.body;
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);

 */




// !!!!!! Найчастіше використовується   !!!!!!!!

// Пошук та отримання довільного елементу

// const someObject = document.querySelector('.');


// Зміна документу
/* 
const listItems = document.querySelectorAll ('.list__item');



listItems.forEach(listItem => {
console.log(listItem.innerHTML);
});

 */

// Створення обєктів
/* 
let newObject = document.createElement('div');

newObject.innerHTML = `<span class="Hello" >Hello!</span>`;
console.log(newObject);
 */
/* 
let newObject = document.createElement('div');

console.log(newObject);

const page = document.querySelector('.page');
 */
// page.before(newObject);
// page.after(newObject);
// page.prepend(newObject);
// page.append(newObject);


// const page = document.querySelector('.page');
/* 
page.insertAdjacentHTML("beforeend",
    `<div class="blok">
        <div class="blok__item">
            Hello
        </div>
    </div>`
    );

 */


// ==========================================
/* 
function showMessage() {
    console.log('Hello!');
}
showMessage();
 */
/* 
let message;

function showMessage() {
    message = "Hello";
}
showMessage();
console.log(message);


 */
/* 
function calcSumm(numOne, numTwo) {
    console.log(`Змінна numOne:${numOne}`);
    console.log(`Змінна numTwo:${numTwo}`);

    let numSumm = numOne + numTwo;

    console.log(`Сумма:${numSumm}`);
}

calcSumm(1, 2);

 */
/* 
let getMessage = (text, name) => text + ',' + name + '!';
console.log(getMessage('Hello', 'Slava'));
 */
/* 
let getMessage = (text, name) => {
    let message = text + ',' + name + '!';
    return message;
};
console.log(getMessage('Hello', 'Slava')); 
*/
/* 
 function showMessage(text, name) {
    console.log(`${text}, ${name}!`);
    setTimeout(showMessage, 700, text, name);
 }
 */
//  setTimeout (showMessage, 700, `Hello`, `World`)
//  setInterval (showMessage, 1000, `Hello`, `World`)

/* 
function showNumber(num) {
    console.log(num);
    setTimeout(showNumber, 1000, ++num);
}
setTimeout(showNumber, 1000, 1);
 */



/* 
function showNumber(num) {
    console.log(num);
    if (num < 5) {
        setTimeout(showNumber, 1000, ++num);

    }
}
setTimeout(showNumber, 1000, 1);
 */
/* 
function showNumber(num) {
    console.log(num);
    let timeId = setTimeout(showNumber, 1000, ++num);
    if (num === 6) {
        clearTimeout(timeId);
    }
}

setTimeout(showNumber, 1000, 1); 
*/
/* 
let result = 0;
function showNumber(num) {
    result += num;
    console.log(result);
    if (result === 5) {
        clearInterval(timeId);
    }
}
let timeId = setInterval(showNumber, 1000, 1);
 */


// ================= Домашка ===============


/* 
function showName() {
    console.log('Вася!');
}

setTimeout(showName, 0);
console.log('Коля!');
 */
/* 
showMessage();
function showMessage() {
    console.log('Hello!');
}
 */

/* 
showMessage();
let showMessage = function () {
console.log('Повідомлення');
}

 */



/* "use strict";

let showMessage;

if (2 > 1) {
    showMessage = function () {
        console.log('Сообщение');
    }
}
showMessage(); */

// ====================================================

/* 
let arrOne = ['Ваня','Іштван','Оля',];
console.log(arrOne);
console.log(arrOne.length);
 */


/* 
let arr = ['Ваня','Іштван','Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);
 */
/* 
let arr = ['Ваня','Іштван','Оля',];
 
arr[0] = 'Коля';
console.log(arr);

arr[3] = 'Ваня';
console.log(arr); 
*/
/* 
let arr = ['Ваня','Іштван','Оля',];
arr.push('Вася');
console.log(arr);
 */

/* 
let arr = ['Ваня','Іштван','Оля',];
arr.shift();
console.log(arr);
 */

/* 
let arr = ['Ваня','Іштван','Оля',];
arr.pop();
console.log(arr);
 */
/* 
let arr = ['Ваня','Іштван','Оля',];
arr.unshift('Slava');
console.log(arr);

arr.unshift('Tina', 'Piter');
console.log(arr); 
*/

/* 
let arrOne = ['Ваня','Іштван','Оля',];
arrOne.splice(1, 1);
console.log(arrOne);

let arrTwo = ['Ваня','Іштван','Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

let arrThree = ['Ваня','Іштван','Оля',];
arrThree.splice(0, 1, 'Pol');
console.log(arrThree);

let arrFour = ['Ваня','Іштван','Оля',];
arrFour.splice(1, 0, 'Slava', 'Tom');
console.log(arrFour);

let arrFive = ['Ваня','Іштван','Оля',];
arrFive.splice(-1, 1);
console.log(arrFive);

 */

/* 
let arrOne = ['Ваня','Іштван','Оля',];
let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);

 */
/* 
let arrOne = ['Ваня','Іштван','Оля',];
let arrTwo = arrOne.concat('Slava');
console.log(arrTwo);
 */

/* 
let arr = ['Ваня','Іштван','Оля',];

console.log(arr.indexOf('Іштван'));
console.log(arr.indexOf('Вася'));
console.log(arr.indexOf('Іштван', 2));


console.log(arr.includes('Іштван'));
console.log(arr.includes('Вася'));
console.log(arr.includes('Іштван', 2));

 */
/* 
let arr = [
    { name: 'Вася', age: 36 },
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr.find(function (item, index, array) {
    return item.age === 18;
});

console.log(resultOne);
 */
/* 
let arr = [
    { name: 'Вася', age: 36 },
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 'Не скажу' },
]

let result = arr.filter(function (item, index, array) {
    return item.age >= 18;
});

console.log(result);
 */
/* 
let arrOne = ['Ваня', 'Іштван', 'Оля',];
console.log(arrOne.sort());

let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());
console.log(arrTwo.sort((a, b) => a - b));
 */

/* 
let arr = ['Ваня', 'Іштван', 'Оля',];
let result = arr.map(function (item, index, array) {
    return item[0];
});

console.log(arr);
console.log(result);

 */

/* 
let arr = ['Ваня', 'Іштван', 'Оля',];
let str = arr.join('>');
console.log(str);

let arrTwo = ['Ваня', 'Іштван', 'Оля',];
console.log(String(arrTwo));
 */

/* 
let obj = {};
let arr = [];
console.log(typeof obj);
console.log(typeof arr);

if (Array.isArray(obj)) {
    console.log('Це масив!');
} else {
console.log('Це не масив!');
}

 */

/* 
let arr = ['Ваня', 'Іштван', 'Оля',];
console.log(arr.length);

for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}
 */

/* 
let arr = ['Ваня', 'Іштван', 'Оля',];
for (let arrItem of arr) {
    console.log(arrItem);
} 
*/
/* 
let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array) {
    return item + previousValue;
}, 0);
console.log(reduceValueOne);
 */


// =============================================
/* 
let arr = ['Ваня', 'Іштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
  */

/* 
const users = ["Ваня", "Іштван"];
users.push("Оля");

let index = users.indexOf("Іштван");
users.splice(users.indexOf("Іштван"), 1, "Петя")

let firstElement = users.shift()
console.log(firstElement);

users.splice(0, 0, "Вася", "Паша");
console.log(users);
 */


/* 
let arr = ['Ваня', 'Іштван', 'Оля',];
let indexOfElement = arr.indexOf("Іштван");
let removedElement = arr.splice(indexOfElement, 1)
console.log(removedElement);
 */

/* 
let str = 'Ваня,Иштван,Оля';
let array = str.split(",")
console.log(array);
 */
/* 
let arr = [9, 8, 2,];
let reduceValue = arr.reduce(function (previousValue, item, index, array) {
console.log(previousValue);
});
 */



