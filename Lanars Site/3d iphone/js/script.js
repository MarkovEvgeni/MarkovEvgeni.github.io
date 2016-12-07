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


    var phoneSlideshow = (function() {

        function init() {
            [].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
                var open = false;
                el.querySelector( 'button' ).addEventListener( 'click', changeView, false );
                function changeView() {
                    if( open ) {
                        classie.remove( el, 'ms-view-layers' );
                    }
                    else {
                        classie.add( el, 'ms-view-layers' );
                    }
                    open = !open;
                }
            } );
        }

        init();

    })();
    
    
//    Three devices
    
    
    
});