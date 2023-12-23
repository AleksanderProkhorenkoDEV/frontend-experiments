/**
 * 3. Crea una web que permita calcular la media de un número n de números.
    • El número n debe ser introducido mediante un campo del tipo input.
    • Al introducir el valor de n se debe generar n campos de texto para introducir los valores.
    • En la parte inferior debe haber un botón de "Calcular media" al pulsarlo se debe mostrar al usuario la media de los números introducidos.
    • En la parte inferior debe haber un botón de "Calcular media redondeada" al pulsarlo se debe mostrar al usuario la media redondeada de los números introducidos.
    • Deben gestionarse errores.
 */

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); //cancela la accion default del evento.
    /**
     * Obtenemos el valor del formulario, luego mediante una expresion regular que predefini comprobamos que el valor introducido por teclado es correcto
     * Despues de eso lo convertimos a Integer para poder comprobar que es un numero mayor que cero para crear tantos inputs como quiera
     */
    let nMediasString = document.getElementById("nNumeros").value;
    const expresionRegular = /^[-+]?[0-9]+$/;
    if (expresionRegular.test(nMediasString)) {
        let nMedia = parseInt(nMediasString);
        if (nMedia > 0) {

            /**
             * Obtenemos el contenedor donde tenemos almacenados los nuevos inputs
             */
            let contenedor = document.getElementById("contenedor");
            /**
             * Recorremos este div con un While para ir obteniendo cada input que se creo la anterior vez y lo borramos, para evitar duplicados.
             */
            while (contenedor.firstChild) {
                contenedor.removeChild(contenedor.firstChild);
            }
            /**
             * Al dejar el div limpio sin inputs, creamos los nuevos.
             */
            for (let i = 0; i < nMedia; i++) {
                let campo = window.document.createElement("input");
                campo.type = "text";
                campo.id = "campo" + i;
                contenedor.appendChild(campo);
                console.log("Creando campos: "+campo.id);
            }
            let saltoLinea = window.document.createElement("br");
            contenedor.appendChild(saltoLinea);
            /**
             * Creamos los botones nuevos para calcular la media y la media redondeada, para ellos creamos los elementos en la venta y modificamos sus atributos
             */
            let botonCalcularMedia = window.document.createElement("input");
            botonCalcularMedia.type = "submit";
            botonCalcularMedia.value = "Calcular Media";
            contenedor.appendChild(botonCalcularMedia);

            let botonCalcularMediaRedondeada = window.document.createElement("input");
            botonCalcularMediaRedondeada.type = "submit";
            botonCalcularMediaRedondeada.value = "Calcular Media Redondeada";
            contenedor.appendChild(botonCalcularMediaRedondeada);

            /**
             * Despues añadimos el addEventListener a cada boton que creamos, para que cuando el usuario lo pulse se active la funcion que tenemos predefinida y hacer 
             * nuestras operaciones.
             */

            botonCalcularMedia.addEventListener("click", function () {

                let resultado = calcularMedia(nMedia);
                
                if(resultado == -1){
                    let parrafo = document.getElementById("contenedor");
                    parrafo.innerHTML = "No se calculo la media porque introducio un dato erroneo";
                }else{
                    let parrafo = document.getElementById("contenedor");
                    parrafo.innerHTML = "La media es: " + resultado;
                }
                /**
                 * Recibimos el resultado de la funcion calcularMedia() y obtenemos el elemento parrafo donde vamos a añadir el resultado para mostrarselo al cliente
                 */
                let parrafo = document.getElementById("contenedor");
                parrafo.innerHTML = "La media es: " + resultado;

            });
            botonCalcularMediaRedondeada.addEventListener("click", function () {
                let resultado = calcularMediaRedondeada(nMedia);

                
                /**
                 * Recibimos el resultado de la funcion calcularMedia() y obtenemos el elemento parrafo donde vamos a añadir el resultado para mostrarselo al cliente
                 */
                let parrafo = document.getElementById("contenedor");
                parrafo.innerHTML = "La media es: " + resultado;
            });
        } else {
            document.getElementById("solucion").innerHTML = "El numero no puede ser menor que cero";
        }
    }

});
/**
 * Recibe la cantida de inputs que se crearon, se recorre uno a uno y se obtiene el valor que introducio el usuario,
 * luego se divide la suma de estos inputs entre nMedia y asi se obtiene la media 
 * @param {*} nMedia Es la cantidad de inputs que se crearon Integer
 * @returns resultado, es el valor de la operacion Integer
 */
function calcularMedia(nMedia) {
    let totalSuma = 0;
    let comprobacion = true;
    let resultado = -1;
    for (let i = 0; i < nMedia; i++) {
        let nombreInput = "campo" + i;
        let elementoInput = document.getElementById(nombreInput);
        
        if(isNaN(elementoInput.value) || elementoInput.value === ""){
            comprobacion = false;
        }else{
            totalSuma = totalSuma + parseFloat(elementoInput.value);
        }
        

    }
    if(comprobacion){
        resultado = totalSuma / nMedia;
    }

    return resultado;
}

/**
 * Para reutilizar codigo usamos la funcion de calcular media y obtenemos el resultado directamente, luego mediante una funcion Math.round
 * se encarga de redondear el numero a la alza o baja en funcion de sus decimales.
 * @param {*} nMedia  Integer, cantidad de inputs que se crearon
 * @returns resultado de la operacion Integer.
 */
function calcularMediaRedondeada(nMedia) {
    let totalMedia = calcularMedia(nMedia)

    let resultado = Math.round(totalMedia);

    return resultado;
}









