document.addEventListener('DOMContentLoaded', function () {
    
    "use strict";
    
    //=============================================   
    //|Операции с панелью кнопок и слоями телефона|
    //=============================================    

    //    Сначала создадим связь между каждой кнопкой, и каждым экраном. Связь устанавливается по номеру, который мы берем из класса с помощью регулярных выражений.

    var labelButtons = $('.what_we_do .label');

    labelButtons.each(function () {
        var classes = $(this).attr('class');
        var classNumber = classes.match(/[0-9]/)[0];
        var matchingScreen = ".matching-screen-" + classNumber;
        var matchingScreen = $(matchingScreen)[0];
        var matchingScreenJQ = $(matchingScreen);

        var self = this;

    //      Передаем контекст this, чтобы клик по экрану вызывал клик по кнопке.

        matchingScreenJQ.click(function () {
            var g = changePosition.bind(self);
            g();
        });

        $(this).hover(hoverEffect, noHoverEffect);
        $(this).click(changePosition);
    });


    //    Добавим функции, которые будут создавать эффект наведения на соответствующий экран. Сам эффект прописан в CSS класс 'a.special'

        function hoverEffect () {
            var classes = $(this).attr('class');
            var classNumber = classes.match(/[0-9]/)[0];
            var matchingScreen = ".matching-screen-" + classNumber;
            var matchingScreen = $(matchingScreen).addClass('special');
        }

        function noHoverEffect () {
            var classes = $(this).attr('class');
            var classNumber = classes.match(/[0-9]/)[0];
            var matchingScreen = ".matching-screen-" + classNumber;
            var matchingScreen = $(matchingScreen).removeClass('special');
        }


    //  Создадим функцию, которая будет перемещать экраны относительно друг друга посредством изменения классов.    

     function changePosition () {


    //     =================Меняем порядок экранов==========================

         var classes = $(this).attr('class');
         var classNumber = classes.match(/[0-9]/)[0];

         var newPosition = ".matching-screen-" + classNumber;
         $(newPosition).removeClass('special');
         var newPositionClass = "matching-screen-" + classNumber;
         var thisScreen = $(newPosition);
         thisScreen.removeClass(newPositionClass);
         var thisScreenClasses = $(thisScreen).attr('class');
         var thisScreenPositionClass = thisScreenClasses.match(/[0-9]/)[0];
         thisScreen.addClass(newPositionClass);
         var newPositionClass = "screen-" + thisScreenPositionClass;

    //     В данном случае 5 экранов поэтому экран который наверху будет с классом 5
         var topScreen = $('.screen-1');

         thisScreen.removeClass(newPositionClass);
         topScreen.removeClass('screen-1');

         thisScreen.addClass('screen-1');
         topScreen.addClass(newPositionClass);

    //     ===============Меняем положение соответствующих кнопок=======================

         var currentButtonPosition = ".label-" + classNumber;      
         var currentButtonPositionClass = "label-" + classNumber;

         var topButton = $('.top-label');

         var topButtonClasses = topButton.attr('class');
         var topButtonClassNumber = topButtonClasses.match(/[0-9]/)[0];
         var topButtonClass = "label-" + topButtonClassNumber;

         var currentButton = $(currentButtonPosition);

         var topButtonDesc = topButton.html();
         var currentButtonDesc = currentButton.html();

         topButton.addClass('emerge_label');
         currentButton.addClass('emerge_label');

         setTimeout(function () {
             topButton.removeClass(topButtonClass);
             topButton.addClass(currentButtonPositionClass);

             currentButton.removeClass(currentButtonPositionClass);
             currentButton.addClass(topButtonClass);

             setTimeout(function() {
                currentButton.removeClass('emerge_label');
                topButton.removeClass('emerge_label'); 
             }, 650);

             topButton.html(currentButtonDesc);
             currentButton.html(topButtonDesc);

             var labelButtons = $('.label');

             labelButtons.each(function () {
                 $(this).unbind();

                 var classes = $(this).attr('class');
                 var classNumber = classes.match(/[0-9]/)[0];
                 var matchingScreen = ".matching-screen-" + classNumber;
                 var matchingScreen = $(matchingScreen)[0];
                 var matchingScreenJQ = $(matchingScreen);
                 matchingScreenJQ.unbind();

                 var self = this;

                 matchingScreenJQ.click(function () {
                     var g = changePosition.bind(self);
                     g();
                 });

                 $(this).hover(hoverEffect, noHoverEffect);
                 $(this).click(changePosition);
             })      
         }, 650);
    }

//    Вращение элемента при перемещении курсора мыши
       
//    Находим объект, который будет подвержен вращению.
    
    var rotatedObject = $('.what_we_do .model');
    
//    Определяем переменные, которые будут определять угол вращения объекта. Значения по умолчанию указаны исходя из css свойств после завершения анимации модели.
    
//    Вращение вокруг оси абсцисс.
    var rotateAngleX = 90;
    
//    Вращение вокруг оси ординат.
    var rotateAngleY = 0;
    
//    Вращение вокруг оси апликат.
    var rotateAngleZ = 30;
    
//    Определяем функцию-контроллер которая будет передавать углы вращения объекту.
    
    function rotateObject() {
        
        var angleX = rotateAngleX + 'deg';
        var angleY = rotateAngleY + 'deg';
        var angleZ = rotateAngleZ + 'deg';
        
        rotatedObject.css({
            transform: 'translateY(50px) rotateX(' + angleX + ') rotateZ(' + angleZ + ')',
            MozTransform: 'translateY(50px) rotateX(' + angleX + ') rotateZ(' + angleZ + ')',
            WebkitTransform: 'translateY(50px) rotateX(' + angleX + ') rotateZ(' + angleZ + ')',
            msTransform: 'translateY(50px) rotateX(' + angleX + ') rotateZ(' + angleZ + ')',
            WebkitTransition: 'transform 0.1s linear',
            MozTransition: 'transform 0.1s linear',
            transition: 'transform 0.1s linear'
        });
    };
    
    
    
    $('.what_we_do .content').mouseenter(receiveCoordinates);
    $('.what_we_do .content').mouseleave(function () {
        console.log('mouseleave');
        $('.what_we_do .content').unbind("mousemove");
    });
    
//    Определяем модель которая будет перезаписывать переменные определяющие угол вращения.
    
    function receiveCoordinates () {
        
        setTimeout(function () {
        //    Задаем начальные координаты для вычислений. Сейчас это точка - середина окна браузера.
            
                var initialXCoordinate = document.documentElement.clientWidth / 2;
                var initialYCoordinate = document.documentElement.clientHeight / 2;


        //     Привязываем изменение переменных к перемещению мыши.

                $('.content .scene').mousemove(function() {
                    
//                    event = event || window.event;
//                    Для работы поворота в Mozilla нужно добавить event в качестве аргумента функции и раскомментировать строку выше
                    
                    var event = window.event;

                    var biasX = event.clientX - initialXCoordinate;
                    var biasY = event.clientY - initialYCoordinate;

                    var angleBiasX = -biasY / 500;
                    var angleBiasZ = -biasX / 500;
                    
                    angleBiasX = Math.round(angleBiasX * 10)/10;
                    angleBiasZ = Math.round(angleBiasZ * 10)/10;

        //      Определим ограничения для вращения модели           
        //      Вращение в горизонтальной плоскости от 50 до 90 градусов

                    var angleRestrictionX = rotateAngleX + angleBiasX;

                    if (angleRestrictionX > 50) {
                        rotateAngleX = 50;
                    } else if (angleRestrictionX < 20) {
                        rotateAngleX = 20;
                    } else {
                        rotateAngleX += angleBiasX;
                    }

        //      Определим ограничения для вращения модели           
        //      Вращение в горизонтальной плоскости от -30 до +30 градусов

                    var angleRestrictionZ = rotateAngleZ + angleBiasZ;

                    if (angleRestrictionZ > 30) {
                        rotateAngleZ = 30;
                    } else if (angleRestrictionZ < -30) {
                        rotateAngleZ = -30;
                    } else {
                        rotateAngleZ += angleBiasZ;
                    }

                    rotateAngleZ += angleBiasZ;


        //        Вызываем функцию-контроллер, которая изменит углы отображения объекта. 

                    rotateObject();

                });
            
        }, 1300)
    }   
    
});