"use script";
// Самодостаточный закрытый функционал, у которого закрыты все переменные внутри.
(function(){
    
}());
//Или так:
+function(){
    
}();
//Или так:
!function(){
    console.log('Привет');
}();

// ========================================================================================= //

var car = {
    'name': 'ford',
    'model': 'mustang',
    'Engine': 2.0,
    'wheels': 4,
    'getSpeed': function(){
        console.log('200 km/n');
    },
    'setRotateRight': function(deg){
        console.log('Повернуть в право на ' + deg + ' градусов');
    },
    'getMaxSpeed': function(){
        console.log (this.Engine * this.wheels * 1000 );
    }
};

car.setRotateRight(45);

car.getFuel = function(){
    console.log('80%');
};

car.getFuel();

car.getMaxSpeed(); // Обращеник к текущему объекту внутри себя.

//

var user = {
    name: 'Василий',
    sayHi: function(){
        console.log(this.name);
    }
};

var admin = user;

user = null;

admin.sayHi();

//



var user2 = {
    name: 'Василий',

    sayHi: function(){
        showName(this);
    }
};

function showName(nameObj){
    console.log(nameObj.name);
}

user2.sayHi();

// ===

function func(name, age){
    alert('Привет' + name + age);
}

// setTimeout(func, 2000);
setTimeout(func, 2000, ' Василий', ' 20'); // IE 9+

setTimeout(alert('Привwет!!'), 3000); // Но так лучше не делать, это старый функционал.

setTimeout(function(){
    console.log('Пока');
}
, 3000);

// 
var timerId1 = setTimeout(func, 2000, ' Василий', ' 20');

var timerId2 = setTimeout(function(){
    console.log('Пока');
}
, 3000);

clearTimeout(timerId2);

console.log(timerId1);
console.log(timerId2);

// ==================================================================================== //

var i = 0;
var timerId3 = setInterval(function(){
    console.log(i++);
}, 1000);

setTimeout(function(){
    clearInterval(timerId3);
    console.log('стоп');
}, 5000);