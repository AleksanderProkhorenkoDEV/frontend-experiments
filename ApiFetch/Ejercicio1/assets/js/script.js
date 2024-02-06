/*
    1. Crea una página web con dos botones ("Random dog" y "Random cat"). Al pulsarlos debe
    hacer una petición a APIs públicas para obtener una imagen aleatoria del animal seleccionado.
*/

$(document).ready(function () {
    const urlDog = "https://dog.ceo/api/breeds/image/random";
    const urlCat = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

    let ancestorDog = null;
    let ancestorCat = null;

    init(urlDog, urlCat, ancestorDog, ancestorCat);
    apiFecth( urlDog, urlCat, ancestorDog, ancestorCat);
});
/**
 * Function that is executed as soon as the DOM is loaded so that the HTML does not appear with an empty space as if the URL were broken
 * @param {*} urlDog 
 * @param {*} urlCat 
 */
function init(urlDog, urlCat) {
    ancestorDog = $('.dog');
    ancestorCat = $('.cat');

    requestDog(ancestorDog, urlDog)
    requestCat(ancestorCat, urlCat)

}
/**
 * This function is the one that executes the two requests to the images API, depending on the button they have pressed
 * @param {*} urlDog 
 * @param {*} urlCat 
 * @param {*} ancestorDog 
 * @param {*} ancestorCat 
 */
function apiFecth( urlDog, urlCat, ancestorDog, ancestorCat) {

    const buttons = $('button');

    /**
     * We add the click event to the two buttons and depending on the event.target we look to see which is the parent 
     * div to know where to add the image
     */
    buttons.on('click', function (event) {
        ancestorDog = $(event.target).parent('.dog');
        ancestorCat = $(event.target).parent('.cat');

        requestDog(ancestorDog, urlDog)
        requestCat(ancestorCat, urlCat)

    })
};

/**
 * This function realice a request of Api, this Api returns a Json with a url of image, 
 * and change the scr of the HTML img to the new URL
 * @param {*} ancestorDog Father Div
 * @param {*} urlDog URL api
 */
function requestDog(ancestorDog ,urlDog) {
    if (ancestorDog.length != 0) {
        fetch(urlDog)
            .then((response) => response.json())
            .then(function (data) {
                const img = ancestorDog.find(".imagen img");
                img.attr('src', data.message);
            });
    }
}
/**
 * This function realice a request of Api, this Api returns a Json with a url of image, 
 * and change the scr of the HTML img to the new URL
 * @param {*} ancestorCat 
 * @param {*} urlCat 
 */
function requestCat(ancestorCat, urlCat) {
    if (ancestorCat.length != 0) {
        fetch(urlCat)
            .then((response) => response.json())
            .then(function (data) {
                const img = ancestorCat.find(".imagen img");
                img.attr('src', data[0].url);
            })
    }
}