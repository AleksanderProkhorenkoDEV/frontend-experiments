import Persona from "./Persona.js";
import Estudiante from "./Estudiante.js";
import Estudiantes from "../ejercicio2/Estudiantes.js";



const listaModulos1 = [
    "Matematicas",
    "Lengua",
    "Filosofia",
    "Economia"
];
let notasModulos1 = [
    ["Matematicas", 7],
    ["Lengua", 7, 5],
    ["Filosofia", 4],
    ["Economia", 9, 10]
];
const listaModulos2 = [
    "Matematicas",
    "Lengua",
    "Filosofia",
    "Economia"
];
let notasModulos2 = [
    ["Matematicas", 4],
    ["Lengua", 5, 5],
    ["Filosofia", 9],
    ["Economia", 7, 1]
];
const listaModulos3 = [
    "Matematicas",
    "Lengua",
    "Filosofia",
    "Economia"
];
let notasModulos3 = [
    ["Matematicas", 1],
    ["Lengua", 7, 7],
    ["Filosofia", 8],
    ["Economia", 4, 4]
];
const listaModulos4 = [
    "Matematicas",
    "Lengua",
    "Filosofia",
    "Economia"
];
let notasModulos4 = [
    ["Matematicas", 3],
    ["Lengua", 8, 5],
    ["Filosofia", 6],
    ["Economia", 9, 10]
];



const persona1 = new Persona("Pepe", "Lopez", "masculino", "19/10/1999", "12345678A");
const persona2 = new Persona("Manolo", "Fernandez", "masculino", "25/11/2003", "69878554A");
const persona3 = new Persona("Lucia", "Gonzalez", "femenino", "31/12/2002", "35495165G");
const persona4 = new Persona("Antonio", "Martin", "femenino", "04/01/2000", "78365418L");

const estudiante1 = new Estudiante(persona1.getternombre, persona1.getterapellidos, persona1.gettergenero, persona1.getterfecha, persona1.getterDNI, listaModulos1, notasModulos1);
const estudiante2 = new Estudiante(persona2.getternombre, persona2.getterapellidos, persona2.gettergenero, persona2.getterfecha, persona2.getterDNI, listaModulos2, notasModulos2);
const estudiante3 = new Estudiante(persona3.getternombre, persona3.getterapellidos, persona3.gettergenero, persona3.getterfecha, persona3.getterDNI, listaModulos3, notasModulos3);
const estudiante4 = new Estudiante(persona4.getternombre, persona4.getterapellidos, persona4.gettergenero, persona4.getterfecha, persona4.getterDNI, listaModulos4, notasModulos4);

/**
    METODOS DE PERSONA
*/

// console.log(`El nombre de la persona es ${persona1.getternombre} y su apellido es ${persona1.getterapellidos}`);

// console.log(`Nacio en ${persona1.getterfecha}. Hubo un error asi que lo modificamos`);

// persona1.setterFecha = "19/10/2000";

// console.log(`Ahora su fecha es ${persona1.getterfecha}`)

// console.log(`Visualizamos a ${persona1.toString()}`);

/**
*   METODOS DE ESTUDIANTE
*/

// console.log(estudiante1.toString());

// console.log(`Esta matriculado en: ${estudiante1.getterListaModulos}`);

// console.log(`Quiero matricularme en Biologia`);

// estudiante1.setterModulosMatriculados = "Biologia";


// console.log(`Hice mi primer examen de Biologia y saque un 10`);

// estudiante1.actualizarNota("Biologia", 10);

// console.log(`Mis notas son: ${estudiante1.getterListaNotas}`)

// console.log(`Me gustaria saber cual es la nota media final. ${estudiante1.obtenerNotaCiclo() }`)


/**
    EJERCICIO 2 
 
    * Ordenar por DNI.
    • Ordenar por Fecha de nacimiento.
    • Ordenar por Nota media en el ciclo.
    • Buscar alumno por DNI en un array desordenado (busqueda secuencial). Se debe
    devolver un objeto del tipo Estudiante.
    • Buscar alumno por DNI en un array ordenado (busqueda binaria). Se debe devolver un
    objeto del tipo Estudiante.
 */


let arrayEstudiantes = [
    estudiante3,
    estudiante2,
    estudiante4,
    estudiante1,
];



let estudiantes1 = new Estudiantes(arrayEstudiantes);

// console.log(`Array ordenado mediante DNI : ${estudiantes1.ordenarDNI()}`);

// console.log(`Array ordenado mediante FECHA: ${estudiantes1.ordenarFecha()}`);

// console.log(`Array ordenado por NOTA CICLO: ${estudiantes1.ordenarPorNotaCilclo()}`);



/**
    EJERCICIO 3
    
    Array desordenado + busqueda secuencial (actividad 2).
    Array ordenado + busqueda binaria (actividad 2).
*/

// console.time(`Busqueda Secuencial desordenada`);
// console.log(`Busqueda secuencial : ${estudiantes1.busquedaSecuencialDNI("35495165G")}`);
// console.timeEnd(`Busqueda Secuencial desordenada`);

// console.time(`Busqueda binaria ordenada`);
// console.log(`Busqueda binaria: ${estudiantes1.busquedaBinariaDNI("35495165G")}`);
// console.timeEnd(`Busqueda binaria ordenada`);


/**
    EJERCICIO 4

    Repite el ejercicio 3 considerando el DNI más "pequeño" de tu lista de estudiantes
    y el más "grande". ¿Cuál implementación es mejor en cada caso?
*
*/


// console.time(`Busqueda Secuencial DNI pequeño`);
// console.log(`Busqueda secuencial : ${estudiantes1.busquedaSecuencialDNI("12345678A")}`);
// console.timeEnd(`Busqueda Secuencial DNI pequeño`);

// console.time(`Busqueda binaria DNI pequeño`);
// console.log(`Busqueda binaria: ${estudiantes1.busquedaBinariaDNI("12345678A")}`);
// console.timeEnd(`Busqueda binaria DNI pequeño`);

// console.time(`Busqueda Secuencial DNI grande`);
// console.log(`Busqueda secuencial : ${estudiantes1.busquedaSecuencialDNI("78365418L")}`);
// console.timeEnd(`Busqueda Secuencial DNI grande`);

// console.time(`Busqueda binaria DNI grande`);
// console.log(`Busqueda binaria: ${estudiantes1.busquedaBinariaDNI("78365418L")}`);
// console.timeEnd(`Busqueda binaria DNI grande`);







