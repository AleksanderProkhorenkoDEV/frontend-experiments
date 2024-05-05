import Factura from "./factura.js";


let lista = [
    ["Manzanas", 4, 1.50], 
    ["Peras", 7, 1.50], 
    ["Limones", 4, 2.50], 
    ["Melon", 1, 3.50] 
]

const factura1 = new Factura("Fruteria Paqui", "A1234567", "Manoli", 21, lista);

console.log("---GETTER---")
console.log(factura1.Getternombre_cliente);
console.log(factura1.Getterimporte_total);

console.log("---SETTER---");
factura1.Setternombre_cliente = "Paquita";
factura1.Settercif = "V6986543";
console.log(factura1.Getternombre_cliente);
console.log(factura1.Gettercif);

console.log("---AÑADIR PRODUCTO---");
factura1.añadirProducto("sandia", 1, 5);

console.log("---TO STRING ---");
console.log(factura1.toString());

console.log("---CALCULAR TOTAL---");
console.log(factura1.calcularPrecioTotal())