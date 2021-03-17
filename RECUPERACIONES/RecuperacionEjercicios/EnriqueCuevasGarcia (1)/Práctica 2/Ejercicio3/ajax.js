$(document).ready(function () {
    $('#solicitar-usuarios').click(function () {
        let idUsuario = $('#idUsuario').val();

        $.ajax('https://reqres.in/api/users/${idUsuario}', {
            type: 'GET',
        }).done(function (response) {
            let datosUsuarios = response.data;
            console.log(response);

            $('#datos-usuario').append(`
                <p>Datos del usuario:
                    <p>ID: ${datosUsuarios.id}</p>
                    <p>Nombre: ${datosUsuarios.first_name}</p>
                    <p>Apellido: ${datosUsuarios.last_name}</p>
                    <p>Email: ${datosUsuarios.email}</p>
                    <p>Avatar: ${datosUsuarios.avatar}</p>
                </p>`);

});

});
});