document.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    function shift () {
        var sliders = document.querySelectorAll('.carousels__item--slides');
        var sliderShift = 0 - sliders[0].offsetWidth/3;
        var sliderShiftDouble = sliderShift * 2;
        sliders[1].style.left = sliderShift+'px';
        sliders[2].style.left = sliderShiftDouble+'px';  
    };
    
    
    window.onresize = shift;
    shift();
    
    
    var nextArr = document.querySelectorAll('.next');
    var prevArr = document.querySelectorAll('.prev');
    
    nextArr.forEach(calculateNext);
    prevArr.forEach(calculatePrev);
        
    function calculateNext (item) {
        var parent = item.parentNode;
        var visiblePart = parent.offsetWidth;
        var tape = parent.querySelector('.carousels__item--slides');
        var wholeTape = tape.offsetWidth;
        var left = parseInt(getComputedStyle(tape).left);
//        if (wholeTape+left-visiblePart ==0) {
            
//        } else {
            item.addEventListener("mouseover", hover);
            item.addEventListener("mouseout", noHover);
            item.addEventListener("click", slideRight);
//        }
        
    };
    
    function calculatePrev (item) {
        var parent = item.parentNode;
        var visiblePart = parent.offsetWidth;
        var tape = parent.querySelector('.carousels__item--slides');
        var wholeTape = tape.offsetWidth;
        var left = parseInt(getComputedStyle(tape).left);
//        if (left == 0) {
            
//        } else {
            item.addEventListener("mouseover", hover);
            item.addEventListener("mouseout", noHover);
            item.addEventListener("click", slideLeft);
//        }
        
    };
    
    
    function hover () {
        this.style.opacity = 1;
        this.style.cursor = 'pointer';
    };
    
    function noHover () {
        this.style.opacity = 0.5;
        this.style.cursor = 'default';
    };
    
    function slideRight () {
//        this.removeEventListener("mouseover", hover);
//        this.removeEventListener("click", slideRight);
//        this.nextElementSibling.addEventListener("mouseover", hover);
//        this.nextElementSibling.addEventListener("mouseout", noHover);
//        this.nextElementSibling.addEventListener("click", slideLeft);
        var parent = this.parentNode;
        var visiblePart = parent.offsetWidth;
        var tape = parent.querySelector('.carousels__item--slides');
        var wholeTape = tape.offsetWidth;
        var left = parseInt(getComputedStyle(tape).left);
        if (wholeTape+left-visiblePart == 0) {
            left = visiblePart;
//            this.style.opacity = 0.5;
//            this.style.cursor = 'default';
        } else {
//            this.addEventListener("mouseover", hover);
//            this.addEventListener("mouseout", noHover);
//            this.addEventListener("click", slideRight);
        }
        left = left - visiblePart;
        tape.style.left = left+'px';
    };
    
    function slideLeft () {
//        this.removeEventListener("mouseover", hover);
//        this.removeEventListener("click", slideLeft);
//        this.previousElementSibling.addEventListener("mouseover", hover);
//        this.previousElementSibling.addEventListener("mouseout", noHover);
//        this.previousElementSibling.addEventListener("click", slideRight);
        var parent = this.parentNode;
        var visiblePart = parent.offsetWidth;
        var tape = parent.querySelector('.carousels__item--slides');
        var wholeTape = tape.offsetWidth;
        var left = parseInt(getComputedStyle(tape).left);
        if (left == 0) {
            left = - wholeTape;
            console.log(left);
//            this.style.opacity = 0.5;
//            this.style.cursor = 'default';
        } else {
//            this.addEventListener("mouseover", hover);
//            this.addEventListener("mouseout", noHover);
//            this.addEventListener("click", slideLeft);
        }
        left = left + visiblePart;
        tape.style.left = left+'px';
    }
    
    

});