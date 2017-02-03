document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    function sendForm(el) {
        var name = document.getElementById('send_message__visitors_name').value;
        var nameValidity = document.getElementById('send_message__visitors_name').checkValidity();
        var skype = document.getElementById('send_message__skype').value;
        var skypeValidity = document.getElementById('send_message__skype').checkValidity();
        var email = document.getElementById('send_message__email').value;
        var emailValidity = document.getElementById('send_message__email').checkValidity();
        var topic = document.getElementById('send_message__topic').value;
        var topicValidity = document.getElementById('send_message__topic').checkValidity();
        var message = document.getElementById('send_message__message').value;
        var messageValidity = document.getElementById('send_message__message').checkValidity();
        
        if ( skypeValidity && emailValidity && topicValidity && messageValidity) {
        
            var formData = 'name=' + name + '&skype=' + skype + '&email=' + email + '&topic=' + topic + '&message=' + message;
            
            console.log(formData);

            var xmlRequest = new XMLHttpRequest();
            xmlRequest.open('POST', 'https://lanars.com/sendmail', true);
            xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlRequest.send(formData);
            
            el.preventDefault();
            
            xmlRequest.onreadystatechange = function() {
              if (xmlRequest.readyState != 4) {
                  return
              } else if (xmlRequest.status != 200) {
                alert("Could not send data" + xmlRequest.status + ': ' + xmlRequest.statusText);
              } else {
                  alert("Thank you. We will contact You promptly.");    
              }
            };
        } else {
            return;
        }
        
        
    };
    
    $('button.popup__send').on('click', function(el) {
        sendForm(el);
    })

});