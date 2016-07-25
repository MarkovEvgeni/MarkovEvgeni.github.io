$(function () {
    $('.jcarousel').on('jcarousel:targetin', 'li', function () {
        $(this).addClass('active');
    });
    $('.jcarousel').on('jcarousel:targetout', 'li', function () {
        $(this).removeClass('active');
    });
    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        });
    $('.jcarousel').jcarousel({
        animation: 'slow',
        wrap: 'both'
    });
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });
    $('select').select2();
    $('.icheck').iCheck({
        checkboxClass: 'icheckbox_square-yellow',
        radioClass: 'iradio_square-yellow'
    });
});
var $hoverItem = $('.hidenMenu');
$hoverItem.hover(
    function () {
        var $hidenMenu = $(this).children("ul");
        if ($hidenMenu.hasClass("opened")) {
            console.log("oops. It's already opened.");
        } else {
            console.log($hidenMenu);
            $hidenMenu.addClass("opened");
            $hidenMenu.slideDown(600);
            $hidenMenu.animate({
                backgroundColor: "rgb(225,75,75)"
            }, 300);
        }
    },
    function () {
        var $hidenMenu = $(this).children("ul");
        $hidenMenu.stop(true, false).slideUp(600, function () {
            $hidenMenu.removeClass("opened");
        });
        $hidenMenu.animate({
            backgroundColor: "rgb(255,100,100)"
        }, 100);
    }
);
var steps;
var colors;
function openEnclosedMenu(el, t, f) {
    t = 600;
    f = 24;
    var fps = f;
    var time = t;
    steps = time / fps;
    var visota = 0;
    el.preventDefault();
    var enclosedMenu = this.lastElementChild;
    var blokirator = parseFloat(enclosedMenu.style.height);
    console.log('blokirator', blokirator);
    console.log('NAVELI');
    if (blokirator > 0) {
        console.log("oops. It's already opened.");
    } else {interval = setInterval(function () {
        if (steps > 0) {
            var step = 205 / (time / fps);
            visota += step;
            enclosedMenu.style.height = visota + "px";
            steps -= 1;
            console.log("steps", steps);
        } else {
            clearInterval(interval);
            enclosedMenu.style.overflow = 'visible';
            var color1 = 255;
            var color2 = 100;
            var color3 = 100;
            colors = color1 + color2;
            console.log(colors);
            interval2 = setInterval(function () {
                if (colors > 150) {
                    color1 -= 6;
                    color2 -= 5;
                    color3 -= 5;
                    colors = color2 + color3;
                    enclosedMenu.style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
                    console.log(enclosedMenu.style.backgroundColor);
                    console.log(colors);
                } else {
                    clearInterval(interval2);
                }
            }, 20);
        }
    }, time / steps);
           }
}
function closeEnclosedMenu (el, t, f) {
    t = 240;
    f = 24;
    var fps = f;
    var time = t;
    steps = time / fps;
    var visota = 205;
    el.preventDefault();
    var enclosedMenu = this.lastElementChild;
    enclosedMenu.style.backgroundColor = "rgb(255,100,100)";
    enclosedMenu.style.overflow = 'hidden';
    var blokirator = parseFloat(enclosedMenu.style.height);
    console.log('blokirator', blokirator);
    if (blokirator < 205) {
        steps = 0;
        setTimeout(function () {
            enclosedMenu.style.overflow = 'hidden';
            colors = 100;
            enclosedMenu.style.backgroundColor = "rgb(255,100,100)";
        }, 40);
        enclosedMenu.style.height = 0 + 'px';
        console.log(steps);
    } else {var interval = setInterval(function () {
        if (steps > 0) {
            var step = 205 / (time / fps);
            visota -= step;
            enclosedMenu.style.height = visota + "px";
            steps -= 1;
        } else {
            clearInterval(interval);
            enclosedMenu.style.overflow = 'hidden';
        }
    }, time / steps);
           }
}
var hoverItem2 = document.querySelectorAll('.hidenMenu2');
for (i = 0; i < hoverItem2.length; i++) {
    hoverItem2[i].addEventListener("mouseenter", openEnclosedMenu);
    hoverItem2[i].addEventListener("mouseleave", closeEnclosedMenu);
}