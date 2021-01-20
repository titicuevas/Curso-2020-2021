function precisionPI() {
        var n  = new Number(Math.PI);
        var h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode("Numero Pi formateado a 4 decimales"+n.toPrecision(5)));
        document.body.appendChild(h1);
}