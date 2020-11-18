function recibir() {
    var recibido = document.getElementById("texto").value
    var dev= recibido.split(" ");
    var long= dev.length;
    document.write(`la frase comienza con la palabra ${dev[0]}  <br>`);
    document.write(`la frase termina con la palabra ${dev[long-1]}  <br>`);
    document.write(`la frase tiene ${long} palabras <br>`);

}