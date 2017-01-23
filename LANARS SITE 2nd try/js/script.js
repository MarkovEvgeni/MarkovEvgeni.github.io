document.addEventListener('DOMContentLoaded', function () {
    
    "use strict";
    
    var fullscreenElement = document.documentElement;
    
    function makeFullscreen() {
       if (fullscreenElement.requestFullscreen) {
          fullscreenElement.requestFullscreen();
        } else if (fullscreenElement.mozRequestFullScreen) {
          fullscreenElement.mozRequestFullScreen();
        } else if (fullscreenElement.webkitRequestFullscreen) {
          fullscreenElement.webkitRequestFullscreen();
        } else {
            return
        } 
    };
    
    
//    Вешаем обработчики событий касания тачскрина
    
    var touchstartY = 0;
    var touchendY = 0;
    
    var gesuredZone = document.querySelector('.scrolling_feed');

    gesuredZone.addEventListener('touchstart', function(el) {
        el = el || window.event;
        touchstartY = el.changedTouches[0].screenY;
        if (touchMsCounter > 1) {
            clearInterval(timerId);
            if (touchMsCounter < 500) {
                makeFullscreen();
            }
            touchMsCounter = 1;    
        } else {
            
        };
    }, false);
    
    gesuredZone.addEventListener('touchmove', function(el) {
        el = el || window.event;
        el.preventDefault();
    }, false);

    gesuredZone.addEventListener('touchend', function(el) {
        el = el || window.event;
        touchendY = el.changedTouches[0].screenY;
        handleGesure();
        startTimer();
    }, false); 

    function handleGesure() {
        var swiped = 'swiped: ';
        if (touchstartY - touchendY > 80) {
            var el = [];
            el.deltaY = 1;
            scrollScreen(el);
        }
        if (touchendY - touchstartY > 80) {
            var el = [];
            el.deltaY = -1;
            scrollScreen(el);
        }
    };
    
    var timerId;
    var touchMsCounter = 1;
    
    function startTimer() {
        timerId = setInterval(function() {
            if (touchMsCounter < 1000) {
                touchMsCounter +=50;
            } else {
                clearInterval(timerId);
                touchMsCounter = 1;
            }
        }, 50);
    };
    
    
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
    
    (function () {
        for (var i=1; i<7; i++) (function(i) {
            $('.screen_' + i + "_link").on('click', function() {
                changeScreen(i);
            })
        }) (i); 
    })();
    
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
            lastDisplayCounter = displayCounter;
            ++displayCounter;
            var targetScreen = displayCounter;
            nextScreen(targetScreen);
        } else {
            console.log('Bottom of the screen');
        } 
    }

    function rotateModel() {
        $('.content .scene').off("mousemove");
        rotatingIdentifier = 0;
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
        $('.content .scene').off("mousemove");
        rotatingIdentifier = 0;
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
        $('.scrolling_feed').removeClass('scrolling_screen_' + lastDisplayCounter);
        $('.scrolling_feed').addClass('scrolling_screen_' + targetScreen);
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
            autoplaySpeed: 2000,
            speed: 800,
            prevArrow: '<div class="prev_arrow arrow"></div>',
            nextArrow: '<div class="next_arrow arrow"></div>',
            variableWidth: false,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        draggable: true,
                        centerMode: true,
                        variableWidth: true,
                    }
                }
            ]
        })
    })

});