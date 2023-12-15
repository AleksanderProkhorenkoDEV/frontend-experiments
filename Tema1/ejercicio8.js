let talla = prompt("¿Que talla tienes? (xxl, xl, l, m, xs, s)");
//Hacemos un switch para tener las diferentes respuestas posibles almacenadas y controladas y en caso de que el usuario meta una erronea, 
//enemos la default que le indica que esta mal.
talla.toLowerCase;
switch (talla) {
    case "xxl":
        document.write("Talla grande");
        break;
    case "xl":
        document.write("Talla grande");
        break;
    case "l":
        document.write("Talla grande");
        break;
    case "m":
        document.write("Talla mediana");
        break;
    case "xs":
        document.write("Talla pequeña");
        break;
    case "s":
        document.write("Talla pequeña");
        break;
    default:
        document.write("Valor introducido incorrecto");
        break;
}