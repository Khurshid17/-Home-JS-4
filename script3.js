var min = +prompt("Введите минимальное число");
var max = +prompt("Введите максимальное число");
for (let i = 0; i < 10; i++) {
  var a = RandomNumber(min, max);
  var b = RandomNumber(min, max);
  var total = +prompt(`${a} + ${b} =`);
  if (total == a + b) {
    alert(`${a} + ${b} = ${a + b}. Ваш ответ ${total} Молодец`);
  } else {
    alert(`${a} + ${b} = ${a + b}. Ваш ответ ${total} Ошибка`);
  }
}

function RandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
RandomNumber(min, max);
