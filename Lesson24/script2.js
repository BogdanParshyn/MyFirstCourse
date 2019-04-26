"use script";

/*

// Это рекурсивная конструкция и она самая надежная.
var timerId4 = setTimeout(function tick(){
    console.log('тик');
    timerId4 = setTimeout(tick, 2000);
}, 2000);
//'
var i = 0;
var timerId41 = setTimeout(function tick(){
    console.log(i++);
    timerId41 = setTimeout(tick, 2000);
}, 2000);
//

*/

var i = 0;
var timerId41 = setTimeout(function tick(){

    if(i%2){
        console.log('так');
    } else {
        console.log('тик');
    }

    i++
    
    timerId41 = setTimeout(tick, 1000);
}, 2000);

timerId4 = null;

