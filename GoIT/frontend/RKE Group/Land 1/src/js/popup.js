document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    var grade = document.getElementsByClassName('grade')[0].childNodes[5];
    
    grade.addEventListener('click', createOverlay);
    console.log(grade);
    
    var body = document.body;
    
    function createOverlay () {
        var overlay = document.createElement('div');
        overlay.classList.add('dynamic-overlay');
        overlay.style.zIndex = "10";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(192,192,192,0.7)";
        overlay.style.top = "0";
        overlay.style.textAlign = "center";
        overlay.style.left = "0";
        overlay.style.position = "fixed";
        body.appendChild(overlay);
        createModal();
    }
    
    function deleteOverlay () {
        var overlay = document.getElementsByClassName('dynamic-overlay')[0];
        body.removeChild(overlay);
    }
    
    function createModal () {
        var overlay = document.getElementsByClassName('dynamic-overlay')[0];
        var before = document.createElement('div'); // Создаем элемент для выравнивания модального окна по высоте и ширине в зависимости от размера body
        before.style.content = "";
        before.style.display = "inline-block";
        before.style.height = "100%";
        before.style.verticalAlign = "middle";
        overlay.appendChild(before); // Добавляем before
        var modal = document.createElement('div'); // Создаем модальное окно
        modal.style.zIndex = "3";
        modal.style.borderRadius = "10px";
        modal.style.border = "3px solid black";
//        modal.style.height = "200px";
        modal.style.maxWidth = "320px";
        modal.classList.add('modal-window');
        modal.style.verticalAlign = "middle";
        modal.style.background = "white";
        modal.style.display = "inline-block";
        overlay.appendChild(modal); // Добавляем before
        createForm();
    };
    
    function createForm () {
        var modal = document.getElementsByClassName('modal-window')[0];
        var form = document.createElement('form');
        form.classList.add('order_form');
        modal.appendChild(form);
        var request = document.createElement('h3');
        form.appendChild(request);
        request.innerHTML = 'Заявка';
        var presentYourself = document.createElement('input');
        form.appendChild(presentYourself);
        presentYourself.setAttribute('name', 'name');
        presentYourself.placeholder = 'Как к Вам обращаться?';
        var contactTelephone = document.createElement('input');
        form.appendChild(contactTelephone);
        contactTelephone.placeholder = 'Ваш телефон';
        contactTelephone.setAttribute('name', 'telephone');
        var contactEmail = document.createElement('input');
        form.appendChild(contactEmail);
        contactEmail.placeholder = 'Ваш e-mail';
        contactEmail.setAttribute('name', 'email');
        var gradeCoal = document.createElement('select');
        form.appendChild(gradeCoal);
        gradeCoal.setAttribute('name', 'grade');
        var coalGrade = document.createElement('option');
        gradeCoal.appendChild(coalGrade);
        coalGrade.innerHTML = 'Выберите марку';
        coalGrade.style.fontWeight = 'bold';
        var ash = document.createElement('option');
        gradeCoal.appendChild(ash);
        ash.value = 'Марка антрацита - АШ';
        ash.innerHTML = 'АШ';
        var as = document.createElement('option');
        gradeCoal.appendChild(as);
        as.value = 'Марка антрацита - АC';
        as.innerHTML = 'АС';
        var am = document.createElement('option');
        gradeCoal.appendChild(am);
        am.value = 'Марка антрацита - АМ';
        am.innerHTML = 'АМ';
        var ao = document.createElement('option');
        gradeCoal.appendChild(ao);
        ao.value = 'Марка антрацита - АО';
        ao.innerHTML = 'АО';
        var ak = document.createElement('option');
        gradeCoal.appendChild(ak);
        ak.value = 'Марка антрацита - АК';
        ak.innerHTML = 'АК';
        var ako = document.createElement('option');
        gradeCoal.appendChild(ako);
        ako.value = 'Марка антрацита - АКО';
        ako.innerHTML = 'АКО';
        var tonnage = document.createElement('input');
        form.appendChild(tonnage);
        tonnage.placeholder = 'Укажите тоннаж';
        tonnage.setAttribute('name', 'tonnage');
        var submit = document.createElement('input');
        form.appendChild(submit);
        submit.type = 'submit';
        submit.value = 'ОФОРМИТЬ';
        submit.addEventListener('click', sendForm);
        var cancellation = document.createElement('div');
        form.appendChild(cancellation);
        cancellation.innerHTML = 'отменить';
        cancellation.classList.add('cancel_button');
        cancellation.addEventListener('click', deleteOverlay);
        
    }
    
    function sendForm (el) {
        el.preventDefault();
//        var name = document.forms[0][0].value;
//        var telephone = document.forms[0][1].value;
//        var email = document.forms[0][2].value;
//        var grade = document.forms[0][3].value;
//        var value = document.forms[0][4].value;
//        console.log('Данные формы', name, telephone, email, grade, value);
        var formData = 'name=' + document.forms[0][0].value + '&telephone=' + document.forms[0][1].value + '&email=' + document.forms[0][2].value + '&grade=' + document.forms[0][3].value + '&tonnage=' +  document.forms[0][4].value;
        console.log(formData);
        
        
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.open('POST', 'send.php', true);
        xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xmlRequest.send(formData);
        
        xmlRequest.onreadystatechange = function() {
          if (xmlRequest.readyState != 4) return;

          if (xmlRequest.status != 200) {
            alert("Отправить данные не удалось" + xmlRequest.status + ': ' + xmlRequest.statusText);
          } else {
              alert("Ваша заявка успешно отправлена. Мы свяжемся с Вами в самое ближайшее время.");    
          }

        };
        
    }
    
//    function вут () {
//        
//        var urlQuery = "https://www.googleapis.com/customsearch/v1?q=" + textValue + "&cx=016732624816471061428:3gt2rcxo7lk&imgSize=medium&fileType=jpg&num=1&searchType=image&imgDominantColor=pink&key=AIzaSyBncOk0OKD0p7SEqpnCnj68lZAl0zqxxvo";
//        
//        var xmlRequest = new XMLHttpRequest();
//        xmlRequest.open('GET', urlQuery, true);
//        xmlRequest.send();
//        
//        xmlRequest.onreadystatechange = function() {
//          if (xmlRequest.readyState != 4) return;
//
//          if (xmlRequest.status != 200) {
//            console.log("Изображение по данному запросу не получено " + xmlRequest.status + ': ' + xmlRequest.statusText);
//          } else {
//              var data = JSON.parse(xmlRequest.responseText);
//              var imageLink = data.items[0].link;
//              var imageWidth = data.items[0].image.width;
//              var imageheight = data.items[0].image.height;
//              var ratio = imageWidth / imageheight;
//              if (ratio > 2) {
//                  var width = 440;
//              } else {
//                var width = ratio * 310;  
//              };
//              currentDiv.style.backgroundImage = 'url(' + imageLink + ')';
//              currentDiv.style.width = width + 'px';
//              currentDiv.style.backgroundSize = 'auto 310px';
//              masonry();    
//          }
//
//        };
//
//    };
    
});