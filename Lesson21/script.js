"use strict"

// str.length

var str = 'fsd';
console.log( str.length );

var str = 'Я пРограммист';
console.log( str.charAt(0) ); // Я - выводит первую букву слова
console.log( str.charAt(str.length-1) ); // т

console.log( str[0] ); // Я - выводит первую букву слова

var str2 = str[0] + str[1] + str[2]; // Но лучше использовать for

console.log( str[3].toLowerCase() );// Регистр букв, нижний

console.log( str[3].toUpperCase() );// Регистр букв, верхний

//

console.log( str.indexOf('м', 2) ); // 8 - Ищим букву "м" и укажет порядковый ее номер, ищет сначала.

console.log( str.lastIndexOf('м', str.length) ); // 12 - Ищим букву "м" и укажет порядковый ее номер, ищет сконца.

//

var target = 'м';
var pos = 0;

while(true) {
    var foundPos = str.indexOf(target, pos);
    if(foundPos == -1) break;

    console.log(foundPos);
    pos = foundPos + 1;
}

//

console.log( str.substring(0, 5) ); // Я пРо - вытягивает кусок строки.

console.log( str.substr(3, 4) ); // Рогр - начнет с третего и покажет 4 символа.

console.log( str.slice(2, 5) ); // С первой начинает, и покажет 


console.log( 'testme'.substring(-2) ); 
console.log( 'testme'.slice(-2) );

//

var str3 = '';

for(var i = 1034; i <= 1113; i++){
    str3 += String.fromCharCode(i);
}

// alert(str3);

console.log( 'абрикос'.charCodeAt(0) ); // выводит порядковый номер в таблице Юникода.

// 

var str = "Ёлки";

alert( str.localeCompare("Яблони") ); // -1

var str = "Ёлки";

alert( str.localeCompare("Ёлки") ); // -1

// 

//МАССИВЫ:

var obj = {}; // Создали объект, пустой.
obj.name = 'Андрей'; //.name это имя объекта.
obj.age = 25; //.age это имя объекта.

console.log(obj.name);
console.log(obj.name + ' - ' + obj.age );

delete obj.age; //Удаляем и значение и название
console.log(obj.age);

//

var obj2 = {
    'name': 'Андрей',
    'age': '25',
    'weight': undefined,
    'in': 123 // length
};

if('name' in obj2){
    console.log('Такое имя есть'); // это спосоп проверки, если такое свойство.

    
}

console.log( obj2.weight ); // undefined

if(obj2.weight === undefined){
    
}

// 

obj2.name = 'Вася'; // значение после точки называется ключь. Используется, когда с объектами определились.
obj2['name'] = 'Вася'; // свойства объектов можно менять. Этот способ более гибкий. Изначально не знаешь кеи и объекты.

var key = 'name';
obj2[key] = 'Вася';

obj2.lastname = 'Петров';
obj2['lastname'] = 'Петров'; // добавили новое свойство и назначили его.

//

var obj4 = {
    'name': '',
    'phone': '',
    'items': {
        1 : {
            'item name' : '',
            'price' : 100
        },
        2 : {

        }

    },
    'time delivery' : '10:00'
};

//

var obj4 = {
    'name': '',
    'phone': '',
    'items': {
        1 : {
            'item name' : '',
            'price' : 100
        },
        2 : {

        }

    },
    'time delivery' : function getPrice(){ console.log(1111) }
};

obj4['time delivery']();

//

obj4.items['1'].price;
obj4['items']['1']['price']; // обращение к объекту, путь.

//

for(var key in obj4){ // Мы передаем объект, а он берет и перебирает
    console.log( 'Ключ: ' + key + ' Значение: ' + obj4[key] );
    //counter++;
}

//

var codes = {
    '7': 'Россия',
    '38': 'Украина',
    '1': 'США'
}; // 1 7 38

var codes = {
    '+7': 'Россия',
    '+38': 'Украина',
    '+1': 'США'
}; // +7 +38 +1

var codes2 = codes; // Сюда запишеться ссылка, а не значение.

codes2['7'] = 'Бразилия';

alert(codes['7']);
//

var item1 = 100; //100
var item2 = item1; //100

//

// КЛОНИРОВАНИЕ ОБЪЕКТОВ

var clone = {};

for (var key in codes){

    clone[key] = codes[key];
}

//

var time = {
    microseconds: 123456
};

console.log(time);
time.microseconds++
console.log(time);
time.microseconds++
console.log(time);
time.microseconds++

//

var arr = [];

var arr = ['Яблоко', 'Апельсин', 'Слива'];


console.log( arr[0] ); // Яблоко.

arr[0] = 'Груша';

arr[3] = 'Мандарин';

console.log( arr.length ); // 4

console.log( arr ); // Выводи полностью значение массива

var arr2 = [3, 'Вася', { name: 'Петр'}, true];


arr2[1000] = 'привет'; // Используется очень редко, по надобности.


arr2.pop(); // удалится последний элемент.

arr.push('Груша'); // добавит в конец элемент, который мы указали.
arr[arr.length] = 'Груша'; // тоже, что и выше.

arr.shift('Груша'); // Убирает єлемент с начала.
arr.unshift('Груша'); // Добавит в начало элемент. arr.unshift('Груша', 'Яблоко', 'Кукуруза');

// Массив это тоже объект.

arr.age = 25; // Так нельзя делать.

// Методы pop и push работают быстро
// Методы shift и unshift работают медленно.

// 'for in' в массивах работает очень медленно, потому лучше его не использовать. 
// Лучше использовать 'for'

