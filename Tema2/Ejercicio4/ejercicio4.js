/**
 * Desarrolla una página que dada una cadena de texto, introducida mediante un área de texto, permita calcular:
    • El número de líneas introducidas.
    • El número de frases introducidas (se asume que todas las frases están separadas porun punto ".").
    • Devuelve los primeros 10 caracteres del texto introducido.
    • Convierte el texto a mayúsculas.
    • El número de apariciones de la palabra "alumno" o "alumna" en el texto.
    • Remplazar todas las apariciones de la palabra "alumno" o "alumna" por tu nombre
 */

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const texto = document.getElementById("textArea").value;
    console.log(texto);

    console.log("-------------------------");

    let cantidadSaltoLinea = numeroLineas(texto);
    console.log("La cantida de salto linea es: " + cantidadSaltoLinea);

    console.log("-------------------------");

    let cantidadFrases = numeroFrases(texto);
    console.log("La cantidad de Frases: " + cantidadFrases);

    console.log("-------------------------");

    let primero10caracteres = primeros10caracteres(texto);
    console.log("Primeros 10 caracteres: " + primero10caracteres);

    console.log("-------------------------");

    let textoMayuscula = convertirMayusculas(texto);
    console.log("Texto en mayuscula: " + textoMayuscula);

    console.log("-------------------------");

    let cantidadAlumnas = cantidadAlumna(texto);
    console.log("La cantidad alumnas es: " + cantidadAlumnas);

    console.log("-------------------------");

    let cantidadAlumnos = cantidadAlumno(texto);
    console.log("La cantidad de alumnos: " + cantidadAlumnos);

    console.log("-------------------------");

    let textoConMiNombre = replaceAlmuno(texto);
    console.log("Texto con mi nombre: " + textoConMiNombre); 
});
/**
 * Esta funcion mediante una expresion regular y con el metodo match revisa la cadena de texto en caso de encontrar alguna entraria en el if con el metodo length
 * sacas el numero exacto y lo devuelves por el return.
 * @param {} texto Tipo String que recibimos del formulario
 * @returns int de la cantidad de coincidencias encontradas.
 */
function numeroLineas(texto) {
    let patronSaltoLinea = /\n/g;

    let cantidadCoincidencias = 0;
    let coincidenciasSaltoLinea = texto.match(patronSaltoLinea);
    if(coincidenciasSaltoLinea != null){
        cantidadCoincidencias = coincidenciasSaltoLinea.length;
    }

    return cantidadCoincidencias;
}
/**
 *  Esta funcion mediante una expresion regular y con el metodo match revisa la cadena de texto en caso de encontrar alguna entraria en el if con el metodo length
 * sacas el numero exacto y lo devuelves por el return.
 * @param {*} texto Tipo String que recibimos del formulario
 * @returns int de la cantidad de coincidencias encontradas.
 */
function numeroFrases(texto) {
    let patronPuntos = /\./g;
    let cantidadCoincidencias = 0;
    let coincidenciasPuntos = texto.match(patronPuntos);
    if (coincidenciasPuntos != null) {
        cantidadCoincidencias = coincidenciasPuntos.length;
    }

    return cantidadCoincidencias;
}
/**
 * Esta funcion empieza comprobando que la cadena tiene una longitud mayor a nueve para poder sacar los 10 caracteres primeros, 
 * y con el metodo de substring saca desde la 0 que es donde empieza la cadena hasta la 9.
 * @param {*} texto Tipo String que recibimos del formulario
 * @returns String devuelve los 10 caracteres buscados.
 */
function primeros10caracteres(texto) {
    let primero10caracteres = "";
    if (texto.length >= 9) {
        primero10caracteres = texto.substring(0, 9);
    }

    return primero10caracteres;
}

/**
 * Recibe la cadena de texto comprueba que no sea nula y con el metodo UpperCase convierte todo a mayuscula
 * @param {*} texto Tipo String que recibimos del formulario
 * @returns String devuelve la cadena con todas las letras en mayuscula.
 */
function convertirMayusculas(texto) {
    let textoConvertio = "";
    if (texto != "") {
        textoConvertio = texto.toUpperCase()
    }
    return textoConvertio;
}
/**
 * Esta funcion mediante una expresion regular y con el metodo match revisa la cadena de texto en caso de encontrar alguna entraria en el if con el metodo length
 * sacas el numero exacto y lo devuelves por el return.
 * @param {*} texto Tipo String que recibimos del formulario
 * @returns int de la cantidad de coincidencias encontradas.
 */
function cantidadAlumna(texto) {
    let patronAlumna = /alumna/g;

    let coincidenciasAlumna = texto.match(patronAlumna);
    let cantidadCoincidencias = coincidenciasAlumna.length;

    return cantidadCoincidencias;
}
 
/**
 * Esta funcion mediante una expresion regular y con el metodo match revisa la cadena de texto en caso de encontrar alguna entraria en el if con el metodo length
 * sacas el numero exacto y lo devuelves por el return.
 * @param {*} texto Tipo String que recibimos del formulario
 * @returns int de la cantidad de coincidencias encontradas.
 */
function cantidadAlumno(texto) {
    let patronAlumno = /alumno/g;


    let coincidenciasAlumno = texto.match(patronAlumno);
    let cantidadCoincidencias = coincidenciasAlumno.length;

    return cantidadCoincidencias;
}

/**
 * Esta funcion recibe el String y mediante el replace y un regex se busca la palabra alumna y se sustituye por mi nombre
 * @param {*} texto  Tipo String que recibimos del formulario
 * @returns String  con la palabra modificada
 */
function replaceAlumnaMiNombre(texto) {

    let textoConMiNombre = "";

    if (texto != "") {
        textoConMiNombre = texto.replace(/alumna/g, "aleksander");
    }

    return textoConMiNombre;
}

/**
 * Esta funcion recibe el String y mediante el replace y un regex se busca la palabra alumno y se sustituye por mi nombre
 * @param {*} texto Tipo String que recibimos del formulario
 * @returns String  con la palabra modificada
 */
function replaceAlmuno(texto) {
    let textoConMiNombre = "";

    if (texto != "") {
        textoConMiNombre = texto.replace(/alumno/g, "aleksander");
        textoConMiNombre = replaceAlumnaMiNombre(textoConMiNombre);
    }

    return textoConMiNombre;
}

