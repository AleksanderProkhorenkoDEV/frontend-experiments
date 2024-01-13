$(document).ready(function(){
    //Obtenemos todos los inputs de la lista
    const inputs = $("input[type=checkbox]");
    //Obtenemos el parrafo al que deseamos modificar el contenido
    const parrafo = $("#cantidadPlatos");
    //Creamos y incializamos nuestra variable
    let contador=0;

    //Le añadimos un evento a todos los inputs, que cuando uno se modifique se active y mediante $(this) comprobamos si cambia el estado de checked o no
    inputs.on("change", function(){
        if($(this).prop("checked")){
            contador++;
            parrafo.text(`Ha seleccionado usted ${contador} plato/os`) ;
        }else{
            contador--
            parrafo.text(`Ha seleccionado usted ${contador} plato/os`) ;
        }
    })
})