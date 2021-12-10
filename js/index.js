window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');

    var ul = focus.children[0];
    var ol = focus.children[1];

    var focusWidth = focus.offsetWidth;
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * focusWidth;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    ul.addEventListener('transitionend', function () {
        if (index >= 5) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * focusWidth;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 4;
            ul.style.transition = 'none';
            var translatex = -index * focusWidth;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        // console.log(index);
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');


    });


    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
        timer = null;
    });

    ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * focusWidth + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;
    });

    ul.addEventListener('touchend', function (e) {
        if (flag) { 
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }
                var translatex = -index * focusWidth + moveX;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else { 
                var translatex = -index * focusWidth;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translatex = -index * focusWidth;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
})