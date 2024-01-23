/*
    1. Crea una página web con dos botones ("Random dog" y "Random cat"). Al pulsarlos debe
    hacer una petición a APIs públicas para obtener una imagen aleatoria del animal seleccionado.
*/

document.addEventListener("DOMContentLoaded", function () {
    const urlDog = "https://dog.ceo/api/breeds/image/random";
    const apiKey = "OUR APY KEY";
    const urlCat = "https://api.thecatapi.com/v1/images/search";

    const botonDog = document.getElementById("dog");
    const botonCat = document.getElementById("cat");

    const imgPerro = document.getElementById("contenidoPerro");
    const imgGato = document.getElementById("contenidoGato");

    botonDog.addEventListener("click", function () {
        fetch(urlDog)
            .then((resp) => resp.json())
            .then(function (data) {
                imgPerro.src = data.message;
            });

    })

    botonCat.addEventListener("click", function () {
        const headers = new Headers({
            "Content-Type": "application/json",
            'x-api-key': apiKey,
        });
        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
          };
        fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(response => response.json())
        .then(function (result) {
            if (result && result.length > 0 && result[0].url) {
                imgGato.src = result[0].url;
            } else {
                console.error("La respuesta de la API no contiene datos válidos o la propiedad 'url' no está definida.");
            }
        })
    })
});
