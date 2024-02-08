/**
 *  Métodos: . getMediaValoraciones (), . cambiarEstadoPrestado () y . addValoracion ()
 */
export default class Media{
    constructor(titulo, arrayValoraciones = [], prestado = false){
        if(!validarString(titulo)){
            throw new Error("El titulo no es válido");
        }
        this._titulo = titulo;
        this._arrayValoraciones = arrayValoraciones;
        this._prestado = prestado;
    }

    get titulo(){
        return this._titulo;
    }

    get prestado(){
        return this._prestado;
    }

    get valoraciones(){
        let arrayCopia = [];
        for(let i = 0; i < this._arrayValoraciones.length; i++){
            arrayCopia.push[this._arrayValoraciones[i]];
        }
        return arrayCopia;
    }


    cambiarestadoPrestado(prestado){
        if(prestado != false){
            this._prestado = prestado;
        }
    }

    addValoracion(valoracion){
        if(!isNaN(valoracion)){
            this._arrayValoraciones.push(valoracion);
        }
    }

    getMediaValoraciones(){
        let divisor = this._arrayValoraciones.length;
        let suma = 0;
        for(let i=0; i < this._arrayValoraciones.length; i++){
            suma += this._arrayValoraciones[i];
        }

        return suma / divisor;
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