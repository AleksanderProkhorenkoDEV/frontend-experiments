/*
    Nombre. Requisito: No debe estar vacío.
    • Edad. Requisito: Debe ser un número igual o mayor a 18.
    • Genero. Desplegable.
    • Número de teléfono. Requisito: debe aceptar solamente teléfonos con un
    formato valido (p.ej. 600600600 ó +34600600600 ó 0034600600600).
    • E-mail. Requisito: solamente se deben aceptar e-mails con un formato valido (p.
    ej. nombre@servidor.es).
*/

document.addEventListener("DOMContentLoaded", function (event) {
    const formulario = document.getElementById("validacion");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const nTelefono = document.getElementById("nTelefono").value;
        const email = document.getElementById("email").value;

        console.log(nombre);
        console.log(edad);
        console.log(nTelefono);
        console.log(email);

        if (validarString(nombre) && validarEdad(edad) && validarNtelefono(nTelefono) && validarEmail(email)) {
            alert("El formulario es válido");
        } else {
            console.log("Nombre: " + validarString(nombre));
            console.log("Edad: " + validarEdad(edad));
            console.log("Telefono: " + validarNtelefono(nTelefono));
            console.log("Email: " + validarEmail(email));
            alert("Formulario no válido");
        }
    });
});


function validarString(nombre) {
    let regex = /^[A-Za-z]+$/u;
    let esValido = false;
    if (regex.test(nombre)) {
        esValido = true;
    }

    return esValido;
}

function validarEdad(edad) {
    let esValido = false;

    if (!isNaN(edad) || edad >= 18) {
        esValido = true;
    }
    return esValido;
}

function validarNtelefono(telefono) {
    let esValido = false;
    regex = /^(?:\+34|0034|34)?\d{9}$/;

    if (regex.test(telefono)) {
        esValido = true;
    }
    return esValido;
}

function validarEmail(email) {
    let esValido = false;
    regex = /^[a-zA-Z0-9]+@servidor\.es$/;
    if (regex.test(email)) {
        esValido = true;
    }
    return esValido;
}