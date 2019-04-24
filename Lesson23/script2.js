"use strict";

function makeCounter(){
    // lexical = currentCount: underfined
    var currentCount = 0;

    // lexical = currentCount = 1
    return function(){
        
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

// var counter2 = makeCounter();
// alert(counter2);


