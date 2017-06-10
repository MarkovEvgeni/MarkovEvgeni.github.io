$('.slider_container').slick({
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>'
});

var header = document.getElementsByTagName('header')[0];
var headerJquery = $('header');
var headerPosition;
var throttled = false;

var submitButtonFirst = $('#registration .queue_container form .button a');
var submitButtonSecond = $('footer .queue_form form .button a');
var formFirst = $('#registration .queue_container form');
var formSecond = $('footer .queue_form form');

var headerButton =$('header .minified .menu_button');
headerButton.on('click', function() {
    headerButton.toggleClass('open');
    headerJquery.toggleClass('open');
})

var mapIframed = $('.address .preventer');

mapIframed.on('click', function() {
    mapIframed.css("display", "none");
});

$('.address .map').on('mouseleave', function() {
    mapIframed.css("display", "block");
});



submitButtonFirst.on('click', function(e) {
    e.preventDefault();
    if (!formFirst[0][0].value == '' && !formFirst[0][1].value == '' && !formFirst[0][2].value == '' && !formFirst[0][3].value == '') {
        var datas = {};
        datas.name = formFirst[0][0].value;
        datas.email = formFirst[0][1].value;
        datas.telephone = formFirst[0][2].value;
        datas.car = formFirst[0][3].value;
        datas.information = formFirst[0][4].value;
        var datas2 = 'name=' + formFirst[0][0].value + '&email=' + formFirst[0][1].value + '&telephone=' + formFirst[0][2].value + '&car=' + formFirst[0][3].value + '&information=' +  formFirst[0][4].value;
        
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('POST', 'send.php', true);
        xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xmlRequest.send(datas2);
        
        xmlRequest.onreadystatechange = function() {
          if (xmlRequest.readyState != 4) return;

          if (xmlRequest.status != 200) {
            alert("Отправить данные не удалось" + xmlRequest.status + ': ' + xmlRequest.statusText);
          } else {
              alert("Ваша заявка успешно отправлена. Мы свяжемся с Вами в самое ближайшее время.");
              formFirst[0][0].value = '';
              formFirst[0][1].value = '';
              formFirst[0][2].value = '';
              formFirst[0][3].value = '';
              formFirst[0][4].value = '';
          }
        };
    } else {
        alert('Форма не отправлена. Пожалуйста проверьте заполнение полей: "Имя и Фамилия", "Адрес электронной почты", "Номер телефона" и "Марка и возраст авто".')
    }
})

submitButtonSecond.on('click', function(e) {
    e.preventDefault();
    if (!formSecond[0][0].value == '' && !formSecond[0][1].value == '' && !formSecond[0][2].value == '' && !formSecond[0][3].value == '' && !formSecond[0][4].value == '') {
        var datas = {};
        datas.name = formSecond[0][0].value;
        datas.email = formSecond[0][1].value;
        datas.telephone = formSecond[0][2].value;
        datas.car = formSecond[0][3].value;
        datas.information = formSecond[0][4].value;
        var datas2 = 'name=' + formSecond[0][0].value + '&email=' + formSecond[0][1].value + '&telephone=' + formSecond[0][2].value + '&car=' + formSecond[0][3].value + '&information=' +  formSecond[0][4].value;
        
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('POST', 'send.php', true);
        xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlRequest.send(datas2);
        
        xmlRequest.onreadystatechange = function() {
          if (xmlRequest.readyState != 4) return;

          if (xmlRequest.status != 200) {
            alert("Отправить данные не удалось" + xmlRequest.status + ': ' + xmlRequest.statusText);
          } else {
              alert("Ваша заявка успешно отправлена. Мы свяжемся с Вами в самое ближайшее время.");
              formSecond[0][0].value = '';
              formSecond[0][1].value = '';
              formSecond[0][2].value = '';
              formSecond[0][3].value = '';
              formSecond[0][4].value = '';
          }
        };
    } else {
        alert('Форма не отправлена. Пожалуйста проверьте заполнение полей: "Имя и Фамилия", "Адрес электронной почты", "Номер телефона" и "Марка и возраст авто".')
    }
})

window.onscroll = function() {
    header.classList.add('transparent_header');
    headerPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (!throttled) {
        throttled = true;
        setTimeout(function() {
            if (headerPosition == window.pageYOffset || document.documentElement.scrollTop) {
                header.classList.remove('transparent_header');
            } else {
            }
        }, 400);
        setTimeout(function() {
            throttled = false;
        }, 100);
    }
} 

$(".maxified ul li").on("click","a", function (event) {
    
        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href');
            
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        var top = $(id).offset().top - 48;
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
        setTimeout(function() {
            headerButton.removeClass('open');
            headerJquery.removeClass('open');
        }, 1600)
    
});

$(".promo .button_container .button").on("click","a", function (event) {
    
        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href');
            
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        var top = $(id).offset().top - 48;
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
});

$(".slider_container .button_container .button").on("click","a", function (event) {
    
        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href');
            
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        var top = $(id).offset().top - 48;
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
});

$(".easy_container .button_container .button").on("click","a", function (event) {
    
        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href');
            
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        var top = $(id).offset().top - 48;
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
});