let cards = ['2', 'King', 'Tooz', '5', '6', 'King', 'Queen']

console.log('Looking for the Queen');

let found = false;

for (let card of cards) {
    console.log(`Из колоды вытянута карта ${card}`);
    if (card === 'Дама') {
        found = true;
        break;
    }
}

console.log(found ? 'Мы нашли даму!' : 'В колоде нет Дамы:(');

// while-true-break //

let i;

console.log('Цикл for');

//Цикл for
for (i = 0; i < 11; i += 2) {
    console.log(i);
}

console.log('Цикл while');

i = 0;
while (true) {
    if (i > 10) break;
    console.log(i);
    i += 2;
}

// Do-While //

do {
    console.log('Нажимаем на курок');
} while (Math.random() > 0.2);

console.log ('Похоже, что вам не повезло');

// PlayGround //

for (let i = 0; i < 10; ++i) {
    console.log(i);
}

let a = [];

for (let i = 0; i < 10; ++i) {
    a.push (i * i);
}

let b = [];
for (let pow2 of a) {
    b.push(pow2 / 2);
}

// Заполнение пустого массива на основе других данных (длина массива неизвестнoй)
let lines = [];
let next;
while (next = file.nextLine()) {
    lines.push(next);
}

//обработка значений массива
for (let line of lines) {
    console.log('Длина строки:', line.length);
}

//Обработка индексов массива
for (let number in lines) {
    console.log(`Длина строки №${number}: ${lines[number].length}`);
}

//Обработка значений или индексов массива в обратном порядке
let aReversed = [];
for (let i = a.length - 1; i >= 0; --i) {
    aReversed.push(a[i]);
}

// Base Syntax // 

function printWeekday() {
    let dayIndex = new Date().getDay();
    let days = [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
    ];

    console.log(`Сегодня ${days[dayIndex]}`);
}

// объявление функции с названием functionName

function functionName() {
    console.log('Вызвана функция');
}

functionName();

let functionAsVariable = function() {
    console.log("Вызвана функция из переменной");
}

functionAsVariable();


// 5.3 args //

function greet(who = 'незнакомец') {
    console.log(`Привет, ${who}`);
}

greet('Denny');
greet('Eren');
greet('Gojo');
greet();

function findCard(cards, wantedCard = 'Туз') {
    console.log('Ищем в колоде карту ' + wantedCard);

    let found = false;

    for (let card of cards) {
        console.log(`Из колоды вытянута карта ${card}`);
        if (card === wantedCard) {
            found = true;
            break
        }
    }

    console.log (found ?
        `Мы нашли карту ${wantedCard}!` :
        `В колоде нет карты ${wantedCard} :(`);
}

// let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

//ищем туза в переданной колоде карт
findCard(myCards);
// ищем пятерку в переданной колоде карт
findCard(myCards, '5');

// return //

function findCardIndex(cards, wantedCard = 'Туз') {
    console.log('Ищем в колоде карту ' + wantedCard);

    for (let index in cards) {
        let card = cards[index];
        console.log(`Из колоды вытянута карта ${card}`);
        if (card === wantedCard) {
            console.log(`Мы нашли карту ${wantedCard}!`);
            return index;
        }
    }

    console.log(`В колоде нет карты ${wantedCard} :(`);

    return -1;
}

let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

let aceIndex = findCardIndex(myCards);
let jackIndex = findCardIndex(myCards, "Валет");

console.log(aceIndex);
console.log(jackIndex);

// return-empty //
function checkAdult(age) {
    console.log(`Вам ${age} лет`);
    if (age >= 18) return;
    console.log("Школота!");
    console.log(`Потерпи еще ${18-age} лет до совершеннолетия`)
}

checkAdult(2);

checkAdult(23);
checkAdult(19);

//Undefined //
function doNothing() {
    console.log('Я ничего не делаю');
}

console.log(doNothing());
let x = doNothing();
console.log(x);


// Function //

 