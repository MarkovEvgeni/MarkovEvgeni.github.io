document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    var $headersection = $('.main_menu li.main_menu_item a');
    $headersection.on("click", function (e) {
        e.preventDefault();
        $headersection.removeClass("active");
        $(this).addClass("active");
    });
    var $accordion = $('.panel .panel_item');
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
    
    var data = $.ajax({
        url: 'js/data.json',
        async: false,
        dataType: "json"
    });
    
    var testing = data.responseJSON;
    console.log(testing);
    
    // 1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту;
    var skills = _.map(testing, 'skills');
    var skills2 = _.flatten(skills);
    skills = _.uniq(skills2).sort(function (a,b) {
        return a.localeCompare(b, 'en', {'sensitivity': 'base'});
    });
    console.log(skills);
    
// 2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends) - ПО УБЫВАНИЮ;    
    var name = _.map(testing, 'name');
    var friends = _.map(testing, 'friends');
    friends = _.mapValues(friends, function (o) {
        return o.length;
    });
    friends = _.toArray(friends);
    var full = _.zip(name, friends).sort(function (a, b) {
        if (a[1] > b[1]) {return -1;}
            else {return 1;}
    });
    full = _.map(full, 0);
    console.log(full);
    
//3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей
    
    var buddys =_.map(testing, 'friends');
    buddys = _.flattenDeep(buddys);
    buddys = _.map(buddys, 'name');
    buddys = _.uniq(buddys);
    console.log(buddys);
   
});

