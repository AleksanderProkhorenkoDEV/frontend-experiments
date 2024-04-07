/**
 * Obtenemos todas las tarjetas del slider
 */

let contenedorImagen = document.querySelectorAll('.carta');


/**
 * Recorremos el array de las tarjetas y uno a uno le añadimos el evento click, una vez añadido le borramos el style que tiene y le añadimos el que le hace crecer
 * para asi modificarlo con el resto que no pulso
 */
contenedorImagen.forEach(carta =>{
    carta.addEventListener('click', function(){
        borrarEstiloClase();
        carta.classList.add('active');
    })
})

/**
 * Recorremos el array de cartas, seleccionamos uno a uno y borramos el que tenga active para evitar tener dos.
 */
function borrarEstiloClase(){
    contenedorImagen.forEach(carta=>{
        carta.classList.remove('active');
    })
}