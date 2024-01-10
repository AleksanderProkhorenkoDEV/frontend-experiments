/*
    Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la
    casilla cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la
    flecha.
*/

$(document).ready(function () {
    $("table").find("td").on("mouseover", function(){
        $(this).addClass("activo");
    })
})