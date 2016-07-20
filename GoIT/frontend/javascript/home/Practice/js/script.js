$(function () {
    $('.block').click (function () {
        console.log("block");
        console.log(this);
        var width = Math.random() * (500 - 100) + 100;
        var height = Math.random() * (500 - 100) + 100;
        $(this).css ({
            width: width,
            height: height    
        })
    })
});