function main() {
  openFirstTask();
  openSecondTask();
  openThirdTask();
  openFourthTask();
  openFifthTask1();
  openFifthTask2();
  openFifthTask3();
  openFifthTask4();
  openSixthTask();
  openSeventhTask();
  openEighthTask();
  openFirstGame();
}

window.onload = main;


function getElementId(id) {
  return document.getElementById(id);
}

function firstTask() {
  var a = 1, b = 1, c, d;
  c = ++a;
  alert('c =' + c + ', если ++ стоит до переменной, то сначала производятся действия с ней, а уже потом срабатывает alert');           // 2
  d = b++;
  alert('d = ' + d + ', если ++ стоит после переменной, то сначала срабатывает alert, а уже потом увелиивается значение переменной');           // 1
  c = (2 + ++a);
  alert('c = ' + c + ', к 2 мы прибавляем 3, причина та же, что и в первом случае');      // 5
  d = (2 + b++);
  alert('d = ' + d + ', к 2 мы прибавляем 2, причина та же, что и во втором случае');      // 4
  alert('a = ' + a + ', после 3 alert значение а стало 3');                    // 3
  alert('b = ' + b + ', после 4 алерта значение b стало 3');                    // 3
}

function secondTask() {
  var a = 2;
  var x = 1;
  var c = x + (a *= 2);
  alert('x = ' + c)
}

function thirdTask() {
  var a = prompt('Введите первое значние');
  var b = prompt('Введите второе значение');
  if (a >= 0 && b >= 0) {
    alert('оба числа положительные, а - b = ' + (a - b) + ', b - a = ' + (b - a))
  } else if (a < 0 && b < 0) {
    alert('оба числа отрицательные, a * b = ' + (a * b))
  } else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
    alert('числа с разными знаками, a + b = ' + (a + b))
  }
}

function fourthTask() {
  var a = prompt('Введите число в промежутке от 1 до 15');
  alert('числа от 1 до ' + a + ' будут распечатаны в консоль');
  switch (a) {
    case '1':
      console.log('1');
      break;
    case '2':
      console.log('1, 2');
      break;
    case '3':
      console.log('1,2, 3');
      break;
    case '4':
      console.log('1, 2, 3, 4');
      break;
    case '5':
      console.log('1, 2, 3, 4, 5');
      break;
    case '6':
      console.log('1, 2, 3, 4, 5, 6');
      break;
    case '7':
      console.log('1, 2, 3, 4, 5, 6, 7');
      break;
    case '8':
      console.log('1, 2, 3, 4, 5, 6, 7, 8');
      break;
    case '9':
      console.log('1, 2, 3, 4, 5, 6, 7, 8, 9');
      break;
    case '10':
      console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
      break;
    case '11':
      console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11');
      break;
    case '12':
      console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12');
      break;
    case '13':
      console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13');
      break;
    case '14':
      console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14');
      break;
    case '15':
      console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
  }
}

function fifthTask1(number1, number2) {
  return Number(number1) + Number(number2);
}

function fifthTask2(number1, number2) {
  return number1 - number2;
}

function fifthTask3(number1, number2) {
  return number1 * number2;
}

function fifthTask4(number1, number2) {
  return number1 / number2;
}

function sixthTask(arg1, arg2, oper) {
  switch (oper) {
    case '+':
      return Number(arg1) + Number(arg2);
      break;
    case '-':
      return Number(arg1) - Number(arg2);
      break;
    case '*':
      return Number(arg1) * Number(arg2);
      break;
    case '/':
      return Number(arg1) / Number(arg2);
  }
}

function nullCompare() {
  if (null > 0) {
    alert('null > 0')
  } else if (null < 0) {
    alert('null < 0')
  } else {
    alert('null = 0, "0" — это значение. A null указывает на "пустое место" ')
  }
}

function eighthTask(val, pow) {
  if (pow != 1) {
    return val *= eighthTask(val, pow - 1);
  } else {
    return val;
  }
}

