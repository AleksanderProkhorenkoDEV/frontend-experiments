const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

class prueba {
    constructor(nombre, dni, fechaNacimiento) {
        this._nombre = nombre;
        this._dni = dni; // Cambiado a _dni
        this._fecha = fechaNacimiento;
    }

    get dni() {
        return this._dni; // Usar _dni en el getter
    }
    get nombre() {
        return this._nombre;
    }

    get fecha() {
        return this._fecha;
    }
    toString() {
        return `Nombre: ${this.nombre}, DNI: ${this.dni}, Fecha de Nacimiento: ${this.fecha}`;
    }
}

let prueba3 = new prueba("Pepe", "57269L", "26/01/2000");
let prueba4 = new prueba("Manuel", "23545A", "26/02/2001");
let prueba1 = new prueba("Pepe", "67543A", "26/03/2003");
let prueba2 = new prueba("Manuel", "09237A", "26/04/2004");

let array = [prueba1, prueba2, prueba3, prueba4];


let arrayOrdenado = array.sort(compareDNI);
console.log(arrayOrdenado);
let elemento = aaa2(arrayOrdenado, "23545A");

console.log(elemento);

//console.log(array.sort(compareFECHA));

//console.log(busquedaSecuencialDNI("23545A", array))

function busquedaSecuencialDNI(dni, array) {
    let alumno = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].dni === dni) {
            alumno = array[i].toString();
        }
    }
    return alumno
}

function busquedaBinariaDNI(array, dni) {

    let arrayOrdenado = array.sort(compareDNI);
    let valorInicio = 0;
    let valorIntermedio = array.length / 2;
    let esEncontrado = false;
    let posicion = 0;
    for (let i = valorInicio; i < arrayOrdenado.length && !esEncontrado; i++) {
        if (arrayOrdenado[i].dni == dni) {
            esEncontrado = true;
            posicion = i;
        } else {
            if (arrayOrdenado[i].dni > dni) {
                valorInicio = valorIntermedio + 1;
            } else {
                valorInicio = valorIntermedio - 1;
            }
        }
    }

    return arrayOrdenado[i];
}
function busquedaBinariaDNI(array, dni){
    let valorInicio = 0;
    let valorFin = array.length - 1;
    while (valorInicio <= valorFin) {
        let valorIntermedio = Math.floor((valorInicio + valorFin) / 2);
        if (array[valorIntermedio].dni === dni) {
            return valorIntermedio; // Elemento encontrado, se devuelve la posición.
        } else if (array[valorIntermedio].dni < dni) {
            valorInicio = valorIntermedio + 1;
        } else {
            valorFin = valorIntermedio - 1;
        }
    }
    return -1;
}
function compareDNI(a, b) {
    return a.dni.slice(0, 4) - b.dni.slice(0, 4);
}

function compareFECHA(a, b) {
    return a.fecha.slice(6, 10) - b.fecha.slice(6, 10)
}

function compareNumbers(a, b) {
    return b - a;
}