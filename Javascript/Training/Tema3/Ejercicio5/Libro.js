import Media from "./Media.js";
/**
    Libros
    • Propiedades: autor(string), titulo(string), paginas(number), prestado(boolean,inicialmente false), y valoraciones(array, inicialmente vacío)
    • Getters: todas las propiedades tienen un getter

 */
export default class Libro extends Media{
    constructor(titulo, arrayValoraciones = [], prestado = false, autor, paginas){
        super(titulo, arrayValoraciones, prestado);
        if(!validarString(autor)){
            throw new Error(`El autor no cumple el formato valido`);
        }
        if(isNaN(paginas)){
            throw new Error(`El numero de paginas no cumple el formato valido`);
        }
        this._autor = autor;
        this._paginas = paginas;
    }

    get autor(){
        return this._autor;
    }
    get paginas(){
        return this._paginas;
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