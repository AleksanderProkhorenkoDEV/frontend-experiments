$(document).ready(function(){
    const campos = $("td[id='campoHover']");
    console.log(campos);

    campos.on("mouseover", function(event){
        const campo = $(event.target);

        campo.addClass("fondo");
    })
})