function validar() {
    var texto = new RegExp('^[1-5]$');
    var valor = $('#campo').val();
    
    if (texto.test(valor))
     {
         console.log("Es correcto");
         document.getElementById('boton').disabled=false;
        return true;

        
    } 
    document.getElementById('boton').disabled=true;

    
   
}






$('#campo').blur(validar);
$('#boton').click(function(){
    crear(circulo, $('#campo').val())
});
    



function circulo() {
    console.log("Llegas?")
    var cir = $('<div></div>');

  



    cir.click(function () {
        (desenfocar(cir))  
    } );

    cir.click(function () {
        (borrar(cir))  
    } );
    
     cir.addClass('circulo');
     
     
     $('#circulos').append(cir);
     
     $(cir).hover(function ()  {
        $(this).css("background-color","blue" )
            
        } , function(){
            $(this).css("background-color", "black");
          });
    

     
}


function crear(funcion,valor) {
console.log("crear")
    for (let index = 0; index < valor; index++) {
        funcion();
        
    }
}


function desenfocar (objetivo){
    $(".desenfoca").removeClass("desenfoca")
objetivo.addClass("desenfoca")

}

function borrar(objetivo) {
    console.log("Borras")
    if ($(objetivo).css("opacity")===1 ) {
            console.log("Errror")
           
    }else{
    objetivo.remove();
}
}

