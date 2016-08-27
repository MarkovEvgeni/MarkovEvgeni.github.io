document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    console.log('Привет');
    
    var crosby = $.ajax({
        url: 'js/data.json',
        dataType: "json"
    });
    
    var crosby1 = crosby.resoponseJSON;
    
    console.log(crosby1);
    

});