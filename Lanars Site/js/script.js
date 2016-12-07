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
    
    
    //    Находим объект, который будет подвержен вращению.
    
    var rotatedObject = $('.ms-device');
    
//    Определяем переменные, которые будут определять угол вращения объекта.
    
//    Вращение вокруг оси абсцисс.
    var rotateAngleX = 90;
    
//    Вращение вокруг оси ординат.
    var rotateAngleY = -30;
    
//    Вращение вокруг оси апликат.
    var rotateAngleZ = 0;
    
//    Определяем функцию-контроллер которая будет передавать углы вращения объекту.
    
    function rotateObject() {
        
        console.log(rotatedObject);
        
        var angleX = rotateAngleX + 'deg';
        var angleY = rotateAngleY + 'deg';
        var angleZ = rotateAngleZ + 'deg';
        
        rotatedObject.css({
            transform: 'rotateY(' + angleY + ') rotateX(' + angleX + ') translateZ(-124px)',
            MozTransform: 'rotateY(' + angleY + ') rotateX(' + angleX + ') translateZ(-124px)',
            WebkitTransform: 'rotateY(' + angleY + ') rotateX(' + angleX + ') translateZ(-124px)',
            msTransform: 'rotateY(' + angleY + ') rotateX(' + angleX + ') translateZ(-124px)'
        });
    };
    
    
    $('.second_screen .container').mousedown(receiveCoordinates);
    $('body').mouseout(function () {
        $('.second_screen .container').unbind("mousemove");
    });
    $('body').mouseup(function () {
        $('.second_screen .container').unbind("mousemove");
    });
    
    
//    Определяем модель которая будет перезаписывать переменные определяющие угол вращения.
    
    function receiveCoordinates () {
        var initialXCoordinate = event.clientX;
        var initialYCoordinate = event.clientY;
        
        $('.second_screen .container').mousemove(function() {
            
            var biasX = event.clientX - initialXCoordinate;
            console.log('Bias X = ', biasX);
            console.log('x = ', event.clientX);
            
            var biasY = event.clientY - initialYCoordinate;
            console.log('Bias Y = ', biasY);
            console.log('y = ', event.clientY);
            
//            var angleBiasX = -biasY / 300;
            var angleBiasY = biasX / 50;
            
//            rotateAngleX += angleBiasX;
            rotateAngleY += angleBiasY;
            
            rotateObject();
            
        });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    3 devices
    

    
    $('.navigation-right').on('click', function() {
          if ($('.products').hasClass('is-first')) {
            $('.products').removeClass('is-first').addClass('is-second');
          } else if($('.products').hasClass('is-second')) {
            $('.products').removeClass('is-second').addClass('is-third');
          } else {
            $('.products').removeClass('is-third').addClass('is-first');
          }
        });

        $('.navigation-left').on('click', function() {
          if ($('.products').hasClass('is-first')) {
            $('.products').removeClass('is-first').addClass('is-third');
          } else if($('.products').hasClass('is-second')) {
            $('.products').removeClass('is-second').addClass('is-first');
          } else {
            $('.products').removeClass('is-third').addClass('is-second');
          }
        });
    
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
    
    console.log($('.slider').slick.swipeStart);
    
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