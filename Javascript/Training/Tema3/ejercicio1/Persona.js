/*
    Se debe definir una clase Persona.
        • La clase Persona debe tener las siguientes propiedades: nombre, apellidos, genero y
        fecha de nacimiento. - LISTO
        • Se debe definir una clase Estudiante que extienda a la clase Persona. - LISTO
        • La clase Estudiante debe contener (además de las propiedades de Persona) las
        siguientes propiedades: una lista que contenga la información de los módulos
        matrículados y la nota final obtenida en cada uno. - LISTO
        • Tanto la clase Persona como estudiante deben tener constructores. Cada constructor
        debe tener los parámetros que sean necesarios. - Listo
        • No se debe poder acceder directamente a las propiedades, sino que cada una debe
        tener su propio getter y setter. - Listo
        • Ambos tienen que tener un método "toString()" que devuelva una cadena que
        condense toda la infomación de las propiedades. - Listo
        • La clase Estudiante debe tener un método que permita obtener la nota de un módulo
        dado su nombre. - LISTO
        • La clase Estudiante debe tener un método que permita actualizar la nota de un
        módulo dados dos parametros (nombre del módulo y nueva nota). - LISTO
        • La clase Estudiante debe tener un método de "calcularNotaMediaCiclo()". 
*/

export default class Persona {

    /**
     * 
     * @param {*} nombre 
     * @param {*} apellidos 
     * @param {*} genero 
     * @param {*} fechaNaciento 
     * @param {*} dni 
     */
    constructor(nombre, apellidos, genero, fechaNaciento, dni) {
        if (!validarString(nombre)) {
            throw new Error("El nombre no cumple un formato válido");
        }
        if (!validarString(apellidos)) {
            throw new Error("El apellido no es válido");
        }

        if (!validarFecha(fechaNaciento)) {
            throw new Error("La fecha de nacimiento no cumple el formato válido");
        }
        if (!validarGenero(genero)) {
            throw new Error("El genero no cumple el formato válido");
        }
        if(!validarDNI(dni)){
            throw new Error("El dni no cumple el formato válido");
        }
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._genero = genero;
        this._fechaNacimiento = fechaNaciento;
        this._dni = dni;


    }

    get getternombre() {
        return this._nombre;
    }

    get getterapellidos() {
        return this._apellidos;
    }

    get getterfecha() {
        return this._fechaNacimiento;
    }
    get gettergenero() {
        return this._genero;
    }

    get getterDNI(){
        return this._dni
    }

    /**
     * @param {String} nombre
     */
    set setterNombre(nombre) {
        if (expresionString(nombre)) {
            this._nombre = nombre
        }
    }

    /**
     * @param {String} apellido
     */
    set setterApellido(apellido) {
        if (expresionString(apellido)) {
            this._apellidos = apellido;
        }
    }

    /**
     * @param {String} genero
     */
    set setterGenero(genero) {
        if (expresionGenero(genero)) {
            this._genero = genero;
        }
    }

    /**
     * @param {String} fecha
     */
    set setterFecha(fecha) {
        if (validarFecha(fecha)) {
            this._fechaNacimiento = fecha;
        }
    }

    /**
     * @param {any} dni
     */
    set setterDNI(dni){
        if(validarDNI(dni)){
            this._dni = dni;
        }
    }
    /**
     * Para poder visualizar el estudiante de la forma que queremos creamos el toString() en el cual obtenemos los atributos medainte el this.
     */
    toString() {
        let cadenaTexto = `El nombre es: ${this.getternombre}, su apellidos son: ${this.getterapellidos}, su fecha de nacimiento es: ${this.getterfecha}, su genero es: ${this.gettergenero} y su DNI: ${this.dni}`;
        return cadenaTexto;
    }
}


/**
 * Comprobamos que el String que introduce el usuario es válido
 * @param {*} cadena 
 * @returns 
 */
function validarString(cadena) {
    const expresionString = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]{2,50}$/;
    let esValido = false;
    if (expresionString.test(cadena)) {
        esValido = true;
    }
    return esValido;
}
/**
 * Comprobamos que la fecha cumple el formato dd/mm/aaaa y que no pone por ejemplo 40/15/2000
 * @param {*} fecha 
 * @returns 
 */
function validarFecha(fecha) {
    const expresionFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    let esValido = false;
    if (expresionFecha.test(fecha)) {
        esValido = true;
    }
    return esValido;
}
/**
 * Validamos que la persona sea de genero masculino o femenino cualquier otro devolveria false.
 * @param {*} genero 
 * @returns 
 */
function validarGenero(genero) {
    const expresionGenero = /^(masculino|femenino)$/;
    let esValido = false;
    if (expresionGenero.test(genero)) {
        esValido = true;
    }
    return esValido;
}

function validarDNI(dni){
    const regex = /^[0-9]{8}[A-Z]$/;
    let esValido = false;
    if(regex.test(dni)){
        esValido = true;
    }

    return esValido;
}