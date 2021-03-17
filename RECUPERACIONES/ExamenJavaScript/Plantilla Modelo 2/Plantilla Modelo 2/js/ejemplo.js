$(document).ready(function() {
    $('#datos').click(function(e) {
        e.preventDefault();
        $.ajax('https://jsonplaceholder.typicode.com/users', {
            type: 'GET',
            success: function(response) {
                var array = response.data;



                tabla.setAttribute('id', 'tabla');
                tabla.setAttribute('border', '1');



                array.forEach(function(value, index, array) {
                    id = array[index].id;
                    email = array[index].email;
                    ciudad = array[index].ciudad;
                    console.log(ciudad);


                    $("#tabla tbody").append(`<tr>
                    <td>${id}</td>
                    <td>${email}</td>
                    <td>${ciudad}</td>
                    </tr>`);
                });
            }

        });


    });
});

$(function() {
    $("#encabezado").fadeOut("fast", function() {
        $("tr").fadeToggle();
    })
})

$(function() {
    $("#cuerpo").fadeOut(function() {
        $("tbody").fadeToggle(3000);

    })
})

$(function() {
    $("#cuerpo").on("mousemove", function() {

        $("tbody").css("background-color", "grey")
    })
})