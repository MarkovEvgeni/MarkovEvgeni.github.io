document.addEventListener('DOMContentLoaded', function () {
  
  'use strict';
  
  //= third_party/jquery-3.2.0.min.js
  //= third_party/slick.min.js
  //= third_party/jquery.validate.min.js
  
  //  Form validation
  
  var topInput = $('.top-section input'); 
  var topSubmitButton = $('.top-section .submit_button');
  var bottomInput = $('footer input');
  var bottomSubmitButton = $('footer .submit_button');
  var topForm = $('#top_form');
  var bottomForm = $('#bottom_form');
  var timer = null;
  
  topSubmitButton.on('click', function(e) {
    validateInput(e, topInput, topForm);
  });
  
  bottomSubmitButton.on('click', function(e){
    validateInput(e, bottomInput, bottomForm);
  });
  
  topInput.on('keyup', function() {
    checkEmptiness(topInput, topForm)
  });
  
  bottomInput.on('keyup', function() {
    checkEmptiness(bottomInput, bottomForm)
  });
  
  function checkEmptiness(input, form) {
    if (timer != null) {
      clearTimeout(timer);
      timer = null;
    }
    if (input.val() == '') {
      form.addClass('empty');
      var errorMessageContainer = input.siblings('label.error');
      errorMessageContainer && errorMessageContainer.remove();
      form.validate().resetForm();
      timer = setTimeout(function() {
        form.removeClass('empty');
        form.removeClass('error');
      }, 3000);
    } else {
      form.removeClass('empty');
    }
  };
  
  function validateInput(e, input, form) {
    e.preventDefault();
    if (input.val() == '') {
      checkEmptiness(input, form);
    } else {
      if (!form.valid()) {
        form.addClass('error');
      } else {
        var submButton = form.find('a.submit_button');
        succesfulNotification(submButton);
      }
    }
  };
  
  function succesfulNotification(button) {
    button.html('Спасибо :)');
    button.addClass('notification');
    button.addClass('not_allowed');
    setTimeout(function() {
      button.removeClass('notification');
      setTimeout(function() {
        button.html('Отправить');
        button.removeClass('not_allowed');
      }, 550);
    }, 2500);
  };
  
  topForm.validate({
    rules: {
      'top_email': {
        email: true
      }
    },
    messages: {
      'top_email': {
        email: '<div class="message_body incorrect">Некорректный e-mail!</div>'
      }
    }
  });
  
  bottomForm.validate({
    rules: {
      'bottom_email': {
        email: true
      }
    },
    messages: {
      'bottom_email': {
        email: '<div class="message_body incorrect">Некорректный e-mail!</div>'
      }
    }
  });
  
  //  Slider implementation
  
  $('.slider_container').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true
  });
  
  // Share button func
  
  var shareButton = $('.header_buttons .share_button');
  
  shareButton.on('click', function(ev) {
//    ev.preventDefault();
    if ($(ev.target).parent().hasClass('share_button')) {
      $(this).toggleClass('active');
    }
  })
  
  // Main menu func
  
  var mobileMenu = $('.mobile_menu');
  
  var sectionSelectors = $('.mobile_menu .menu_section a.section_selector');
  
  $('.header_buttons .mobile_menu_opener').on('click', function(ev) {
    ev.preventDefault();
    mobileMenu.toggleClass('opened');
  });
  
  sectionSelectors.each(function(index, item) {
    $(item).on('click', function(ev) {
      ev.preventDefault();
      closeMobileMenu();
    });
  });
  
  function closeMobileMenu() {
    mobileMenu.removeClass('opened');
  };
  
  // Categories selector func
  
  var categoriesThumblers = $('.categories_container .thumblers__item');
  var categoriesItems = $('.content_container .content__item');
  
  categoriesThumblers.each(function(index, item) {
    $(item).on('click', function() {
      selectThumbler(index);
    });
  });
  
  function selectThumbler(index) {
    categoriesThumblers.each(function(index, item) {
      $(item).removeClass('active');
    });
    categoriesItems.each(function(index, item) {
      $(item).removeClass('visible');
    });
    $(categoriesThumblers[index]).addClass('active');
    $(categoriesItems[index]).addClass('visible');
  };
  
  // Air & Honours 'read more functionality'
  
  var honoursTextContainer = $('.honours_container__right p');
  var honoursReadMoreButton = $('.honours_container__right p + a');
  var honoursAllText = honoursTextContainer.html();
  var honoursCutText = honoursAllText.substring(0, 260) + '...';
  honoursTextContainer.html(honoursCutText);
  var honoursBackgroundContainer = $('#honours_section .parallax__layer--backs .figure');
  
  var airTextContainer = $('.air_container__right p');
  var airReadMoreButton = $('.air_container__right p + a');
  var airAllText = airTextContainer.html();
  var airCutText = airAllText.substring(0, 252) + '...';
  airTextContainer.html(airCutText);
  
  function toggleText(e, button, container, cutText, allText) {
    e = e || event || window.event;
    e.preventDefault();
    var fullText = button.attr('fullText');
    if (fullText) {
      container.html(cutText);
      button.html('Читать больше');
      button.attr('fullText', '');
    } else {
      button.attr('fullText', 'true');
      container.html(allText);
      button.html('Скрыть');
    };
  };
  
  airReadMoreButton.on('click', function(e) {
    toggleText(e, airReadMoreButton, airTextContainer, airCutText, airAllText);
  });
  honoursReadMoreButton.on('click', function(e) {
    toggleText(e, honoursReadMoreButton, honoursTextContainer, honoursCutText, honoursAllText);
    honoursBackgroundContainer.toggleClass('fulltext');
  });

  // Throttle function
  
  function throttle(func, ms) {
    var isThrottled = false,
        savedArgs,
        savedThis;
    
    function wrapper() {
      
      if (isThrottled) { 
        savedArgs = arguments;
        savedThis = this;
        return;
      }
      
      func.apply(this, arguments);
      
      isThrottled = true;
      
      setTimeout(function() {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
    
    return wrapper;
  };
  
  // Scroll animation logic
  
  var scrollButtons = $('.section_selector');
  scrollButtons.each(function(index, item) {
    $(item).on('click', function(e) {
      e.preventDefault();
      var anchor = $(item).attr('href');
      var scrollTarget = $(anchor);
      var currentOffset;
      var distance;
      var position;
      var scrollContainer;
      if (parallaxEnabled) {
        scrollContainer = $('.perspective');
        distance = scrollContainer.scrollTop() + scrollTarget.offset().top;
      } else {
        distance = scrollTarget.offset().top;
        scrollContainer = $('body,html');
      }
      var time = Math.abs(Math.ceil(distance / 4));
      if (time > 1200) {
        time = 1200;
      } else if (time < 300) {
        time = 300;
      };
      scrollContainer.animate({scrollTop: distance}, time);
    })
  });
  
  //  == Mobile Phone Images ==
  
  var mobilePhoneFirst = $('.categories_container .phone');
  var mobilePhoneSecond = $('.tasks_container .phone');
  var mobilePhoneThird = $('.honours_container .phone');
  var mobilePhoneFourth = $('.rating_container .phone');
  var mobilePhoneFifth = $('.air_container .phone');
  var mobilePhoneSixth = $('.partners_container .phone');
  
  function checkPosition(element, viewportHeight) {
    if (parallaxEnabled) {
      if (viewportHeight - element.offset().top > 200) {
        element.removeClass('moved');
      } else if (element.offset().top - viewportHeight > 50) {
        element.addClass('moved');
      }
    } else {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (element.offset().top - scrollTop - viewportHeight < -100 ) {
        element.removeClass('moved');
      } else if (element.offset().top - scrollTop - viewportHeight > 50) {
        element.addClass('moved');
      }
    }
  };
  
  var perspective = $('body > .perspective');
  var parallaxEnabled;
  
  function printScroll() {
    var windowHeight = document.documentElement.clientHeight;
    checkPosition(mobilePhoneFirst, windowHeight);
    checkPosition(mobilePhoneSecond, windowHeight);
    checkPosition(mobilePhoneThird, windowHeight);
    checkPosition(mobilePhoneFourth, windowHeight);
    checkPosition(mobilePhoneFifth, windowHeight);
    checkPosition(mobilePhoneSixth, windowHeight);
  };
  
  function getScrollableItem() {
    if (document.documentElement.clientWidth < 1100) {
      perspective.off('scroll');
      parallaxEnabled = false;
      $(window).on('scroll', function() {
        returnScroll();
      });
    } else {
      $(window).off('scroll');
      parallaxEnabled = true;
      perspective.on('scroll', function() {
        returnScroll();
      });
    }
  };
  
  getScrollableItem();
  
  $(window).on('resize', function() {
    returnResizable();
  });
  
  var returnResizable = throttle(getScrollableItem, 500);
  var returnScroll = throttle(printScroll, 500);
  
});
