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
var inline = document.querySelectorAll('.inline');
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
start.addEventListener('click', timerStart);
stop.addEventListener('click', clearAll);