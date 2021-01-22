var total = 0;

$(document).on("ready", votar);


function votar() {
    var opcion = $("input[type='radio']:checked");
    
    if (opcion.lenght == 0) {
        alert("Selecciona una opcion");
    }else{
        var valor = $("#"+opcion.val()).attr("value");
        valor++;
        total++;
        $("meter".attr("max",total));
        $("#resultados").fadeIn();
        $("#" + opcion.val()).attr("value",valor);
    }
    return false;
}