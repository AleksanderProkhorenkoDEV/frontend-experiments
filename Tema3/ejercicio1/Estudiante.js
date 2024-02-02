import Persona from "./Persona.js";

export default class Estudiante extends Persona {


    /**
     * Constructor de la clase Estudiante, esta clase hereda de PERSONA, por lo tanto usamos SUPER para usar el constructor de persona y lo usa para crear es objeto persona
     * y crear el objeto Estudiante con el conjunto de todo.
     * 
     * Usamos dos funciones con la cual validamos que por parametro entran dos arrays y que tienen al menos un elemento. Una vez se reciben estos elementos se hace una Deep Copy
     * para garantizar la integridad de los datos del array y no trabajar con referencias.
     * @param {*} nombre 
     * @param {*} apellido 
     * @param {*} genero 
     * @param {*} fechaNaciento 
     * @param {*} listaModulosMatriculados 
     * @param {*} listaNotaModulos 
     */
    constructor(nombre, apellido, genero, fechaNaciento, dni, listaModulosMatriculados, listaNotaModulos) {
        super(nombre, apellido, genero, fechaNaciento, dni);
        if (!validarModulosMatriculados(listaModulosMatriculados)) {
            throw new Error("La lista de modulos es incorrecta");
        }
        if (!validarArrays(listaNotaModulos)) {
            throw new Error("La lista de notas es incorrecta");
        }
        this._listaModulosMatriculados = [];
        this._listaModulosNota = [];
        for (let i = 0; i < listaModulosMatriculados.length; i++) {
            this._listaModulosMatriculados.push(listaModulosMatriculados[i]);
        }
        for (let i = 0; i < listaNotaModulos.length; i++) {
            this._listaModulosNota.push(listaNotaModulos[i]);
            for (let j = 0; j < listaNotaModulos[i].length; j++) {
                this._listaModulosNota[i][j] = listaNotaModulos[i][j];
            }
        }

    }
    /**
     * Devolvemos la copia del array para que asi no enviarle referencias al usuario.
     */
    get getterListaModulos() {
        let arrayCopia = [];
        for (let i = 0; i < this._listaModulosMatriculados.length; i++) {
            arrayCopia.push(this._listaModulosMatriculados[i]);
        }
        return arrayCopia;
    }
    /**
     * Devolvemos la copia del array para que asi no enviarle referencias al usuario.
     */
    get getterListaNotas() {
        let arrayCopia = [];
        for (let i = 0; i < this._listaModulosNota.length; i++) {
            arrayCopia.push(this._listaModulosNota[i]);
            for (let j = 0; j < this._listaModulosNota[i].length; j++) {
                arrayCopia[i][j] = this._listaModulosNota[i][j];
            }
        }

        return arrayCopia;
    }
    /**
     * Comprobamos que el String de asingatura sea valido y que el almuno ya no este matriculado para evitar campos repetidos, posteriormente lo añadimos al array.
     */
    set setterModulosMatriculados(asignatura) {
        let array = this.getterListaModulos;
        if (validarString(asignatura) && !comprobarRepetido(asignatura, array)) {
            this._listaModulosMatriculados.push(asignatura);
            this._listaModulosNota.push([asignatura])
        }
    }

