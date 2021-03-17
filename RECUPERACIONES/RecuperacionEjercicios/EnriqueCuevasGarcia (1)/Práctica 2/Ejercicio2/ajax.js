
$(document).ready(function () {
    $('#Añadirusuario').click(function (e) {
        e.preventDefault();
        $.ajax('https://reqres.in/api/users', {
            type: 'GET',

        

            success: function (response) {
                var array = response.data;
                
                
               
               
                array.forEach(function (value, index, array) {
                    id  = array[index].id;
                    first_name = array[index].first_name;
                    last_name = array[index].last_name;

                    var nombre = $('#nombre').val();
                    var apellido = $('#apellido').val();
                   
                    var datos = {
                        "first_name": nombre,
                        "last_name": apellido,
                    }

                    $("#tabla tbody").append(`<tr>
                    <td>${id}</td>
                    <td>${first_name}</td>
                    <td>${last_name}</td>
                    </tr>`);
                });

               
                $('#tabla').css('display', 'block');
},
            complete: function (xhr,status) {
                console.log(xhr.status);
            },
            error: function (errorResponse) {
                console.log(errorResponse);
            }
        });


    });
});

