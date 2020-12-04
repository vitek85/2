'use strict'

// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
function updateResult1() {
    const h1 = document.getElementById('result1');
    const input = document.getElementById('input1');

    const age = +input.value;

    if (age == 0) {
        h1.innerText = 'Ты никто! по жизни';
    } else if (age < 12) {
        h1.innerText = 'Ты ребёнок';
    } else if (age >= 12 && age < 18) {
        h1.innerText = 'Ты подросля';
    } else if (age >= 18 && age < 60) {
        h1.innerText = 'Ты ёршь';
    } else if (age >= 60) {
        h1.innerText = 'Ты дед';
    }

}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
function updateResult2() {
    const h1 = document.getElementById('result2');
    const input = document.getElementById('input2');

    const number = +input.value;

    if (number == 1) {
        h1.innerText = '!';
    }
    if (number == 2) {
        h1.innerText = '@';
    }
    if (number == 3) {
        h1.innerText = '#';
    }
    if (number == 4) {
        h1.innerText = '$';
    }
    if (number == 5) {
        h1.innerText = '%';
    }
    if (number == 6) {
        h1.innerText = '^';
    }
    if (number == 7) {
        h1.innerText = '&';
    }
    if (number == 8) {
        h1.innerText = '*';
    }
    if (number == 9) {
        h1.innerText = '(';
    }
    if (number == 0) {
        h1.innerText = ')';
    }

}

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
function updateResult3() {
    const h1 = document.getElementById('result3');
    const input = document.getElementById('input3');

    const num = input.value;

    const num1 = String(num);

    const a = +num[0];

    const b = +num[1];

    const c = +num[2];

    if (num1.length !== 3) {
        h1.innerText = 'ошибка, введите только трёхзначное число';
    } else {
        if (a == b && b == c) {
            h1.innerText = 'вы ввели все одинаковые цифры';
        } else if (a == b || a == c || b == c) {
            h1.innerText = 'ваше число иммет две одинаковые цифры';
        } else {
            h1.innerText = 'в вашем числе нет одинаковых цифр';
        }
    }
}

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

function updateResult4() {
    const h1 = document.getElementById('result4');
    const input = document.getElementById('input4');

    const yaer = +input.value;

    const a = yaer % 400;
    const b = yaer % 4;
    const c = yaer % 100;

    if (a == 0 && c > 0) {
        h1.innerText = 'Это высокосный год';
    } else if (b == 0 && c > 0) {
        h1.innerText = 'Это высокосный год';
    } else {
        h1.innerText = 'Это обычный год';
    }

}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

function updateResult5() {
    const h1 = document.getElementById('result5');
    const input = document.getElementById('input5');

    const a = +input.value;
    const str = String(a);

    const n1 = str[0];
    const n2 = str[1];
    const n4 = str[3];
    const n5 = str[4];

    const b = n1 + n2;

    const c = n5 + n4;


    if (isNaN(a)) {
        h1.innerText = 'Это не числовое значение';
    } else if (str.length !== 5) {
        h1.innerText = 'Количество цифр неверное';
    } else if (b == c) {
        h1.innerText = 'Это полиндром';
    } else {
        h1.innerText = 'Это  не полиндром';
    }

}

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

function updateResult6() {
    const h1 = document.getElementById('result6');
    const input = document.getElementById('input61');
    const input1 = document.getElementById('input62');

    const dollar = +input.value;
    const exchange = input1.value;

    const EUR = 0.84 * dollar;
    const UAN = 28.5 * dollar;
    const AZN = 1.7 * dollar;


    if (isNaN(dollar)) {
        h1.innerText = 'Это не числовое значение';
    } else if (exchange !== 'EUR' && exchange !== 'UAN' && exchange !== 'AZN') {
        h1.innerText = 'Неверная валюта';
    } else if (exchange == 'EUR') {
        h1.innerText = EUR;
    } else if (exchange == 'UAN') {
        h1.innerText = UAN;
    } else if (exchange == 'AZN') {
        h1.innerText = AZN;
    }

}

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

function updateResult7() {
    const h1 = document.getElementById('result7');
    const input = document.getElementById('input7');

    const sum = +input.value;

    const discount1 = sum * 0.97;
    const discount2 = sum * 0.95;
    const discount3 = sum * 0.93;

    if (isNaN(sum)) {
        h1.innerText = 'Это не числовое значение';
    } else if (sum >= 200 && sum < 300) {
        h1.innerText = 'Сумма к оплате ' + discount1 + ' шекелей';
    } else if (sum >= 300 && sum < 500) {
        h1.innerText = 'Сумма к оплате ' + discount2 + ' шекелей';
    } else if (sum >= 500) {
        h1.innerText = 'Сумма к оплате ' + discount3 + ' шекелей';
    }

}

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

