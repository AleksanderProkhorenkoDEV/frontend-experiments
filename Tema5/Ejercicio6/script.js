/*
    Mejora el formulario de la actividad 4 del tema 4 añadiendo los siguientes
    campos:
    • Ciudad y país de residencia: no obligatorios
    • Foto
    • Una contraseña: sólo puede contener letras, números y el subrayado; al menos
    debe contener una letra en mayúsculas, una letra en minúsculas y un número;
    longitud mínima 6 caracteres y máxima 15.
    • Repetición de la contraseña: debe coincidir con la anterior, obviamente.
    • Una operación matemática de suma entre dos números enteros de un dígito
    determinados al azar (por ej. 5 + 3 = ?) con el fin de solicitar su resultado para
    evitar bots.
    • Una casilla de verificación de "Acepto las condiciones" inicialmente desactivada.
    Hasta que esta opción no se verifique no se habilitará el botón de envío. 
    • Un botón de envío con el texto "Crear cuenta"
    • Un botón de borrado de datos (reset) 


*/

document.addEventListener("DOMContentLoaded", function () {
    /**
     * Constantes validacion
     */

    const camposValidos = {
        nombre: false,
        edad: false,
        nTelefono: false,
        email: false,
        ciudad: false,
        pais: false,
        contraseña1: false,
        contraseña2: false,
        check: false
    };
    let camposValido = true;
    /**
     * OBTENEMOS LOS BOTONEs
     */
    btnCrear = document.getElementById("crear");
    btonReset = document.getElementById("borrar");
    /**
     * Obtenemos todos los inputs
     */
    const inputNombre = document.getElementById("nombre");
    const inputEdad = document.getElementById("edad");
    const inputNumero = document.getElementById("nTelefono");
    const inputEmail = document.getElementById("email");
    const inputCiudad = document.getElementById("ciudad");
    const inputPais = document.getElementById("pais");
    const inputContraseña1 = document.getElementById("contraseña1");

    const inputContraseña2 = document.getElementById("contraseña2");
    const inputCheck = document.getElementById("cuadrado");

    inputNombre.addEventListener("blur", function () {
        validarCampo(inputNombre, validarString, 'nombre');
    });
    
    inputEdad.addEventListener("blur", function () {
        validarCampo(inputEdad, value => validarEdad(parseInt(value)), 'edad');
    });
    
    inputNumero.addEventListener("blur", function () {
        validarCampo(inputNumero, validarNtelefono, 'nTelefono');
    });
    
    inputEmail.addEventListener("blur", function () {
        validarCampo(inputEmail, validarEmail, 'email');
    });
    
    inputCiudad.addEventListener("blur", function () {
        validarCampo(inputCiudad, validarString, 'ciudad');
    });
    
    inputPais.addEventListener("blur", function () {
        validarCampo(inputPais, validarString, 'pais');
    });
    
    inputContraseña1.addEventListener("blur", function () {
        validarCampo(inputContraseña1, validarPwd, 'contraseña1');
    });
    
    inputContraseña2.addEventListener("blur", function () {
        validarCampo(inputContraseña2, value => validarPwd(value) && compararContraseñas(), 'contraseña2');
    });
    
    // Asignar el manejador de eventos al checkbox
    inputCheck.addEventListener("change", function () {
        camposValidos.check = inputCheck.checked;
        btnCrear.disabled = !todosLosCamposValidos();
    });

    btonReset.addEventListener("click", function(){
        let inputs = document.querySelectorAll("input");

        inputs.forEach(input =>{
            input.value = "";
        })
    })

});

/**
 * 
 *  FUNCIONES DE VALIDACION
 *   
 */
/**
 * Validamos que sea una cadena de caracteres que contenga unicamente letras independientemente de su longitud
 * @param {*} nombre 
 * @returns 
 */
function validarString(nombre) {
    let regex = /^[A-Za-z]+$/u;
    let esValido = false;
    if (regex.test(nombre)) {
        esValido = true;
    }

    return esValido;
}
/**
 * Comprobamos que el valor sea numerico y mayor o igual a 18
 * @param {*} edad 
 * @returns 
 */
function validarEdad(edad) {
    let esValido = false;

    if (!isNaN(edad) && edad >= 18) {
        esValido = true;
    }
    return esValido;
}
/**
 * Validamos que el numero de telefono sea
 * +34659587986
 * 0034659789365
 * 346598963
 * @param {*} telefono 
 * @returns 
 */
function validarNtelefono(telefono) {
    let esValido = false;
    regex = /^(?:\+34|0034|34)?\d{9}$/;

    if (regex.test(telefono)) {
        esValido = true;
    }
    return esValido;
}
/**
 * Validamos que el email sea de un tipo especifico
 * @param {*} email 
 * @returns 
 */
function validarEmail(email) {
    let esValido = false;
    regex = /^[a-zA-Z0-9]+@servidor\.es$/;
    if (regex.test(email)) {
        esValido = true;
    }
    return esValido;
}
/**
 * Validamos que las contraseñas tengan minimo 6 caracteres, que contengan mayusculas y numeros
 * @param {} contraseña 
 * @returns 
 */
function validarPwd(contraseña) {
    let esValido = false;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_]{6,15}$/;

    if (regex.test(contraseña)) {
        esValido = true;
    }

    return esValido;
}
/**
 * Comparamos las dos contraseñas cuando nos llegan, si son iguales devuelve true, si no false
 * @returns 
 */
function compararContraseñas() {
    let contraseña1 = document.getElementById("contraseña1");
    let contraseña2 = document.getElementById("contraseña2");
    let esValido = false;
    if (contraseña1 === contraseña2) {
        esValido = true;
    }
    return esValido;
}
/**
 * Revisa que todos los elementos de un array cumplan con la condicion de true
 * @returns 
 */
function todosLosCamposValidos() {
    return Object.values(camposValidos).every(valido => valido);
}

/**
 * Obtenemos el input y la funcion que lo valida en segun que parte del codigo, ademas del nombre en el cual se encuentra su variable logica en el array para modificar su estado en caso contrario
 * en caso de qeu sea true añade true en el array y quita la clase error, en caso contrario la añade y se marca de rojo el input del formulario
 * @param {*} input 
 * @param {*} validator 
 * @param {*} campo 
 */
function validarCampo(input, validator, campo) {
    if (!validator(input.value)) {
        input.classList.add("error");
        camposValidos[campo] = false;
    } else {
        input.classList.remove("error");
        camposValidos[campo] = true;
    }

    // Habilitar o deshabilitar el botón de crear según la validez de todos los campos
    btnCrear.disabled = !todosLosCamposValidos();
}