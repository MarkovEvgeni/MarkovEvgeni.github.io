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
console.log($hoverItem);
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