    /**
     * Para poder visualizar el estudiante de la forma que queremos creamos el toString() en el cual obtenemos los atributos medainte el this y en el caso de que sea de persona
     * hacemos una llamada al toString de Persona mediante el metodo super.
     * @returns 
     */
    toString() {
        const datosPersona = super.toString();
        let cadenaTexto = (`El alumno es: ${datosPersona} Esta matriculado en: ${this.getterListaModulos}, sus notas son: ${this.getterListaNotas}`);
        return cadenaTexto;
    }
    /**
     * Metodo el cual recibe por parametro el nombre de una asignatura, antes de buscar nada en el array comprobamos mediante una funcion si el usuario tiene esa asignatura 
     * matriculada en caso de que si devuelve TRUE, una vez dentro como vamos a operar con un ARRAY de ARRAYS necesitamos fors anidados para ir recorriendo elemento a elemento 
     * y dentro de ese elemento recorrer los sub elementos. Una vez se recorre mediante un IF se hace una comparacion a ver si el elemento i=1 = asignatura, en caso de que sea TRUE
     * se recorren los elementos de i=1 y se suman a una variable.
     * @param {*} asignatura 
     * @returns 
     */
    obtenerNota(asignatura) {
        let sumaNotas = 0;
        if (comprobarRepetido(asignatura, this.getterListaModulos)) {
            for (let i = 0; i < this.getterListaNotas.length; i++) {
                for (let j = 1; j < this.getterListaNotas[i].length; j++) {
                    if (this.getterListaNotas[i][0] == asignatura) {
                        sumaNotas += this.getterListaNotas[i][j];
                    }
                }
            }
        }
        return sumaNotas;
    }
    /**
     * Primero validamos que la asignatura que nos hayan enviado sea correcta, comprobamos que el estudiante esta matriculado de esa asignatura y comprobamos que el numero 
     * introducido sea valido, posteriormente buscamos la asignatura en el array mediante un for y le hacemos el push para añadirla al final la nota nueva.
     * @param {*} asignatura 
     * @param {*} notaNueva 
     */
    actualizarNota(asignatura, notaNueva) {
        let esActualizado = false;
        if (validarString(asignatura) && comprobarRepetido(asignatura, this.getterListaModulos) && comprobarNota(notaNueva)) {
            for (let i = 0; i < this.getterListaNotas.length && !esActualizado; i++) {
                if (this.getterListaNotas[i][0] == asignatura) {
                    this.getterListaNotas[i].push(notaNueva);
                    esActualizado = true;
                }
            }
        }
        return esActualizado;
    }
    /**
     * Con este metodo obtenemos la nota total del Estudiante en el ciclo, usamos dos arrays para ir recorriendo sub Array principal y sus elementos, el segundo se incializa la j=1
     * porque queremos las notas y como sabemos que el nombre esta en el indice 0 lo saltamos asi evitamos errores, almacenamos todas las notas en una variable que se va sumando 
     * segun se extraen y con otra variable contador se auto incremente por cada suma, para poder hacer la media directamente.
     * @returns 
     */
    obtenerNotaCiclo() {
        let notaTotal = 0;
        let sumaNotas = 0;
        let dividendo = 0;
        for (let i = 0; i < this.getterListaNotas.length; i++) {
            for (let j = 1; j < this.getterListaNotas[i].length; j++) {
                sumaNotas += this.getterListaNotas[i][j];
                dividendo++;
            }
        }

        notaTotal = sumaNotas / dividendo;
        return notaTotal;
    }
}

/**
 * Comprovamos que el array es un array y que tiene al menos un modulo matriculado para poder trabajar con el.
 * @param {*} listaModulos 
 * @returns 
 */
function validarArrays(listaModulos) {
    let esValido = false;
    if (Array.isArray(listaModulos) && listaModulos.length > 0) {
        esValido = true;
    }

    return esValido;
}
/**
 * Comprobamos que la lista de Modulos es valida, esto quiere decir que en una misma lista obtenida por parametro no existen dos modulos iguales
 * para eso lo hacemos con dos iteraciones, una para escoger el primero y otra para iterar en toda la cadena hacemos una condicion en la que si hay dos iguales
 * y sus indeces son iguales es valido porque seria el mismo item, ahora si sus indices son distintos entraria y seria una lista NO valida.
 * @param {*} listaModulosMatriculados 
 * @returns 
 */
function validarModulosMatriculados(listaModulosMatriculados) {
    let esValido = true;

    for (let i = 0; i < listaModulosMatriculados.length; i++) {
        for (let j = 0; j < listaModulosMatriculados.length; j++) {
            if (listaModulosMatriculados[i] == listaModulosMatriculados[j] && j != i) {
                esValido = false;
            }
        }
    }

    return esValido;
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
 * Comprobamos mediante un array y un String que es el nombre de la asignatura si el alumno ya esta matriculado en ese modulo
 * @param {*} asignatura 
 * @param {*} array 
 * @returns 
 */
function comprobarRepetido(asignatura, array) {
    let estaRepe = false;
    for (let i = 0; i < array.length && !estaRepe; i++) {
        if (array[i] == asignatura) {
            estaRepe = true;
        }
    }
    return estaRepe;
}
/**
 * Comprobamos si la nota que introduce esta dentro de los valores permitidos de la educacion española
 * @param {*} nota 
 * @returns 
 */
function comprobarNota(nota) {
    let esValido = false;
    if (nota >= 0 && nota <= 10) {
        esValido = true;
    }
    return esValido;
}

