"use ctrict";

var now = new Date();

console.log(now);

var jan02_1970 = new Date(3600 * 24 *1000); // milliseconds

console.log(jan02_1970); // 01 января 1970

var date1 = new Date(2011, 0, 1, 0, 0, 0, 0);

// year month date hours minutes seconds ms

console.log(date1);
console.group(date1);

//

var fullDate = new Date();
var fullDate = fullDate.getFullYear();
console.log(fullDate); // 2019

//  getMonth() - от 0  до 11
// getDate() - от 1 до 31
// getHours() - от 1 до 24 \ getMinutes() \ getSeconds() \ getMilliseconds()

// getYear() - возвращает только две последнии цифры, пример 19

// getDay() - от 0 до 6 / 0 это Воскресенье, 6 это Суббота

var date2 = new Date();

console.log( date2.getHours() );
console.log( date2.getUTCHours() ); // +0

console.log( date2.getTime() ); // +0 выводит количество миллисикунд

console.log( date2.getTimezoneOffset() ); // в минутах возвращает между нулевым временем и местным, у нас +3

// Установка компонентов даты:

date2.setFullYear(2000); // принимает год, месяц и день

console.log( date2.setFullYear() );

/*
setMonth(month, date);
setDate(date);
setHours(hours, min, sec, ms);
setMinutes(min, sec, ms);
setSeconds(sec, ms);
setMilliseconds(ms);
setTime(milliseconds);
...
Все ваарианты имеют аналогичные функции с приставкой UTC
setUTCMounth();
*/

// Автоисправление дат:

var date3 = new Date(2013, 0 ,32);

console.log(date3);

var date4 = date3.setDate(date2.getDate() + 3);
console.log(date4);

//

date3.setDate(date3.getDate() + 3);
console.log(date3);

//

date3.setDate(1); // 1 число месяца

date3.setDate(0); // последнее число предыдущего месяца

console.log(+new Date);

//

console.log( +new Date - date3 );

// самостоятельно изучить Бенч Маркин - используется для расчета времени работы процесса.
//
var date3 = new Date(2013, 0 ,32);
var options = {
    era: 'long',
    year: 'numeric',
    mounth: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    seconds: 'numeric',

}
console.log( date3.toLocaleString('en-US', options) );
console.log( date3.toLocaleString('ru', options) );

// YYYY-MM-DOTHH:mm:ss.sssZ
// 2012-01-26T13:51:50.435Z
// 2012-01-26T13:51:50.435+03:00 - это для Safari

var date4 = Date.now(); // но можно и так +new Date() , но оно работает дольше
console.log(date4);


var a = 5; // Это глобальная переменная.
console.log( window.a );

function func(){

}

console.log( window.func ); 

// window - Замыкание, замкнутое пространство, в котором все скрипты штмл-я,
// но он касается только к переменным.

//

function func(name){
    // На этапе создания функции также создается объект:
    // LexicalEnvironment = {'name': 'undefined, 'arr': undefined}
    var arr = name;
    // после отработки функции все переменные автоматически удаляются.
}

func('Вася');
// Когда вы обращаетесь к переменной, то она сразу пытается найти ее в лексической областии,
// а потом только в глобальной.
// В лексической хранится ссылка на этот объект, который хранится в глобальной (в виндов)

// 

var phrase = 'Привет';
function sayHi(name){
    console.log(phrase + ',' + name);
}

sayHi('Вася');

phrase = 'Пока';

sayHi('Вася');

// Внутри функции можно создавать внутренние функции:

function sayHiBye(firstName, lastName){
    console.log('привет' + getFullName());
    console.log('пока' + getFullName());

    function getFullName(){
        return firstName + '' + lastName;
    }
}

sayHiBye('Вася', 'Петров');
// Изнутри функции можем обратится, а внутрь функции нет, когда функция в функции.

//

function makeCounter(){
    // lexical = currentCount: underfined
    var currentCount = 1;

    // lexical = currentCount = 1
    return function(){
        console.log("function");
        return currentCount++;
    }
}

var counter = makeCounter(); // (+)

console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );

var counter2 = makeCounter();
alert(counter2);
