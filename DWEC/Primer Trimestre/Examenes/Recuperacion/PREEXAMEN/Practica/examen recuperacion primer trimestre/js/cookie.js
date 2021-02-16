


function setCookie(cname, cvalue, exdays=1) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }

  function deleteCookie(cnombre) {
    setCookie(cnombre, '', 0);
}


var biblioteca = [];

function Libros(id,titulo,autor) {
  this.id=id;
  this.titulo=titulo;
  this.autor=autor;

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
  
  var boton1 = document.createElement('button');
  boton1.textContent='Añadir';
  boton1.onclick= anadir;
  boton1.disabled=true;
  boton1.id='añadirBoton';
  var boton2 = document.createElement('button');
  boton2.textContent = 'Volver';

  var contenedorDos = document.getElementById('contenedorDos');
  
  var botonCliente = document.getElementById('entrarCliente');
  botonCliente.disabled=true;
  var botonAdmin = document.getElementById('entrarAdmin');

  
  

  botonAdmin.disabled = true;

  document.getElementById("contenedorDos").innerHTML=
  "<label for='nombre'>Pene</label>"+
  "<input type='text' id='nombre' name='nombre' onblur='comprobar_nombre()'><br><br>"+
  "<label for='email'>Email</label>"+
  "<input type='text' id='email' name='email' onblur='comprobar_email()'><br>";
  "<label for='nombre'>Pene</label>"+
  "<input type='text' id='pene' name='pene' onblur='comprobar_email()'><br>";



  contenedorDos.appendChild(boton1);
  contenedorDos.appendChild(boton2);


  
  
}


function anadir(){
  var titulo = document.getElementById('titulo');
  var autor = document.getElementById('autor');
  var id = document.getElementById('id');

  var libros = document.getElementById('libros');

  var lib = new Libros(titulo.value, autor.value, id.value);            

  biblioteca.push(lib);
  
  var linea = document.createElement('span');

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onclick = seleccion;
  checkbox.value = l.length - 1;

  var br = document.createElement('br');
  linea.textContent = titulo.value+' '+autor.value+' '+id.value;
  productos.appendChild(linea);
  productos.appendChild(checkbox);
  productos.appendChild(br);
  
   console.log(biblioteca);

  titulo.value = '';
  autor.value = '';
  id.value = '';
  console.log("gola");

}