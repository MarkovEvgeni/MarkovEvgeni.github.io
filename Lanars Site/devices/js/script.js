document.addEventListener('DOMContentLoaded', function () {
    
    // Really bad javascript — refactoring later

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


    
});