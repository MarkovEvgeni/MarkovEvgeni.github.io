document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    function bindEvent() {
//      Передаем контекст this, чтобы hover вызывал эффект внутри нужного div.
        $(this).off("mouseenter", bindEvent);
        var self = this;
        var g = playUp.bind(self);
        g();
    };
    
    function playUp() {
        console.log('try-try');
        var self=this;
        var animationActive = true;
        var backVideo = $(this).children('.video_down')[0];
        var video = $(this).children('.video_up')[0];
        video.currentTime = 0.000;
        video.play();
        video.onended = function() {
            animationActive = false;
        };
        setTimeout(function() {
            $(self).children('.video_up').css('opacity', '1');
            $(self).children('.video_down').css('opacity', '0');
        }, 50);
        $(this).on("mouseleave", mouseLeaveEvent);
        function mouseLeaveEvent() {
            $(this).off("mouseleave", mouseLeaveEvent);
            if (!animationActive) {
                var self = this;
                var backVideo = $(this).children('.video_up')[0];
                var video = $(this).children('.video_down')[0];
                video.currentTime = 0.000;
                video.play();
                video.onended = function() {
                    $(self).on("mouseenter", bindEvent);
                };
                setTimeout(function() {
                    $(self).children('.video_down').css('opacity', '1');
                    $(self).children('.video_up').css('opacity', '0');
                }, 50);
            } else {
                var self = this;
                setTimeout(function() {
                    var backVideo = $(self).children('.video_up')[0];
                    var video = $(self).children('.video_down')[0];
                    video.currentTime = 0.000;
                    video.play();
                    video.onended = function() {
                        $(self).on("mouseenter", bindEvent);
                    };
                    setTimeout(function() {
                        $(self).children('.video_down').css('opacity', '1');
                        $(self).children('.video_up').css('opacity', '0');
                    }, 50);
                }, 500);
            } 
        };
    };
    
    $('.our_team_member_video').each(function() {
        $(this).on("mouseenter", bindEvent);
    });
     

});