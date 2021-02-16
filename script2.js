var name = prompt('Введите ваше имя');
var year = +prompt('Введите нынешный год');
var today = +prompt('Введите ваш год рождения');
function userInfo(firstName, currentYear, birthYear) {
    return firstName + ", Ваш возраст " + (currentYear - birthYear)
}
var newStr = userInfo(name, year, today);
alert(newStr);


