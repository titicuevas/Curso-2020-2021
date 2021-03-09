$(document).ready(function () {

    // obtener listado usuarios
    $.ajax('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
    }).done(function (response) {
        response.forEach(function (value, index, response) {
            $('#tbody').append(`<tr>
            <td>${value.id}</td>
            <td>${value.email}</td>
            <td>${value.address.city}</td>
            <td class='hidden'>
                Title: <input class='title' type='text'></input>
                Completed: <input class='completed' type='text'></input>
                <button id='btnEnviar' disabled>Crear to-do</button>
            </td>
            </tr>`);
        });
    });


    // efectos al pasar el ratón
    $(document).on('mouseenter', 'tbody tr', function (e) {
        var trIndex = $(this).index();

        if (trIndex % 2 === 0) {
            $(this).css('color', 'grey');
        } else {
            $(this).css('color', 'green');
        }
    });

    // obtener TODOS al hacer click en algun tr.
    $(document).on('click', 'table tbody tr', function () {
        var userId = $(this).children()[0].innerHTML;
        var tr = $(this);

        $.ajax(`https://jsonplaceholder.typicode.com/users/${userId}/todos`, {
            method: 'GET',
        }).done(function (response) {
            var count = response.length;
            var thirdTodoTitle = response[2].title;

            // mostrar recuento de TODOS.
            alert(`Recuento de TODOS del usuario con ID(${userId}): ${count}. Título del tercer TODO: ${thirdTodoTitle}`);


            // mostrar opciones
            $('.hiddenTh').css('display', 'block');
            tr.children('.hidden').css('display', 'block');
        });

        // setInterval(function () {
        //     var datos = tr.children('.hidden')[0].children;
        //     var valueTitleInput = datos[0].innerHTML;
        //     var valueCompletedInput = datos[1].innerHTML;
        //     var buttonId = datos[2].id;
        //     console.log(valueTitleInput != '');
        // }, 2000);
    });

});
