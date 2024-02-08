import Media from "./Media.js";
/**
 *  Películas
    • Propiedades: director (string), titulo(string), duracion(number), prestado (boolean,inicialmente false), y valoraciones (array, inicialmente vacío)
    • Getters: todas las propiedades tienen un getter
 */
export default class Pelicula extends Media{
    constructor(titulo, arrayValoraciones = [], prestado = false, director, duracion){
        super(titulo, arrayValoraciones, prestado);
        if(!validarString(director)){
            throw new Error(`El director no cumple el formato valido`);
        }

        if(isNaN(duracion)){
            throw new Error(`La duracion no cumple el formato valido`);
        }

        this._duracion = duracion;
        this._director = director;
    }
    get duracion(){
        return this._duracion;
    }

    get director(){
        return this._director;
    }
}

function validarString(cadena) {
    const expresionString = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]{2,50}$/;
    let esValido = false;
    if (expresionString.test(cadena)) {
        esValido = true;
    }
    return esValido;
}