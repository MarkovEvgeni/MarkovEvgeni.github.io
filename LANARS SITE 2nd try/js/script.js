document.addEventListener('DOMContentLoaded', function () {
    
    "use strict";
    
//    Вешаем обработчики событий касания тачскрина
    
    var touchstartY = 0;
    var touchendY = 0;
    
    var gesuredZone = document.querySelector('.scrolling_feed');

    gesuredZone.addEventListener('touchstart', function(el) {
        el = el || window.event;
        touchstartY = el.changedTouches[0].screenY;
    }, false);
    
    gesuredZone.addEventListener('touchmove', function(el) {
        el = el || window.event;
        el.preventDefault();
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
        $('.main_menu').addClass('mob_hide');
        $('.menu_container').addClass('hide_menu');
    };
    
    var currentSlide = 1;
    
//    Открытие меню на мобильных девайсах
    
    var mobileMenuEventEmitter  = $('.menu_event_emitter');
    
    mobileMenuEventEmitter.on('click', toggleMobileMenu);
    
    function toggleMobileMenu() {
        $('.main_menu').toggleClass('mob_hide');
    }
    
    
//    Обработчики событий для кнопок меню
    
    (function() {
//        for (var index = 1; index < 7; index++) {
//            console.log(index);
//            var iteratorCount = index;
//            $('.screen_' + index + '_link').on('click', function(iteratorCount) {
//                changeScreen(iteratorCount);
//                console.log(iteratorCount);
//            })
//            console.log($('.screen_' + iteratorCount + '_link'));
//        }
    }());
    
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
                rotateModel();
            }
            if (displayCounter == 2) {
                returnModel();
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
            ++displayCounter;
            var targetScreen = displayCounter;
            nextScreen(targetScreen);
        } else {
            console.log('Bottom of the screen');
        } 
    }

    function rotateModel() {
        $('.what_we_do .content .scene').unbind();
        setTimeout(function(){
            $('.what_we_do .model').css("transform", "translateY(50px) rotateX(50deg) rotateZ(30deg)");
            $('.what_we_do .model').css("transition", "transform 0.4s linear");
            $('.what_we_do .model').addClass('open_screen');
            $('.what_we_do .control_panel').addClass('show_control_panel');
        }, 1000);
    };
    
    function returnModel() {
        $('.what_we_do .model').css("transform", "translateY(0px) rotateX(0deg) rotateZ(0deg)");
        $('.what_we_do .model').css("transition", "transform 0.4s linear");
        $('.what_we_do .model').removeClass('open_screen');
        $('.what_we_do .control_panel').removeClass('show_control_panel');
        $('.what_we_do .content .scene').unbind();
    }
    
    function scrollScreenUp() {
        if(displayCounter > 1) {
            if (displayCounter == 2) {
               returnModel();
            }
            if (displayCounter == 3) {
                if (currentSlide !== 1) {
                    prevSlide();
                    return;
                }
                rotateModel();
            }
            $('.scrolling_feed').addClass('position_screen_' + displayCounter);
            $('.scrolling_feed').removeClass('position_screen_' + lastDisplayCounter);
            lastDisplayCounter = displayCounter;
            var targetScreen = --displayCounter;
            displayCounter = targetScreen;
            nextScreen(targetScreen);
        }
    }
    
    function nextScreen(targetScreen) {
        hideMenu();
        $('.main_menu li.active').each(function() {
            $(this).removeClass('active');
        });
        $('.scrolling_feed').removeClass('scroll' + lastDisplayCounter);
        $('.scrolling_feed').addClass('scroll' + targetScreen);
        setTimeout(showMenu, 1000);
        underlineActiveScreen(1100);
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
            returnModel();
        };
        if (targetScreen == 2) {
            rotateModel();
        };
        $('.scrolling_feed').addClass('position_screen_' + displayCounter);
        $('.scrolling_feed').removeClass('position_screen_' + lastDisplayCounter);
        lastDisplayCounter = displayCounter;
        displayCounter = targetScreen;
        nextScreen(targetScreen);
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
    
    $('.our_works .scroll_down .arrows').on('click', scrollScreenDown);
    
    
//    Инициализируем слайдер
       
    $(document).ready(function(){
        $('.item_container').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: false,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 800,
            prevArrow: '<div class="prev_arrow arrow"></div>',
            nextArrow: '<div class="next_arrow arrow"></div>',
            variableWidth: false,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        draggable: true,
                        autoplaySpeed: 1000,
                        centerMode: true,
                        variableWidth: true,
                    }
                }
            ]
        })
    })
    
    
//    $(document).ready(function(){
//      $('.items_container').slick({
//          infinite: true,
//          dots: false,
//          slidesToShow: 4,
//          slidesToScroll: 1,
//          autoplay: true,
//          draggable: false,
//          speed: 1200,
//          pauseOnHover: false,
//          autoplaySpeed: 2000,
//          prevArrow: '<div class="prev_arrow arrow">&#60;</div>',
//          nextArrow: '<div class="next_arrow arrow">&#62;</div>',
//          responsive: [
//            {
//              breakpoint: 1680,
//              settings: {
//                slidesToShow: 3,
//                slidesToScroll: 1,
//                infinite: true,
//              }
//            },
//            {
//              breakpoint: 1280,
//              settings: {
//                slidesToShow: 2,
//                slidesToScroll: 1,
//                speed: 600
//              }
//            },
//            {
//              breakpoint: 880,
//              settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                speed: 600
//              }
//            }
//        ]
//      });
//    });
       

});