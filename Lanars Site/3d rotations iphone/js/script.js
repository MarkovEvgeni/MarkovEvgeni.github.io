$(function () {
    
    "use strict"
    
    $('#rotate').on("click", rotate);
    $('#back').on("click", back);
    
    var rotatedObject = $('.scene');
    
    function rotate() {
        rotatedObject.css({
                transform: 'rotateY(-30deg) rotateX(90deg)  translateZ(-124px)',
                MozTransform: 'rotateY(-30deg) rotateX(90deg)  translateZ(-124px)',
                WebkitTransform: 'rotateY(-30deg) rotateX(90deg)  translateZ(-124px)',
                msTransform: 'rotateY(-30deg) rotateX(90deg)  translateZ(-124px)',
                WebkitTransition: 'transform 0.4s ease-in-out',
                MozTransition: 'transform 0.4s ease-in-out',
                transition: 'transform 0.4s ease-in-out'
            });
    }
    
    function back() {
        rotatedObject.css({
                transform: 'rotateY(17deg) rotateX(10deg)',
                MozTransform: 'rotateY(17deg) rotateX(10deg)',
                WebkitTransform: 'rotateY(17deg) rotateX(10deg)',
                msTransform: 'rotateY(17deg) rotateX(10deg)'
            });
    }
    
//    Вращение вокруг оси абсцисс.
    var rotateAngleX = 90;
    
//    Вращение вокруг оси ординат.
    var rotateAngleY = -30;
    
//    Вращение вокруг оси апликат.
    var rotateAngleZ = 0;
    
//    Определяем функцию-контроллер которая будет передавать углы вращения объекту.
    
    function rotateObject() {
        
        var angleX = rotateAngleX + 'deg';
        var angleY = rotateAngleY + 'deg';
        var angleZ = rotateAngleZ + 'deg';
        
        rotatedObject.css({
            transform: 'rotateY(' + angleY + ') rotateX(' + angleX + ') translateZ(-124px)',
            MozTransform: 'rotateY(' + angleY + ') rotateX(' + angleX + ') translateZ(-124px)',
            WebkitTransform: 'rotateY(' + angleY + ') rotateX(' + angleX + ') translateZ(-124px)',
            msTransform: 'rotateY(' + angleY + ') rotateX(' + angleX + ') translateZ(-124px)',
            WebkitTransition: 'transform 0.1s linear',
            MozTransition: 'transform 0.1s linear',
            transition: 'transform 0.1s linear'
        });
    };
    
    
    
    $('.third_screen').mouseenter(receiveCoordinates);
    $('.third_screen').mouseleave(function () {
        console.log('mouseleave');
        $('.third_screen').unbind("mousemove");
        setTimeout(function () {
            $('.third_screen').unbind("mousemove");
        }, 1500)
    });
    
//    Определяем модель которая будет перезаписывать переменные определяющие угол вращения.
    
    function receiveCoordinates () {
        
        setTimeout(function () {
        //    Задаем начальные координаты для вычислений. Сейчас это точка где находится курсор.
            
                var initialXCoordinate = document.documentElement.clientWidth / 2;
                var initialYCoordinate = document.documentElement.clientHeight / 2;

                $('.glass_inactive_mouse').css('display', 'none');



        //     Привязываем изменение переменных к перемещению мыши.

                $('.third_screen').mousemove(function() {

                    var biasX = event.clientX - initialXCoordinate;
                    var biasY = event.clientY - initialYCoordinate;

                    var angleBiasX = -biasY / 500;
                    var angleBiasY = biasX / 500;

        //      Определим ограничения для вращения модели           
        //      Вращение в горизонтальной плоскости от 50 до 90 градусов

                    var angleRestrictionX = rotateAngleX + angleBiasX;

                    if (angleRestrictionX > 90) {
                        rotateAngleX = 90;
                    } else if (angleRestrictionX < 50) {
                        rotateAngleX = 50;
                    } else {
                        rotateAngleX += angleBiasX;
                    }

        //      Определим ограничения для вращения модели           
        //      Вращение в горизонтальной плоскости от -30 до +30 градусов

                    var angleRestrictionY = rotateAngleY + angleBiasY;

                    if (angleRestrictionY > 30) {
                        rotateAngleY = 30;
                    } else if (angleRestrictionY < -30) {
                        rotateAngleY = -30;
                    } else {
                        rotateAngleY += angleBiasY;
                    }

                    rotateAngleY += angleBiasY;


        //        Вызываем функцию-контроллер, которая изменит углы отображения объекта. 

                    rotateObject();

                });
            
        }, 1200)
    }
    
});