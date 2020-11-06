var fecha = new Date();
var horas = fecha.getHours();

if (hour >= 7 && hour < 12)
    document.getElementById("parrafo"),
    innerHTML = (`Buenos Dias.`);
else if (hour >= 12 && hour < 21)
    document.getElementById("parrafo"),
    innerHTML = (`Buenas Tardes.`);
else
    document.getElementById("parrafo"),
    innerHTML = (`Buenas Noches.`);