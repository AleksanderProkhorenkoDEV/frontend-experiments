/**
 * ↓ INSTRUCCIONES DEL EJERCICIO ↓
    Implementa una página que contenga una lista con cuatro ítems.
    Realiza los siguientes casos:
        A) Eliminar la lista completa.
        B) Restaurar lista.
        C) Añadir un elemento al final de la lista.
        D) Añadir un elemento al principio de la lista.
        E) Eliminar el último elemento.
        F) Eliminar el primer elemento.
        G) Eliminar el primero y segundo elemento.
        H) Eliminar los dos últimos.
 */

$(document).ready(function () {

    const contenedorLista = $("div.lista");
    const buttons = $("button");

    buttons.on("click", function (event) {
        const botonPulsado = $(event.target);

        switch (botonPulsado.attr("id")) {
            case "restaurar":
                contenedorLista.append(init());
                break;
            case "elimiar":
                remove(contenedorLista);
                break;
            case "anadirFinal":
                addEnd(contenedorLista)
                break;
            case "anadirPrincipio":
                addFirst(contenedorLista)
                break;
            case "eliminarUltimo":
                removeEnd(contenedorLista)
                break;
            case "eliminarPrimero":
                removeFirst(contenedorLista)
                break;
            case "eliminarPrimerosDos":
                removeTwoFirst(contenedorLista)
                break;
            case "eliminarUltimosDos":
                removeTwoEnd(contenedorLista)
                break;
        }
    });

})

function init() {
    const ol = $("<ol>");
    for (let i = 0; i < 6; i++) {
        const li = $(`<li>Elemento n=${i}</li>`);
        $(ol).append(li);
    }
    return ol;
}
function remove(contenedorLista) {
    contenedorLista.empty();
}
function addEnd(contenedorLista) {
    const li = $(`<li>Añadir al final de la lista</li>`);
    contenedorLista.find("ol").append(li);
}
function addFirst(contenedorLista) {
    const li = $('<li>Añadir al inicio de la lista</li>');
    contenedorLista.find("ol").prepend(li);
}
function removeEnd(contenedorLista) {
    contenedorLista.find("ol").children("li").last().remove();
}
function removeFirst(contenedorLista) {
    contenedorLista.find("ol").children("li").first().remove();
}
function removeTwoFirst(contenedorLista) {
    if (contenedorLista.find("ol").children("li").length >= 2) {
        contenedorLista.find("ol").children("li:lt(2)").remove();
    }
}
function removeTwoEnd(contenedorLista) {
    if (contenedorLista.find("ol").children("li").length >= 2) {
        contenedorLista.find("ol").children("li:gt(-3)").remove();
    }
}