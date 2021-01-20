function calcularAreaCirculo(radio) {
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode("Área círculo: " + Math.PI * Math.pow(radio, 2)));
    document.body.appendChild(h1);
}

function calcularAreaTriangulo(base, altura) {
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode("Área triangulo: " + (base * altura) / 2));
    document.body.appendChild(h1);
}