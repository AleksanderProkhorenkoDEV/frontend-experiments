/**
 * ¿Cuántos días quedan para el día de reyes?
 */

document.addEventListener("DOMContentLoaded", function(){
    /**
     * Creo dos fechas nuevas, una a dia de hoy y otra con el dia de reyes
     */
    let fechaHoy = new Date(2024, 0, 6);
    let reyes = new Date()
    /**
     * Obtenog la fecha en mm, hago la resta para obtener la diferencia entre ambas y posteriormente convierto los mm en dias y los introduzco en el html
     */
    let tiempoEnMMreyes = fechaHoy.getTime();
    let tiempoEnMMhoy = reyes.getTime();
    let tiempoMMrestante = tiempoEnMMreyes - tiempoEnMMhoy;

    let cantidadDias = tiempoMMrestante / 1000 / 60 / 60 / 24;

    let parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "Faltan: " + cantidadDias + " días";
})