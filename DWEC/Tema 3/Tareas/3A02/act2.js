function calculateAge(year, month, day) {
    var now = new Date();
    var born = new Date(year, month, day);
    document.getElementById("result").innerHTML += "<br> Su edad es: <b>" + (Math.floor((now - born)/1000/60/60/24/365)) + "</b> años</br>";
}