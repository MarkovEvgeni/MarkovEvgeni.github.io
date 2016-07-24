var timerDisplay = document.createElement('div');
timerDisplay.classList.add('display');
var hours = document.createElement('div');
hours.classList.add('hours', 'inline');
var minutes = document.createElement('div');
minutes.classList.add('minutes', 'inline');
var seconds = document.createElement('div');
seconds.classList.add('seconds', 'inline');
var miliseconds = document.createElement('div');
miliseconds.classList.add('miliseconds', 'inline');
var dots = document.createElement('div');
dots.innerHTML = ':';
dots.classList.add('dots', 'inline');
var dots2 = document.createElement('div');
dots2.innerHTML = ':';
dots2.classList.add('dots', 'inline');
var dot = document.createElement('div');
dot.classList.add('dot', 'inline');
dot.innerHTML = '.';
var globalTime = 0;
var globalTime2 = 0;
var h = Math.floor(globalTime / 3600000) % 24;
var m = Math.floor(globalTime / 60000) % 60;
var s = Math.floor(globalTime / 1000) % 60;
var ms = Math.floor(globalTime % 1000);
hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
miliseconds.innerHTML = ms;
var body = document.body;
body.appendChild(timerDisplay);
timerDisplay.insertBefore(hours, null);
timerDisplay.insertBefore(dots, null);
timerDisplay.insertBefore(minutes, null);
timerDisplay.insertBefore(dots2, null);
timerDisplay.insertBefore(seconds, null);
timerDisplay.insertBefore(dot, null);
timerDisplay.insertBefore(miliseconds, null);
var start = document.createElement('button');
start.value = 'start';
start.innerHTML = 'START';
start.classList.add('btn-success');
body.appendChild(start);
var stop = document.createElement('button');
stop.value = 'stop';
stop.innerHTML = 'CLEAR';
stop.classList.add('btn-danger');
body.appendChild(stop);
var pause = 'paused';
z = 0;

var timerDisplay2 = document.createElement('div');
timerDisplay2.classList.add('display');
var hours2 = document.createElement('div');
hours2.classList.add('hours', 'inline');
var minutes2 = document.createElement('div');
minutes2.classList.add('minutes', 'inline');
var seconds2 = document.createElement('div');
seconds2.classList.add('seconds', 'inline');
var miliseconds2 = document.createElement('div');
miliseconds2.classList.add('miliseconds', 'inline');
var h2 = Math.floor(globalTime2 / 3600000) % 24;
var m2 = Math.floor(globalTime2 / 60000) % 60;
var s2 = Math.floor(globalTime2 / 1000) % 60;
var ms2 = Math.floor(globalTime2 % 1000);
hours2.innerHTML = h2;
minutes2.innerHTML = m2;
seconds2.innerHTML = s2;
miliseconds2.innerHTML = ms2;
var dots3 = document.createElement('div');
dots3.innerHTML = ':';
dots3.classList.add('dots', 'inline');
var dots4 = document.createElement('div');
dots4.innerHTML = ':';
dots4.classList.add('dots', 'inline');
var dot2 = document.createElement('div');
dot2.classList.add('dot', 'inline');
dot2.innerHTML = '.';
body.appendChild(timerDisplay2);
timerDisplay2.insertBefore(hours2, null);
timerDisplay2.insertBefore(dots3, null);
timerDisplay2.insertBefore(minutes2, null);
timerDisplay2.insertBefore(dots4, null);
timerDisplay2.insertBefore(seconds2, null);
timerDisplay2.insertBefore(dot2, null);
timerDisplay2.insertBefore(miliseconds2, null);
var start2 = document.createElement('button');
start2.value = 'start2';
start2.innerHTML = 'START';
start2.classList.add('btn-success');
body.appendChild(start2);
var split = document.createElement('button');
split.value = 'split';
split.innerHTML = 'SPLIT';
split.classList.add('btn-warning');
body.appendChild(split);
var pause2 = 'paused';
var reset = document.createElement('button');
reset.value = 'reset';
reset.innerHTML = 'RESET';
reset.classList.add('btn-danger');
body.appendChild(reset);
var ms3 = "000";

var inline = document.querySelectorAll('.inline');
console.log(inline);
inline[0].style.display = 'inline-block';
inline[0].style.fontSize = '50px';
inline[1].style.display = 'inline-block';
inline[1].style.fontSize = '50px';
inline[2].style.display = 'inline-block';
inline[2].style.fontSize = '50px';
inline[3].style.display = 'inline-block';
inline[3].style.fontSize = '50px';
inline[4].style.display = 'inline-block';
inline[4].style.fontSize = '50px';
inline[5].style.display = 'inline-block';
inline[5].style.fontSize = '50px';
inline[6].style.display = 'inline-block';
inline[6].style.fontSize = '50px';
inline[7].style.display = 'inline-block';
inline[7].style.fontSize = '50px';
inline[8].style.display = 'inline-block';
inline[8].style.fontSize = '50px';
inline[9].style.display = 'inline-block';
inline[9].style.fontSize = '50px';
inline[10].style.display = 'inline-block';
inline[10].style.fontSize = '50px';
inline[11].style.display = 'inline-block';
inline[11].style.fontSize = '50px';
inline[12].style.display = 'inline-block';
inline[12].style.fontSize = '50px';
inline[13].style.display = 'inline-block';
inline[13].style.fontSize = '50px';




