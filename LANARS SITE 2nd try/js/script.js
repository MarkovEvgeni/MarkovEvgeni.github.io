document.addEventListener('DOMContentLoaded', function () {
    
    "use strict";
    
//    Вешаем обработчики событий касания тачскрина
    
    var touchstartY = 0;
    var touchendY = 0;

    var gesuredZone = document.querySelector('.scrolling_feed');

    gesuredZone.addEventListener('touchstart', function(el) {
        el.preventDefault();
        el = el || window.event;
        touchstartY = el.changedTouches[0].screenY;
    }, false);

    gesuredZone.addEventListener('touchend', function(el) {
        el = el || window.event;
        touchendY = el.changedTouches[0].screenY;
        handleGesure();
    }, false); 

    function handleGesure() {
        var swiped = 'swiped: ';
        if (touchstartY - touchendY > 30) {
            var el = [];
            el.deltaY = 1;
            scrollScreen(el);
        }
        if (touchendY - touchstartY > 30) {
            var el = [];
            el.deltaY = -1;
            scrollScreen(el);
        }
    }    
    
//    Полифилл для requestAnimationFrame
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                       || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());
    
    
//    Плагин для плавной прокрутки в Chrome и Safari
    jQuery.scrollSpeed(100, 2000, 'easeOutCubic');
    
//    Используем сторонний плагин для разрешения проблемы со скроллингом
    
    var indicator = new WheelIndicator({
      elem: document.querySelector('.scrolling_feed'),
      callback: function(e){
        scrollScreen(e);
      }
    });

//    Объявляем переменную которая будет счетчком текущего экрана, для определения логики взаимодействия с ними.
    
    var displayCounter = 1;
    
//  Объявляем переменную, которая будет содержать информацию о предыдущем экране
    
    var lastDisplayCounter = 1;
    
    $('.up-test').on('click', scrollScreenUp);
    $('.down-test').on('click', scrollScreenDown);
 
// Создаем ограничение, чтобы скроллить экраны можно было не чаще чем один раз в установленное кол-во времени.  
    
    var throttled = false;
    
// Создаем функцию, которая определяет направление скролла и в зависимости от направления запускает либо одну, либо другую функцию.

    function scrollScreen (el) {
        el = el || window.event;
        el.preventDefault ? el.preventDefault() : (el.returnValue = false);
        
        if (!throttled) {
            var scrollDelta = el.deltaY || el.detail || el.wheelDelta;
            if (scrollDelta < 0) {
                scrollScreenUp();
            } else if (scrollDelta > 0) {
                scrollScreenDown();
            }

            throttled = true;

            setTimeout(function() {
                throttled = false;
            }, 1000)
        } else {
            console.log('Too fast, cowboy!')
        }

    };    
    
    var currentScreen = 0;
    
    function showMenu() {
        $('.menu_container').removeClass('hide_menu');
        $('.menu_container').addClass('show_menu');
    };
    
    function hideMenu() {
        $('.menu_container').removeClass('show_menu');
        $('.menu_container').addClass('hide_menu');
    };
    
    var currentSlide = 1;
    
//    Обработчики событий для кнопок меню
    
    $('.screen_1_link').on('click', function() {
       changeScreen(1); 
    });
    
    $('.screen_2_link').on('click', function() {
       changeScreen(2); 
    });
    
    $('.screen_3_link').on('click', function() {
       changeScreen(3); 
    });
    
    $('.screen_4_link').on('click', function() {
       changeScreen(4); 
    });
    
    $('.screen_5_link').on('click', function() {
       changeScreen(5); 
    });
    
    $('.screen_6_link').on('click', function() {
       changeScreen(6); 
    });
    
    underlineActiveScreen(400);
    
    function scrollScreenDown() {
        if(displayCounter < 6) {
            if (displayCounter == 1) {
                $('.content .scene').unbind();
                setTimeout(function(){
                   $('.what_we_do .model').css("transform", "translateY(50px) rotateX(50deg) rotateZ(30deg)");
                   $('.what_we_do .model').css("transition", "transform 0.4s linear");
                   $('.what_we_do .model').addClass('open_screen');
                   $('.what_we_do .control_panel').addClass('show_control_panel'); 
                }, 1000);
            }
            if (displayCounter == 2) {
               $('.what_we_do .model').css("transform", "translateY(0px) rotateX(0deg) rotateZ(0deg)");
               $('.what_we_do .model').css("transition", "transform 0.4s linear");
               $('.what_we_do .model').removeClass('open_screen');
               $('.what_we_do .control_panel').removeClass('show_control_panel');
               $('.content .scene').unbind();
            }
            if (displayCounter == 3) {
                if (currentSlide !== 3) {
                    nextSlide();
                    return;
                }
            }
            $('.scrolling_feed').addClass('position_screen_' + displayCounter);
            $('.scrolling_feed').removeClass('position_screen_' + lastDisplayCounter);
            lastDisplayCounter = displayCounter;
            var targetScreen = ++displayCounter;
            displayCounter = targetScreen;
            hideMenu();
            $('.main_menu li.active').each(function() {
                $(this).removeClass('active');
            });
            $('.scrolling_feed').removeClass('scroll' + lastDisplayCounter);
            $('.scrolling_feed').addClass('scroll' + targetScreen);
            setTimeout(showMenu, 1000);
            underlineActiveScreen(1100);
        } else {
            console.log('Bottom of the screen');
        } 
    }

    function scrollScreenUp() {
        if(displayCounter > 1) {
            if (displayCounter == 2) {
               $('.what_we_do .control_panel').removeClass('show_control_panel');
               $('.what_we_do .model').removeClass('open_screen');
               $('.what_we_do .model').css("transform", "translateY(0px) rotateX(0deg) rotateZ(0deg)");
               $('.what_we_do .model').css("transition", "transform 0.4s linear");
               $('.content .scene').unbind();
            }
            if (displayCounter == 3) {
                if (currentSlide !== 1) {
                    prevSlide();
                    return;
                }
                $('.content .scene').unbind();
                setTimeout(function() {
                    $('.what_we_do .model').css("transform", "translateY(50px) rotateX(50deg) rotateZ(30deg)");
                    $('.what_we_do .model').css("transition", "transform 0.4s linear");
                    $('.what_we_do .model').addClass('open_screen');
                    $('.what_we_do .control_panel').addClass('show_control_panel');
                }, 1000);
            }
            hideMenu();
            $('.main_menu li.active').each(function() {
                $(this).removeClass('active');
            });
            $('.scrolling_feed').addClass('position_screen_' + displayCounter);
            $('.scrolling_feed').removeClass('position_screen_' + lastDisplayCounter);
            lastDisplayCounter = displayCounter;
            var targetScreen = --displayCounter;
            displayCounter = targetScreen;
            hideMenu();
            $('.scrolling_feed').removeClass('scroll' + lastDisplayCounter);
            $('.scrolling_feed').addClass('scroll' + targetScreen);
            setTimeout(showMenu, 1000);
            underlineActiveScreen(1100);
        }
    }
    
    function underlineActiveScreen(mas) {
        var numb = lastDisplayCounter;
        var previousLink = '.screen_' + numb + '_link';
        $(previousLink).on('click', function() {
            changeScreen(numb);
        })
        var currentLink = '.screen_' + displayCounter + '_link';
        setTimeout(function() {
            $(currentLink).addClass('active');
        }, mas);
        $(currentLink).off();
    }
    
    function changeScreen(targetScreen) {
        $('.main_menu li.active').each(function() {
            $(this).removeClass('active');
        });
        if (displayCounter == 2) {
            $('.what_we_do .model').css("transform", "translateY(0px) rotateX(0deg) rotateZ(0deg)");
            $('.what_we_do .model').css("transition", "transform 0.4s linear");
            $('.what_we_do .model').removeClass('open_screen');
            $('.what_we_do .control_panel').removeClass('show_control_panel');
            $('.content .scene').unbind();
        };
        if (targetScreen == 2) {
            $('.content .scene').unbind();
            setTimeout(function() {
                $('.what_we_do .model').css("transform", "translateY(50px) rotateX(50deg) rotateZ(30deg)");
                $('.what_we_do .model').css("transition", "transform 0.4s linear");
                $('.what_we_do .model').addClass('open_screen');
                $('.what_we_do .control_panel').addClass('show_control_panel');
            }, 1000);
        };
        $('.scrolling_feed').addClass('position_screen_' + displayCounter);
        $('.scrolling_feed').removeClass('position_screen_' + lastDisplayCounter);
        lastDisplayCounter = displayCounter;
        displayCounter = targetScreen;
        hideMenu();
        $('.scrolling_feed').removeClass('scroll' + lastDisplayCounter);
        $('.scrolling_feed').addClass('scroll' + targetScreen);
        setTimeout(showMenu, 1000);
        underlineActiveScreen(1100);
    }
    
    function nextSlide() {
        if (currentSlide == 1) {
           $('.devices').removeClass('step4');
           $('.devices').addClass('step1');
            ++currentSlide;
            return
        } else {
            $('.devices').removeClass('step1');
            $('.devices').removeClass('step3');
            $('.devices').addClass('step2');
            ++currentSlide;
        }
    };
    
    function prevSlide() {
        if (currentSlide == 2) {
           $('.devices').removeClass('step1');
           $('.devices').removeClass('step3');
           $('.devices').addClass('step4');
            --currentSlide;
            return
        } else {
            $('.devices').removeClass('step3');
            $('.devices').removeClass('step2');
            $('.devices').addClass('step3');
            --currentSlide;
        }
    };
       
});