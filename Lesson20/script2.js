"use strict"

/*
function sumTo(n){
    
    var a = 0;
    for (var i = 1; i <= n; i++) {
        a += i;
      }
      return a;
}

console.log(sumTo(100));
*/
/*
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  alert( sumTo(3) );
  */
//1. Задание: Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. 
// Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число 
// получается как сумма двух предыдущих.Первые два числа равны 1, затем 2(1+1), 
// затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Главное условие, чтобы функция работала быстро.


var a = 1;
var b = 1;
var s = a + b;

function fib(n){

  var sum = 0;
  var a = 1;
  var b = 1;
    for (var i = 1; i <= n; i++) {
        sum = a-1 + b;
        console.log(sum);
      }
      return a;
}

fib(3);