document.addEventListener('DOMContentLoaded', function () {
    
    $('.slider').slick({
        dots: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
    });
    
    var $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
            columnWidth: 67,
            itemSelector: '.grid-item'
        });
    });
    

    function showContainer (element) {
        $('.services__selector__container__item').each(function () {
            $( this ).removeClass('hidden');
            $( this ).addClass('hidden');
        });    
            var services = $('.services__selector__container__item');
            services[element].classList.remove('hidden');
    };
    
    var servicesSelectorCollection = $('.services__selector__item');
    
    $(servicesSelectorCollection[0]).mouseenter({numb:0}, function (event) {
        showContainer(event.data.numb);
    });
    
    $(servicesSelectorCollection[1]).mouseenter({numb:1}, function (event) {
        showContainer(event.data.numb);
    });
    
    $(servicesSelectorCollection[2]).mouseenter({numb:2}, function (event) {
        showContainer(event.data.numb);
    });
    
    $(servicesSelectorCollection[3]).mouseenter({numb:3}, function (event) {
        showContainer(event.data.numb);
    });
    
    var test = $('.our_team__member__name')[0];
    console.log(test);
    
    
    var throttled = false; 
    
    function upName (element, t, f) {
        
        var t=144;
        var f = 24;
        var fps = f, time = t, steps = time / fps;
        var distance = $(element).css('bottom');
        distance = parseInt(distance);
        var step = (0-distance)/steps;
        
        var intervalUp = setInterval(function(){
            if (distance<0) {
                distance += step;
                var dynamicDistance = distance + 'px';
                $(element).css('bottom', dynamicDistance); 
                steps -=1;
            } else {
                clearInterval(intervalUp);
            }
        }, steps);
  
    };
    
    function downName (element, t, f) {
            var t=144;
            var f = 24;
            var fps = f, time = t, steps = time / fps;
            var distance = $(element).css('bottom');
            distance = parseInt(distance);
            var step = (24-distance)/steps;

            var intervalDown = setInterval(function(){
                if (distance>-24) {
                    distance -= step;
                    var dynamicDistance = distance + 'px';
                    $(element).css('bottom', dynamicDistance); 
                    steps -=1;
                } else {
                    clearInterval(intervalDown);
                }
            }, steps);
        
    };
    
    function transparencyUp (element) {
        var transparency = $(element).css('opacity');
        var transparency2 = parseInt(transparency);
        
        var inTrUP = setInterval(function() {
            
            if (transparency2<1) {
                transparency2 += 0.1;
                $(element).css('opacity', transparency2);
            } else {
                clearInterval(inTrUP);
            }
            
        }, 10)
    };
        
    function transparencyDown (element) {
        var transparency = $(element).css('opacity');
        var transparency2 = parseInt(transparency);
        
        var inTrDn = setInterval(function() {
            
            if (transparency2>0) {
                transparency2 -= 0.1;
                $(element).css('opacity', transparency2);
            } else {
                clearInterval(inTrDn);
            }
            
        }, 10)
    };        
    
    
    $('.our_team__member').each(function () {
            $(this).mouseenter(function () {
                    
                if (!throttled) {
                    
                    var listener = $(this).children(".our_team__member__name")[0];
                    var icons = $(listener).children(".contact");
                    var opacBlock = $(this).find(".our_team__member__skills")[0];



                    upName(listener);
                    icons.removeClass('hidden');
                    $(listener).css('background', 'transparent');
                    transparencyUp(opacBlock);
                
                    throttled = true;
                
                    setTimeout(function() {
                        throttled = false;
                    }, 10);
                }     
            })
    })
    
    
    function menuOpen (element) {
        $(element).animate({"width": "210px", "padding": "5px"}, 3000, "easeOutElastic", function() {
            $(element).addClass('open');
        })
    };
    
    function menuClose (element) {
        $(element).animate({"width": "0px", "padding": "0px"}, 3000, "easeOutBounce", function() {
            $(element).removeClass('open');
        })
    };
    
    
    var menuOpener = $('.header__first_line__menu_icon');
    menuOpener.click(function () {
        var menu = $('.menu_wrapper')[0];
        menuOpen(menu);
    });
    
    var menuCloser = $('.close_menu');
    menuCloser.click(function () {
        var menu = $('.menu_wrapper')[0];
        menuClose(menu);
    });
    
    
    $('.our_team__member').each(function () {
        $(this).mouseleave(function () {
            
            if (!throttled) {
            
                var opacBlock = $(this).find(".our_team__member__skills")[0];
                transparencyDown(opacBlock);
                var listener = $(this).children(".our_team__member__name")[0];
                $(listener).css('background', 'white');
                var icons = $(listener).children(".contact");
                icons.addClass('hidden');
                downName(listener);
                
                throttled = true;
                
                setTimeout(function() {
                    throttled = false;
                }, 10);
            }    
                
        })
    })
    
});