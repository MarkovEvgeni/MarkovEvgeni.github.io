document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    //= third_party/jquery-3.2.0.min.js
    //= third_party/slick.min.js
    //= third_party/jquery.validate.min.js
  
  
//  Detect iOS device
  
  var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  var body = $('body');
  
  function detectIOS() {
    console.log(iOS);
    if (iOS) {
      body.addClass('ios');
    } else {
      return;
    }
  }
  
  detectIOS();
  
//    Sliders
  
    $('.top_section__slider').slick({
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 761,
          settings: {
            dots: true,
            appendDots: $('.top-section .dots_container'),
            dotsClass: 'dots'
          }
        }
      ]
    });
  
    $('.simple_section_slider').slick({
      dots: false,
      arrows: true,
      appendArrows: $('.simple .hint .arrows'),
      prevArrow: '<div class="slick-prev slick-button"></div>',
      nextArrow: '<div class="slick-next slick-button"></div>',
      responsive: [
        {
          breakpoint: 760,
          settings: {
            arrows: false,
          }
        }
      ]
    });
  
    $('.simple_section_slider').on('afterChange', function(slick, currentSlide) {
      var index = currentSlide.currentSlide;
      selectItem(simpleOptions[index]);
    });
  
    $('.standard_section_slider').on('afterChange', function(slick, currentSlide) {
      var index = currentSlide.currentSlide;
      selectItem(standardOptions[index]);
    });
  
    $('.standard_section_slider').slick({
      dots: false,
      arrows: true,
      appendArrows: $('.standard .arrows'),
      prevArrow: '<div class="slick-prev slick-button"></div>',
      nextArrow: '<div class="slick-next slick-button"></div>',
      responsive: [
        {
          breakpoint: 760,
          settings: {
            arrows: false,
          }
        }
      ]
    });
  
//    Form validation
  
    $('#contactForm').validate({
      rules: {
        'email': {
          required: true,
          email: true
        },
        'name': {
          required: true,
          minlength: 3
        }
      }
    });
  
  
//    Custom selectors
  
  
  var customSelectors = $('.pseudo_selector__head');
  var customSelectorOptions = $('.pseudo_selector__body .item');
  var simpleOptions = $('.simple .pseudo_selector__body .item');
  var standardOptions = $('.standard .pseudo_selector__body .item');
  
  function makeActive(selector) {
    $(selector).addClass('active');
    setTimeout(function() {
      $(body).on('click', function() {
          makeNotActive(selector);
      });
    }, 10);
  };
  
  function makeNotActive(selector) {
    $(selector).removeClass('active');
    $(body).off('click');
  };
  
  function selectItem(option) {
    var selectorsPlaceholder = $(option).parent('.pseudo_selector__body').siblings('.pseudo_selector__head').find('p');
    var siblingsSelectors = $(option).parent('.pseudo_selector__body').find('.item');
    var currentIndex;
    var slider = $(option).parents('.pseudo_selector_container').siblings('.battery_slider');
    siblingsSelectors.each(function(index, item) {
      $(item).removeClass('selected');
      if (item == option) {
        currentIndex = index;
      }
    });
    var textValue = $(option).html();
    $(option).addClass('selected');
    selectorsPlaceholder.html(textValue);
    slider.slick('slickGoTo', currentIndex);
  };
  
  customSelectors.each(function(index, item) {
    $(item).on('click', function() {
      makeActive(item);
    })
  });
  
  customSelectorOptions.each(function(index, item) {
    $(item).on('click', function() {
      selectItem(item);
    })
  });
  
});