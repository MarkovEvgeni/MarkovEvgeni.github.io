$(function () {
    var $tab = $('.tab');
    var $firstTab = $('.first_tab');
    var $secondTab = $('.second_tab');
    var $thirdTab = $('.third_tab');
    var $p = $('.p');
    $firstTab.on("click", function (e) {
        e.preventDefault();
        $tab.removeClass("active_tab");
        console.log("Проверка");
        $(this).addClass("active_tab");
        var $number = 1;
        $p.removeClass("show");
        $p.addClass("hide");
        var $pi = ('.p' + $number);
        console.log($pi);
        $pi = $($pi);
        $pi.addClass("show");
    });
    $secondTab.on("click", function (e) {
        e.preventDefault();
        $tab.removeClass("active_tab");
        console.log("Проверка");
        $(this).addClass("active_tab");
        var $number = 2;
        $p.removeClass("show");
        $p.addClass("hide");
        var $pi = ('.p' + $number);
        console.log($pi);
        $pi = $($pi);
        $pi.addClass("show");
    });
    $thirdTab.on("click", function (e) {
        e.preventDefault();
        $tab.removeClass("active_tab");
        console.log("Проверка");
        $(this).addClass("active_tab");
        var $number = 3;
        $p.removeClass("show");
        $p.addClass("hide");
        var $pi = ('.p' + $number);
        console.log($pi);
        $pi = $($pi);
        $pi.addClass("show");
    });
    $input = $('.input');
    $input.hover(
        function () {
            var $hint1 = $('.hint');
            $hint1.remove();
            var $hint = $(this).attr("title");
            $(this).removeAttr("title");
            var $hint1 = ('<div class="hint"></div>');
            var $line = $(this).closest(".line");
            console.log($line);
            $line.append($hint1);
            $hint1 = $('.hint');
            $hint1.css ({
                boxShadow: 'rgba(0, 0, 0, 0.74902) 0px 0px 5px 1px',
                display: 'inline-block',
                marginLeft: '10px',
                padding: '3px',
                width: '300px'
            })
            $hint1.html($hint);    
        }, function (){
            var $hint1 = $('.hint');
            var $hint = $hint1.html();
            console.log($hint);
            $hint1.remove();
            $(this).attr("title", $hint);
        });
    var $button = $('#show_help');
    $button.on("click", function (e) {
        e.preventDefault();
        var $hints = $('.input');
        console.log($hints);
        $hint = $('.hint');
        $hint.remove();
        $hints.each(function (index) {
            console.log(index);
            var $title = $(this).attr("title");
            var hintNumber = ('hint' + index);
            console.log(hintNumber);
            var $hint = ('<div class="hint ' + hintNumber + '"></div>');
            var $line = $(this).closest(".line");
            $line.append($hint);
            $hint = $('.hint');
            var a = document.querySelector('.' + hintNumber);
            console.log(a);
            a.innerHTML = ($title);
            $hint.css({
                boxShadow: 'rgba(0, 0, 0, 0.74902) 0px 0px 5px 1px',
                display: 'inline-block',
                marginLeft: '10px',
                padding: '3px',
                width: '300px'
            });
        });
    });    
});