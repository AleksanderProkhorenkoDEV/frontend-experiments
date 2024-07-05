/*
    Listar, mediante un botón a una petición asíncrona, los ToDo's (tareas, del inglés "to do")
    que estén completados, tomando el recurso correspondiente de la página
*/
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn-action");
    const ol = document.getElementById("contenido");

    btn.addEventListener("click", function () {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(response => {
                console.log(response);

                for (let i = 0; i < response.length; i++) {
                    if (response[i].completed === true) {
                        const createLi = () => document.createElement("li");
                        const li = createLi();  
                        li.innerHTML = response[i].title;  // Asigna el contenido al elemento li
                        ol.appendChild(li);
                    }
                }
            })
    })

})

