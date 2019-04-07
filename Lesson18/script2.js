// Циклы:

console.log('while-----');

var i = 0;
while( i < 3 ){

    console.log(i);
    i++;

}

console.log('while обратно-----');

while( i ){

    console.log(i);
    i--;

}

console.log('do-----');

var i = 0;
do {
    console.log(i);
    i++;
} while( i < 3);

console.log('for-----');

var i;

for(i = 0; i < 3; i++) {
    console.log(i);
}

// можно и так
for(var i = 0; i < 3; i++) {
    console.log(i);
}

// можно и так
var i;

for( ; i < 3; i++) {
    console.log(i);
}

// можно и так
var i;

for( ; i < 3; ) {
    console.log();
    i++;
}


console.log('-----------------------------------');
/*
var sum = 0;
while (true){
    var value = +prompt('Введите значение', '');

    if(!value) {
        break;
    }

    sum += value;
}

console.log('Сумма:' + sum);
*/
console.log('-----------------------------------');

for(var i = 0; i < 10; i++){
    if(i%2 == 0){
        continue;
    }
    console.log(i);
}