function updateResult8() {
    const h1 = document.getElementById('result8');
    const input = document.getElementById('input81');
    const input1 = document.getElementById('input82');

    const l = +input.value;
    const p = +input1.value;

    const d = l / 3.14;
    const a = p / 4;

    if (isNaN(l, p)) {
        h1.innerText = 'Это не числовое значение';
    } else if (d <= a) {
        h1.innerText = 'Окружность вмещается в квадрат';
    } else if (d > a) {
        h1.innerText = 'Окружность не вмещается в квадрат';
    }

}

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

function updateResult9() {
    const h1 = document.getElementById('result9');
    const input = document.getElementById('input91');
    const input1 = document.getElementById('input92');
    const input2 = document.getElementById('input93');




    let one = input.value;
    let two = input1.value;
    let three = input2.value;



    const a = String(one);
    const b = String(two);
    const c = String(three);



    if (a !== 'Мадрид' && b !== 'Кито' && c !== 'Белград') {
        h1.innerText = 'У вас 0 балов';
    } else if (a == 'Мадрид' && b !== 'Кито' && c !== 'Белград') {
        h1.innerText = 'У вас 2 бала';
    } else if (a !== 'Мадрид' && b == 'Кито' && c !== 'Белград') {
        h1.innerText = 'У вас 2 бала';
    } else if (a !== 'Мадрид' && b !== 'Кито' && c == 'Белград') {
        h1.innerText = 'У вас 2 бала';
    } else if (a == 'Мадрид' && b == 'Кито' && c !== 'Белград') {
        h1.innerText = 'У вас 4 бала';
    } else if (a == 'Мадрид' && b !== 'Кито' && c == 'Белград') {
        h1.innerText = 'У вас 4 бала';
    } else if (a !== 'Мадрид' && b == 'Кито' && c == 'Белград') {
        h1.innerText = 'У вас 4 бала';
    } else if (a == 'Мадрид' && b == 'Кито' && c == 'Белград') {
        h1.innerText = 'У вас 6 балoв';
    }

}

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
function updateResult10() {
    const h1 = document.getElementById('result10');
    const input = document.getElementById('input10');

    const date = input.value;


    const a = date.substring(0, 2);
    const b = date.substring(3, 5);
    const c = date.substring(6, 10);

    let day = +a;
    let month = b;
    let year = +c;

    let remyear = year + 1;
    let remday = day + 1;
    let yearCheck = year % 4;

    if (date.length !== 10) {
        h1.innerText = 'Ошибка, введите заново';
    } else {
    } if (day < 9) {
        h1.innerText = '0' + remday + '.' + month + '.' + year;
    } else if (day == 28 && month == '02' && yearCheck == 0) {
        h1.innerText = `29.02.${year}`;
    } else if (day == 28 && month == '02' && yearCheck !== 0) {
        h1.innerText = `01.03.${year}`;
    } else if (day >= 9 && day < 30) {
        h1.innerText = remday + '.' + month + '.' + year;
    } else if (day == 30 && month == '04') {
        h1.innerText = `01.05.${year}`;
    } else if (day == 30 && month == '06') {
        h1.innerText = `01.07.${year}`;
    } else if (day == 30 && month == '09') {
        h1.innerText = `01.10.${year}`;
    } else if (day == 30 && month == '11') {
        h1.innerText = `01.12.${year}`;
    } else if (day == 31 && month == '01') {
        h1.innerText = `01.02.${year}`;
    } else if (day == 31 && month == '03') {
        h1.innerText = `01.04.${year}`;
    } else if (day == 31 && month == '05') {
        h1.innerText = `01.06.${year}`;
    } else if (day == 31 && month == '07') {
        h1.innerText = `01.08.${year}`;
    } else if (day == 31 && month == '08') {
        h1.innerText = `01.09.${year}`;
    } else if (day == 31 && month == '10') {
        h1.innerText = `01.11.${year}`;
    } else if (day == 31 && month == '12') {
        h1.innerText = `01.01.${remyear}`;
    } else if (day == 31 && month == '02') {
        h1.innerText = `01.03.${year}`;
    }

}




