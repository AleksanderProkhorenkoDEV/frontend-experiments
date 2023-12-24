document.addEventListener("DOMContentLoaded", function(){
    const menuColapsado = document.getElementById("menu-colapsado");
    const menuAcciones = document.getElementById("menu-lista");
    const lineasMenu = document.querySelectorAll(".colapsado span");


    menuColapsado.addEventListener("click", function(){
        lineasMenu[0].classList.toggle("rotar45");
        lineasMenu[1].classList.toggle("eliminar");
        lineasMenu[2].classList.toggle("rotar-45");
        menuAcciones.classList.toggle("lista-menu-colapsado");
    })
});