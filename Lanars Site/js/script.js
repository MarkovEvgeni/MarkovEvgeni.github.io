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
            [].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
                classie.remove( el, 'ms-view-layers' );
                
            })
        } else {
            [].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
                classie.add( el, 'ms-view-layers' );
            })
        }
    };
        
    document.addEventListener("scroll", scrolledUpButton);

    

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
            WebkitTransition: 'none',
            MozTransition: 'none',
            transition: 'none'
        });
    };
    
    
    $('.second_screen').mouseenter(receiveCoordinates);
    $('.second_screen').mouseleave(function () {
        console.log('mouseout');
        $('.second_screen').unbind("mousemove");
    });
    
    
//    Определяем модель которая будет перезаписывать переменные определяющие угол вращения.
    
    function receiveCoordinates () {
        
//    Задаем начальные координаты для вычислений. Сейчас это центр окна браузера.
        
        
        var initialXCoordinate = document.documentElement.clientWidth / 2;
        var initialYCoordinate = document.documentElement.clientHeight / 2;
        
//     Привязываем изменение переменных к перемещению мыши.
        
        $('.second_screen').mousemove(function() {
            
            var biasX = event.clientX - initialXCoordinate;
            var biasY = event.clientY - initialYCoordinate;
            
            var angleBiasX = -biasY / 500;
            var angleBiasY = biasX / 500;
            
//      Определим ограничения для вращения модели           
//      Вращение в горизонтальной плоскости от 70 до 90 градусов
            
            var angleRestrictionX = rotateAngleX + angleBiasX;
            
            if (angleRestrictionX > 90) {
                rotateAngleX = 90;
            } else if (angleRestrictionX < 70) {
                rotateAngleX = 70;
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
            var intervalDown = setInterval(function () {
                if (currentDisplay - currentOffset > 600) {
                    window.scrollBy(0,5);
                    currentOffset += 5;
                } else if (currentDisplay - currentOffset > 200) {
                    window.scrollBy(0,20);
                    currentOffset += 20;
                } else if (currentDisplay - currentOffset > 10) {
                    window.scrollBy(0,5);
                    currentOffset += 5;
                } else {
                    clearInterval(intervalDown);
                    window.scrollTo(0, currentDisplay);
                }
            }, 10)
        }
    } else {
        var intervalDown = setInterval(function () {
            if (currentDisplay - currentOffset > 600) {
                window.scrollBy(0,5);
                currentOffset += 5;
            } else if (currentDisplay - currentOffset > 200) {
                window.scrollBy(0,20);
                currentOffset += 20;
            } else if (currentDisplay - currentOffset > 10) {
                window.scrollBy(0,5);
                currentOffset += 5;
            } else {
                clearInterval(intervalDown);
                window.scrollTo(0, currentDisplay);
            }
        }, 10)
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
            var intervalUp = setInterval(function () {
                if (currentOffset - previousDisplay > 600) {
                    window.scrollBy(0,-5);
                    currentOffset -= 5;
                } else if (currentOffset - previousDisplay > 200) {
                    window.scrollBy(0,-20);
                    currentOffset -= 20;
                } else if (currentOffset - previousDisplay > 10) {
                    window.scrollBy(0,-5);
                    currentOffset -= 5;
                } else {
                    clearInterval(intervalUp);
                    window.scrollTo(0, previousDisplay);
                }
            }, 10)
        }
    } else {
        var intervalUp = setInterval(function () {
            if (currentOffset - previousDisplay > 600) {
                window.scrollBy(0,-5);
                currentOffset -= 5;
            } else if (currentOffset - previousDisplay > 200) {
                window.scrollBy(0,-20);
                currentOffset -= 20;
            } else if (currentOffset - previousDisplay > 10) {
                window.scrollBy(0,-5);
                currentOffset -= 5;
            } else {
                clearInterval(intervalUp);
                window.scrollTo(0, previousDisplay);
            }
        }, 10)
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