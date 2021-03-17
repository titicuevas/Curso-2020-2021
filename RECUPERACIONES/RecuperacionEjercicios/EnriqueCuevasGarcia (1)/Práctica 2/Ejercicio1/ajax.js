$(document).ready(function () {
    $('#solicitar-usuarios').click(function (e) {
        e.preventDefault();
        $.ajax('https://reqres.in/api/users', {
            type: 'GET',
            success: function (response) {
                var array = response.data;
                
                
                tabla.setAttribute('id', 'tabla');
                tabla.setAttribute('border', '1');
                tabla.setAttribute('width', '100%');
                tabla.setAttribute('height', '100%');

               
                array.forEach(function (value, index, array) {
                    id = array[index].id;
                    first_name = array[index].first_name;
                    last_name = array[index].last_name;
                    email = array[index].email;
                    avatar = array[index].avatar;
                    // console.log(id);
                    // console.log(first_name);
                    // console.log(last_name);
                    // console.log(email);
                    // console.log(avatar);

                    $("#tabla tbody").append(`<tr>
                    <td>${id}</td>
                    <td>${first_name}</td>
                    <td>${last_name}</td>
                    <td>${email}</td>
                    <td>${avatar}</td>
                    </tr>`);
                });

               
                $('#tabla').css('display', 'block');
                $('body').append(`<p>Página actual: ${response.page}</p>`);
                
                $('body').append(`<p>Número total de páginas: ${response.per_page}</p>`);
                $('body').append(`<p>Número total de páginas: ${response.total}</p>`);
                $('body').append(`<p>Número total de páginas: ${response.total_pages}</p>`);
                

            },
            error: function (errorResponse) {
                console.log(errorResponse);
            }
        });


    });
});