function timerStart() {
    pause = 'flow';
    start.innerHTML = 'PAUSE';
    start.removeEventListener('click', timerStart);
    start.addEventListener('click', timerPause);
    var timerId = setInterval(time, 4);
    function time() {
        globalTime = globalTime + 4;
        h = Math.floor(globalTime / 3600000) % 24;
        m = Math.floor(globalTime / 60000) % 60;
        s = Math.floor(globalTime / 1000) % 60;
        ms = Math.floor(globalTime % 1000);
        if (ms < 10) {
            ms = "0" + "0" + ms;
        } else if (ms < 100) {
            ms = "0" + ms;
        }
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        miliseconds.innerHTML = ms;
        console.log(globalTime);
        if (pause === 'paused') {
            clearInterval(timerId);
        }
    }
}
function timerPause() {
    'use strict';
    pause = 'paused';
    start.innerHTML = 'CONTINUE';
    start.removeEventListener('click', timerPause);
    start.addEventListener('click', timerStart);
}
function clearAll() {
    start.removeEventListener('click', timerPause);
    start.addEventListener('click', timerStart);
    start.innerHTML = 'START';
    pause = 'paused';
    setTimeout(clear, 6);
    function clear() {
        globalTime = 0;
        h = Math.floor(globalTime / 3600000) % 24;
        m = Math.floor(globalTime / 60000) % 60;
        s = Math.floor(globalTime / 1000) % 60;
        ms = Math.floor(globalTime % 1000);
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        miliseconds.innerHTML = ms;
        console.log(ms);
    }
}

var x=0;

start.addEventListener('click', timerStart);
stop.addEventListener('click', clearAll);
start2.addEventListener('click', timerStart2);
reset.addEventListener('click', clearAll2);
split.addEventListener('click', split2);


function timerStart2() {
    pause2 = 'flow';
    start2.innerHTML = 'STOP';
    start2.removeEventListener('click', timerStart2);
    start2.addEventListener('click', timerPause2);
    var timerId = setInterval(time, 4);
    z = 0;
    function time() {
        globalTime2 = globalTime2 + 4;
        h2 = Math.floor(globalTime2 / 3600000) % 24;
        m2 = Math.floor(globalTime2 / 60000) % 60;
        s2 = Math.floor(globalTime2 / 1000) % 60;
        ms2 = Math.floor(globalTime2 % 1000);
        if (ms2 < 10) {
            ms2 = "0" + "0" + ms2;
        } else if (ms2 < 100) {
            ms2 = "0" + ms2;
        }
        hours2.innerHTML = h2;
        minutes2.innerHTML = m2;
        seconds2.innerHTML = s2;
        miliseconds2.innerHTML = ms2;
        if (pause2 === 'paused') {
            clearInterval(timerId);
        }
    }
}
function timerPause2() {
    'use strict';
    x=x+1;
    pause2 = 'paused';
    start2.innerHTML = 'START';
    start2.removeEventListener('click', timerPause2);
    start2.addEventListener('click', timerStart2);
    var check = document.createElement('div');
    check.classList.add('check');
    check.classList.add('check' + "_" + x);
    var ms3 = ms2 + 4;
    check.innerHTML = (x + "." + "STOP" + " " + h2 + ":" + m2 + ":" + s2 + "." + ms3);
    body.appendChild(check);
    console.log(check);
}
function split2() {
    x = x + 1;
    'use strict';
    if (ms2 === 0) {
        ms3 = "000"
    } else if (ms2 < 10) {
        ms3 = "0" + "0" + ms2;
        } else if (ms2 < 100) {
            ms3 = "0" + ms2;
        } else {
            ms3 = ms2
        }
    var check = document.createElement('div');
    console.log(x);
    console.log(s2);
    console.log("SPLIT");
    check.classList.add('check');
    check.classList.add('check' + "_" + x);
    check.innerHTML = (x + "." + "SPLIT" + " " + h2 + ":" + m2 + ":" + s2 + "." + ms3);
    body.appendChild(check);
    console.log(check);    
}
function clearAll2() {
    start2.removeEventListener('click', timerPause2);
    start2.addEventListener('click', timerStart2);
    start2.innerHTML = 'START';
    pause2 = 'paused';
    setTimeout(clear, 6);
    function clear() {
        globalTime2 = 0;
        h2 = Math.floor(globalTime2 / 3600000) % 24;
        m2 = Math.floor(globalTime2 / 60000) % 60;
        s2 = Math.floor(globalTime2 / 1000) % 60;
        ms2 = Math.floor(globalTime2 % 1000);
        hours2.innerHTML = h2;
        minutes2.innerHTML = m2;
        seconds2.innerHTML = s2;
        miliseconds2.innerHTML = ms2;
        var check2 = document.querySelectorAll('.check');
        console.log(check2);
        console.log(check2.length);
        for (z=0; z<check2.length; z++) {
            check2[z].remove();
        }
        x = 0;
    }
}
console.log(split);