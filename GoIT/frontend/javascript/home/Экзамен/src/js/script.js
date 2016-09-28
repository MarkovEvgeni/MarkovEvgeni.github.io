document.addEventListener('DOMContentLoaded', function () {
    
    var hiddenFriends = document.querySelector('.hidden-list');
    var showButton = document.querySelector('.partners__link');
    var etalon = document.querySelector('.etalon');
    
    showButton.addEventListener("click", showHideBlock);
    
    function showHideBlock (el, t, f) {
        t = 400;
        f = 24;
        var fps = f;
        var time = t;
        var steps = time / fps;
        el.preventDefault();
        var height = hiddenFriends.offsetHeight;
        var etalonHeight = etalon.offsetHeight;
        if (height == 0) {
            hiddenFriends.style.height = height + "px";
            hiddenFriends.classList.remove('non-visible');
            var interval = setInterval(function () {
                if (steps>0) {
                    var step = etalonHeight / (time/fps);
                    height += step;
                    hiddenFriends.style.height = height + "px";
                    steps -= 1;
                } else {
                    clearInterval(interval);
                    showButton.innerHTML = 'Hide partners';
                }
            }, time/fps)
        } else {
            var interval = setInterval(function () {
                if (steps>0) {
                    var step = etalonHeight / (time/fps);
                    height -= step;
                    hiddenFriends.style.height = height + "px";
                    steps -= 1;
                } else {
                    clearInterval(interval);
                    hiddenFriends.classList.add('non-visible');
                    showButton.innerHTML = 'See other partners';
                }
            }, time/fps)
        }  
    }
    

// Реализация с помощью jQuery    
//    var hiddenFriends = $('.hidden-list')[0];
//    var showButton = $('.partners__link')[0];
//    $(showButton).on("click", function (e) {
//        e.preventDefault();
//        if ($(hiddenFriends).hasClass("open")) {
//            $(hiddenFriends).removeClass("open");
//            $(hiddenFriends).slideUp(300);
//            $(this).html('See other partners');
//        } else {
//            $(hiddenFriends).addClass("open");
//            $(hiddenFriends).slideDown(300);
//            $(this).html('Hide partners');
//        }
//    });
    
    var textValue; //Объявлем глобальное значение в рамках document.Ready
    var currentDiv;
    
    var i = 0;
    
    var timerId = setTimeout(function tick() {
      RandomWord();
      i++;
      if (i < 5) {
        timerId = setTimeout(tick, 3000);    
      }  else {
          clearTimeout;
      }
    }, 2000);

    
    // Функция, которая удаляет предыдущий блок с запросом
    function removeBLock () {
        var blocks = document.querySelectorAll('.masonry__item');
        if (blocks.length > 6) {
            var delElem = document.querySelector('.masonry__item');
            delElem.remove();     
        } else {}
    };
   
    // Функция, которая добавляет блок с новым запросом
    function addBlock () {
        var mosaic = document.getElementsByClassName('mosaic');
        var div = document.createElement('div');
        currentDiv = div;
        div.className = "text__container masonry__item";
        mosaic[0].appendChild(div);
        var divText = document.createElement('div');
        divText.className = "inner__text";
        divText.innerHTML = textValue;
        div.appendChild(divText);
        image();
    };

    // Функция, которая инициализирует Masonry
    function masonry () {
        var elem = document.querySelector('.mosaic');
        var msnry = new Masonry( elem, {
            // options
            itemSelector: '.masonry__item',
            columnWidth: 5,
            isAnimated: true,
            animationOptions: { 
               queue: false, 
               duration: 500
            }
        });   
    };
    
    function image () {
        
        var urlQuery = "https://www.googleapis.com/customsearch/v1?q=" + textValue + "&cx=016732624816471061428:3gt2rcxo7lk&imgSize=medium&fileType=jpg&num=1&searchType=image&imgDominantColor=pink&key=AIzaSyBncOk0OKD0p7SEqpnCnj68lZAl0zqxxvo";
        
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('GET', urlQuery, true);
        xmlRequest.send();
        
        xmlRequest.onreadystatechange = function() {
          if (xmlRequest.readyState != 4) return;

          if (xmlRequest.status != 200) {
            console.log("Изображение по данному запросу не получено " + xmlRequest.status + ': ' + xmlRequest.statusText);
          } else {
              var data = JSON.parse(xmlRequest.responseText);
              var imageLink = data.items[0].link;
              var imageWidth = data.items[0].image.width;
              var imageheight = data.items[0].image.height;
              var ratio = imageWidth / imageheight;
              if (ratio > 2) {
                  var width = 440;
              } else {
                var width = ratio * 310;  
              };
              currentDiv.style.backgroundImage = 'url(' + imageLink + ')';
              currentDiv.style.width = width + 'px';
              currentDiv.style.backgroundSize = 'auto 310px';
              masonry();    
          }

        };

    };
    
    
    
    // Функция, которая применяется для поиска случайных картинок
    
    function RandomWord() {
      
        function jsonp(url, callback) {
            var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
            window[callbackName] = function(data) {
                delete window[callbackName];
                document.body.removeChild(script);
                callback(data);
            };

            var script = document.createElement('script');
            script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
            document.body.appendChild(script);
        }

        jsonp('http://randomword.setgetgo.com/get.php', function(data) {
           textValue = data.Word;
            removeBLock();
            addBlock();
            masonry();
        });   
    };
    
    
    
    
    
//    function RandomWord() {
//        
//        var requestStr = "http://randomword.setgetgo.com/get.php";
//        
//        $.ajax({
//            type: "GET",
//            url: requestStr,
//            dataType: "jsonp",
//            success: function (response) {
//                textValue = response.Word;
//                removeBLock();
//                addBlock();
//                masonry();
//            }
//        });
//    };
    
    
    var button = document.getElementsByClassName('search__btn');
    button[0].addEventListener('click', addElement)
    
    function addElement (event) {
        
        event.preventDefault(); // Предотвращаем выполнение события "По умолчанию"
        
        //Получаем рисунок согласно запросу
        
        textValue = document.getElementsByClassName('search__input')[0].value;
        
        if (textValue == 0) {
            RandomWord(); 
        } else {
            removeBLock();
            addBlock();   
            masonry();
        };
        
    };
    
});