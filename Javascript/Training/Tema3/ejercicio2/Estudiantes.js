/**
 * • Ordenar por DNI. - LISTO
    • Ordenar por Fecha de nacimiento. - LISTO
    • Ordenar por Nota media en el ciclo. - LISTO
    • Buscar alumno por DNI en un array desordenado (busqueda secuencial). Se debe
    devolver un objeto del tipo Estudiante. - LISTO
    • Buscar alumno por DNI en un array ordenado (busqueda binaria). Se debe devolver un
    objeto del tipo Estudiante. - LISTA  
 */

import Estudiante from "../ejercicio1/Estudiante.js";


export default class Estudiantes {
    constructor(arrayEstudiantes) {
        if (!validarArrays(arrayEstudiantes)) {
            throw new Error("La lista de estudiantes es incorrecta");
        }
        this._arrayEstudiantes = [];
        for (let i = 0; i < arrayEstudiantes.length; i++) {
            let estudiante = new Estudiante(arrayEstudiantes[i].getternombre,
                arrayEstudiantes[i].getterapellidos,
                arrayEstudiantes[i].gettergenero,
                arrayEstudiantes[i].getterfecha,
                arrayEstudiantes[i].getterDNI,
                arrayEstudiantes[i].getterListaNotas,
                arrayEstudiantes[i].getterListaNotas
            );

            this._arrayEstudiantes.push(estudiante);
        }
    }

    get getterListaEstudiantes() {
        let arrayCopia = [];
        for (let i = 0; i < this._arrayEstudiantes.length; i++) {
            arrayCopia.push(this._arrayEstudiantes[i]);
        }
        return arrayCopia;
    }

    ordenarDNI() {
        return this._arrayEstudiantes.sort(compareDNI);
    }

    ordenarFecha() {
        return this._arrayEstudiantes.sort(compareFECHA);
    }

    ordenarPorNotaCilclo() {
        return this._arrayEstudiantes.sort(compareNota);
    }

    busquedaSecuencialDNI(dni) {
        let alumno = "";
        for (let i = 0; i < this._arrayEstudiantes.length; i++) {
            if (this._arrayEstudiantes[i].getterDNI === dni) {
                alumno = this._arrayEstudiantes[i].toString();
            }
        }
        return alumno
    }

    busquedaBinariaDNI(dni) {
        let arrayOrdenado = this._arrayEstudiantes.sort(compareDNI);
        let valorInicio = 0;
        let valorFin = arrayOrdenado.length - 1;
        let estudiante = null;
        let esEncontrado = false;
        while (valorInicio <= valorFin && !esEncontrado) {
            let valorIntermedio = Math.floor((valorInicio + valorFin) / 2);
            if (arrayOrdenado[valorIntermedio].getterDNI === dni) {
                estudiante =  new Estudiante (
                    arrayOrdenado[valorIntermedio].getternombre,
                    arrayOrdenado[valorIntermedio].getterapellidos,
                    arrayOrdenado[valorIntermedio].gettergenero,
                    arrayOrdenado[valorIntermedio].getterfecha,
                    arrayOrdenado[valorIntermedio].getterDNI,
                    arrayOrdenado[valorIntermedio].getterListaModulos,
                    arrayOrdenado[valorIntermedio].getterListaNotas,
                    );
                esEncontrado = true;
            } else if (arrayOrdenado[valorIntermedio].getterDNI < dni) {
                valorInicio = valorIntermedio + 1;
            } else {
                valorFin = valorIntermedio - 1;
            }
        }
        return estudiante;
    }
}


function validarArrays(arrayEstudiantes) {
    let esValido = false;
    if (Array.isArray(arrayEstudiantes) && arrayEstudiantes.length > 0) {
        esValido = true;
    }

    return esValido;
}
/**
 * Ordena del DNI mas pequeño al mas grande
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function compareDNI(a, b) {
    return a.getterDNI.slice(0, 8) - b.getterDNI.slice(0, 8);
}
/**
 * Ordena de la fecha mas antigua a las nueva
 * @param {} a 
 * @param {*} b 
 * @returns 
 */
function compareFECHA(a, b) {
    return a.getterfecha.slice(6, 10) - b.getterfecha.slice(6, 10)
}
/**
 * Ordena desde la nota mas alta a la mas pequeña
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function compareNota(a, b) {
    return b.obtenerNotaCiclo() - a.obtenerNotaCiclo();
}