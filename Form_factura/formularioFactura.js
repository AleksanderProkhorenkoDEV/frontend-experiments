import Factura from "./factura.js";

document.addEventListener("DOMContentLoaded", function () {
    let btnAñadirProducto = document.getElementById("AñadirLinea");
    let btnCalcular = document.getElementById("submit");
    let obtenerParrafo = document.getElementById("facturaTotal");
    let arrayProductos = [];
    /*
        Con este boton es lo que hacemos ir añadiendo productos a una lista, para luego cuando queira obtener el precio poder calcularlos
    */
    btnAñadirProducto.addEventListener("click", function () {
        let nombre = document.getElementById("nombreProducto").value;
        let cantidad = parseInt(document.getElementById("cantidad").value);
        let precio = parseFloat(document.getElementById("precio").value);

        if (nombre && cantidad && precio) {
            arrayProductos.push([nombre, cantidad, precio]);
            console.log("Producto añadido:", nombre);
            /*
                Asi cuando el producto se añadio correctamente se limpian los campos para introducir los nuevos
            */
            document.getElementById("nombreProducto").value = "";
            document.getElementById("cantidad").value = "";
            document.getElementById("precio").value = "";
        } else {
            alert("Completa todos los campos del producto.");
        }
    });

    btnCalcular.addEventListener("click", function () {
        /*
            Obtenemos todos los valores del formulario
        */
        let nombreEmpresa = document.getElementById("nombre_empresa").value;
        let cifEmpresa = document.getElementById("cif").value;
        let nombreCliente = document.getElementById("nombre_cliente").value;
        let iva = parseFloat(document.getElementById("IVA").value);


        const facturaTotal = new Factura(nombreEmpresa, cifEmpresa, nombreCliente, iva, arrayProductos);
        obtenerParrafo.innerHTML = `El precio total es: ${facturaTotal.calcularPrecioTotal()} €`;

    });
});