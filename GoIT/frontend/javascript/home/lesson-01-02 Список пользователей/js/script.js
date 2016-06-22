var i = 0;
var arr = [];
while (i < 5) {
    arr[i] = prompt('Введите имя для массива данных');
    console.log('i=', i);
    console.log(arr[i]);
    i++;    
}
console.log(arr);
var arrayLenght = arr.length;
console.log(arrayLenght);
var user = prompt('Введите имя Пользователя');
var t = 0;
console.log(user);
if (user === '') {
    alert('Ошибка. Введенное имя пользователя не существует в массиве');
    t = 6;
} else {
    while (t < arrayLenght) {
        if (user === arr[t]) {
        alert(user +', Вы успешно вошли');
        t = 6;
    } else {
        t++;
    }
    }
}
if (t != 6) {
    alert('Ошибка. Введенное имя пользователя не существует в массиве');
}