function firstGame(min, max, ch, countInt) {
  var userNumber = prompt('Введи своё число');
  if (userNumber < ch){
    alert('Ваше число меньше, чем то, которое я загадал');
    countInt += 1;
    firstGame(min, max, ch, countInt)
  } else if (userNumber > ch){
    alert('Ваше число больше, чем то, которое я загадал');
    countInt += 1;
    firstGame(min, max, ch, countInt)
  } else{
    alert('Верно! Ты молодец и угадал число, которое я загадал, это число - ' + ch + ' число попыток, которые тебе потребовались - ' + countInt)
  }
}


function openFirstTask() {
  var getTf = getElementId('first');
  getTf.addEventListener("click", firstTask);
}

function openSecondTask() {
  var outName = getElementId('second');
  outName.addEventListener("click", secondTask);
}

function openThirdTask() {
  var outResult = getElementId('third');
  outResult.addEventListener("click", thirdTask)
}

function openFourthTask() {
  var outResult = getElementId('fourth');
  outResult.addEventListener('click', fourthTask)
}


function openFifthTask1() {
  var outResult = getElementId('fifth1');
  outResult.addEventListener('click', function () {
    var a = prompt('Введите первое число для сложения');
    var b = prompt('Введите второе число для сложения');
    var funcResult = fifthTask1(a, b);
    alert('Результат сложения Первого и Второго чисел = ' + funcResult)
  })
}

function openFifthTask2() {
  var outResult = getElementId('fifth2');
  outResult.addEventListener('click', function () {
    var a = prompt('Введите число ИЗ которого вычитаем');
    var b = prompt('Введите число КОТОРОЕ вычитаем');
    var funcResult = fifthTask2(a, b);
    alert('Результат операции вычитания Первого и Второго чисел = ' + funcResult)
  })
}

function openFifthTask3() {
  var outResult = getElementId('fifth3');
  outResult.addEventListener('click', function () {
    var a = prompt('Введите первое число для умножения');
    var b = prompt('Введите второе число для умножения');
    var funcResult = fifthTask3(a, b);
    alert('Результат умножения Первого и Второго чисел = ' + funcResult)
  })
}

function openFifthTask4() {
  var outResult = getElementId('fifth4');
  outResult.addEventListener('click', function () {
    var a = prompt('Введите число КОТОРОЕ делим');
    var b = prompt('Введите число НА КОТОРОЕ делим');
    var funcResult = fifthTask4(a, b);
    alert('Результат операции деления Первого и Второго чисел = ' + funcResult)
  })
}

function openSixthTask() {
  var outResult = getElementId('sixth');
  outResult.addEventListener('click', function () {
    var a = prompt('Введите первое число');
    var b = prompt('Введите второе число');
    var operText = prompt('Введите необходимую арифметическую операцию (+, -, *. /)');
    var funcResult = sixthTask(a, b, operText);
    alert('Результат вычислений по выбранной операции : ' + funcResult);
  })
}


function openSeventhTask() {
  var outResult = getElementId('seventh');
  outResult.addEventListener('click', nullCompare)
}

function openEighthTask() {
  var outResult = getElementId('eighth');
  outResult.addEventListener('click', function () {
    var a = prompt('Введите необходимое число');
    var b = prompt('Введите необходимую степень для числа');
    var funtResult = eighthTask(a, b);
    alert('Результат возведения числа ' + a + ' в степень ' + b + ' =  ' + funtResult)
  })
}

function openFirstGame() {
  var outResult = getElementId('first_game');
  outResult.addEventListener('click', function () {
    var minCh = Number(prompt('Введите минимальное  число для промежутка'));
    var maxCh = Number(prompt('Введите максимальное число для промежутка'));
    var countInt = 1;
    var ch = Math.floor(Math.random() * (maxCh - minCh + 1)) + minCh;
    alert('Давай приступим к игре, друг мой. Я загадал для тебя число в промежутке, который Ты определил. Твоя задача его угадать)');
    return(firstGame(minCh, maxCh, ch, countInt))
  })
}
