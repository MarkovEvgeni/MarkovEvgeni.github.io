document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';

( function( window ) {

    'use strict';

    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }

    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }

    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else {
      // browser global
      window.classie = classie;
    }

    })( window );

    
//    My function!111 scrolling
    
    function scrolledUpButton() {
        
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled < 600 || scrolled > 1200) {
            setTimeout(function () {
                $('.glass_inactive_mouse').css('display', 'none');
            }, 1500);
            $('.glass_inactive_mouse').css('display', 'none');
            rotatedObject.css({
                transform: 'rotateY(17deg) rotateX(10deg)',
                MozTransform: 'rotateY(17deg) rotateX(10deg)',
                WebkitTransform: 'rotateY(17deg) rotateX(10deg)',
                msTransform: 'rotateY(17deg) rotateX(10deg)'
            });
            [].slice.call( document.querySelectorAll( '.control_panel' ) ).forEach( function( el, i ) {
                classie.remove( el, 'ms-view-layers' );
                
            });
            [].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
                classie.remove( el, 'ms-view-layers' );
                
            });
        } else {
            setTimeout(openScreens, 300);
            
            function openScreens () {
                rotatedObject.css({
                    transform: 'rotateY(-30deg) rotateX(90deg)  translateZ(-124px)',
                    MozTransform: 'rotateY(-30deg) rotateX(90deg)  translateZ(-124px)',
                    WebkitTransform: 'rotateY(-30deg) rotateX(90deg)  translateZ(-124px)',
                    msTransform: 'rotateY(-30deg) rotateX(90deg)  translateZ(-124px)',
                    WebkitTransition: 'transform 0.4s ease-in-out',
                    MozTransition: 'transform 0.4s ease-in-out',
                    transition: 'transform 0.4s ease-in-out'
                });
                [].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
                    classie.add( el, 'ms-view-layers' );
                });
                [].slice.call( document.querySelectorAll( '.control_panel' ) ).forEach( function( el, i ) {
                    classie.add( el, 'ms-view-layers' );
                })
            }
        }
    };
        
    document.addEventListener("scroll", scrolledUpButton);

//=============================================   
//|Операции с панелью кнопок и слоями телефона|
//=============================================    
    
    
    
//    Сначала создадим связь между каждой кнопкой, и каждым экраном. Связь устанавливается по номеру, который мы берем из класса с помощью регулярных выражений.
    
    var labelButtons = $('.label');
    
    labelButtons.each(function () {
        var classes = $(this).attr('class');
        var classNumber = classes.match(/[0-9]/)[0];
        var matchingScreen = ".matching-screen-" + classNumber;
        var matchingScreen = $(matchingScreen)[0];
        $(this).hover(hoverEffect, noHoverEffect);
        $(this).click(changePosition);
    })
    
    
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
     var newPositionClass = "matching-screen-" + classNumber;
     var thisScreen = $(newPosition);
     thisScreen.removeClass(newPositionClass);
     var thisScreenClasses = $(thisScreen).attr('class');
     var thisScreenPositionClass = thisScreenClasses.match(/[0-9]/)[0];
     thisScreen.addClass(newPositionClass);
     var newPositionClass = "ms-screen-" + thisScreenPositionClass;
     
//     В данном случае 5 экранов поэтому экран который наверху будет с классом 5
     var topScreen = $('.ms-screen-5');
     
     thisScreen.removeClass(newPositionClass);
     topScreen.removeClass('ms-screen-5');
     
     thisScreen.addClass('ms-screen-5');
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
     
     topButton.addClass('hiden');
     currentButton.addClass('hiden');
     
     setTimeout(function () {
         topButton.removeClass(topButtonClass);
         topButton.addClass(currentButtonPositionClass);
         
         currentButton.removeClass(currentButtonPositionClass);
         currentButton.addClass(topButtonClass);
         
         currentButton.removeClass('hiden');
         topButton.removeClass('hiden');
         
         topButton.html(currentButtonDesc);
         currentButton.html(topButtonDesc);
         
         var labelButtons = $('.label');
    
         labelButtons.each(function () {
             $(this).unbind();
             $(this).hover(hoverEffect, noHoverEffect);
             $(this).click(changePosition);
         })      
     }, 650);
}   
    
    
    
    
    
    
    
    
    var phoneSlideshow = (function() {

        function init() {
            [].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
                var open = false;
//                el.querySelector( 'button' ).addEventListener( 'click', changeView, false );
//                function changeView() {
//                    if( open ) {
//                        classie.remove( el, 'ms-view-layers' );
//                    }
//                    else {
//                        classie.add( el, 'ms-view-layers' );
//                    }
//                    open = !open;
//                }
            } );
        }

        init();

    })();
    
    
    
