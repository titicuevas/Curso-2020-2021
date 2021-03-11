var alumno = [];
function Alumno(nombre,id,asignatura,notas) {
    this.nombre = nombre;
    this.id = id;
    this.asignatura = asignatura;
    this.notas = notas;
}

function toggleElement(id) {
    x = document.getElementById(id);

    if (x.style.display == 'none') {
        x.style.display = 'block';
    }else{
        x.style.display= 'none';
    }
}

function mostrarAdmin() {
    var btn1 = document.createElement('button');
    btn1.textContent= 'Añadir';
    btn1.onclick= añadir;
    btn1.disable= true;
    btn1.id = 'añadirBtn';
    var btn2 = document.createElement('button');
    btn2.textContent='Meter Nota';

    var btn3 = document.createElement('button');
    btn3.textContent='Volver';

    var ctn2 = document.getElementById('contenedorDos');

    var btnZona = document.getElementById('zona');
    var btnZona = document.getElementById('admin');
    btnZona.disable=true;

    ctn2.appendChild(btn1);
    ctn2.appendChild(btn2);
    ctn2.appendChild(btn3);
    

    toggleElement('contenedorDos');
}


function añadir() { 
    var nombre = document.getElementById('nombre');
    var id = document.getElementById('id');

    var notas = document.getElementById('notas');
    var not = new notas(nombre.value , id.value);

    notasArray.push(not);


    var linea = document.createElement('span');

    var br = document.createElement('br');
    linea.textContent= nombre.value+ '<br>'+calificaciones.value+ '<br>';

    notas.appendChild(linea);
    notas.appendChild(br);



    nombre.value='';
    calificaciones.value='';
 }

 function mostrarAdmin() {
    var btn1 = document.createElement('button');
    btn1.textContent= 'Añadir';
    btn1.onclick= añadir;
    btn1.disable= true;
    btn1.id = 'añadirBtn';
    var btn2 = document.createElement('button');
    btn2.textContent='Meter Nota';

    var btn3 = document.createElement('button');
    btn3.textContent='Volver';

    var ctn2 = document.getElementById('contenedorDos');

    var btnZona = document.getElementById('zona');
    var btnZona = document.getElementById('admin');
    btnZona.disable=true;

    ctn2.appendChild(btn1);
    ctn2.appendChild(btn2);
    ctn2.appendChild(btn3);
    

    toggleElement('contenedorDos');
}
