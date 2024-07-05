/**
 * Limitar a 100 el número de caracteres que se pueden escribir.
    • Indicar con un mensaje (arriba o abajo del textarea) en todo momento al usuario
    el número de caracteres que aún puede escribir.
    • Se debe permitir pulsar las teclas Backspace y Supr., incluso cuando se haya
    llegado al máximo número de caracteres.
 */

document.addEventListener("DOMContentLoaded", function () {
  const textArea = document.getElementById("texto");
  let contadorHTML = document.getElementById("contador");
  let tope = 100;

  /*
    Le añado un evento input al textArea para detectar cada vez que se pulsa una tecla, mediante una funcion obtengo la longitud de la cadena (lo que lleva escrito hasta el momento),
    con otra funcion actualizamos el contador para que el usuario lo sepa, y mediante un if comprobamos que el numero de caracteres que lleva el usuario introducidos no sea mayor que 100
    en caso de serlo por consola mostramos que llego al limite y la cadena al igual que el usuario la ve, ademas del ultimo digito de esta para comprobarlo.
  */
  textArea.addEventListener("input", function () {
    let nCaraceteres = obtenerLongitud(textArea);
    contadorHTML.innerHTML = actualizarContador(tope, textArea);
    if (nCaraceteres > 100) {
      console.log("--------Llego al limite----------");
      let texto100caracteres = textArea.value.slice(0, 100);
      textArea.value = texto100caracteres;
      console.log("Ultimo digito: " + texto100caracteres[texto100caracteres.length-1])
    }   
  });
  /*
    Le añado al textArea un evento keydown, para comprobar cuando pulsa la tecla Supr, si es asi, mediante una funcion quito un caracter y actualizo el contador.
  */
  textArea.addEventListener("keydown", function(event){
    if (event.key === "Delete") {
        textArea.value = restaSupr(textArea, tope);
        console.log("--------- NUEVO TEXTO -------");
        console.log(textArea.value);
        contadorHTML.innerHTML = actualizarContador(tope, textArea);
    }

});
});

/*
    Obtengo la longitud actual de la cadena
*/
function obtenerLongitud(textArea) {
    let nCaraceteres = 0;
    if(textArea.value != null){
        nCaraceteres = textArea.value.length;
    }
  return nCaraceteres;
}
/*
    Con la longitud actual se la resto al tope que es 100 y obtengo asi el numero de caracteres disponibles que quedan
*/
function actualizarContador(tope, textArea){
    return tope - obtenerLongitud(textArea);
}

function restaSupr(textArea){
    let nuevoTexto = textArea.value.slice(0, obtenerLongitud(textArea)-1);
    return nuevoTexto;
}
