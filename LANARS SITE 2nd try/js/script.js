document.addEventListener('DOMContentLoaded', function () {
    
    "use strict";
    
//    Плагин для плавной прокрутки в Chrome и Safari
    jQuery.scrollSpeed(100, 2000, 'easeOutCubic');
    
//    Используем сторонний плагин для разрешения проблемы со скроллингом
    
    var indicator = new WheelIndicator({
      elem: document.querySelector('body'),
      callback: function(e){
        scrollScreen(e);
      }
    });

//    Объявляем переменную которая будет счетчком текущего экрана, для определения логики взаимодействия с ними.
    
    var displayCounter = 1;    
 
// Создаем ограничение, чтобы скроллить экраны можно было не чаще чем один раз в установленное кол-во времени.  
    
    var throttled = false;
    
// Создаем функцию, которая определяет направление скролла и в зависимости от направления запускает либо одну, либо другую функцию.

    function scrollScreen (el) {
        el = el || window.event;
        console.log("window.event", window.event);
        console.log("element", el);
        el.preventDefault ? el.preventDefault() : (el.returnValue = false);

        if (!throttled) {
            var scrollDelta = el.deltaY || el.detail || el.wheelDelta;
            if (scrollDelta < 0) {
                console.log(scrollDelta);
                scrollScreenUp();
            } else if (scrollDelta > 0) {
                scrollScreenDown();
                console.log(scrollDelta);
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
                console.log("Here it is!");
                console.log(currentSlide);
                if (currentSlide !== 3) {
                    nextSlide();
                    return;
                }
            }
            ++displayCounter;
            hideMenu();
            $('.scrolling_feed').removeClass('scroll_up' + (displayCounter-1));
            $('.scrolling_feed').removeClass('scroll_down' + (displayCounter-1));
            $('.scrolling_feed').addClass('scroll_down' + displayCounter);
            setTimeout(showMenu, 1000);
        } else {
            console.log('Bottom of the screen');
        }

    
//    $('.scrolling_feed').removeClass('scroll_up');
//    $('.scrolling_feed').removeClass('scroll_down');
//    var currentPosition = getComputedStyle(document.documentElement).getPropertyValue('--current-screen');
//    console.log(currentPosition);
//    currentPosition = parseInt(currentPosition);
//    console.log(currentPosition);
//    if (currentPosition < 1) {
//        ++currentScreen;
//        var newPosition = (-100) * currentScreen;
//        newPosition = newPosition + 'vh';
//        console.log(newPosition);
//        document.documentElement.style.setProperty('--current-screen', newPosition);
//    }
//    $('.scrolling_feed').addClass('scroll_down');   
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
            --displayCounter;
            hideMenu();
            $('.scrolling_feed').removeClass('scroll_up' + (displayCounter+1));
            $('.scrolling_feed').removeClass('scroll_down' + (displayCounter+1));
            $('.scrolling_feed').addClass('scroll_up' + displayCounter);
            setTimeout(showMenu, 1000);
        }
    
//    console.log('Страницы крутятся лавеха мутится!!!');
//    console.log($('parallax__group'));
//    var currentPosition = getComputedStyle(document.documentElement).getPropertyValue('--current-screen');
//    console.log(currentPosition);
//    currentPosition = parseInt(currentPosition);
//    console.log(currentPosition);
//    if (currentPosition > 0) {
//        --currentScreen;
//        var newPosition = (100) * currentScreen;
//        newPosition = newPosition + 'vh';
//        console.log(newPosition);
//        document.documentElement.style.setProperty('--current-screen', newPosition);
//    }
//    $('.scrolling_feed ').removeClass('scroll_up');
//    $('.scrolling_feed ').removeClass('scroll_down');
//    $('.scrolling_feed ').addClass('scroll_up');
//    
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
    
    
//    
////Объявим переменную, которая будет показывать количество текущих устройств на третьем экране. 
//    
//    var thirdScreenDevice = 1;
//    
//    function scrollScreenDown () {
//
//        var displayHeight = window.innerHeight;
//        var currentOffset = window.pageYOffset;
//
//        countCurrentDisplay();
//
//        var currentDisplay = displayHeight * displayCounter;
//
//        if (displayCounter == 2) {
//            if (thirdScreenDevice < 3) {
//                nextDevice();
//            } else {
//                $('h4').css({top: '124px', opacity: '0.2'});
//                $('h6').css({top: '207px', opacity: '0.2'});
//                var intervalDown = setInterval(function () {
//                    if (currentDisplay - currentOffset > 600) {
//                        window.scrollBy(0,8);
//                        currentOffset += 8;
//                    } else if (currentDisplay - currentOffset > 200) {
//                        window.scrollBy(0,12);
//                        currentOffset += 12;
//                    } else if (currentDisplay - currentOffset > 10) {
//                        window.scrollBy(0,8);
//                        currentOffset += 8;
//                    } else {
//                        clearInterval(intervalDown);
//                        window.scrollTo(0, currentDisplay);
//                        $('h4').css({top: '84px', opacity: '1'});
//                        $('h6').css({top: '137px', opacity: '1'});
//                    }
//                }, 5)
//            }
//        } else {
//            $('h4').css({top: '124px', opacity: '0.2'});
//            $('h6').css({top: '207px', opacity: '0.2'});
//            var intervalDown = setInterval(function () {
//                if (currentDisplay - currentOffset > 600) {
//                    window.scrollBy(0,8);
//                    currentOffset += 8;
//                } else if (currentDisplay - currentOffset > 200) {
//                    window.scrollBy(0,12);
//                    currentOffset += 12;
//                } else if (currentDisplay - currentOffset > 10) {
//                    window.scrollBy(0,8);
//                    currentOffset += 8;
//                } else {
//                    clearInterval(intervalDown);
//                    window.scrollTo(0, currentDisplay);
//                    $('h4').css({top: '84px', opacity: '1'});
//                    $('h6').css({top: '137px', opacity: '1'});
//                }
//            }, 5)
//        }
//    };
//    
//    
//    function nextDevice () {
//        if ($('.products').hasClass('is-first')) {
//          $('.products').removeClass('is-first').addClass('is-third');
//        } else if($('.products').hasClass('is-second')) {
//          $('.products').removeClass('is-second').addClass('is-first-back');
//        } else if($('.products').hasClass('is-second-back')) {
//          $('.products').removeClass('is-second-back').addClass('is-first-back');
//        } else if($('.products').hasClass('is-third')) {
//          $('.products').removeClass('is-third').addClass('is-second-back');
//        } else if($('.products').hasClass('is-second-back')) {
//          $('.products').removeClass('is-second').addClass('is-first-back');  
//        }
//        thirdScreenDevice += 1;
//    }
//
//    function previousDevice () {
//        if ($('.products').hasClass('is-first')) {
//          $('.products').removeClass('is-first').addClass('is-second');
//        } else if($('.products').hasClass('is-first-back')) {
//          $('.products').removeClass('is-first-back').addClass('is-second');
//        } else if($('.products').hasClass('is-second')) {
//          $('.products').removeClass('is-second').addClass('is-third');
//        } else if($('.products').hasClass('is-second-back')) {
//          $('.products').removeClass('is-second-back').addClass('is-third');
//        } else {
//          $('.products').removeClass('is-third').addClass('is-first');
//        } 
//        thirdScreenDevice -= 1;
//    }    
//
//    function scrollScreenUp () {
//
//        var displayHeight = window.innerHeight;
//        var currentOffset = window.pageYOffset;
//
//        countCurrentDisplay();
//
//        var currentDisplay = displayHeight * displayCounter;
//        var previousDisplay = displayHeight * (displayCounter - 2);
//
//        if (displayCounter == 2) {
//            if (thirdScreenDevice > 1) {
//                previousDevice();
//            } else {
//                $('h4').css({top: '124px', opacity: '0.2'});
//                $('h6').css({top: '207px', opacity: '0.2'});
//                var intervalUp = setInterval(function () {
//                    if (currentOffset - previousDisplay > 600) {
//                        window.scrollBy(0,-8);
//                        currentOffset -= 8;
//                    } else if (currentOffset - previousDisplay > 200) {
//                        window.scrollBy(0,-12);
//                        currentOffset -= 12;
//                    } else if (currentOffset - previousDisplay > 10) {
//                        window.scrollBy(0,-8);
//                        currentOffset -= 8;
//                    } else {
//                        clearInterval(intervalUp);
//                        window.scrollTo(0, previousDisplay);
//                        $('h4').css({top: '84px', opacity: '1'});
//                        $('h6').css({top: '137px', opacity: '1'});
//                    }
//                }, 5)
//            }
//        } else {
//            $('h4').css({top: '124px', opacity: '0.2'});
//            $('h6').css({top: '207px', opacity: '0.2'});
//            var intervalUp = setInterval(function () {
//                if (currentOffset - previousDisplay > 600) {
//                    window.scrollBy(0,-8);
//                    currentOffset -= 8;
//                } else if (currentOffset - previousDisplay > 200) {
//                    window.scrollBy(0,-12);
//                    currentOffset -= 12;
//                } else if (currentOffset - previousDisplay > 10) {
//                    window.scrollBy(0,-8);
//                    currentOffset -= 8;
//                } else {
//                    clearInterval(intervalUp);
//                    window.scrollTo(0, previousDisplay);
//                    $('h4').css({top: '84px', opacity: '1'});
//                    $('h6').css({top: '137px', opacity: '1'});
//                }
//            }, 5)
//        }
//
//    };  
//    
//    

    
});