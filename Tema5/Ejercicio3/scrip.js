/*
    Realiza un ejercicio en que tengamos una tabla con una serie de columnas
    parecida a la de la siguiente imagen:

    1. Cuando el usuario hace click sobre una de las filas, debe de aparecer los valores
    de la fila seleccionada en los campos de la derecha. Se deberá destacar
    visualmente la fila seleccionada.
    2. Se puede añadir una nueva fila (después de la seleccionada), con los datos
    introducidos por el usuario en los campos.
    3. Editar una fila (seleccionada).
    4. Borrar una fila (seleccionada).
    
*/

document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.getElementById("tbody");
    let filaResaltada;
    /*
        BOTONES DEL FORMULARIO
    */
    const añadir = document.getElementById("añadir");
    const editar = document.getElementById("editar");
    const eliminar = document.getElementById("borrar");
    /*
        INPUTS DEL FORMULARIO
    */
    const inputNombre = document.getElementById("nombre");
    const inputApellido = document.getElementById("apellido");
    const inputEdad = document.getElementById("edad");

    tbody.addEventListener("click", function (event) {

        const fila = obtenerFila(event);
        let datos = obtenerDatos(fila);

        if (filaResaltada) { //Comprobamos si hay una fila resaltada, si es asi le borramos la clase, para poder añadirselo a la nueva.
            filaResaltada.classList.remove("resaltarFila");
        }

        fila.classList.add("resaltarFila");
        filaResaltada = fila;


        /*
            Rellenamos el value del form
        */
        inputNombre.value = datos[0];
        inputApellido.value = datos[1];
        inputEdad.value = datos[2];

    })



    añadir.addEventListener("click", function () {
        if (validarCampos(inputNombre) && validarCampos(inputApellido) && validarCampos(inputEdad)) {
            /*
                Obtenemos la fila resaltada, asi sabemos cual es para añadirle el elemento despues
            */
            const fila = document.querySelector(".resaltarFila");
            /*
                Creamos la fila, le insertamos los datos
            */
            let elementoTR = document.createElement("tr");
            let nombre = document.createElement("td");
            let apellido = document.createElement("td");
            let edad = document.createElement("td");

            nombre.innerHTML = inputNombre.value;
            apellido.innerHTML = inputApellido.value;
            edad.innerHTML = inputEdad.value;

            elementoTR.appendChild(nombre);
            elementoTR.appendChild(apellido);
            elementoTR.appendChild(edad);
            /*
                Insertamos en el HTML
            */
            fila.parentNode.insertBefore(elementoTR, fila.nextSibling);
        }
    })

    editar.addEventListener("click", function () {

        let nombre = inputNombre.value;
        let apellido = inputApellido.value;
        let edad = inputEdad.value;

        let fila = document.querySelector(".resaltarFila");

        if(fila != null){ //Comprobamos que se selecciono una fila antes de hacer nada
            let celdas = fila.querySelectorAll("td");
            /**
             *  Actualizar el contenido de cada celda con los nuevos valores
             */
            celdas[0].textContent = nombre;
            celdas[1].textContent = apellido;
            celdas[2].textContent = edad;
        }
    });

    eliminar.addEventListener("click", function () {
        let filaBorrar = document.querySelector(".resaltarFila");


        if(filaBorrar != null){ //Comprobamos que se selecciono una fila antes de hacer nada
            tbody.removeChild(filaBorrar);
        }
    });
});

function obtenerFila(event) {
    let fila = null;
    if (event.target.tagName === "TD") {
        fila = event.target.parentNode;
    }
    return fila;
}

function obtenerDatos(fila) {
    const celdas = fila.querySelectorAll("td");
    const datos = [];

    celdas.forEach(elemento => {
        datos.push(elemento.textContent);
    });

    return datos;
}

