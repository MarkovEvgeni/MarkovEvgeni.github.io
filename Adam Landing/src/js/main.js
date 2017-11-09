//= third_party/jquery-3.2.1.min.js
//= third_party/jquery.easing.1.3.js

document.addEventListener('DOMContentLoaded', function () {
  
  'use strict';
  
  console.log(jQuery);
  
  setTimeout(function() {
    var glow = document.getElementsByClassName('first_screen__glow');
    var mask = document.getElementsByClassName('first_screen__mask');
    glow[0].classList.add('animation_started');
    mask[0].classList.add('animation_started');
    setTimeout(function() {
      startScrolling();
    }, 8500)
  }, 50);
  
  function startScrolling () {
    var firstScreen = document.getElementsByClassName('first_screen');
    var secondScreen = document.getElementsByClassName('second_screen');
    firstScreen[0].classList.add('animation_finished');
    secondScreen[0].classList.add('animation_finished');
    var scrollHeight = document.documentElement.clientHeight;
    jQueryScroll(scrollHeight);
  }

  
  function jQueryScroll(scrollHeightValue) {
    $('body,html').animate(
      {
        scrollTop: scrollHeightValue
      },
      1500,
      'easeInOutCubic'
    ).promise().then(insertGif);
  }
  
  function insertGif() {
    $('.second_screen .second_screen__gif_container').append('<img src="https://raw.githubusercontent.com/MarkovEvgeni/MarkovEvgeni.github.io/master/Adam%20Landing/build/assets/img/second.gif" alt="">');
  }
  
});
