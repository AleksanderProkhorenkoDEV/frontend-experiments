/**
 * Sobre el código de la actividad 1 y 2 del tema 4, crea eventos utilizando
    las teclas de las flechas de dirección para que la capa "adios" varié su posición en 5
    pixeles al pulsar las teclas de dirección (en función del significado semántico de la tecla,
    es decir, al pulsar la tecla flecha derecha, el cuadrado debe moverse 5 pixeles a la
    derecha).
    El cuadrado con id "adios" nunca debe salirse de los límites del cuadrado con id "hola".
 */
document.addEventListener("keydown", function (event) {
    let adios = document.getElementById("adios");
    let hola = document.getElementById("hola");

    let adiosRect = adios.getBoundingClientRect();
    let holaRect = hola.getBoundingClientRect();

    let adiosLeft = adiosRect.left - holaRect.left;
    let adiosTop = adiosRect.top - holaRect.top;

    const incremento = 5;

    if(event.key === 'ArrowUp'){
        if(adiosTop - incremento >= 0){
            adios.style.top = (adiosTop - incremento) + 'px';
        }
    }else if (event.key === 'ArrowDown'){
        if(adiosTop + adiosRect.height + incremento <= holaRect.height){
            adios.style.top = (adiosTop + incremento) + 'px';
        }
    }else if(event.key === 'ArrowLeft'){
        if(adiosLeft - incremento >= 0){
            adios.style.left = (adiosLeft - incremento) + 'px';
        }
    }else if(event.key === 'ArrowRight'){
        if(adiosLeft + adiosRect.width + incremento <= holaRect.width){
            adios.style.left = (adiosLeft + incremento) + 'px';
        }
    }

});