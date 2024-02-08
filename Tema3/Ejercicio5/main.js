import Libro from "./Libro.js";
import Pelicula from "./Pelicula.js";

let  arrayValoraciones = [];
let prestado = false;
let cambioPrestado = true;

const libro1 = new Libro ("Torrente", arrayValoraciones, prestado, "Manolo", 360);


libro1.addValoracion(5);
libro1.addValoracion(4);
libro1.addValoracion(8);
libro1.addValoracion(3);
libro1.cambiarEstadoPrestado(cambioPrestado);


console.log(`Libro: ${libro1.titulo}`);
console.log(`Autor: ${libro1.autor}`);
console.log(`Páginas: ${libro1.paginas}`);
console.log(`Prestado: ${libro1.prestado}`);
console.log(libro1.getMediaValoraciones());


let arrayValoresPelicula = [];

const pelicula2 = new Pelicula("Negrata a cuatro patas", arrayValoresPelicula, prestado, "opi", 160);


pelicula2.addValoracion(7);
pelicula2.addValoracion(9);
pelicula2.addValoracion(7);
pelicula2.addValoracion(9);
pelicula2.cambiarEstadoPrestado(cambioPrestado);


console.log(`Pelicula: ${pelicula2.titulo}`);
console.log(`Autor: ${pelicula2.director}`);
console.log(`Páginas: ${pelicula2.duracion}`);
console.log(`Prestado: ${pelicula2.prestado}`);
console.log(pelicula2.getMediaValoraciones());