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
        var self=this;
        setTimeout(function(){
            $(self).on("mouseenter", bindEvent);
        }, 1800);
        var animationActive = true;
        setTimeout(function() {
            animationActive = false;
        }, 1000);
        var video = $(this).children('.video_up')[0];
        $(this).children('.video_up').css('opacity', '1');
        $(this).children('.video_down').css('opacity', '0');
        var backVideo = $(this).children('.video_down')[0];
        backVideo.currentTime = 0.010;
        video.play();
        $(this).on("mouseleave", mouseLeaveEvent);
        function mouseLeaveEvent() {
            $(this).off("mouseleave", mouseLeaveEvent);
            if (!animationActive) {
                $(this).children('.video_down').css('opacity', '1');
                $(this).children('.video_up').css('opacity', '0');
                var backVideo = $(this).children('.video_up')[0];
                backVideo.currentTime = 0.010;
                var video = $(this).children('.video_down')[0];
                video.play();
            } else {
                var self = this;
                setTimeout(function() {
                    $(self).children('.video_down').css('opacity', '1');
                    $(self).children('.video_up').css('opacity', '0');
                    var backVideo = $(self).children('.video_up')[0];
                    backVideo.currentTime = 0.010;
                    var video = $(self).children('.video_down')[0];
                    video.play();
                }, 500);
            } 
        };
    };
 
//    function playDown() {
//        console.log(testing);
//        $(this).children('.video_up').css('opacity', '0');
//        $(this).children('.video_down').css('opacity', '1');
//        var video = $(this).children('.video_down')[0];
//        video.play();
//    };
    
    
    $('.our_team_member_video').each(function() {
        $(this).on("mouseenter", bindEvent);
    });
     
//    $('.our_team_member_video').each(function() {
//        $(this).mouseleave(function() {
////      Передаем контекст this, чтобы hover вызывал эффект внутри нужного div.
//            var self = this;
//            var g = playDown.bind(self);
//            g();
//        })
//    });

});