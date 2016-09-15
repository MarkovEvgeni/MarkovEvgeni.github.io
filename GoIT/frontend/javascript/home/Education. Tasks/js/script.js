document.addEventListener('DOMContentLoaded', function () {
    
    "use strict"
    
    var accordion = $('.module-description');
    accordion.on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).addClass("close");
            $(this).next('.task').slideUp(300);
            $(this).siblings('.solution').slideUp(300);
        } else {
            $(this).removeClass("close");
            $(this).addClass("open");
            $(this).next('.task').slideDown(300);
            $(this).siblings('.solution').slideDown(300);
        }
    });
    
    var $link = $('.contents_list a');
    console.log($link);
    
    $link.on("click", function () {
            var reference = $(this).attr("href");
            var element = $(reference);
            if (element.hasClass("open")) {
                
                } else {
                    console.log("close");
                    element.removeClass("close");
                    element.addClass("open");
                    element.next('.task').slideDown(300);
                    element.siblings('.solution').slideDown(300);
                }
        }
    );
    
    
    var color = $('h2');
    color.hover(
        function () {
            $(this).animate({
                color: "rgb(70,130,180)"
            }, 600);
        },
        function () {
            $(this).animate({
                color: "black"
            }, 100);
        }
    );
    
});