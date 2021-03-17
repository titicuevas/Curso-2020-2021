$(document).ready(function() {
    $.get("https://jsonplaceholder.typicode.com/users", function(crearUsuario) {

        var usuario = crearUsuario;
        $datos = $("#usuario table tbody")


    })

    function crearUsuario() {





        $email.array.forEach(element => {
            $datos.appe
        });
    }
    //Consultar
    $("#consultar").on('click', function() {
        $("#elemento1").show(1000);
        $("#elemento2").show(1000);
    })

    $('input').on("change", function() {
        $elem = $(this);
        $input = $('input');

        if ($input.val) {
            $('button').removeAttr('disabled');
        }



    })

    $('#elemento2').click(function() {
        $.get("https://jsonplaceholder.typicode.com/users/{id}", function(usuarios) {
                var usuari = usuarios;
                console.log($.get);
                $cuerpo = $("#usuarios table");
                $cuerpo.append()
                $cuerpo.show();
            })
            //DobleClick
        $doble = ("#usuarios table");
        var table = table;
        if (table) {
            element.dblclick(function() {
                element.css("background-color", "grey");
            });
        } else {
            element.dblclick(function() {
                element.css("background-color", "white")
            })
        } //M
        element.hover(function() {
            element.css("text", "th");
        })
    })

    //Hover



});