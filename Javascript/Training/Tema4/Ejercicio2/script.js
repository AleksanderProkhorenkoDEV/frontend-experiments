/**
    Usa de nuevo el fichero html del ejercicio 5 del tema anterior. Usando las
    funciones propias del DOM, crear un botón "Modifica página" en la parte inferior que
    realice lo siguiente:
    1. Dentro del párrafo "contenido_2" crea estos elementos nuevos:
    a) Un elemento p. En él:
    - Cambia el atributo title: "Título del nuevo párrafo".
    - Añade un nodo texto: "Este es la primera parte de mi nuevo párrafo"
    - Añade un elemento br
    - Añade un nodo texto: "Este es la segundo parte de mi nuevo párrafo"
    b) Un elemento b:
    - Añade dentro un nodo texto: "Este el texto en negrita."
    2. Cambia el contenido del párrafo contenido_3 por: "Este es el nuevo contenido del
    párrafo 3".
    3. Elimina del DOM el párrafo contenido_1
 */

document.addEventListener("DOMContentLoaded", function(){

    const btnModificar = document.getElementById("modificar");

    btnModificar.addEventListener("click", function(){
        /*
            PARRAFO DEL CONTENIDO 2
        */
        const parrafo2 = document.getElementById("contenido_2");

        /*
            EL NUEVO PARRAFO QUE AÑADIMOS
        */
        const parrafoNuevo = document.createElement("p");

        const nodoTexto1 = document.createTextNode("Este es la primera parte de mi nuevo párrafo");
        const saltoLinea = document.createElement("br");
        const nodoTexto2 = document.createTextNode("Esta es la segunda parte de mi nuevo párrafo");

        parrafoNuevo.setAttribute("title", "Título del nuevo párrafo");
        parrafoNuevo.appendChild(nodoTexto1);
        parrafoNuevo.appendChild(saltoLinea);
        parrafoNuevo.appendChild(nodoTexto2);

        parrafo2.appendChild(parrafoNuevo);
              
        /*
            ELEMENTO B
        */
        const elementoB = document.createElement("b");
        const nodoNegrita = document.createTextNode("Este es el texto en negrita");

        elementoB.appendChild(nodoNegrita);

        parrafo2.appendChild(elementoB);
        /*
            PARTE 2 DEL EJERCICIO
        */
        const parrafo3 = document.getElementById("contenido_3");
        
        parrafo3.textContent = "Este es el nuevo contenido del parrafo 3";

        /*
            PARTE 3 DEL EJERCICIO
        */
       const parrafo1 = document.getElementById("contenido_1");

       parrafo1.remove();
    })
});