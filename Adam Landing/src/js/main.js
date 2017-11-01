document.addEventListener('DOMContentLoaded', function () {
  
  'use strict';
  
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
    scrollScreen(scrollHeight);
  }
  
  function scrollScreen(scrollHeightValue) {
    var currentScroll = window.pageYOffset;
    var scrollScreenInterval = setInterval(function () {
      if (currentScroll + 4 < scrollHeightValue) {
        window.scrollBy(0, 4);
        currentScroll += 4;
      } else {
        clearInterval(scrollScreenInterval);
        window.scrollBy({
          left: 0,
          top: document.documentElement.clientHeight,
          behavior: 'smooth'
        });
      }
    }, 4);
    return;
  } 
});