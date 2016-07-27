(function ($) {
    
    $.fn.carousel = function () {
        'use strict';
        
        var carouselList = $('.carousel-list');
        carouselList.css({
            listStyle: 'none',
            marginTop: '10px',
            width: '10000px',
            position: 'relative'
        });
        console.log(carouselList);
        
        var carouselElement = $('.carousel-element');
        carouselElement.css({
            display: 'block',
            marginRight: '25px',
            float: 'left'
        });
        
        var carouselElementImage = $('.carousel-element img');
        carouselElementImage.css("maxWidth", "108px");
        
        var carouselHider = $('.carousel-hider');
        carouselHider.css({
            width: '640px',
            overflow: 'hidden',
            float: 'left'
        });
        
        var carouselArrowLeft = $('.carousel-arrow-left');
        carouselArrowLeft.css({
            float: 'left',
            display: 'block',
            border: '1px solid grey',
            backgroundColor: 'lightgrey',
            padding: '5px',
            marginTop: '30px',
            marginRight: '25px'
        });
        
        var carouselArrowRight = $('.carousel-arrow-right');
        console.log(carouselArrowRight);
        carouselArrowRight.css({
            float: 'left',
            display: 'block',
            border: '1px solid grey',
            backgroundColor: 'lightgrey',
            padding: '5px',
            marginTop: '30px',
            marginLeft: '25px'
        });
        
        carouselArrowRight.on("mouseenter", function() {
            $(this).css({
                cursor: 'pointer',
                backgroundColor: 'grey'
            })
        } );
        
        carouselArrowLeft.on("mouseleave", function() {
            $(this).css({
                cursor: 'default',
                backgroundColor: 'lightgrey'
            })
        } );
        
        carouselArrowLeft.on("mouseenter", function() {
            $(this).css({
                cursor: 'pointer',
                backgroundColor: 'grey'
            })
        } );
        
        carouselArrowRight.on("mouseleave", function() {
            $(this).css({
                cursor: 'default',
                backgroundColor: 'lightgrey'
            })
        } );
        
        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
 
        var pixelsOffset = 133;
        var currentLeftValue = 0;
    
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;
 
        leftUIEl.click(function () {
            if (currentLeftValue === maximumOffset) {
                
            } else {
                currentLeftValue += 133;
                elementsList.animate({ left : currentLeftValue + "px"}, 900);
            }
        });
    
        rightUIEl.click(function () {
            if (currentLeftValue !== minimumOffset) {
                currentLeftValue -= 133;
                elementsList.animate({ left : currentLeftValue + "px"}, 900);
            } else {
                
            }
        });
    return this;    
    }
})(jQuery);