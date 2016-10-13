document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    var upButton = document.getElementsByClassName('updown')[0];
    
    upButton.addEventListener('click', scrollUp);
    
    setButton();
    
    var throttled = false; 
    
//    Вешаем появление кнопки "НАВЕРХ" при прокрутке страницы

    window.onscroll = function() {
        
        var displayHeight = document.documentElement.clientHeight; // Размер окна пользователя
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > displayHeight || scrolled > 400) {
            upButtonShow(upButton);
        } else {
            upButtonHide(upButton);
        }
        
    
//      document.getElementById('showScroll').innerHTML = scrolled + 'px';
    }
    
//    Создаем функцию для эффект плавной прокрутки окна
    
    function scrollUp () {
        
        var currentOffset = window.pageYOffset;
        console.log(currentOffset);
//        upButtonHide(upButton);
        
        var intervalUp = setInterval(function () {
            if (currentOffset > 10) {
//                upButton.classList.remove('hidden');
                window.scrollBy(0,-10)
                currentOffset -= 10;
            } else {
                clearInterval(intervalUp);
                window.scrollTo(0,0);
//                upButton.classList.add('hidden');
            }
        }, 4);
        
        
        
//        t = 336;
//        f = 24;
//        var fps = f, time = t, steps = time / fps, height = 0, width = 0, animationHeight = 70;
//        el.classList.remove('hidden');
//        var interval = setInterval(function () {
//            if (steps > 0) {
//                var step = animationHeight / (time / fps);
//                height += step;
//                el.style.height = height + "px";
//                el.style.width = height + "px";
//                steps -= 1;
//            } else {
//                clearInterval(interval);
//            }
//        }, time / fps);
    }
    
//   Вешаем обработчик события на изменение размеров окна
    window.addEventListener('resize', function() {
        // only run if we're not throttled
      if (!throttled) {
        // actual callback action
        setButton();
        // we're throttled!
        throttled = true;
        // set a timeout to un-throttle
        setTimeout(function() {
          throttled = false;
        }, 200);
      }  
    });
    
//    Функция для выравнивания кнопки "НАВЕРХ"
    
    function setButton () {
        
        console.log('SET BUTTON');
        
        var wrapper = upButton.previousElementSibling; // Находим wrapper, чтобы определить его ширину
        var wrapperWidth = wrapper.offsetWidth; // Определяем ширину wrapper
        var pageWidth = document.documentElement.clientWidth;
        
        var spaceForButton = (pageWidth - wrapperWidth) / 2; // Определяем ширину пустого пространства между wrapper и границей страницы

        if (spaceForButton > 90) { // Если пространства по ширине больше чем ширина кнопки, размещаем кнопку посередине
            var right = (spaceForButton - 80) / 2;
            upButton.style.right = right + "px";
            } else { // Если меньше, прижимаем к правой стороне экрана
                upButton.style.right = 5 + "px";
            };
        
        var wrapper = upButton.previousElementSibling; 
        
        
    }
    
//    Функция для показа кнопки "НАВЕРХ"
    
    function upButtonShow(el, t, f) {
        
        if (el.classList.contains("hidden")) {
            
            t = 168;
            f = 24;
            var fps = f, time = t, steps = time / fps, height = 0, width = 0, animationHeight = 70;
            el.classList.remove('hidden');

            var interval = setInterval(function () {
                el.style.borderWidth = "2px";
                el.style.padding = "3px";
                if (steps > 0) {
                    var step = animationHeight / (time / fps);
                    height += step;
                    el.style.height = height + "px";
                    el.style.width = height + "px";
                    steps -= 1;
                } else {

                    clearInterval(interval);
                }
            }, time / fps);
            
        } else {
            return
        }
        
    };
    
    //    Функция для скрытия кнопки "НАВЕРХ"
    
    function upButtonHide(el, t, f) {
        
        if (el.classList.contains("hidden")) {
            return
        } else {
            
            t = 168;
            f = 24;
            var fps = f, time = t, steps = time / fps, height = 70, width = 70, animationHeight = 70;

            var interval2 = setInterval(function () {
                if (steps > 0) {
                    var step = animationHeight / (time / fps);
                    height -= step;
                    el.style.height = height + "px";
                    el.style.width = height + "px";
                    steps -= 1;
                } else {
                    el.style.borderWidth = "0px";
                    el.style.padding = "0px";
                    el.classList.add('hidden');
                    clearInterval(interval2);
                }
            }, time / fps);
            
        }
        
    }
    
    
    
    
    
    
    
    
    
//    upButtonShow(upButton);
    
//    var timer = setTimeout(upButtonHide, 4000, upButton);
    
});