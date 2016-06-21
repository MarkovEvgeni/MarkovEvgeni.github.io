function exponentiation() {
    var base = 0;
    base = prompt('Введите целое число');
    if (isNaN(base)) {
        alert('Вы ввели не числовое значение. Не целые числа вводятся через "." и будут округлены до целых перед вычислениями.');
        var result = 'Введено не числовое значение. Попробуйте еще раз.';
        alert(result);
        return result;
    }
    var baseRound = Math.round(base);
    if (base != baseRound) {
        alert('Вы ввели не целое число. Введенное Вами число округлено до ' + baseRound);    
    }
    base = baseRound;
    var exponent = 0;
    exponent = prompt('Введите целое число - степень возведения');
    if (isNaN(base)) {
        alert('Вы ввели не числовое значение. Не целые числа вводятся через "." и будут округлены до целых перед вычислениями.');
        var result = 'Введено не числовое значение. Попробуйте еще раз.';
        alert(result);
        return result;
    }
    var exponentRound = Math.round(exponent);
    if (exponent != exponentRound) {
        alert('Вы ввели не целое число. Введенное Вами число округлено до ' + exponentRound);
    }
    exponent = exponentRound;
    if (exponent > 0) {
        var i = 0;
        var result = 1;
        while (i < exponent) {
            result = result * base;
            i++;
            console.log('i=', i);
            console.log('result=', result);
            console.log('_____________');
        }
    } else {if (exponent < 0) {
        var i = 0;
        var result = 1;
        exponent = exponent * exponent;
        exponent = Math.sqrt(exponent);
        while (i < exponent) {
            result = result * base;
            i++;
            console.log('i=', i);
            console.log('result=', result);
            console.log('_____________');
        }
        result = 1 / result;
    } else {
        if (base === 0) {
            result = 0;
        } else {
            result = 1;
        }
    }
           }
    alert('Результат возведения числа '+ baseRound +' в степень ' + exponentRound +' равен ' +result);
    return result;
}
var exponentiationResult = exponentiation();
console.log('exponentiationResult', exponentiationResult);