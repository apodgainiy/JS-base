"use strict"
    /*
    1. Объясните почему код даёт именно такие результаты?
    Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со включенными точками остановки.
    пример 1
    let a = 1, b = 1, c, d;
    c = ++a;
    alert(c); //ответ: 2 (Переменная а увеличена на единицу и значение записано в переменную с)

    пример 2
    d = b++;
    alert(d); //ответ: 1 (Переменная b записана в переменную d и потом увеличена на единицу)

    (теперь а==2 и b==2)

    пример 3
    c = 2+ ++a; alert(c); //ответ: 5 (Переменная а увеличилась на единицу и к ней прибавлена цифра 2.)

    пример 4
    d = 2+ b++;
    alert(d); //ответ: 4 (К переменной b прибавлена цифра 2, сумма записана в переменную d. После этого переменная b увеличена на единицу)

    (теперь а=3 и b=3)

    alert(a); // ответ: 3
    alert(b); // ответ: 3
    */



    /*
    2. Чему будут равны переменные x и a в примере ниже?
    Написать почему так произошло (описать последовательность действий).
    let a = 2;
    let x = 1 + (a *= 2); //сначала действие в скобках. Сокращенная форма a=a*2
                          //вызываем переменную а умножаем её на 2, записываем значение в переменную а.
                          //Выходим из скобок, результат (4) складываем с 1 и записываем полученное значение (5) в переменную х

    x = 1 + (2 * 2) = 5;
    x==5;
    a==4;
*/

/*
    3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
    Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;(ноль можно считать положительным числом)
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму;
*/
/*parseInt - отбрасываем десятичную часть
  (Math.random()<0.5?-1:1) - случайно выбираем знак
  Math.random()*100 - рандомное число до 100*/
const randomNumber = (max) => parseInt((Math.random()<0.5?-1:1)*Math.random()*++max);

let a = randomNumber(100);
let b = randomNumber(100);

if (a>=0 && b>=0) {
    let difference = a-b;
    alert(`a=${a}\nb=${b}\na-b=${difference}`);
} else if (a<0 && b<0) {
    let product = a*b;
    alert(`a=${a}\nb=${b}\na*b=${+product}`);
} else {
    let sum = a+b;
    alert(`a=${a}\nb=${b}\na+b=${sum}`);
}

/*

/*
4. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/
a = randomNumber(10);
b = randomNumber(10);

alert("Арифметические функции\na="+a+" b="+b+"\na+b="+sum(a, b)+"\na-b="+difference(a, b)+"\na*b="+product(a, b)+"\na/b="+quotient(a, b));

function sum (n, m){
    return n+m;
}
function difference (n, m){
    return n-m;
}
function product (n, m){
    return n*m;
}
function quotient (n, m){
    return n/m;
}

/*
    5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.*/

function mathOperation (arg1, arg2, operation){
    switch (operation){
        case "+":
            return sum(arg1,arg2);
        case "-":
            return difference(arg1,arg2);
        case "*":
            return product(arg1,arg2);
        case "/":
            return quotient(arg1,arg2);
        default:
            alert ("Неправильно задан оператор");
    }
}

a = randomNumber(10);
b = randomNumber(10);

alert("Арифметические функции\na="+a+" b="+b+"\na+b="+mathOperation(a, b, "+")+"\na-b="+mathOperation(a, b, "-")+"\na*b="+mathOperation(a, b, "*")+"\na/b="+mathOperation(a, b, "/"));

/*
    6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало обычных заданий, требует времени и возможно гугления, делайте по желанию.)
    Программа должна спросить у пользователя число, это будет количество денег, которое он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
    "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
    "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
    "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
    То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
*/

/**
 * Ф-я возвращает последний символ полученной строки
 * @param str - строка либо число
 * @returns {string}
 */
const getLastChar = (str) => String(str.charAt(str.length-1));

/**
 * Ф-я возвращает слово "рубль" в нужном падеже для полученного числа
 * @param num число
 * @returns {string}
 */
function getEndingRub (num) {
    switch (getLastChar(String(num))){
        case "1":
            return "рубль";
        case "2":
        case "3":
        case "4":
            return "рубля";
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            return "рублей";
        default:
            return "ошибка";
    }
}

