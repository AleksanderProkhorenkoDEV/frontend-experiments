/*
    Dado el siguiente código .html. Se debe dotar a la página de la siguiente
        funcionalidad:
        • Añade eventos a los enlaces para que al pulsar el botón de "Ocultar contenido"
        se oculte su párrafo superior y el texto del enlace cambie a "Mostrar contenido".
        • Al pulsar "Mostrar contenido", el párrafo ocultado debe volver a ser visible.
        No modificar código HTML dado salvo dentro de la etiqueta script de la cabecera.

*/

document.addEventListener("DOMContentLoaded", function () {

    let enlace1 = document.getElementById("enlace_1");
    let enlace2 = document.getElementById("enlace_2");
    let enlace3 = document.getElementById("enlace_3");

    const stringComprobacion = "Ocultar contenido";


    enlace1.addEventListener("click", function (event) {
        event.preventDefault();

        
        let textoEnlace = enlace1.textContent;
        let parrafo = document.getElementById("contenido_1");


        if(textoEnlace.toLowerCase() === stringComprobacion.toLowerCase()){
            parrafo.style.display = "none";
            enlace1.textContent = "Mostrar elemento";
        }else{
            parrafo.style.display = "block";
            enlace1.textContent = "Ocultar contenido";
        }
    })
    
    enlace2.addEventListener("click", function (event) {
        event.preventDefault();

        
        let textoEnlace = enlace1.textContent;
        let parrafo = document.getElementById("contenido_2");


        if(textoEnlace.toLowerCase() === stringComprobacion.toLowerCase()){
            parrafo.style.display = "none";
            enlace2.textContent = "Mostrar elemento";
        }else{
            parrafo.style.display = "block";
            enlace2.textContent = "Ocultar contenido";
        }
    })
    
    enlace3.addEventListener("click", function (event) {
        event.preventDefault();

        
        let textoEnlace = enlace1.textContent;
        let parrafo = document.getElementById("contenido_3");


        if(textoEnlace.toLowerCase() === stringComprobacion.toLowerCase()){
            parrafo.style.display = "none";
            enlace3.textContent = "Mostrar elemento";
        }else{
            parrafo.style.display = "block";
            enlace3.textContent = "Ocultar contenido";
        }
    })
})
