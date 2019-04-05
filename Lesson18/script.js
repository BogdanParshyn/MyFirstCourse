"use strict";

console.log('b' > 'a'); // true

console.log('Банан' > 'Анна'); // true

console.log('2' > 1); // true

console.log('0' == false); // true

console.log('' == false); // true

console.log('0' === false); // false

console.log('0' !== false); // true

console.log(null == undefined); // true / не назначено / неопределено. Они равны только между собой.

console.log(null == undefined); // true

console.log(null > 0); // false

console.log(null >= 0); // true

console.log(null <= 0); // true


console.log(null <='Привет'); // true

var result = prompt('Введи привет', 'Пока');
console.log(result);

result = confirm('Сейчас 2019');

var year = prompt('Какой сейчас год?');

if(year !== 2019){

    alert('Не верно!');

}

if(year == 2019){

    alert('Yes');

}else{

    alert('Not');

}




if(year < 2019){

    console.log('Чуть больше')

}else if(year > 2019){

    console.log('Чуть меньше')

}else{

    console.log('Верно')
}



var age = 13;
var access= (age > 14) ? true : false;

var message = (age < 3) ? 'Hello Baby' :
(age < 18) ? 'Hello' :
(age < 100) ? 'Hi' :
'When age big';
console.log(message);


// || - if - Или:
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

if(age < 3 || age > 100){ //false

}

if(age < 3 || age > 100 || age > 50 || age > 80){ //false

}else{

}

if(age < 3 || age > 100 || age > 50 || age > 12){ //true

}else{
    
}


var x;
true || (x = 1);
alert(x);

var x;
false || (x = 1);
alert(x);

// if запинается на true.


// И:
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

var hours = 12;
var minute = 30;

if(hours == 12 && minute == 30){
    alert('Время 12:30');
}

// И запинается на false.

console.log(1 && 5 && 4); // в этом случае выводит на экран последнее значение.


// У И больше приоритет чем у ИЛИ

// Оператор НЕ - !

var value;
var result = !value; // false

console.log(result); // true


value = true;
var result = !value;

console.log(result); // false


if(!value){

}

console.log( !! 'привет'); // true

console.log( !!null); // false

alert( true + "test" ); // "truetest"

alert( "123" + undefined ); // "123undefined"

var number1 = '10'
Number(number1); // преобразует в число с стринга
number1 = +number1; // преобразует в число с стринга



console.log(+'     \n 123 \n \n '); // 123

console.log( +true); // 1
console.log( +false); // 0

console.log( '\n' == false); // true
console.log( '\n' == true); // false
console.log( '1' == true); // true