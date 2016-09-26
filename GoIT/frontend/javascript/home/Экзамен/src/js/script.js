$(function () {
    
    var hiddenFriends = $('.hidden-list')[0];
    console.log(hiddenFriends);
    var showButton = $('.partners__link')[0];
    console.log(showButton);
    $(showButton).on("click", function (e) {
        e.preventDefault();
        if ($(hiddenFriends).hasClass("open")) {
            $(hiddenFriends).removeClass("open");
            $(hiddenFriends).slideUp(300);
            $(this).html('See other partners');
        } else {
            $(hiddenFriends).addClass("open");
            $(hiddenFriends).slideDown(300);
            $(this).html('Hide partners');
        }
    });
    
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
            console.log(delElem);
            delElem.remove();     
        } else {}
    };
   
    // Функция, которая добавляет блок с новым запросом
    function addBlock () {
        console.log(textValue);
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
        
        console.log(urlQuery);
        
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('GET', urlQuery, true);
        xmlRequest.send();
        
        xmlRequest.onreadystatechange = function() {
          if (xmlRequest.readyState != 4) return;

          if (xmlRequest.status != 200) {
            alert("Изображение по данному запросу не получено " + xmlRequest.status + ': ' + xmlRequest.statusText);
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
        
        var requestStr = "http://randomword.setgetgo.com/get.php";
        
        $.ajax({
            type: "GET",
            url: requestStr,
            dataType: "jsonp",
            success: function (response) {
                console.log(response);
                textValue = response.Word;
                removeBLock();
                addBlock();
                masonry();
            }
        });
    };
    
    
    var button = document.getElementsByClassName('search__btn');
    console.log(button);
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