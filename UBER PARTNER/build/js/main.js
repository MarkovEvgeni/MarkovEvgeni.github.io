document.addEventListener("DOMContentLoaded",function(){"use strict";$(".slider_container").slick({speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,prevArrow:'<div class="slick-prev"></div>',nextArrow:'<div class="slick-next"></div>'});var e,t=document.getElementsByTagName("header")[0],a=$("header"),n=!1,o=$("#registration .queue_container form .button a"),l=$("footer .queue_form form .button a"),u=$("#registration .queue_container form"),r=$("footer .queue_form form"),i=$("header .minified .menu_button");i.on("click",function(){i.toggleClass("open"),a.toggleClass("open")}),o.on("click",function(e){if(e.preventDefault(),""==!u[0][0].value&&""==!u[0][1].value&&""==!u[0][2].value&&""==!u[0][3].value){var t={};t.name=u[0][0].value,t.email=u[0][1].value,t.telephone=u[0][2].value,t.car=u[0][3].value,t.information=u[0][4].value;var a="name="+u[0][0].value+"&email="+u[0][1].value+"&telephone="+u[0][2].value+"&car="+u[0][3].value+"&information="+u[0][4].value,n=new XMLHttpRequest;n.open("POST","send.php",!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(a),n.onreadystatechange=function(){4==n.readyState&&(200!=n.status?alert("Отправить данные не удалось"+n.status+": "+n.statusText):(alert("Ваша заявка успешно отправлена. Мы свяжемся с Вами в самое ближайшее время."),u[0][0].value="",u[0][1].value="",u[0][2].value="",u[0][3].value="",u[0][4].value=""))}}else alert('Форма не отправлена. Пожалуйста проверьте заполнение полей: "Имя и Фамилия", "Адрес электронной почты", "Номер телефона" и "Марка и возраст авто".')}),l.on("click",function(e){if(e.preventDefault(),""==!r[0][0].value&&""==!r[0][1].value&&""==!r[0][2].value&&""==!r[0][3].value&&""==!r[0][4].value){var t={};t.name=r[0][0].value,t.email=r[0][1].value,t.telephone=r[0][2].value,t.car=r[0][3].value,t.information=r[0][4].value;var a="name="+r[0][0].value+"&email="+r[0][1].value+"&telephone="+r[0][2].value+"&car="+r[0][3].value+"&information="+r[0][4].value,n=new XMLHttpRequest;n.open("POST","send.php",!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(a),n.onreadystatechange=function(){4==n.readyState&&(200!=n.status?alert("Отправить данные не удалось"+n.status+": "+n.statusText):(alert("Ваша заявка успешно отправлена. Мы свяжемся с Вами в самое ближайшее время."),r[0][0].value="",r[0][1].value="",r[0][2].value="",r[0][3].value="",r[0][4].value=""))}}else alert('Форма не отправлена. Пожалуйста проверьте заполнение полей: "Имя и Фамилия", "Адрес электронной почты", "Номер телефона" и "Марка и возраст авто".')}),window.onscroll=function(){t.classList.add("transparent_header"),e=window.pageYOffset||document.documentElement.scrollTop,n||(n=!0,setTimeout(function(){(e==window.pageYOffset||document.documentElement.scrollTop)&&t.classList.remove("transparent_header")},400),setTimeout(function(){n=!1},100))},$(".maxified ul li").on("click","a",function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top-48;$("body,html").animate({scrollTop:n},1500),setTimeout(function(){i.removeClass("open"),a.removeClass("open")},1600)}),$(".promo .button_container .button").on("click","a",function(e){e.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top-48;$("body,html").animate({scrollTop:a},1500)}),$(".slider_container .button_container .button").on("click","a",function(e){e.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top-48;$("body,html").animate({scrollTop:a},1500)}),$(".easy_container .button_container .button").on("click","a",function(e){e.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top-48;$("body,html").animate({scrollTop:a},1500)})});