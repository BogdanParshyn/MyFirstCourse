"use script";

// $. или jQuery. для обращение к библиотеке.

jQuery('#box').clone().appendTo('.inner'); // передаем селектор и через точку обращаемся к функции.

$('#box').on('click', function(){
    alert('Hello World');
});

slic