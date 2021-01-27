const persona = {
    'nombre': 'Juan',
    'apellido': 'Fernandez',
    'dni': '49045187F',
    'deuda': '1200'
};

var tabla1 = $("<td>" + persona.nombre + "</td>");
var tabla2 = $("<td>" + persona.apellido + "</td>");
var tabla3 = $("<td>" + persona.dni + "</td>");
var tabla4 = $("<td>" + persona.deuda + "</td>");

var tr = $("<tr></tr>")
tr.append(tabla1);
tr.append(tabla2);
tr.append(tabla3);
tr.append(tabla4);

$("table").append(tr);

$(document).ready(function() {
    console.log('llega');
});