let userNumber = prompt("Введите сумму для зачисления на счёт.");
if (!Number(userNumber)) {
    alert("Введённое значение не является числом");
} else {
    alert(`Ваша сумма в ${userNumber} (${convertNumberToText(userNumber, "male")}) ${getEndingRub(userNumber)} успешно зачислена.`);
}




/*
Здравствуйте. Что-то я заморочился, и решил сделать вывод числа текстом. Заняло это у меня примерно часа 4, и ещё пару часов на отладку. Сначала нужно было продумать алгоритм (из-за особенностей числительных русского языка). Потом писал код, постепенно совершенствуя алгоритм. Буду благодарен, если прокомментируете мой код. Допускаю, что из-за пока ещё базовых знаний, изобрёл велосипед. И всё можно было сделать проще :)
* */



/**
 * Ф-я возвращает переданную строку задом наперед
 * @param str {string}
 * @returns {string}
 */
function reverseString(str) {
    let reverseStr = "";
    for (let i = str.length-1; i >= 0 ; i--){
        reverseStr +=str[i];
    }
    return reverseStr;
}


/**
 * Ф-я переводит число в текст
 * @param num Число в строковом или числовом формате
 * @param gender {string} "male" | "female" Род, для формирования окончания (напр: один рубль или одна йена)
 * @returns {string}
 */
function convertNumberToText(num, gender) {
    num = reverseString(String(num));
    let numSeparate = [];
    let n = 0;
    let s = "";
    for (let i = 0; i < num.length; i++){
        s += num[i];
        if ((i+1) % 3 === 0) {
            numSeparate[n] = classCheck(s, n++, gender);
            s = "";
        }
    }
    if (s) {
        numSeparate[n] = classCheck(s, n++, gender);
        s = "";
    }

    for (let i = numSeparate.length-1; i >= 0 ; i--){
        s += numSeparate[i];
    }
    return s;
}

/**
 * Ф-я возвращает трёхзначное число словами в зависимости от пола. Число должно быть перевернуто
 * @param num Число перевернутое задом наперед
 * @param gender {string} "male" | "female" Род, для формирования окончания (напр: один миллион или одна тысяча)
 */
function hundredGender (num, gender) {
    String(num);
    let result = [];

        if (num[1] === "1") {
            switch (num[0]){
                case "0":
                    result[0] = "десять";
                    break;
                case "1":
                    result[0] = "одинадцать";
                    break;
                case "2":
                    result[0] = "двенадцать";
                    break;
                case "3":
                    result[0] = "тринадцать";
                    break;
                case "4":
                    result[0] = "четырнадцать";
                    break;
                case "5":
                    result[0] = "пятнадцать";
                    break;
                case "6":
                    result[0] = "шестнадцать";
                    break;
                case "7":
                    result[0] = "семнадцать";
                    break;
                case "8":
                    result[0] = "восемнадцать";
                    break;
                case "9":
                    result[0] = "девятнадцать";
                    break;
            }
            switch (num[2]){
                case "0":
                    break;
                case "1":
                    result[2] = "сто ";
                    break;
                case "2":
                    result[2] = "двести ";
                    break;
                case "3":
                    result[2] = "триста ";
                    break;
                case "4":
                    result[2] = "четыреста ";
                    break;
                case "5":
                    result[2] = "пятьсот ";
                    break;
                case "6":
                    result[2] = "шестьсот ";
                    break;
                case "7":
                    result[2] = "семьсот ";
                    break;
                case "8":
                    result[2] = "восемьсот ";
                    break;
                case "9":
                    result[2] = "девятьсот ";
                    break;
            }

        } else {
            switch (num[0]){
                case "0":
                    break;
                case "1":
                    gender==="male"?result[0] = "один":result[0] = "одна";
                    break;
                case "2":
                    gender==="male"?result[0] = "два":result[0] = "две";
                    break;
                case "3":
                    result[0] = "три";
                    break;
                case "4":
                    result[0] = "четыре";
                    break;
                case "5":
                    result[0] = "пять";
                    break;
                case "6":
                    result[0] = "шесть";
                    break;
                case "7":
                    result[0] = "семь";
                    break;
                case "8":
                    result[0] = "восемь";
                    break;
                case "9":
                    result[0] = "девять";
                    break;
            }
            switch (num[1]){
                case "0":
                case "1":
                    break;
                case "2":
                    result[1] = "двадцать ";
                    break;
                case "3":
                    result[1] = "тридцать ";
                    break;
                case "4":
                    result[1] = "сорок ";
                    break;
                case "5":
                    result[1] = "пятьдесят ";
                    break;
                case "6":
                    result[1] = "шестьдесят ";
                    break;
                case "7":
                    result[1] = "семьдесят ";
                    break;
                case "8":
                    result[1] = "восемьдесят ";
                    break;
                case "9":
                    result[1] = "девяносто ";
                    break;
            }
            switch (num[2]){
                case "0":
                    break;
                case "1":
                    result[2] = "сто ";
                    break;
                case "2":
                    result[2] = "двести ";
                    break;
                case "3":
                    result[2] = "триста ";
                    break;
                case "4":
                    result[2] = "четыреста ";
                    break;
                case "5":
                    result[2] = "пятьсот ";
                    break;
                case "6":
                    result[2] = "шестьсот ";
                    break;
                case "7":
                    result[2] = "семьсот ";
                    break;
                case "8":
                    result[2] = "восемьсот ";
                    break;
                case "9":
                    result[2] = "девятьсот ";
                    break;
            }
        }
    return `${result[2]?result[2]:""}${result[1]?result[1]:""}${result[0]?result[0]:""}`;

}

