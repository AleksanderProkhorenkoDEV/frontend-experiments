$(document).ready(function () {
    //Apatardo A, eleminar la lista
    $("ul").remove();

    //Apartado B, restauramos la lista
    const lista = $('<ul></ul>');
    $('body').append(lista);
    if ($('body').find('ul').length > 0) { //Comprueba que no exista ninguna lista en el documento, para restaurarla, en el caso de que exista no lo hace
        for (let i = 0; i < 8; i++) {
            let itemLista = $(`<li>Itemn ${i} de la lista </li>`);
            $("ul").append(itemLista);
        }
    }

    //Apartado C, añadimos un elemento al final de la lista

    const ultimoElemento = $('<li>ULTIMO ELEMENTO DE LA LISTA</li>');
    $('body').find('ul').append(ultimoElemento);

    //Apartado D, Añadir un elemento al principio de la lista

    const primerElemento = $('<li>PRIMER ELEMENTO DE LA LISTA</li>');
    $('body').find('ul').prepend(primerElemento);

    //Aparado E, Eliminar el último elemento.

    $('body').find('ul li:last').remove();

    //Aparado F, Eliminar el primer elemento.

    $('body').find('ul li:first').remove();

    //Aparado G, Eliminar el primer y segundo elemento.

    $('body').find('ul li:first, ul li:nth-child(2)').remove();
    
    //Apartado H, Eliminar los dos últimos.
    const longitud = $('body').find('ul li').length;

    $('body').find(`ul li:nth-child(${longitud-1}), ul li:nth-child(${longitud})`).remove();
})