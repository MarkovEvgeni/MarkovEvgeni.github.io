document.addEventListener('DOMContentLoaded', function () {

    'use strict';
    
    var scrollingFeed = $('.scrolling_feed');
    var index = 1;
    var arr = [1, 2, 3, 4, 5, 6];
    var arr3 = [1, 2, 3];
    
    (function () {
        $.each(arr, function(index, value) {
            (function(value) {
                $('.dots_full__item_' + value).on('click', function() {
                    scrollFeed(value)
                });
            }) (value);
        });
    })();
    
    $('.dots__item_2').on('click', nextSlide);
    
    function nextSlide() {
        var num = index + 1;
        scrollFeed(num);
    };
    
    function prevSlide() {
        var num = index - 1;
        scrollFeed(num); 
    };
    
    function scrollFeed(num) {
        if (num == 0 || num == 7) {
            return;
        }
        $.each(arr, function(index, value) {
            $('.dots_full__item_' + value).removeClass('active');
            $('.slide_' + value).removeClass('active');
        });
        $.each(arr3, function(index, value) {
            $('.dots__item_' + value).off();
            $('.dots__item_' + value).removeClass('active');
            $('.dots__item_' + value).removeClass('hidden');
        });
        $('.dots_full__item_' + num).addClass('active');
        $('.slide_' + num).addClass('active');
        scrollingFeed.removeClass('active_' + index);
        scrollingFeed.addClass('active_' + num);
        index = num;
        if (num == 1) {
            $('.dots__item_1').addClass('active');
            $('.dots__item_2').on('click', nextSlide);
            $('.dots__item_3').addClass('hidden');
            return;
        };
        if (num == 6) {
            $('.dots__item_1').addClass('hidden');
            $('.dots__item_2').on('click', prevSlide);
            $('.dots__item_3').addClass('active');
            return;
        };
        $('.dots__item_1').on('click', prevSlide);
        $('.dots__item_2').addClass('active');
        $('.dots__item_3').on('click', nextSlide);
        return;
    }; 
    
    var body  = document.body;
    
    body.addEventListener("wheel", onWheel);
    
    $('body').keydown(function(event) {
        if (event.which == 40) {
            nextSlide();
        } else if (event.which == 38) {
            prevSlide();
        } else {
            return
        }
    }); 
    
    function onWheel(e) {
        
        e = e || window.event;
        
        var delta = e.deltaY || e.detail || e.wheelDelta;
        
        if (delta < 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    };
    
});