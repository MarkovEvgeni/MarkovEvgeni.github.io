document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    console.log('Привет');
    
    var data = $.ajax({
        url: 'js/data.json',
        dataType: "json"
    }).responseJSON;
    
    console.log(data);
    

});