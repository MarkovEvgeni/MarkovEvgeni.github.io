if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
};


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
    
    
});