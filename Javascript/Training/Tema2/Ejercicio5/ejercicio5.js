/**
 * 5. A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por
    pantalla la siguiente información:
    • Número de enlaces de la página
    • Numero de enlaces que enlazan a http://prueba
    • Número de enlaces del tercer párrafo
 */

document.addEventListener("DOMContentLoaded", function () {

    /**
     * Primero con los querySelectorALL, obtengo todas las etiquetas <a> del HTML, realizo la misma accion con la etiqueta <p>
     */
    let queryEnlaces = document.querySelectorAll("a");
    let queryParrafos = document.querySelectorAll("p");
    let parrafo = document.getElementById("parrafo");

    cantidadEnlaces = obtenerCantidadTotalEnlaces(queryEnlaces);
    console.log("Cantidad enlaces: " + cantidadEnlaces);

    cantidadEnlacesHTTP = obtenerCantidadEnlacesHTTP(queryEnlaces);
    console.log("Cantidad enlaces http: " + cantidadEnlacesHTTP);

    cantidadEnlacesP = obtenerCantidadEnlacesParrafo(queryParrafos);
    console.log("Cantidad enlaces en el ultimo parrafo: " + cantidadEnlacesP);

    parrafo.innerHTML = "La cantidad de enlaces es: " + cantidadEnlaces + "<br>La cantidad de enlaces HTTP es: " + cantidadEnlacesHTTP + "<br>La cantidad de enlaces en el último parrafo es: " + cantidadEnlacesP;


});
/**
 * Con esta funcion obtengo por parametros el resultado del querySelectorALL de los enlaces y compruebo primero que no sea null, despues uso el metodo .length 
 * para saber cuantos tiene el documento y lo devuelvo por el return.
 * @param {*} queryEnlaces 
 * @returns 
 */
function obtenerCantidadTotalEnlaces(queryEnlaces) {
    let cantidadEnlaces = 0;
    if (queryEnlaces != null) {
        cantidadEnlaces = queryEnlaces.length
    }
    return cantidadEnlaces;
}
/**
 * Con esta funcion obtengo por parametros el resultado del querySelectorALL de los enlaces y compruebo primero que no sea null, despues mediante una expresión regular y un for, 
 * voy recorriendo todos los enlaces que obtuvimos con el querySelector y miro con cuantos hago match, si en la condicion es TRUE entro en el if y incremento el valor de la variable
 *  y lo devuelvo por el return.
 * @param {*} queryEnlaces 
 * @returns 
 */
function obtenerCantidadEnlacesHTTP(queryEnlaces) {
    let expresion = /^http:\/\/prueba\/$/;
    let cantidadEnlaces = 0;
    if (queryEnlaces != null) {
        for (i = 0; i < queryEnlaces.length; i++) {
            if (queryEnlaces[i].href.match(expresion)) {
                cantidadEnlaces++;
            }
        }
    }
    return cantidadEnlaces;
}
/**
 * El querySelectorALL de la etiqueta p me devuelve un array de nodos, que tiene una longitud de 2 pues como solo quiero el ultimo obtengo el nodo 3 completo  y le realizo 
 * una querySelectorALL de las etiquetas <a> a el solo y asi me aseguro sacar los que tiene ese parrafo unicamnete.
 * @param {*} queryParrafos 
 * @returns 
 */
function obtenerCantidadEnlacesParrafo(queryParrafos) {
    let cantidadEnlaces = 0;
    let obtengoNodo3
    let enlaces
    if (queryParrafos != null) {
        obtengoNodo3 = queryParrafos[2];
        enlaces = obtengoNodo3.querySelectorAll("a");
        cantidadEnlaces = enlaces.length;
    }
    return cantidadEnlaces;
}
