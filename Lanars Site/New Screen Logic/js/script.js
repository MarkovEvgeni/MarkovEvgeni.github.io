document.addEventListener('DOMContentLoaded', function () {

'use strict';

//var index = 1; 
var arr = [1, 2, 3, 4, 5, 6]

function removeSlidePosition(num) {
    $('.pictures_list').removeClass('pic_slide_' + num);
}
function moveToTop (num) {
    $('.slide_' + num).addClass("top_" + num);
};
function removeFromTop (num) {
    $('.slide_' + num).removeClass("top_" + num);
};
function removeZIndex(num) {
    $('.slide_' + num).removeClass('z_index_' + num);
};
function addZIndex(num) {
    $('.slide_' + num).addClass('z_index_' + num);
}
function moveToPrevPart (num) {
    $('.slide_' + num).addClass("prev_" + num);
}
function removeFromPrevPart (num) {
    $('.slide_' + num).removeClass("prev_" + num);
}
function moveToActivePart (num) {
    $('.slide_' + num).addClass("active_" + num);
    $('.slide_' + num).addClass("active");
}
function removeFromActivePart (num) {
    $('.slide_' + num).removeClass("active_" + num);
    $('.slide_' + num).removeClass("active");
}
function addOpacity(num) {
    $('.slide_' + num).addClass('opacitynone');    
}
function removeOpacity(num) {
    $('.slide_' + num).removeClass('opacitynone');    
}
    
    
function moveButtons(num) {
    
    var numHide = num - 3;
    var numFirst = num - 2;
    var numPrev = num - 1;
    var numNext = num + 1;
    var numNext2 = numNext + 1;
    
    if (num == 1 || num == 2) {
        numHide = 0;
        numFirst = 1;
    }
    if (num == 1) {
        numPrev = 0;
        num = 0;
        numNext = 2;
        numNext2 = 3;
    }
    if (num == 2) {
        numPrev = 0;
        num = 2;
        numNext = 3;
        numNext2 = 4;
    }
     
    var arrHide = arr.slice(0, numHide);

    
//    Массив значений которые должны быть скрыты
    $.each(arrHide, function(index, value) {
        addOpacity(value);
    });
    
//  Перемещение первой кнопки на верх списка
    removeFromPrevPart(numFirst);
    removeZIndex(numFirst);
    removeOpacity(numFirst);
    moveToTop(numFirst);
    
//    Положение предыдущей кнопки
    removeFromTop(numPrev);
    removeFromActivePart(numPrev);
    if (numPrev == 0) {
        $('.slide_' + 1).removeClass("active");
    }
    removeOpacity(numPrev);
    moveToPrevPart(numPrev);

//    Положение текущей кнопки    
    $.each(arr, function(index, value) {
        removeSlidePosition(value);
    });
    $('.pictures_list').addClass('pic_slide_' + num);
    removeFromTop(num);
    removeZIndex(num);
    removeFromPrevPart(num);
    moveToActivePart(num);
    if (num == 0) {
        $('.pictures_list').addClass('pic_slide_' + 1);
        $('.slide_' + 1).addClass("active");
    }
//    Положение следующей кнопки 
    
    removeFromPrevPart(numNext);
    removeFromActivePart(numNext);
    removeFromActivePart(numNext2);
    removeOpacity(numNext);
    addZIndex(numNext);
    
//    Положение скрытых кнопок снизу
    
    var arrDown = arr.slice(numNext);
    $.each(arrDown, function(index, value) {
        addZIndex(value);
        addOpacity(value);
    });
}

(function () {    
    $.each(arr, function(index, value) {
            (function(value) {
                $('.slide_' + value).on('click', function() {
                    moveButtons(value)
                });
            }) (value);
        });
    })();

});