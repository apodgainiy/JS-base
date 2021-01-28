"use strict"
/*
1. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

for (let i = 0; i <= 10; i++){
    if (i === 0) {
        console.log(`${i} - это ноль`);
        continue;
    }
    let check = i % 2;
    switch (check){
        case 0:
            console.log(`${i} - четное число`);
            break;
        case 1:
            console.log(`${i} - нечетное число`);
            break;
    }
}


/*2. Выведите в консоль значения, указанные рядом с комментариями:*/
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

/*3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :*//*
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(element => console.log(element.price *= 0.85));

/*4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0*/
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    }
];

const productWithPhoto = products.filter(prod => ((prod.photos !== undefined) && (prod.photos.length > 0)));
console.log(productWithPhoto);
products.sort((a, b) => a.id - b.id);
console.log(products);

/*5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.*/

for(let i = 0; i <= 9; console.log(i++));

/*6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:*/

let sym = "*";
let string = "*";
for(let i = 0; i < 20; i++){
    console.log(string);
    string += sym;
}