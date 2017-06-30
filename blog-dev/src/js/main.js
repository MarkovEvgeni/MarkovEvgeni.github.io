document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    var selectorItems = Array.prototype.slice.call(document.getElementsByClassName('selector__item'));
    
    var thumbArr = ['latest', 'tech', 'design', 'marketing'];
    
    var thumbler = document.getElementsByClassName('selector__thumb')[0];
    
    selectorItems.forEach(function(item, i, arr) {
        connect(item);
    });
    
    function connect(item) {
        item.addEventListener('click', function() {
            selectorItems.forEach(function(item) {
                item.classList.remove('active');
                item.classList.remove('prev');
            });
            thumbArr.forEach(function(item) {
                thumbler.classList.remove(item);
            });
            thumbler.classList.add(this.getAttribute('section'));
            for (var i=0; i<parseInt(this.getAttribute('number')); i++) {
                selectorItems[i].classList.add('prev');
            };
            this.classList.add('active');
        });
    }


});