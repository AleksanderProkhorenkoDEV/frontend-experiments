/*
    ACTIVIDAD 5. Realiza una página que saque una serie de diapositivas a partir de unos
    ficheros con fotos. El pase de diapositivas será automático cada 2 segundos y aparecerá
    además de la foto el título de la misma.
    Puedes añadir las funcionalidades que se te ocurran

*/

document.addEventListener("DOMContentLoaded", function(){
    
    const contenedor = document.querySelector(".contenedor"); //Obtengo el condenedor padre
    const elementos = contenedor.querySelectorAll(".contenedorIMG"); //Obtengo cada div que contiene la imagen con su titulo
    let indiceActivo = 0;

    /**
     * Recorro con un forEach los divs que contienen la imagen y el titulo y le borro la clase activa, despues con el indice le asigno la clase a un nuevo,
     * actualizo el indice.
     */
    function mostrarSiguienteElemento() {
        elementos.forEach(elemento => elemento.classList.remove("activo"));
        elementos[indiceActivo].classList.add("activo");
    
        indiceActivo = (indiceActivo + 1) % elementos.length;
    }

    // Establecer el intervalo para cambiar cada 2 segundos
    setInterval(mostrarSiguienteElemento, 2000);

});

