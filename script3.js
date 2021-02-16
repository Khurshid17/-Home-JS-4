var total = +prompt('Решайте примеры');
var s;
let random = Math.round(Math.random()) * (10 - 5) + 5
for (let i = 0; i < total; i++) {
    var a = +prompt("10 + 5 = ?");
    // var b = +prompt('5 + 4 = ?');
    // var c = +prompt('3 + 7 = ?');
    // var d = +prompt('1 + 2 = ?');
    // var e = +prompt('20 + 25 = ?');
    // var f = +prompt('50 + 25 = ?');
    // var g = +prompt('100 + 25 = ?');
    // var h = +prompt('75 + 25 = ?');
    if (a == (10 + 5)) {
        alert('Ваш ответ ' + a + 'Молодец');
        
    // } else if (b == (5 + 4)) {
    //     alert('Ваш ответ ' + b + 'Молодец')
    //     console.log(s+=a);
    // } else if (c == (3 + 7)) {
    //     alert('Ваш ответ ' + c + 'Молодец')
    //     console.log(s+=a);
    // } else if (d == (1 + 2)) {
    //     alert('Ваш ответ ' + d + 'Молодец')
    //     console.log(s+=a);
    // } else if (e == (20 + 25)) {
    //     alert('Ваш ответ ' + e + 'Молодец')
    //     console.log(s+=a);
    // } else if (f == (50 + 25)) {
    //     alert('Ваш ответ ' + f + 'Молодец')
    //     console.log(s+=a);
    // } else if (g == (100 + 25)) {
    //     alert('Ваш ответ ' + g + 'Молодец')
    //     console.log(s+=a);
    // } else if (h == (75 + 25)) {
    //     alert('Ваш ответ ' + h + 'Молодец')
    //     console.log(s+=a);
    // } 
}

}

function sum() {
    return Math.random()
}
sum()
