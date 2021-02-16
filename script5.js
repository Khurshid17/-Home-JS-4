let n = +prompt("Введите количество примеров");
for (let i = 0; i < n; i++) {
  var a = RandomNumber();
  var b = RandomNumber();
  if (randomOperation() == 1) {
    var total = +prompt(`${a} + ${b} =`);
    if (total == a + b) {
      alert(`${a} + ${b} = ${a + b}. Ваш ответ ${total} Молодец`);
    } else {
      alert(`${a} + ${b} = ${a + b}. Ваш ответ ${total} Ошибка`);
    }
  } else if (randomOperation() == 2) {
    var total = +prompt(`${a} - ${b} =`);
    if (total == a - b) {
      alert(`${a} - ${b} = ${a - b}. Ваш ответ ${total} Молодец`);
    } else {
      alert(`${a} - ${b} = ${a - b}. Ваш ответ ${total} Ошибка`);
    }
  } else if (randomOperation() == 3) {
    var total = +prompt(`${a} * ${b} =`);
    if (total == a * b) {
      alert(`${a} * ${b} = ${a * b}. Ваш ответ ${total} Молодец`);
    } else {
      alert(`${a} * ${b} = ${a * b}. Ваш ответ ${total} Ошибка`);
    }
  } else if (randomOperation() == 4) {
    var total = +prompt(`${a} / ${b} =`);
    if (total == a / b) {
      alert(`${a} / ${b} = ${a / b}. Ваш ответ ${total} Молодец`);
    } else {
      alert(`${a} / ${b} = ${a / b}. Ваш ответ ${total} Ошибка`);
    }
  }
}

function RandomNumber() {
  return Math.ceil(Math.random() * (10 - 1) + 1);
}

function randomOperation() {
  return Math.ceil(Math.random() * (4 - 1) + 1);
}
