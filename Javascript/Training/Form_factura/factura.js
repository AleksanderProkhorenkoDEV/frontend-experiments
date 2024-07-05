/*
    1. (3,5 puntos) Definir una clase FACTURA que almacena una factura. Una factura está formada por la información de la propia factura (nombre de la empresa, CIF, nombre_cliente, importe_total, IVA) 
    y una lista de líneas de factura (cada una de los cuales dispone de nombre_producto , precio, cantidad).

    Una vez definidas las propiedades del objeto, añadir a la clase Factura un método que calcule el importe_total de la factura.

    Prueba los distintos métodos y propiedades con un ejemplo EN LA CONSOLA.



    2 (1,5 puntos) Diseña un formulario que permite introducir los datos de la factura y muestre los resultados por pantalla.


*/
export default class Factura {
    constructor(nombre_empresa, CIF, nombre_cliente, IVA, lista) {
        /**
         * Validamos parametro a parametro para evitar crear objetos erroenos
         */
        if(!validarString(nombre_empresa)){
            throw new Error ("El nombre de la empresa no es valido");
        }
        if(!validarCIF(CIF)){
            throw new Error ("El CIF de la empresa no es valido");
        }
        if(!validarString(nombre_cliente)){
            throw new Error ("El nombre del cliente no es valido");
        }
        if(!validarNumero(IVA)){
            throw new Error ("El IVA no es valido");
        }
        this._nombre_empresa = nombre_empresa;
        this._cif = CIF;
        this._nombre_cliente = nombre_cliente;
        this._importe_total = 0;
        this._iva = IVA;
        /**Asi hacemos deep copys y evitamos la copia de referencias*/
        this._lista_productos = new Array();
        for (let i = 0; i < lista.length; i++) {
            this._lista_productos.push(lista[i]);
            for (let j = 0; j < lista[i].length; j++) {
                this._lista_productos[i][j] = lista[i][j];
            }
        }
    }

    get Getternombre_empresa(){
        return this._nombre_empresa
    }
    get Gettercif(){
        return this._cif;
    }
    get Getternombre_cliente(){
        return this._nombre_cliente;
    }
    get Getterimporte_total(){
        return this._importe_total;
    }
    get Getteriva(){
        return this._iva;
    }
    get Getterlista(){
        return this._lista_productos;
    }
    set Setternombre_empresa(campo){
        if(validarString(campo)){
            this._nombre_empresa = campo;
        }
    }
    set Settercif(campo){
        if(validarCIF(campo)){
            this._cif = campo;
        }
    }
    set Setternombre_cliente(campo){
        if(validarString(campo)){
            this._nombre_cliente = campo;
        }
    }
    set Setterimporte_total(campo){
        if(validarNumero(campo)){
            this._importe_total = campo;
        }
    }
    /**
     * Calculamos el precio total de la compra recorriendo el array, como sabemos que la cantidad dep prodcutos esta en la posicion 1 del array y el precio en la dos, pues obtenemos
     * estos lo multiplicamos para saber el total y lo añadimos a una  variable, posteriormente calculamos el 21% o el iva que introduzcan al crear la factura en funcion del pedido que han
     * hecho y se lo aplicamos
     * @returns 
     */
    calcularPrecioTotal() {
        let precioTotal = 0;
    
        for (let i = 0; i < this._lista_productos.length; i++) {
            const cantidad = this._lista_productos[i][1];
            const precioUnitario = this._lista_productos[i][2];
            precioTotal += cantidad * precioUnitario;
        }
        let diferenciaIVA = (precioTotal*this._iva)/100;
        return precioTotal+diferenciaIVA;
    }

    añadirProducto(nombre, cantidad, precio) {
        // Validar los parámetros si es necesario
        if (!validarString(nombre) || !validarNumero(cantidad) || !validarNumero(precio)) {
            throw new Error("Los detalles del producto no son válidos");
        }
        const nuevoProducto = [nombre, cantidad, precio];
        this._lista_productos.push(nuevoProducto);
    }

    toString() {
        let facturaString = `Factura:\n`;
        facturaString += `Nombre de la empresa: ${this._nombre_empresa}\n`;
        facturaString += `CIF de la empresa: ${this._cif}\n`;
        facturaString += `Nombre del cliente: ${this._nombre_cliente}\n`;
        facturaString += `Importe total: ${this._importe_total}€\n`;
        facturaString += `IVA: ${this._iva}%\n`;
        facturaString += `Productos \tCantidad \tPrecio\n`;

        for (let i = 0; i < this._lista_productos.length; i++) {
            facturaString += `   ${i + 1}. `;
            for (let j = 0; j < this._lista_productos[i].length; j++) {
                facturaString += `${this._lista_productos[i][j]} `;
            }
            facturaString += `\n`;
        }

        return facturaString;
    }


}

function validarString(campo) {
    let esValido = true;
    const regex = /^[\s\S]*$/;

    if (!regex.test(campo) || campo.length <= 0) {
        esValido = false;
    }

    return esValido;
}


function validarCIF(campo) {
    let esValido = true;
    const regex = /^[A-Z]+[0-9]{7}$/;

    if (!regex.test(campo)) {
        esValido = false;
    }

    return esValido;
}

function validarNumero(campo) {
    let esValido = true;

    if (isNaN(campo) || campo <= 0) {
        esValido = false;
    }

    return esValido;
}
