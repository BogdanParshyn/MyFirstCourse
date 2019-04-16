/*alert

alert('Hello');
*/ // ===============================================================================

/*promt 

var a = 1;

// result = prompt(1, 1);

console.log(a + +prompt(1, 1))

result = prompt(1, 'default');
*/ // ===============================================================================

/* confirm

var result = confirm('question');

alert(result);
*/ // ===============================================================================

// if
/*
var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

if (year != 2011) {
    alert( 'А вот..' );
    alert( '..и неправильно!' );
    alert( 'А вот..' );
    alert( '..и неправильно!' );
  }

  if (year == 2011) {
    alert( 'good' );
  } else {
      alert('no')
  }
  

var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

if (year < 2011) {
  alert( 'Это слишком рано..' );
} else if (year > 2011) {
  alert( 'Это поздновато..' );
} else {
  alert( 'Да, точно в этом году!' );
}


alert( ' ' || 1 && 1  ); // 5

*/

// Циклы:

/*var i = 7;
while (i >= 7 && i < 20) {
  console.log( i );
  i++;
  
}

console.log(i);
*/

/*var i = 0;

do {
    console.log( i );
    i++;
  } while (i < 3);
*/

/*
var i;

for (i = 0; i < 3; i++) {
    alert( i );
}
*/


var sum = 0;

while (true) {

  var value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );

var s = 1;

sum += s;

alert(sum);