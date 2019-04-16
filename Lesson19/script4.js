/*var a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В ' );
    alert( 'т' );
    alert( 'о' );
    alert( 'ч' );
    alert( 'к' );
    alert( 'y' );
    alert( '!' );
    alert( ')))' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( 'Я таких значений не знаю' );
}
*/

/*
var a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
  case 4:
    alert( 'В точку!' );
  case 5:
    alert( 'Перебор' );
  default:
    alert( 'Я таких значений не знаю' );
}
*/

/*
var a = 2+3;

switch (a) {
  case 4:
    alert('Верно!');
    break;

  case 3:                    // (*)
  case 5:                    // (**)
    alert('Неверно!');
    alert('Немного ошиблись, бывает.');
    break;

  default:
    alert('Странный результат, очень странный');
}
*/

/*
var arg = prompt("Введите arg?")
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится' );

  default:
    alert('Неизвестное значение: ' + arg)
}
*/

/*
var userName = 'Вася';

function showMessage() {
  var message = 'Привет, я ' + userName;
  alert(message);
}

showMessage();
*/

var userName = 'Вася';

function showMessage() {
  userName = 'Петя'; // (1) присвоение во внешнюю переменную

  var message = 'Привет, я ' + userName;
  alert( message );
}

showMessage();

alert( userName ); // Петя, значение внешней переменной изменено функцией