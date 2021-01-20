function menu() {
    var salir = false;
    do {

        mostrarOpciones();
        var opcion = pregunta("Seleccione una opción");

        switch (true) {
            case opcion == 1: 
                sumar();
                break;
            case opcion == 2: 
                restar();
                break;
            case opcion == 3: 
                multiplicar();
                break;
            case opcion == 4: 
                dividir();
                break;
            case opcion == 5: 
                resto();
                break;
            case opcion == 6:
                coseno();
                break;
            case opcion == 7:
                logaritmo();
                break;
            case opcion == 8:
                potencia();
                break;
            case opcion == 9:
                raiz();
                break;
            case opcion == 10: salir = confirm("Pulse aceptar para salir");
                break;
                default:
                    alert("Parámetro desconocido");
        }

    } while (!salir); 
}

function mostrarOpciones() {
    console.log("SELECCIONE LA OPCIÓN QUE DESEA REALIZAR\n");
    console.log("Pulse 1 para sumar");
    console.log("Pulse 2 para restar");
    console.log("Pulse 3 para multiplicar");
    console.log("Pulse 4 para dividir");
    console.log("Pulse 5 para obtener el módulo");
    console.log("Pulse 6 para obtener el coseno");
    console.log("Pulse 7 para obtener el logaritmo");
    console.log("Pulse 8 para obtener el potencia");
    console.log("Pulse 9 para obtener el raiz cuadrada");
    console.log("Pulse 10 para salir");
}

function pregunta(mensaje) {
    var numero = prompt(mensaje);
    return numero;
}

function sumar() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    let operando2 = parseFloat(pregunta("Seleccione otro número"));
    console.log("Resultado = " + (operando1 + operando2));
}

function restar() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    let operando2 = parseFloat(pregunta("Seleccione otro número"));
    console.log("Resultado = " + (operando1 - operando2));
}

function multiplicar() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    let operando2 = parseFloat(pregunta("Seleccione otro número"));
    console.log("Resultado = " + (operando1 * operando2));
}

function dividir() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    let operando2 = parseFloat(pregunta("Seleccione otro número"));
    console.log("Resultado = " + (operando1 / operando2));
}

function resto() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    let operando2 = parseFloat(pregunta("Seleccione otro número"));
    console.log("Resultado = " + (operando1 % operando2));
}

function coseno() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    console.log("Resultado = " + (Math.cos(operando1)));
}

function logaritmo() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    console.log("Resultado = " + (Math.log(operando1)));
}

function potencia() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    let operando2 = parseFloat(pregunta("Seleccione un número de la potencia"));
    console.log("Resultado = " + (Math.pow(operando1, operando2)));
}

function raiz() {
    let operando1 = parseFloat(pregunta("Seleccione un número"));
    console.log("Resultado = " + (Math.sqrt(operando1)));
}

menu();