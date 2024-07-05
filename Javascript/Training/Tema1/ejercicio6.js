let palindromo = prompt("Introduzca una palabra o secuencia de numeros para comprobar si es un palíndromo");
//Cogemos la palabra que introduce el usuario y quitamos los espacios en blanco y lo convertimos todo en minuscula.
palindromo = palindromo.replace(/\s/g, '').toLowerCase();
let separacionLetras;
let palabraDelReves = "";
//Luego recorremos un for en la ultima letra de la cadena hasta 0, y la vamos almacenando en una variable y mediante un If, comprobamos si son palíndromo o no.
for (let i = palindromo.length; i >= 0; i--) {
    separacionLetras = palindromo.charAt(i);
    palabraDelReves = palabraDelReves + separacionLetras;
}
if (palabraDelReves == palindromo) {
    document.write("Es un palindromo");
} else {
    document.write("No es un palindromo");
}


