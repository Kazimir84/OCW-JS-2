// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = prompt('Enter first Number');
let num2 = prompt('Enter second Number');

if (num1 > num2) {
    console.log(`Max number = ${num1}`);
} else if (num1 < num2) {
    console.log(`Max number = ${num2}`);
} else if (num1 == num2) {
    console.log(`Number1 = Number2  (${num1} = ${num2})`);
};

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = prompt('Enter Number of Partment from 1 to 90');

if (apartment <= 20) {
    console.log('This number of apartment from First entrance');
} else if (apartment > 10 && apartment <= 48) {
    console.log('This number of apartment from Second entrance');
} else if (apartment > 48 && apartment <= 90) {
    console.log('This number of apartment from Third entrance');
} else {
    console.log('This number of apartment from does not exist')
};

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести
// повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = prompt('Enter Yuo Number');

if (+number === 10) {
    console.log('ВІРНО');
} else {
    console.log(('НЕВІРНО'));
};

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x = 3;
// let x = '3';
// let x = true;
// let x = false;
// let x = {};
// let x = [];
// let x = 45n;
if (typeof x === 'number') {
    console.log(1);
} else if (typeof x === 'string') {
    console.log(2);
} else if (typeof x === 'boolean') {
    console.log(3);
} else if (typeof x === 'object') {
    console.log(4);
} else {
    console.log('Something else');
};

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temp = +prompt('Enter Temperature');

if (temp >= 10 && temp <= 22) {
    console.log('ми йдемо ВЧИТИСЯ');
} else {
    console.log('сидимо вдома і вчимося ОНЛАЙН');
};

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
//     вивести Повідомлення - що число не вірне ... .

let count = +prompt('Enter Number from 1 to 9');

if (!isNaN(count)) {
    let num = count;
    switch (num) {
        case 1:
            console.log('Приз Авто');
            break;
        case 2:
            console.log('Приз Мото');
            break;
        case 3:
            console.log('Приз Телефон');
            break;
        case 4:
            console.log('Приз Телевізор');
            break;
        case 5:
            console.log('Приз Пральна машина');
            break;
        default:
            console.log(`Нема подарунка за цією цифрою ${count}`);
    };
} else {
    console.log('Введіть цифри а не щось інше!!!');
};
