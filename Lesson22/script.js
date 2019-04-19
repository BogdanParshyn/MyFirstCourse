"use strict";

var arr = new Array('Яблоко', 'Груша');

var arr = new Array(100); // создаст 100 пустых ячеек.

var matrix = [
    [1, 2, 3,],
    [1, 2, 3,],
    [1, 2, 3,],
];

console.log(matrix[0][2]);

// Методы работы с массивами.

// 1-й метод split:
var names = 'Маша, Надя, Марина, Наташа';

var arr = names.split(', '); // var arr = names.split(', ' , 2); Задаем длину массива вторым элементом.

console.log(arr);

// join:

var arr3 = ['Маша, Надя, Марина, Наташа'];

var str = arr3.join(';');

// Удаление из массива, очищает и делает андефайнд:

var arr4 = ['Маша', 'Надя', 'Марина', 'Наташа'];

delete arr4[1];

console.log(arr4[1]);

// splice (и удаляет и добавляет):

arr4.splice(1, 1);

console.log(arr4[1]);

arr4.splice(1, 2, 'Катя', 'Оля');
console.log(arr4);

//

var removed = arr4.splice(1, 2);
console.log(removed);

// 

arr4.splice(1, 0, 'Наташа', 'Карина'); // Так мы к нашему одному элементу "0-Маша" ничего не удаляем и добавляем два элемента.

console.log(arr4);

//

arr.splice(-1, 0, 3, 4); // -1 начинаем с конца.

console.log(arr4);

// slice - копирует.

var arr5 = ['Почему', 'надо', 'учить', 'JavaScript'];

var arr6 = arr5.slice(1, 2); // 'надо',  - 1  с какого элемента начинаем, а 2-м заканчивает, но его не учитываем.

console.log(arr6);

var arr6 = arr5.slice(1); // 'надо', 'учить', 'JavaScript' - с 1-го начинает и ...

var arr6 = arr5.slice(-2); // работает только один аргумент, так как минус ломает логику.

console.log(arr6);

var arr6 = arr5.slice(); // 'Почему', 'надо', 'учить', 'JavaScript'

// Сортировка в массиве:

var arr7 = [1, 2, 15];

arr7.sort();

console.log(arr7); // 1, 15, 2

// Функция сорт принимает в себя другую функцию чтобы сортировать.

function  compareNumeric(a, b) {
    if(a > b){return 1;}
    if(a < b){return -1;}
}

arr7.sort(compareNumeric); // сортирует сравнивая все числа друг с другом.

// reverse. Переворачивает.

var arr8 = [1, 2, 3];

arr8.reverse();

console.log(arr8);

// concat. Создает массив, который соеденяет два массива.

var arr9 = [1, 2];

var newArr = arr9.concat(arr8); // concat(1, 2); concat([1, 2], 3);

console.log(newArr);

// indexOf . Он начинает с начала элемента и ищет какое-то значение, какое мы назначаем. Строго равенство.
// lastIndexOf Он начинает с конца элемента и ищет какое-то значение, какое мы назначаем. Строго равенство.

console.log( arr9.indexOf('2') ); // -1  - если ничего не нашел. Строго равенство.
console.log( arr9.indexOf(2) ); // 1  - нашел, что искал и выводит позицию в массиве. 1 это место в масиве. Строго равенство.

// Object.keys(obj) Возвращает все ключи объекта.

var user = {
    name: 'Петя',
    age: 30
};

var keys = Object.keys(user);

console.log(keys);

// forEach - Функция которая перебирает все элементы массива.
// Он ничего не возвращает.

var arr10 = ["Яблоко", "Апельсин", "Груша"];

arr10.forEach(function(item, i, arr){ // item - очередной элемент . i - номер в массиве. arr - сам массив
    console.log( i + ': ' + item + ' (массив:' + arr + ')');
});

arr10.reverse().forEach(function(item, i, arr){ // item - очередной элемент . i - номер в массиве. arr - сам массив
    console.log( i + ': ' + item + ' (массив:' + arr + ')');
});

// filter - функция. Возвращает элементы, которые подходят под наши нужды.

var arr11 = [1, -1, 2, -2, 3];

var positiveArr = arr11.filter(function(number){
    return number > 0; // проверяет на правду, если правда, то перезаписывает в новый массив, ложь просто игнорирует.
});

console.log(positiveArr); // 1, 2, 3

// map: он трансформирует массив.

var names = ['HTML', 'CSS', 'Самы популярный язык JavaScript'];

var nameLengths = names.map(function(name){
    return name.length;
});

console.log(nameLengths); // 4, 3, 31

// every \ some

var arr12 = [1, -1, 2, -2, 3];

function isPositive(number){
    return number > 0;
}

console.log( arr12.every(isPositive) ); // false

console.log( arr12.some(isPositive) ); // true

// reduce \ reduceRight На каждой итерации будут сохраняться данные и добавляться.

var arr13 = [1, 2, 3, 4, 5];

var result = arr13.reduce(function(sum, current){
    return sum + current;
}, 0);

console.log(result);// 15
/*
1 - sum = 0 current = 1
2 - sum = 0+1 current = 2
3 - sum = 0+1+2 current = 3
4 - sum = 0+1+2+3 current = 4
5 - sum = 0+1+2+3+4 current = 5
return = 10 + 5
*/


// arguments - псевдомассив

function getPhone(name){ // перегрузка функции.
    var address = arguments[i];
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
        console.log( + ' ' + arguments[i]);
    }
}

getPhone('name', 'address', 'wewwre');
getPhone('Петров', 'Ваня', 'Петр', 'Владимир');
