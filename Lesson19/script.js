"use strict"

var х = 1;

switch(x){
    case 1: 
        console.log('Верно');
        break;
    case 2:
        console.log('Неверно');
        break;
    case 3:
        console.log('Неверно');
        break;
    default:
        console.log('По умолчанию');
        break;       
}
// У свичей идет только строгое сравнение.
// Как только подходт к правильному значению, то брейк остановит цикл.

var y = 'Dog';

switch (y) {
    case 'Cat': 
        console.log('Неверно');
        break;
    case 43423432:
        console.log('Неверно');
        break;
    case 'Dog':
        console.log('Верно');
        break;
    default:
        console.log('По умолчанию');
        break;       
}

switch (43423432) {
    case 'Cat': 
        console.log('Неверно');
        break;
    case 43423432:
        console.log('Неверно');
        
    case 'Dog':
        console.log('Верно');
        
    default:
        console.log('По умолчанию');
               
}

var month = 4;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
    console.log('По умолчанию');
    break;  
}


var a = 1;
var b = 0;

switch (a) {
    case b + 1:
        console.log(1);
        break;
    default:
        console.log('Other');
}

