"use strict"
/*
1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundreds)
 */

class ObjectNumber {
    constructor() {
        this.units = "units: ";
        this.tens = "tens: ";
        this.hundreds = "hundreds: ";
    }

    transformNumber(number){
        if (Number.isInteger(number) && number <= 999 && number >=0){
            //а не проще преобразовать число в строку и взять цифры с нужной позиции?
            /*
                number = String(number);
                this.units = `units: ${number[2]}`
                this.tens = `tens: ${number[1]}`
                this.hundreds = `hundreds: ${number[0]}`
            */

            this.units = `units: ${number%10}`
            this.tens = `tens: ${(number%100-number%10)/10}`
            this.hundreds = `hundreds: ${(number%1000-number%100)/100}`

        } else {
            this.units = null;
            this.tens = null;
            this.hundreds = null;
        }
    }
}

let obj3 = new ObjectNumber();
obj3.transformNumber(349);
console.log(obj3);

/*1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).*/
/*
//ES5
function Product(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function (){
    this.price *= 0.75;
}

let obj1 = new Product("car", 500);
obj1.make25PercentDiscount();
console.log(obj1.price);



//ES6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(){
        this.price *= 0.75;
    }
}

let obj1 = new Product("car", 500);
obj1.make25PercentDiscount();
console.log(obj1.price);

/*
1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
 */
/*
//ES5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}


//ES6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text){
        this.text = text;
    }
}

class AttachedPost extends Post{
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted(){
        this.highlighted = true;
    }
}



let obj2 = new AttachedPost("Ivan", "hello", "01.02.2021");
console.log(`${obj2.author} ${obj2.text} ${obj2.date}`);
console.log(obj2.text);
obj2.edit("edit hello");
console.log(obj2.text);
console.log(obj2.highlighted);
obj2.makeTextHighlighted();
console.log(obj2.highlighted);
*/