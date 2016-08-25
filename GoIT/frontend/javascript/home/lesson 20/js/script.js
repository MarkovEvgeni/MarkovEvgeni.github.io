$(function () {
    var $headersection = $('.main_menu li a');
    $headersection.on("click", function (e) {
        e.preventDefault();
        $headersection.removeClass("active");
        $(this).addClass("active");
    });
    var $accordion = $('.panels .panel');
    $accordion.on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("yellowback")) {
            $(this).removeClass("yellowback");
            $(this).addClass("whiteback");
            $(this).next('p').slideUp(300);
            $(this).prev('.plusminus').removeClass("yellowback");
            $(this).prev('.plusminus').removeClass("minus");
            $(this).prev('.plusminus').addClass("whiteback");
            $(this).prev('.plusminus').addClass("plus");
        } else {
            $(this).removeClass("whiteback");
            $(this).addClass("yellowback");
            $(this).next('p').slideDown(300);
            $(this).prev('.plusminus').removeClass("whiteback");
            $(this).prev('.plusminus').removeClass("plus");
            $(this).prev('.plusminus').addClass("yellowback");
            $(this).prev('.plusminus').addClass("minus");
        }
    });  
});