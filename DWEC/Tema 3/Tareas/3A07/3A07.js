function generaraleatorio(n) {
    for (let i = 0; i < n; i++)
        document.write("<br> <b>Numero Aletorio" + i + ": </b>" + Math.floor(Math.random() * 21) + "</br>");

}
generaraleatorio(10);