"use strict"

/*

var params = 'age, name';
var code = 'console.log(age + " - " + name);';
var sum = new Function(params, code);

sum(25, 'Валера');

console.log(sum);

//Рекурсия это когда функция вызывает сама себя.
var x = 2;
var n = 4;
function pow(x, n){
    if(n != 1){
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

console.log( pow(x, n) );
// 2 * pow(2, 3); 8 = 16 
// 2 * pow(2, 2); 4 = 8
// 2 * pow(2, 1); 2 = 4
// 2
// Это контексты. А все это стэк

// Любая рекурсия может быть переделана в цикл.

function pow(x, n){
        var result = x;
        for(var i = 1; i < n; i++){
            result *= x
        }
        return result
}

// Стэки используют для работы процессоров.


var f = function(age){};

var f = function sayHi(name){};

//==================================================

function f(n){
    return n ? n * f(n-1) : 1;
}

console.log( f(5) );

var g = f;
f = null;

console.log( g(5) );
//= будет ошибка.

var f = function factorial(n){
    return n ? n * factorial(n-1) : 1;
}

console.log( f(5) );

var g = f;
f = null;

console.log( g(5) );


//==========================================================

// Свойства - , когда обращаешься к переменным или к тексту.
// .length - это свойство.

console.log( 'Привет , мир'.length ); // точку желательно писать вплотную.

// Метод.
// .toUpperCase() - это методы.

console.log( 'Виктор'.toUpperCase() );

// Метод num.toFixed(n)

var n = 200.333333;
console.log( n.toFixed(2) ); // Этот метод округляет после запятой.

//====================================

// NaN
console.log(isNaN(0/0)); // true

// NaN - является прилипчивым, что с ним не делай, все равно получим NaN.

//====================================

isFinite(10); // Это проверка чисел на бесканечность и NaN, или на их работу - true/false.

function isNumeric(n) {

    return !isNaN(parseFloat(n)) && isFinite(n); // Возвращает либо true либо false.
    
    }

//====================================

// Это преобразование в 16-тиричную систему

var n = 255;
console.log( n.toString(16) ); // 16-тиричная.

var n = 1234567890;
console.log( n.toString(36) ); // 36-тиричная.

//====================================

// Округление.

Math.floor(3.1); // 3
Math.ceil(3.1); // 4
Math.round(3.1); // 3

n = 3.456;
console.log( Math.round(n * 100) / 100); // 3.456 = 345.6 = 346 = 3.46


n = 12.34;

console.log( n.toFixed(1) ); // 12.3
console.log( +n.toFixed(1) ); // 12.34000
// toFixed возвращает строку



//=======================

alert(0.1 + 0.2 == 0.3);

alert( 0.1 + 0.2 );

alert( 0.1.toFixed(20) );

alert( (0.1 * 10 + 0.2 *10) / 10 );


var result = 0.1 + 0.2;

console.log( +result.toFixed(10) ); // 0.3

alert( 9999999999999999 );

console.log( Math.random() );




function randomThis(a, b){
    return to( (b - a)*Math.random() + a ).toFixed();
}

console.log(randomThis(0, 1000));



function randomThis(a, b){
    return to( (b - a)*Math.random() + a ).toFixed();
}


console.log(randomThis(0, 1000));

var number = 10000000000000
console.log(number.toLocaleString());

*/


/*

\b - backspace
\n - перенос строки
\r - абзац
\t - tab



alert('привет \n  Андрей');

alert('привет \n \r Андрей');

alert('привет \r Андрей');

alert('привет \t Андрей');

// 

var str = 'ПроГраммирование';
console.log(str.charAt(3)); // если нет значения, то пустая строка.

console.log(str[3]); // если нет значения, андефайнт.
*/



function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

function showOk() {
  alert( "Вы согласились." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование
ask("Вы согласны?", showOk, showCancel);


