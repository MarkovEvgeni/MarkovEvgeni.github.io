document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    //
    //Third party components
    //

    //
    //Custom components
    //
    
    var body = document.body;
    
    // Опредлим переменные которые будут содержать центральную точку координат курсора, и текущее положение курсора.
    
    var initialX;
    
    var initialY;
    
    var mouseX;
    
    var mouseY;
    
    // Для начала создадим функцию которая будет определять центральную точку системы координат курсора как центр элемента body. Эту функцию необходимо вызывать при загрузке страницы, а затем, при каждом изменении размера viewport.
    
    function setCentralCoordinates(elem) {
        initialX = elem.offsetWidth / 2;
        initialY = elem.offsetHeight / 2;
    };
    
    setCentralCoordinates(body);
    
    // Создадим функцию, которая будет присваивать переменым mouseX и mouseY текущее положение курсора относительно документа.
    
    var shiftX;
    var shiftY;
    
    function receiveCoordinates(event) {
        mouseX = initialX -event.pageX;
        mouseY = initialY -event.pageY;
        shiftX = Math.round(mouseX/initialX * (200)) + '%';
        shiftY = Math.round(mouseY/initialY * (200)) + '%';
    };
    
    // Определим элемент на который перемещения курсора будут влиять.
    
    var shadow = document.getElementsByClassName('shadow')[0];

    body.addEventListener('click', function() {
//         shadow.style.transform = 'translateX(100px)';
        setShadowShift(shiftX, shiftY);
    });

    // Назначим движению мыши внутри body функцию которая будет вызывать функцию получения координат курсора. Для экономии ресурсов браузера сделаем таймаут между вызовами функции.
    
    var ReceiveCoordinatesTimeout = 100;
    
    var throttled = false;
    
    body.addEventListener('mousemove', function() {
         if (!throttled) {
             receiveCoordinates(event);
             setShadowShift(shiftX, shiftY);
             throttled = true;
             setTimeout(function() {
                 throttled = false;
             }, ReceiveCoordinatesTimeout);
         }
    });
    
    //Определяем функцию которая будет передавать координаты элементу, который мы будем перемещать движением курсора.
    
    var shift;
    
    function setShadowShift(shiftX, shiftY) {
        shift = 'translateX(' + shiftX + ') translateY(' + shiftY + ')';
        shadow.style.transform = shift;
    }
    
    
    

    //
    //Custom components typescript
    //

    //= ts/tscript.js

});