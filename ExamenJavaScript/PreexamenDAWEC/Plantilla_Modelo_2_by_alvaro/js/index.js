$(document).ready(function(){
    // Crear encabezado
    $cabecera = $("#usuarios table thead");

    $cabecera.append('<th>ID</th><th>email</th><th>ciudad</th>');

    $cabecera.fadeIn(1000);

    // Obtener usuarios
    $.get("https://jsonplaceholder.typicode.com/users", function(resultado){

        var users = resultado;

        // Creamos lineas de usuario
        $cuerpo = $("#usuarios table tbody");
        
        users.forEach(user => {
            $cuerpo.append(`<tr><td>${user.id}</td><td>${user.email}</td><td>${user.address.city}</td></tr>`);
        });

        // Hovers
        $rows = $("#usuarios table tbody tr");

        for (let index = 0; index < $rows.length; index++) {
            const element = $($rows[index]);
            
            if(index % 2 == 0){
                element.hover(function(){
                   element.css("background-color", "grey");
                });
            } else {
                element.hover(function(){
                   element.css("background-color", "green");
                });
            }

            // click en la row y mostramos datos
            element.click(function(){
                $.get(`https://jsonplaceholder.typicode.com/users/${users[index].id}/todos`, function(res){
                    alert(res.length+" y "+res[2].title);                       
                });
            });
        }      

        // Mostrar la tabla
        $cuerpo.fadeIn(3000);
    });

    $('input').on("change",function(){
        $elem = $(this);

        $inputTitle = $('input[name="title"]');
        $inputComplete = $('input[name="complete"]');

        if(
            $inputTitle.val() &&
            $inputComplete.val() && ($inputComplete.val() == 'si' || $inputComplete.val() == 'no')        
        ){
            $('#create').removeAttr('disabled');
        } else {
            $('#create').attr('disabled', 'disabled');
        }
    });

    $('#create').on('click', function(){
        var data = {
            userId: 12,
            title: $('input[name="title"]').val(),
            completed: $('input[name="complete"]').val()
        };

        $.post("https://jsonplaceholder.typicode.com/todos", data,function(resultado){

            console.log(resultado);

            alert('id:'+resultado.id + ', userId:' +resultado.userId);
        });
    });
});