document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    function toggleClassMenu() {
        $('.popup_container').toggleClass('popup_container_visible');
        $('.popup_container').addClass('popup_container_animatable');
    };
    
    function OnTransitionEnd() {
        $('.popup_container').removeClass('popup_container_animatable');
    };
    
    $('.popup_container').on('transitionend webkitTransitionEnd oTransitionEnd', function() {
        $('.popup_container').removeClass('popup_container_animatable');
    });
    
    $('.punchline h1').on('click', function() {
        toggleClassMenu();
    })
    
});