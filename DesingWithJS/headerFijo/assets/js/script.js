document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    window.onscroll = function () {
        // Obtenemos la posicion del scroll en pantall
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;

        if(scroll > 20){
            header.classList.add('glass');
        } else{
            header.classList.remove('glass');
        }
    }
})