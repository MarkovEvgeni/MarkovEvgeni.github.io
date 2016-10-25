document.addEventListener('DOMContentLoaded', function () {
    
    $('.slider').slick({
        dots: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
    });
    
    var $grid = $('.grid').imagesLoaded(function () {
        $grid.masonry({
            columnWidth: 67,
            itemSelector: '.grid-item'
        });
    });
    

    function showContainer(element) {
        $('.services__selector__container__item').each(function () {
            $(this).removeClass('hidden');
            $(this).addClass('hidden');
        });
        var services = $('.services__selector__container__item');
        services[element].classList.remove('hidden');
    }
    
    var servicesSelectorCollection = $('.services__selector__item');
    
    $(servicesSelectorCollection[0]).mouseenter({numb: 0}, function (event) {
        showContainer(event.data.numb);
    });
    
    $(servicesSelectorCollection[1]).mouseenter({numb: 1}, function (event) {
        showContainer(event.data.numb);
    });
    
    $(servicesSelectorCollection[2]).mouseenter({numb: 2}, function (event) {
        showContainer(event.data.numb);
    });
    
    $(servicesSelectorCollection[3]).mouseenter({numb: 3}, function (event) {
        showContainer(event.data.numb);
    });
    
    
    var throttled = false, first = "on", second = "on", third = "on", fourth = "on", fifth = "on", sixth = "on";
    
    function upName(element, switchName, t, f) {
        if (switchName === "on") {
            switchName = "off";
            var t = 288, f = 24, fps = f, time = t, steps = time / fps, distance = $(element).css('bottom');
            distance = parseInt(distance);
            var step = (0 - distance) / steps;

            var intervalUp = setInterval(function () {
                if (distance < 0) {
                    distance += step;
                    var dynamicDistance = distance + 'px';
                    $(element).css('bottom', dynamicDistance);
                    steps -= 1;
                } else {
                    clearInterval(intervalUp);
                    $(element).css('z-index', 15);
                }
            }, steps);
        } else {}
    }
    
    var toggle = "up"
    
    function downName(element, switchName, t, f) {
        if (switchName === "on") {
            switchName = "off";
            var t = 288, f = 24, fps = f, time = t, steps = time / fps;
            var distance = $(element).css('bottom');
            distance = parseInt(distance);
            var step = (24 - distance) / steps;

            var intervalDown = setInterval(function () {
                if (distance > -24) {
                    distance -= step;
                    var dynamicDistance = distance + 'px';
                    $(element).css('bottom', dynamicDistance);
                    steps -= 1;
                } else {
                    clearInterval(intervalDown);
                    $(element).css('z-index', 1);
                }
            }, steps);
        } else {}
        
    }
    
    function transparencyUp(element, switchName2) {

        var transparency = $(element).css('opacity');
        var transparency2 = parseInt(transparency);
        
        var inTrUP = setInterval(function () {
            
            if (switchName2 === "on") {
                if (transparency2 < 1 && toggle === 'up') {
                    transparency2 += 0.008;
                    $(element).css('opacity', transparency2);
                } else {
                    clearInterval(inTrUP);
                    toggle = 'up';
                    console.log('toggle up', toggle);
                }
            } else {
                clearInterval(inTrUP);
                $(element).css('opacity', 1);
            }
                

        }, 4);
    } 
            
        
        
    function transparencyDown(element, switchName2) {
        
        console.log(element, switchName2);
        if (switchName2 != "on") {
            toggle = 'down';
            $(element).css('opacity', 0);
            console.log('toggle down', toggle);
        } else {
            
            var transparency = $(element).css('opacity');
            var transparency2 = parseInt(transparency);

            var inTrDn = setInterval(function () {

                if (transparency2 > 0) {
                    transparency2 -= 0.008;
                    $(element).css('opacity', transparency2);
                } else {
                    clearInterval(inTrDn);
                }
            }, 4);
        }
        
    }        
        
    
    
    $('.our_team__member__hoverblock').each(function () {
        $(this).mouseenter(function () {
                    
            if (!throttled) {
                
                    
                var listener = $(this).siblings(".our_team__member__name")[0];
                var icons = $(listener).children(".contact");
                var listener2 = $(this).siblings(".our_team__member__photo")[0];
                var opacBlock = $(listener2).find(".our_team__member__skills")[0];

                if (this.parentNode.classList.contains('first_member')) {
                    upName(listener, first);
                    first = "off";
                    setTimeout(function () {
                        first = "on";
                    }, 50);
                } else {
                    if (this.parentNode.classList.contains('second_member')) {
                        upName(listener, second);
                        second = "off";
                        setTimeout(function () {
                            second = "on";
                        }, 50);
                    } else {
                        upName(listener, third);
                        third = "off";
                        setTimeout(function () {
                            third = "on";
                        }, 50);
                    }
                };
                    
                icons.removeClass('hidden');
                $(listener).css('background', 'transparent');
                    
                if (this.parentNode.classList.contains('first_member')) {
                    transparencyUp(opacBlock, fourth);
                    fourth = "off";
                    setTimeout(function () {
                        fourth = "on";
                    }, 500);
                } else {
                    if (this.parentNode.classList.contains('second_member')) {
                        transparencyUp(opacBlock, fifth);
                        fifth = "off";
                        setTimeout(function () {
                            fifth = "on";
                        }, 500);
                    } else {
                        transparencyUp(opacBlock, sixth)
                        sixth = "off";
                        setTimeout(function () {
                            sixth = "on";
                        }, 500);
                    }
                };
                
                throttled = true;
            
                setTimeout(function () {
                    throttled = false;
                }, 0);
            }
        })
    })
    
    
    function menuOpen(element) {
        $(element).animate({"width": "210px", "padding": "5px"}, 3000, "easeOutElastic", function () {
            $(element).addClass('open');
        });
    }
    
    function menuClose(element) {
        $(element).animate({"width": "0px", "padding": "0px"}, 3000, "easeOutBounce", function () {
            $(element).removeClass('open');
        });
    }
    
    
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
    
    
    $('.our_team__member__hoverblock').each(function () {
        $(this).mouseleave(function (event) {
            
            console.log('mouseout');
            console.log(this);
            
            
            var parent1 = this.parentNode;
            var parent2 = parent1.parentNode;
            var parent3 = parent2.parentNode;
            var parent4 = parent3.parentNode;
            var brothers = $(parent2).children('.our_team__member');
            var brother1 = $(brothers[0]).children('.our_team__member__hoverblock')[0];
            var brother2 = $(brothers[1]).children('.our_team__member__hoverblock')[0];
            var brother3 = $(brothers[2]).children('.our_team__member__hoverblock')[0];
            
            console.log(brothers);
            console.log(brother1, brother2, brother3);
            console.log(parent1, parent2, parent3, parent4);
            console.log(event.relatedTarget);    
            
            if (event.relatedTarget === parent2 || event.relatedTarget === parent3 || event.relatedTarget === parent4) {
                if (!throttled) {
                    var listener2 = $(this).siblings(".our_team__member__photo")[0];
                    var opacBlock = $(listener2).find(".our_team__member__skills")[0];

                    if (this.parentNode.classList.contains('first_member')) {
                        transparencyDown(opacBlock, fourth);
                        fourth = "off";
                        setTimeout(function () {
                            fourth = "on";
                        }, 50);
                    } else {
                        if (this.parentNode.classList.contains('second_member')) {
                            transparencyDown(opacBlock, fifth);
                            fifth = "off";
                            setTimeout(function () {
                                fifth = "on";
                            }, 50);
                        } else {
                            transparencyDown(opacBlock, sixth)
                            sixth = "off";
                            setTimeout(function () {
                                sixth = "on";
                            }, 50);
                        }
                    };

                    var listener = $(this).siblings(".our_team__member__name")[0];
                    $(listener).css('background', 'white');
                    var icons = $(listener).children(".contact");
                    icons.addClass('hidden');

                    if (this.parentNode.classList.contains('first_member')) {
                        $(listener).css('width', '72%');
                        $(listener).css('left', '14%');
                        downName(listener, first);
                        first = "off";
                        setTimeout(function () {
                            first = "on";
                        }, 50);
                    } else {
                        if (this.parentNode.classList.contains('second_member')) {
                            $(listener).css('width', '72%');
                            $(listener).css('left', '14%');
                            downName(listener, second);
                            second = "off";
                            setTimeout(function () {
                                second = "on";
                            }, 50);
                        } else {
                            $(listener).css('width', '72%');
                            $(listener).css('left', '14%');
                            downName(listener, third);
                            third = "off";
                            setTimeout(function () {
                                third = "on";
                            }, 50);
                        }
                    };                

                    throttled = true;

                    setTimeout(function () {
                        throttled = false;
                    }, 0);
                }    
                
            } else {
                var listener = $(this).siblings(".our_team__member__name")[0];
                $(listener).css('width', '100%');
                $(listener).css('left', '0%');
                $(listener).mouseleave(function (event) {
                    var hoverblock = $(this).siblings(".our_team__member__hoverblock")[0];
                    
                    if (event.relatedTarget != hoverblock) {
                        if (!throttled) {
                            var listener2 = $(this).siblings(".our_team__member__photo")[0];
                            var opacBlock = $(listener2).find(".our_team__member__skills")[0];

                            if (this.parentNode.classList.contains('first_member')) {
                                transparencyDown(opacBlock, fourth);
                                fourth = "off";
                                setTimeout(function () {
                                    fourth = "on";
                                }, 500);
                            } else {
                                if (this.parentNode.classList.contains('second_member')) {
                                    transparencyDown(opacBlock, fifth);
                                    fifth = "off";
                                    setTimeout(function () {
                                        fifth = "on";
                                    }, 500);
                                } else {
                                    transparencyDown(opacBlock, sixth)
                                    sixth = "off";
                                    setTimeout(function () {
                                        sixth = "on";
                                    }, 500);
                                }
                            };

                            var listener = this;
                            $(listener).css('background', 'white');
                            var icons = $(listener).children(".contact");
                            icons.addClass('hidden');

                            if (this.parentNode.classList.contains('first_member')) {
                                $(listener).css('width', '72%');
                                $(listener).css('left', '14%');
                                downName(listener, first);
                                first = "off";
                                setTimeout(function () {
                                    first = "on";
                                }, 50);
                            } else {
                                if (this.parentNode.classList.contains('second_member')) {
                                    $(listener).css('width', '72%');
                                    $(listener).css('left', '14%');
                                    downName(listener, second);
                                    second = "off";
                                    setTimeout(function () {
                                        second = "on";
                                    }, 50);
                                } else {
                                    $(listener).css('width', '72%');
                                    $(listener).css('left', '14%');
                                    downName(listener, third);
                                    third = "off";
                                    setTimeout(function () {
                                        third = "on";
                                    }, 50);
                                }
                            };                

                            throttled = true;

                            setTimeout(function () {
                                throttled = false;
                            }, 0);
                        } 
                    } else {
                    }
                })
            }
        })
    })
    
});