/**
 * Ф-я добавляет окончание к названию класса (не уверен что правильно это назвал. Имеется ввиду окончание таких слов, как: тысяча, миллион, миллиард), в зависимости от первой цифры переданного числа
 * @param num число задом наперёд. Для которого нужно правильно написать класс
 * @param root корень слова (напр: тысяч, миллион, миллиард)
 * @param gender пол корня (male | female)
 * @returns {string|*}
 */
function classGender (num, root, gender){
    String(num);
    if (gender === "female") {
        if (num[1] === "1"){
            return root;
        } else {
            switch (num[0]) {
                case "1":
                    return root + "а";
                case "2":
                case "3":
                case "4":
                    return root + "и";
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "0":
                    return root;
            }
        }
    }
    if (gender === "male") {
        if (num[1] === "1"){
            return root + "ов";
        } else {
            switch (num[0]) {
                case "1":
                    return root;
                case "2":
                case "3":
                case "4":
                    return root + "а";
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "0":
                    return root + "ов";
            }
        }
    }
}

/**
 * Ф-я получает трехзначное число и номер класса (0 - единицы; 1 - тысячи; 2 - миллионы; 3; 4)
 * @param number трёхзначное число задом наперед
 * @param classNumber номер класса
 * @param gender {string} "male" | "female" Род, для формирования окончания единиц(напр: один рубль или одна йена)
 * @returns {string}
 */
function classCheck (number, classNumber, gender) {
    let result = "";
    switch (classNumber){
        case 0:
            return hundredGender(number, gender);
        case 1:
            if (number === "000"){
                return "";
            } else {
                return hundredGender(number, "female") + " " + classGender(number, "тысяч", "female") + " ";
            }
        case 2:
            if (number === "000"){
                return "";
            } else {
                return hundredGender(number, "male") + " " + classGender(number, "миллион", "male") + " ";
            }
        case 3:
            if (number === "000"){
                return "";
            } else {
                return hundredGender(number, "male") + " " + classGender(number, "миллиард", "male") + " ";
            }
        case 4:
            if (number === "000"){
                return "";
            } else {
                return hundredGender(number, "male") + " " + classGender(number, "триллион", "male") + " ";
            }
    }
}
/*тестировал*/
let n = +prompt();
alert(`${n} (${convertNumberToText(n, "male")}) ${getEndingRub(n)}`);


for (let i = 0; i < 20; i++){
    let num = Math.abs(randomNumber(999999999999));
    console.log(`${num} (${convertNumberToText(num, "male")}) ${getEndingRub(num)}`);
}