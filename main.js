var x = prompt('Введите число x=', '');
var n = prompt('Ведите степень n=', '');

try {
  x = parseInt(x);
} catch (error) {
  x = 1;  //* списал с примера на уроке, но не понял на 100% почему х=1. Если ошибка, *//
}

try {
    n = parseInt(n);
  } catch (error) {
    n = 1;
  }

var result = Math.pow(x, n);

function showResult(result) {
    document.guerySelector('#result h2').innerHTML = result;
}

alert('Result of x = ' + x + ' in power of n = ' + n + ' equals ' + result);