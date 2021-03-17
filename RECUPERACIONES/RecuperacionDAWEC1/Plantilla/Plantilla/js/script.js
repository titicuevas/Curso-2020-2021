var BolaArray = [];

function bola(id, marca, color, usada) {
    this.id = id;

    this.marca = marca;
    this.color = color;
    this.usada = usada;

}


function mostrarAdmin() {
    var boton1 = document.createElement('button');
    boton1.textContent = 'Añadir';

    boton1.disabled = true;
    boton1.id = 'anadirBoton';
    var boton2 = document.createElement('button');
    boton2.textContent = 'Volver';

    var contenedorDos = document.getElementById('contenedorDos');

    var botonUsuario = document.getElementById('entrarUsuario');
    botonUsuario.disabled = true;
    var botonAdmin = document.getElementById('entrarAdmin');




    botonAdmin.disabled = true;

    document.getElementById("contenedorDos").innerHTML =
        "<label for='marca'>Marca:</label>" +
        "<input type='text' id='marca' name='marca><br><br>" +
        "<label for='color'>Color</label>" +
        "<input type='text' id='color' name='color><br>" +
        "<label for='id'>Id</label>" +
        "<input type='id' id='id' name='id><br>";


    contenedorDos.appendChild(boton1);
    contenedorDos.appendChild(boton2);

}



function mostrarUsuario() {
    var boton3 = document.createElement('button');
    boton3.textContent = 'Prestamo bolas';

    boton3.disabled = true;
    boton3.id = 'añadirBoton';
    var boton4 = document.createElement('button');
    boton4.textContent = 'Volver';

    var contenedorDos = document.getElementById('contenedorDos');

    var botonUsuario = document.getElementById('entrarUsuario');
    botonUsuario.disabled = true;
    var botonAdmin = document.getElementById('entrarAdmin');

    botonAdmin.disabled = true;
    document.getElementById("contenedorDos").innerHTML =
        "<label>Color</label>" + " " + "<label>Numero de bolas</label>" + " " + "<label>Color seleccionado</label>" + " " + "<label>Numero de bolas solicitadas</label><br>"







    contenedorDos.appendChild(boton3);
    contenedorDos.appendChild(boton4);

}




function anadir() {

    this.id = id;

    this.marca = marca;
    this.color = color;
    this.usada = usada;



    var id = document.getElementById('id');
    var marca = document.getElementById('marca');
    var color = document.getElementById('color');
    var usada = document.getElementById('usada')

    var bola = document.getElementById('bola');

    var bolaFinal = new bola(id.value, marca.value, color.value, usada.value);



    BolaArray.push(bolaFinal);

    var linea = document.createElement('span');

    var checkbox = document.createElement('input');
    creckbox.type = 'ckeckbox';
    checkbox.onclick = seleccion;
    creckbox.value = BolaArray.length - 1;

    var br = document.createElement('br');
    linea.textContent = color.value + ' ' + id.value + ' ' + marca.value + ' ' + usada.value;
    bola.appendChild(linea);
    bola.appendChild(checkbox);
    bola.appendChild(br);

    id.value = '';

    marca.value = '';
    color.value = '';
    usada.value = '';



}



function seleccion() {
    elems = document.querySelectorAll("input[type=checkbox]:checked");
    var prestarBtn = document.getElementById('prestarBtn');

    if (elems.length) {
        prestarBtn.disabled = false;
    } else {
        prestarBtn.disabled = true;
    }
}


function validar() {







    var marca = document.getElementById('marca');
    var color = document.getElementById('color');
    var id = document.getElementById('id');

    var anadirBoton = document.getElementById('anadirBoton');


}