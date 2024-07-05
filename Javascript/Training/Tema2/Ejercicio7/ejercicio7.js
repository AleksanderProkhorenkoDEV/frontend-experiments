/**
 *  Simula mediante código JavaScript la tirada de 2 dados. La pantalla debe visualizar cómo se
    modifican los números durante 5 segundos y detenerse al sobrepasar este tiempo mostrando
    el número obtenido (Recomendado usar: Funciones Math.random, Métodos: setTimeout o
    setInterval).
 */

document.getElementById("boton").addEventListener("click", function (event) {
    event.preventDefault();

    let intervalo;
    let tiempoTranscurrido = 0;

    let dado1;
    let dado2;
    let parrafoElement = document.getElementById("parrafo");
    /**
     * Abrimos un intervalo que se recarga cada 200milisegundos para que el codigo se repita
     */
    intervalo = setInterval(function () {
        /**
         * Mediante una funcion random creamos dos dados que se actualizan segun el intervalo
         */
        dado1 = generarNRandom();
        dado2 = generarNRandom();
        parrafoElement.innerHTML = "Dado1: " + dado1 + "<br>Dado2: " + dado2;

        /**
         * Cada vez que se repite el intervalo incrementamos el tiempo transcurrido en 200 y cuando es igual a 5000(5sg) reseteamos el invervalo.
         */
        tiempoTranscurrido += 200;
        if (tiempoTranscurrido >= 5000) {
            clearInterval(intervalo);
            parrafoElement.innerHTML = "El resultado final es: <br>Dado1: " + dado1 + "<br>Dado2: " + dado2;
        }

    }, 200)

    /**
     * Reseteamos el tiempo del intervalo igualmente y mostramos el resultado
     */
    setTimeout(function () {
        clearInterval(intervalo);
        parrafoElement.innerHTML = "El resultado final es: <br>Dado1: " + dado1 + "<br>Dado2: " + dado2;;
    }, 5000);

})

function generarNRandom() {
    let nRandom;

    do {
        nRandom = Math.floor(Math.random() * 6);
    } while (nRandom == 0);

    return nRandom;
}




