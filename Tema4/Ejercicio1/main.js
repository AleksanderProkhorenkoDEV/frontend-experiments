/*
    ACTIVIDAD 1: Crea la siguiente página web:
    • Debe contener una capa (div) con id "hola" de tamaño 500x500 y de color rojo. - LISTO
    • Dentro de la capa "hola" debe colocarse otra capa con id "adios" de 300x300 y
    de color verde. - LISTO
    • Se recomienda que la capa "adios" esté centrada. Por, ejemplo mediante el uso
    de position: absolute; y las propiedades top, right, etc.. - LISTO
    • Desde código JS añade eventos a ambas capas para que al hacer click manden un
    alert con el id de la capa pulsada.

*/

document.addEventListener("click", function (event) {
    

    if(document.getElementById("adios").contains(event.target)){
        alert("Se hizo click en Adios");
       
    }else if(document.getElementById("hola").contains(event.target)){
        
        alert("Se hizo click en Hola");
        
    }
})