//    Вращение элемента при перемещении курсора мыши
       
//    Находим объект, который будет подвержен вращению.
    
    var rotatedObject = $('.ms-device');
    
//    Определяем переменные, которые будут определять угол вращения объекта. Значения по умолчанию указаны исходя из css свойств после завершения анимации модели.
    
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
    
    
    
    $('.second_screen').mouseenter(receiveCoordinates);
    $('.second_screen').mouseleave(function () {
        console.log('mouseleave');
        $('.second_screen').unbind("mousemove");
        setTimeout(function () {
            $('.second_screen').unbind("mousemove");
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

                $('.second_screen').mousemove(function() {

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
    
    
//-------------------------------------------------------------------------------    
//      События связанные со скроллом мыши.    
    
    document.addEventListener("wheel", scrollScreen);    
        
    
//    Объявляем переменную которая будет счетчком текущего экрана, для определения логики взаимодействия с ними.
    
    var displayCounter;    
    
//    Создаем функцию, которая будет определять номер текущего экрана 
    
    function countCurrentDisplay () {
        displayCounter = parseInt(window.pageYOffset / window.innerHeight) + 1; 
    }
 
// Создаем ограничение, чтобы скроллить экраны можно было не чаще чем один раз в полсекунды.  
    
    var throttled = false;
    
    
//Создаем функцию, которая определяет направление скролла и в зависимости от направления запускает либо одну, либо другую функцию.

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
        }, 500)
    } else {
        console.log('Too fast, cowboy!')
    }
    
};    
    

//Объявим переменную, которая будет показывать количество текущих устройств на третьем экране. 
    
    var thirdScreenDevice = 1;
    
function scrollScreenDown () {
    
    var displayHeight = window.innerHeight;
    var currentOffset = window.pageYOffset;
    
    countCurrentDisplay();
    
    var currentDisplay = displayHeight * displayCounter;
    
    if (displayCounter == 3) {
        if (thirdScreenDevice < 3) {
            nextDevice();
        } else {
            $('h4').css({top: '124px', opacity: '0.2'});
            $('h6').css({top: '207px', opacity: '0.2'});
            var intervalDown = setInterval(function () {
                if (currentDisplay - currentOffset > 600) {
                    window.scrollBy(0,8);
                    currentOffset += 8;
                } else if (currentDisplay - currentOffset > 200) {
                    window.scrollBy(0,12);
                    currentOffset += 12;
                } else if (currentDisplay - currentOffset > 10) {
                    window.scrollBy(0,8);
                    currentOffset += 8;
                } else {
                    clearInterval(intervalDown);
                    window.scrollTo(0, currentDisplay);
                    $('h4').css({top: '84px', opacity: '1'});
                    $('h6').css({top: '137px', opacity: '1'});
                }
            }, 5)
        }
    } else {
        $('h4').css({top: '124px', opacity: '0.2'});
        $('h6').css({top: '207px', opacity: '0.2'});
        var intervalDown = setInterval(function () {
            if (currentDisplay - currentOffset > 600) {
                window.scrollBy(0,8);
                currentOffset += 8;
            } else if (currentDisplay - currentOffset > 200) {
                window.scrollBy(0,12);
                currentOffset += 12;
            } else if (currentDisplay - currentOffset > 10) {
                window.scrollBy(0,8);
                currentOffset += 8;
            } else {
                clearInterval(intervalDown);
                window.scrollTo(0, currentDisplay);
                $('h4').css({top: '84px', opacity: '1'});
                $('h6').css({top: '137px', opacity: '1'});
            }
        }, 5)
    }
};
    
    
function nextDevice () {
    if ($('.products').hasClass('is-first')) {
      $('.products').removeClass('is-first').addClass('is-third');
    } else if($('.products').hasClass('is-second')) {
      $('.products').removeClass('is-second').addClass('is-first-back');
    } else if($('.products').hasClass('is-second-back')) {
      $('.products').removeClass('is-second-back').addClass('is-first-back');
    } else if($('.products').hasClass('is-third')) {
      $('.products').removeClass('is-third').addClass('is-second-back');
    } else if($('.products').hasClass('is-second-back')) {
      $('.products').removeClass('is-second').addClass('is-first-back');  
    }
    thirdScreenDevice += 1;
}
    
function previousDevice () {
    if ($('.products').hasClass('is-first')) {
      $('.products').removeClass('is-first').addClass('is-second');
    } else if($('.products').hasClass('is-first-back')) {
      $('.products').removeClass('is-first-back').addClass('is-second');
    } else if($('.products').hasClass('is-second')) {
      $('.products').removeClass('is-second').addClass('is-third');
    } else if($('.products').hasClass('is-second-back')) {
      $('.products').removeClass('is-second-back').addClass('is-third');
    } else {
      $('.products').removeClass('is-third').addClass('is-first');
    } 
    thirdScreenDevice -= 1;
}    

function scrollScreenUp () {
    
    var displayHeight = window.innerHeight;
    var currentOffset = window.pageYOffset;
    
    countCurrentDisplay();
    
    var currentDisplay = displayHeight * displayCounter;
    var previousDisplay = displayHeight * (displayCounter - 2);
    
    if (displayCounter == 3) {
        if (thirdScreenDevice > 1) {
            previousDevice();
        } else {
            $('h4').css({top: '124px', opacity: '0.2'});
            $('h6').css({top: '207px', opacity: '0.2'});
            var intervalUp = setInterval(function () {
                if (currentOffset - previousDisplay > 600) {
                    window.scrollBy(0,-8);
                    currentOffset -= 8;
                } else if (currentOffset - previousDisplay > 200) {
                    window.scrollBy(0,-12);
                    currentOffset -= 12;
                } else if (currentOffset - previousDisplay > 10) {
                    window.scrollBy(0,-8);
                    currentOffset -= 8;
                } else {
                    clearInterval(intervalUp);
                    window.scrollTo(0, previousDisplay);
                    $('h4').css({top: '84px', opacity: '1'});
                    $('h6').css({top: '137px', opacity: '1'});
                }
            }, 5)
        }
    } else {
        $('h4').css({top: '124px', opacity: '0.2'});
        $('h6').css({top: '207px', opacity: '0.2'});
        var intervalUp = setInterval(function () {
            if (currentOffset - previousDisplay > 600) {
                window.scrollBy(0,-8);
                currentOffset -= 8;
            } else if (currentOffset - previousDisplay > 200) {
                window.scrollBy(0,-12);
                currentOffset -= 12;
            } else if (currentOffset - previousDisplay > 10) {
                window.scrollBy(0,-8);
                currentOffset -= 8;
            } else {
                clearInterval(intervalUp);
                window.scrollTo(0, previousDisplay);
                $('h4').css({top: '84px', opacity: '1'});
                $('h6').css({top: '137px', opacity: '1'});
            }
        }, 5)
    }
     
};  
    
    
    
    
    //    Slick initialization
    
    $('.slider').on('init', function(slick){
        $('.progress_bar').animate({width: "100%"}, 3000, function() {
            $('.progress_bar').css("width", "0");
        });
    });
    
    $('.slider').slick({
        arrows: true,
        autoplay: true,
        draggable: false,
        nextArrow: '<div class="first_screen_next"><span class="pagination_right"></span><span class="arrow"></span><div>',
        prevArrow: '<div class="first_screen_prev"><span class="arrow"></span><span class="pagination_left"></span><div>',
        pauseOnHover: false
      });
    
    var slidesTotal = $('.slider_item_container:not(.slick-cloned)').length;
    var currentSlide = $('.slider').slick('slickCurrentSlide') + 1;
    var nextSlide = currentSlide + 1;
    var paginationLeft = $('.first_screen_prev .pagination_left');
    var paginationRight = $('.first_screen_next .pagination_right');
    paginationLeft.text(slidesTotal + '/' + slidesTotal);
    paginationRight.text(nextSlide + '/' + slidesTotal);
    
    $('.slider').on('beforeChange', function(slick, currentSlide, nextSlide){
        var previousSlide = currentSlide.currentSlide + 1;
        var next;
        if (currentSlide.slideCount - previousSlide > 1) {
            next = previousSlide + 2;
        } else {
            next = previousSlide - 3;
        };
        paginationLeft.text(previousSlide + '/' + currentSlide.slideCount);
        paginationRight.text(next + '/' + currentSlide.slideCount);
        $('.progress_bar').stop(true, true);
    });
    
    $('.slider').on('afterChange', function(slick, currentSlide){
        $('.progress_bar').animate({width: "100%"}, 3000, function() {
            $('.progress_bar').css("width", "0");
        });
    });
    
});