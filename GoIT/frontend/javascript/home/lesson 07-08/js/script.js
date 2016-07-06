$(function () {
    var $body = $('body');
    var $tabs = '<div class="tabs"></div>';
    $body.append($tabs);
    console.log($tabs);
    $tabs = $('.tabs');
    console.log($tabs);
    var $ul = '<ul class="tabs_list"></ul>';
    $tabs.append($ul);
    $ul = $('.tabs_list');
    var $firstTab = '<li class="firstTab"></li>';
    $ul.append($firstTab);
    $firstTab = $('.firstTab');
    var $secondTab = '<li class="secondTab"></li>';
    $ul.append($secondTab);
    $secondTab = $('.secondTab');
    var $thirdTab = '<li class="thirdTab"></li>';
    $ul.append($thirdTab);
    $thirdTab = $('.thirdTab');
    var $firstLink = '<a>Nunc tincidunt</a>';
    $firstTab.append($firstLink);
    $firstLink = ('.firstLink');
    var $secondLink = '<a>Proin dolor</a>';
    $secondTab.append($secondLink);
    $secondLink = ('.secondLink');
    var $thirdLink = '<a>Aenan lacinia</a>';
    $thirdTab.append($thirdLink);
    $thirdLink = ('.thirdLink');
    var $p1 = '<p class="p1">Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>';
    $tabs.append($p1);
    $p1 = $('.p1');
    var $p2 = '<p class="p2">Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>';
    $tabs.append($p2);
    $p2 = $('.p2');
    var $p3 = '<p class="p3">Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>';
    $tabs.append($p3);
    $p3 = $('.p3');
    var $text = $('p');
    var $links = $('a');
    $tabs.css({
        border: '1px solid #aaaaaa',
        borderRadius: '4px',
        margin: '10px',
        padding: '10px',
        width: '400px'
    });
    $ul.css({
        background: 'rgba(158,158,158,1)',
        background: '-moz-linear-gradient(top, rgba(158,158,158,1) 0%, rgba(153,153,153,1) 50%, rgba(179,179,179,1) 100%)',
        background: '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(158,158,158,1)), color-stop(50%, rgba(153,153,153,1)), color-stop(100%, rgba(179,179,179,1)))',
        background: '-webkit-linear-gradient(top, rgba(158,158,158,1) 0%, rgba(153,153,153,1) 50%, rgba(179,179,179,1) 100%)',
        background: '-o-linear-gradient(top, rgba(158,158,158,1) 0%, rgba(153,153,153,1) 50%, rgba(179,179,179,1) 100%)',
        background: '-ms-linear-gradient(top, rgba(158,158,158,1) 0%, rgba(153,153,153,1) 50%, rgba(179,179,179,1) 100%)',
        background: 'linear-gradient(to bottom, rgba(158,158,158,1) 0%, rgba(153,153,153,1) 50%, rgba(179,179,179,1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#9e9e9e", endColorstr="#b3b3b3", GradientType=0 )',
        border: '1px solid #555555',
        borderRadius: '4px'
    });
    var $tabsItem = $('li');
    $tabsItem.css({
        background: 'rgba(226,226,226,1)',
        background: '-moz-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
        background: '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(226,226,226,1)), color-stop(51%, rgba(209,209,209,1)), color-stop(100%, rgba(254,254,254,1)))',
        background: '-webkit-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
        background: '-o-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
        background: '-ms-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
        background: 'linear-gradient(to bottom, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#e2e2e2", endColorstr="#fefefe", GradientType=0)',
        display: 'inline-block',
        marginLeft: '3px',
        marginTop: '3px',
        marginBottom: '-1px',
        border: '1px solid #aaaaaa',
        borderBottom: '1px solid #555555',
        borderTopRightRadius: '4px',
        borderTopLeftRadius: '4px',
        color: '#aaaaaa'
    });
    $firstTab.css({
        border: '1px solid #555555',
        borderBottom: '1px solid white',
        background: 'white',
        color: '#555555'
    });
    var $borderColor = 'rgb(85, 85, 85)';
    $tabsItem.hover(
        function () {
            $borderColor = $(this).css('border-top-color');
            console.log($borderColor);
            $(this).css({
                borderLeftColor: '#555555',
                borderRightColor: '#555555',
                borderTopColor: '#555555',
                color: '#555555'
            });
        },
        function () {
            $(this).css({
                borderLeftColor: $borderColor,
                borderRightColor: $borderColor,
                borderTopColor: $borderColor,
                color: $borderColor
            });
        }
    );
    $tabsItem.on("click", function () {
        $tabsItem.css({
            border: '1px solid #aaaaaa',
            borderBottom: '1px solid #555555',
            background: 'rgba(226,226,226,1)',
            background: '-moz-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
            background: '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(226,226,226,1)), color-stop(51%, rgba(209,209,209,1)), color-stop(100%, rgba(254,254,254,1)))',
            background: '-webkit-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
            background: '-o-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
            background: '-ms-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
            background: 'linear-gradient(to bottom, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)',
            filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#e2e2e2", endColorstr="#fefefe", GradientType=0)',
            color: '#aaaaaa'
        });
        $(this).css({
            border: '1px solid #555555',
            borderBottom: '1px solid white',
            
            background: 'white',
            color: '#555555'
        });
        $borderColor = 'rgb(85, 85, 85)';
    });
    $links.css({
        color: 'inherit',
        cursor: 'pointer',
        display: 'block',
        padding: '5px',
        textDecoration: 'none'
    });
    console.log($text);
    $text.css({
        display: 'none'
    });
    $p1.css({
        display: 'block'
    });
    $firstTab.on("click", function () {
        $p1.css({
            display: 'block'
        });
        $p2.css({
            display: 'none'
        });
        $p3.css({
            display: 'none'
        });
    });
    $secondTab.on("click", function () {
        $p2.css({
            display: 'block'
        });
        $p3.css({
            display: 'none'
        });
        $p1.css({
            display: 'none'
        });
    });
    $thirdTab.on("click", function () {
        $p3.css({
            display: 'block'
        });
        $p2.css({
            display: 'none'
        });
        $p1.css({
            display: 'none'
        });
    });
//     FIRST TASK END
    var $form = ('<form class="form"></form>');
    $body.append($form);
    $form = $('.form');
    var $div = ('<div class="form__item"></div>');
    $form.append($div);
    $div = $('.form__item');
    $div.css({
        border: '1px solid #555555',
        width: '600px',
        margin: '10px'
    });
    var $line1 = ('<div class="form__item_1 line"></div>');
    console.log($line1);
    $div.append($line1);
    $line1 = $('.form__item_1');
    console.log($line1);
    var $line2 = ('<div class="form__item_2 line"></div>');
    $div.append($line2);
    $line2 = $('.form__item_2');
    var $line3 = ('<div class="form__item_3 line"></div>');
    $div.append($line3);
    $line3 = $('.form__item_3');
    var $lines = $('.line');
    console.log($lines);
    $lines.css({
        padding: '8px'
    });
    $label1 = ('<label class="label1"></label>');
    $label2 = ('<label class="label2"></label>');
    $label3 = ('<label class="label3"></label>');
    $line1.append($label1);
    $line2.append($label2);
    $line3.append($label3);
    $label1 = $('.label1');
    $label2 = $('.label2');
    $label3 = $('.label3');
    var $text1 = ('<p class="text1 name">Firstname</p>');
    var $text2 = ('<p class="text2 name">Lastname</p>');
    var $text3 = ('<p class="text3 name">Address</p>');
    $label1.append($text1);
    $label2.append($text2);
    $label3.append($text3);
    $text1 = $('.text1');
    $text2 = $('.text2');
    $text3 = $('.text3');
    var $names = $('.name')
    $names.css ({
        display: "inline-block",
        width: "70px"
    });
    var $input1 = ('<input type="text" id="input1" name="firstname"></input>');
    var $input2 = ('<input type="text" id="input2" name="lastname"></input>');
    var $input3 = ('<input type="text" id="input3" name="address"></input>');
    $label1.append($input1);
    $label2.append($input2);
    $label3.append($input3);
    $input1 = $('#input1');
    $input2 = $('#input2');
    $input3 = $('#input3');
    var $inputs = $('input');
    $inputs.css ({
        marginLeft: '5px'
    });
    var $hint1 = ('<div class="hint1 hint">Please provide your firstname.</div>');
    var $hint2 = ('<div class="hint2 hint">Please provide your lastname.</div>');
    var $hint3 = ('<div class="hint3 hint">Your home or work address.</div>');
    $line1.append($hint1);
    $line2.append($hint2);
    $line3.append($hint3);
    $hint1 = $('.hint1');
    $hint2 = $('.hint2');
    $hint3 = $('.hint3');
    var $hints = $('.hint');
    $hints.css({
        '-webkit-box-shadow': '0px 0px 5px 1px rgba(0,0,0,0.75)',
        '-moz-box-shadow': '0px 0px 5px 1px rgba(0,0,0,0.75)',
        boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.75)',
        borderRadius: '3px',
        display: 'none',
        marginLeft: '10px',
        padding: '3px',
        width: '250px',
    })
    $input1.hover(
        function () {
        $hint1.css({
            display: 'inline-block'
        });
        $hint2.css({
            display: 'none'
        });
        $hint3.css({
            display: 'none'
        });
    }, function () {
        $hint1.css({
            display: 'none'
        });
        $hint2.css({
            display: 'none'
        });
        $hint3.css({
            display: 'none'
        });
    });
    $input3.hover(
        function () {
        $hint3.css({
            display: 'inline-block'
        });
        $hint2.css({
            display: 'none'
        });
        $hint1.css({
            display: 'none'
        });
    }, function () {
        $hint1.css({
            display: 'none'
        });
        $hint2.css({
            display: 'none'
        });
        $hint3.css({
            display: 'none'
        });
    });
    $input2.hover(
        function () {
        $hint2.css({
            display: 'inline-block'
        });
        $hint1.css({
            display: 'none'
        });
        $hint3.css({
            display: 'none'
        });
    }, function () {
        $hint1.css({
            display: 'none'
        });
        $hint2.css({
            display: 'none'
        });
        $hint3.css({
            display: 'none'
        });
    });
    var $button = ('<button id="showHelp">Show help</button>');
    $form.append($button);
    $button = $('#showHelp');
    $button.css ({
        borderRadius: '3px',
        marginLeft: '10px'
    })
    $button.on("click", function (e) {
        e.preventDefault();
        $hint2.css({
            display: 'inline-block'
        });
        $hint1.css({
            display: 'inline-block'
        });
        $hint3.css({
            display: 'inline-block'
        });    
    })
});
