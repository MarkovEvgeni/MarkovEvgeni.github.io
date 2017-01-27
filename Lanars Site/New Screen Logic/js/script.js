document.addEventListener('DOMContentLoaded', function () {

'use strict';

var index = 1; 
var arr = [1, 2, 3, 4, 5, 6, 7]

function removeSlidePosition(num) {
    $('.pictures_list').removeClass('pic_slide_' + num);
}
function moveToTop (num) {
    $('.slides_list__item_' + num).addClass("top_" + num);
};
function removeFromTop (num) {
    $('.slides_list__item_' + num).removeClass("top_" + num);
};
function removeZIndex(num) {
    $('.slides_list__item_' + num).removeClass('z_index_' + num);
};
function addZIndex(num) {
    $('.slides_list__item_' + num).addClass('z_index_' + num);
}
function moveToPrevPart (num) {
    $('.slides_list__item_' + num).addClass("prev_" + num);
}
function removeFromPrevPart (num) {
    $('.slides_list__item_' + num).removeClass("prev_" + num);
}
function moveToActivePart (num) {
    $('.slides_list__item_' + num).addClass("active_" + num);
}
function removeFromActivePart (num) {
    $('.slides_list__item_' + num).removeClass("active_" + num);
}
function makeTransparent(num) {
    $('.slides_list__item_' + num).addClass('transparent');    
}
function makeVisible(num) {
    $('.slides_list__item_' + num).removeClass('transparent');    
}   
function makeActive(num) {
    $('.slides_list__item_' + num).addClass('active');
    $('.dots__item_' + num).addClass('active');
}    
function makeInactive(num) {
    $('.slides_list__item_' + num).removeClass('active');
    $('.dots__item_' + num).removeClass('active');
}
    
    
function moveButtons(num) {
    
    index = num;
    
    var numMinusThree = num - 3;
    if(numMinusThree < 0) {
        numMinusThree = 0;
    };
    
    var numMinusTwo = num - 2;
    if(numMinusTwo < 0) {
        numMinusTwo = 0;
    }; 
    
    $.each(arr, function(index, value) {
        removeSlidePosition(value);
        removeZIndex(value);
        removeFromTop(value);
        removeFromPrevPart(value);
        removeFromActivePart(value);
        makeVisible(value);
        makeInactive(value);
    });
    
    var arrHideTop = arr.slice(0, numMinusThree);
    $.each(arrHideTop, function(index, value) {
        moveToTop(value);
    });
    var arrHideBottom = arr.slice(num + 1);
    $.each(arrHideBottom, function(index, value) {
        addZIndex(value);
    });
    
    var arrHide = arrHideTop.concat(arrHideBottom);
    $.each(arrHide, function(index, value) {
        makeTransparent(value);
    });
    
    moveToTop(numMinusTwo);
    moveToPrevPart(num - 1);
    makeActive(num);
    addZIndex(num + 1);
    $('.pictures_list').addClass('pic_slide_' + num);
    
    if (num == 1) {
        return
    } else {
        moveToActivePart(num)
    }

}

(function () {
    var list = arr.slice(0,6);
    $.each(list, function(index, value) {
            (function(value) {
                $('.slides_list__item_' + value).on('click', function() {
                    moveButtons(value)
                });
                $('.dots__item_' + value).on('click', function() {
                    moveButtons(value)
                });
            }) (value);
        });
    })();

$('body').keydown(function(event) {
    if (event.which == 40) {
        index++;
        if (index > 6) {
            index = 6;
        };
        console.log()
        moveButtons(index);
    } else if (event.which == 38) {
        index--;
        if (index < 1) {
            index = 1;
        };
        moveButtons(index);
    } else {
        return
    }
})    
  
    
});