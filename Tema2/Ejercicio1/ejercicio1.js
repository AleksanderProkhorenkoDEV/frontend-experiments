

function inicializar() {
    const ventana = window.open("", "", "height=500px, width=500px");
    return ventana;
}

function enviarTexto(){
    const ventanaHija = inicializar();
    if(ventanaHija != null){
        let textoPadre =  copiarTexto();
        crearElemento(ventanaHija, textoPadre);
    }
           
}

function copiarTexto(){
    let inputTexto = document.getElementById("parrafo");
    let texto = inputTexto.value;
    return texto;
}

function crearElemento(ventanaHija, texto){
    let ventanaHijaDOC = ventanaHija.document;
    let p = ventanaHijaDOC.createElement("p");
    p.textContent = texto;
    
    let p2 = ventanaHijaDOC.createElement("p");
    p2.textContent = "Este es el texto del padre:";
    
    let p3 = ventanaHijaDOC.createElement("p");
    p3.textContent = "Altura : 500px Ancho: 500px";

    ventanaHijaDOC.body.appendChild(p2);
    ventanaHijaDOC.body.appendChild(p);
    ventanaHijaDOC.body.appendChild(p3);
}


function comunicarCierre(ventanaHija){
    ventanaHija.addEventListener('beforeunload', function () {
        ventanaHija.opener.postMessage('VentanaHijaCerrada', '*');
    });
}

function padreEscuchaCierre(ventanaHija){
    window.addEventListener('message', function (event) {
        if (event.source === ventanaHija) {
            if (event.data === 'VentanaHijaCerrada') { 
                this.alert("Se cerró la ventana hija");
            }
        }
    });
}

