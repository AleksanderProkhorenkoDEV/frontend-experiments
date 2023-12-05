let expresionRegular = /^[0-9]+$/;
let salirBucle = false;
let nota = 0;
do {
    nota = prompt("Introduzca una nota cualquiera");
    if (nota.match(expresionRegular) && (nota >= 1 && nota <= 10)) {
        salirBucle = true;
    }
} while (!salirBucle);
//Usamos la estructura Switch, para poder saber que nota tiene el usuario, ponemos los 6 casos posibles desde el 6 hasta el 10 y en default el resto que seria del 1 al 5.
switch (nota) {
    case "6":
        document.write("Bien");
        break;
    case "7":
        document.write("Notable");
        break;
    case "8":
        document.write("Notable");
        break;
    case "9":
        document.write("Sobresaliente");
        break;
    case "10":
        document.write("Sobresaliente");
        break;
    default:
        document.write("Suspenso");
};
