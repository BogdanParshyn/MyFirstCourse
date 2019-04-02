/* var COLOR_RED = "#F00"; Это глобальная переменная. Это свойство чего-то) */


"use strict";

console.log('Привет Мир!');



// Переменные.

var flower = 'rose';
console.log(flower);

// Перезапись.

var flower = 'rose';

flower = 'tulpan'; // Эта заменит первую переменную

console.log(flower);

// Несколько переменных.

var flower = 'rose';

var flower = 'tulpan'; 

var user = 'Oleg', age = 25, messege = 'Hello';

var emptyvar;

/*еmptyvar = flower;*/

console.log(flower);
console.log(user);

//


// Тип данных - Числовое
var number = 123;

console.log(1 / 0); // infinyty

console.log(number);


// Nan

console.log('нечисло' / 5);


// Тип данных - Строка

var str = "<div class=\"\"></div>"  // \ это экранирование. Одна палочка для одного символа.
console.log(str);


// Тип данных - Булевые значени - true and folse, то есть "1" и "0".

var checked = true;


// Тип данных (Специальное значение) - null

var age = null; // у данной переменной нет значение или его еще нет. Неизвесно. Это пустая переменная.


// Тип данных - «undefined» значение не присвоено, не определено.

var x;

console.log(x);



// ОБЪЕКТЫ

var user = { name: 'Василий', age: 24};

var user2 = { name: 'Василий', age: { age1: 15, age2:24} };


// typeof - я хочу спросить, какой тип данных хранится в этой переменной.

console.log(typeof (x));


// Операнд - то, к чему применяется оператор, то с чем проводится операция, это аргументы оперетора.
// 5 * 2 - у нас два операнда.

// Унарные операторы - операторы, которые применяются к одному операнду.
var x = 1;
x= -x;
console.log(x);

// Бинарные опреторы - когда применяется к двум операндам, бинарный минус.
var x = 1, y = 2;
console.log(y - x); 

// Сложение строк или бинарный плюс.
var a = 'имя' + 'собаки';
console.log(a); 

console.log('1' + 2); // 12

console.log(2 + '1'); // 21

console.log(2 - '1'); // 1

var apple = '2';
var orange = '3';
console.log(apple + orange); // 23
console.log(+apple + +orange); // 5
console.log(apple - orange); // -1


// Приоритеты.


// Присваивание это равно =. У него самый низкий приоритет.
//a = b = c = 2 * 3; // все значения будут 6.

console.log(5 % 5);
console.log(5 % 4);
console.log(5 % 3);
console.log(5 % 2);
console.log(5 % 1);

// Инкремент.

var number = 100;
number++; // 101 или number+=1;
console.log(number); // Всегда добавляет ед-цу.
number--; // 100 или number-=1;
console.log(number); // Всегда отнимает ед-цу.

// 
var number = 100;
number+=2;
console.log(number);

number*=2; // number= number * 2;
console.log(number);

// 
var a = (5, 6); // У запятой (,) ниже приоритет чем у равно (=). В переменной так не пишут, а используется в циклах.

console.log(a); 