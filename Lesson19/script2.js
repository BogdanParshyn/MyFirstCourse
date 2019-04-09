"use strict"

/* ФУНКЦИИ:

alert();
alert('', '');

console.log();
console.log('');

prompt();
*/

function showMessage(){
    console.log('Сообщение');
}

showMessage(); // Таким образом мы вызываем функцию. 
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();
showMessage();

// Главная цель функции - избавиться от лишнего кода.
// ============================

function showMessage(){
    var message = 'Привет, мир'; // Это локальная переменная, она работает только в пределах функции.

    console.log('Сообщение');
}

showMessage();

// ============================

var message = ''; // Это глобальная переменная. Они отвечают за параметры, ну примером за настройки приложения.

function showMessage(){
    var message = 'Привет, мир'; // Это локальная переменная, она работает только в пределах функции. В нутри функции она уже назначена на любом этапе.

    console.log('Сообщение');
}

showMessage();

// ============================

var userName = 'Вася';

function showMessage2() {
    userName = 'Петя';

    var message = 'Привет, я ' + userName;

    console.log(message);
}

showMessage2();

alert( userName );

//

var userName = 'Вася';

function showMessage2() {
    userName = 'Петя';

    var message = 'Привет, я ' + userName;

    console.log(message);
}

alert( userName );

showMessage2();

//

var userName = 'Вася';

function showMessage2() {
    var userName = 'Петя'; // Если мы через Вар заведем переменную такую же, как и глобальная, то локальная сработает внутри функции и не будет выходить за нее, как без Вар.

    var message = 'Привет, я ' + userName;

    console.log(message);
}

showMessage2();

alert( userName );




// ПАРАМЕТРЫ:

function showMessage3(from, text) { // from и text это два параметра, они по сути переменные.

    from = '**' + from + '**';

    console.log(from + ':' + text);
}

var from = 'Миша';
showMessage3(from, 'Привет');

console.log( from );


/////

function showMessage3(from, text2, text) {
    if(text === undefined){
        text = 'текст не введен';
    }

    if(text2 === undefined){
        text2 = 'текст не введен';
    }

    from = '**' + from + '**';

    console.log(from + ':' + text);
}

var from = 'Миша';

showMessage3(from, 'Привет');

showMessage3(from, 'Привет2', 'Привет');
