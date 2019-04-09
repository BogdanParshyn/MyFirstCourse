/*
function calculate(num1, num2){
    
    var a = num1 * num2;
    alert(a);
}

calculate(10, 20);

calculate(2, 5);

calculate(10, 3);

calculate();

//_==================== // Значения по умолчанию.

function calculate(num1, num2){
    
    if(num1 === undefined);{
        num1 = 1;
    }

    if(num2 === undefined);{
        num2 = 1;
    }  

    var a = +num1 * +num2;
    alert(a);
}

calculate(10, 20);

//_==================== // Значения по умолчанию 2.

function calculate(num1, num2, showM){
    
    if(num1 === undefined);{
        num1 = 1;
    }

    num2 = num2 || 'текст не передан';

    var a = +num1 * +num2;
    //alert(a);

    if(showM){
        alert(a);
    }
}

calculate(10, 20, true);

calculate(10, 20, true, 2, 'dfgd');


//_==================== // Функции возврат знаения:

function calcD(a, b, c){
    return b + b - 4 + a * c; // Он работает, как брейк, останавливает.
}

var text = calcD(-4, 2, 1);

console.log(text);

//_==================== //

function calcD(a, b, c){
    if(b>2){
        return b + b - 4 + a * c; // Он работает, как брейк, останавливает.
    }else{
        return b + b + 4 + a * c; // Он работает, как брейк, останавливает.
    }

}

var text = calcD(-4, 2, 1);

console.log(text);


//_==================== //


var funcCalc = calcD; // Тело функции записуем в переменную.

console.log(funcCalc);

//_==================== //
calcD = null;

var text2 = funcCalc(-4, 2, 1); 

console.log(text2);

//_==================== //

var calcD2 = function(a, b, c){ // Функциональное выражение.

    if(b>2){
        return;
    }else{
        return b+b+4+a*c;
    }
};









//_==================== // Это записано в потоке. Функция всплывает по коду. При обычном написании кода.

sayHi('Вася');

function sayHi(name){
    console.log(namt);
}

//_==================== // Функция еще не объявлена. Используется, когда пишеться большой закрытый модуль.

sayHi('Вася');

var sayHi = function(name){
    console.log(namt);
};
//_==================== //
*/



var age = prompt('Сколько Вам лет?');

var sayHi;

if(age >= 10){
    sayHi = function(){
        alert('Заходите');
    };
}else{
    sayHi = function(){
        alert('Всемь нельзя');
    };
}

sayHi();

//---------------------------------------------// Это закрытая и к ней с наружи нет доступа, а в верхней наоборот.

var age = prompt('Сколько Вам лет?');

var sayHi;

if(age >= 10){
    function sayHi(){
        alert('Заходите');
    }
}else{
    function sayHi(){
        alert('Всемь нельзя');
    }
}

sayHi();