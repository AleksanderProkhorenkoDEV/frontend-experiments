let numero1;
let numero2
let resultado;
let expresionRegular = /^[0-9]+$/;
let salirBucle = false;
let operacion;
//Mediante una expresion regular comprobamos que los dos datos introducidos por el usuario son correctos y validos para poder operar con ellos.
do {
    numero1 = prompt("Introduzca el primer numero con el que quieres operar");
    numero2 = prompt("Introduzca el segundo numero con el que quieres operar");
    if (numero1.match(expresionRegular) && numero2.match(expresionRegular)) {
        salirBucle = true;
    }
} while (!salirBucle);
//Mediante un switch tenemos las diferentes opciones de suma, resta, multi, div posibles. El unico caso especial en el que tenemos que hacer una comprobación es con la division, ya que no se puede dividir entre cero
//por lo tanto hay un If que lo comprueba.
operacion = prompt("Introduce la operación que desee realizar. ( Mult, Div, Sum, Rest)");
operacion.toLowerCase;
switch (operacion) {
    case "mult":
        resultado = numero1 * numero2;
        alert("El resultado es: " + resultado);
        break;
    case "div":
        if (numero2 > 0) {
            resultado = numero1 / numero2;
            alert("El resultado es: " + resultado);
        } else {
            document.write("No podemos dividir con divisor = 0");
        }
        break;
    case "sum":
        resultado = numero1 + numero2;
        alert("El resultado es: " + resultado);
        break;
    case "rest":
        resultado = numero1 - numero2;
        alert("El resultado es: " + resultado);
        break;
    default:
        document.write("La operación introducida es erronea");
        break;
};

