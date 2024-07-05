$(document).ready(function () {
    let contador = 0;
    const parrafo = $('#parrafo');
    const inputs = $('input[type=checkbox]');

    inputs.on("change", function () {
        if($(this).prop("checked")){
            contador++;
            parrafo.text(`U have selected ${contador}`);
        }else{
            contador--
            parrafo.text(`U have selected ${contador}`);
        }
    })
});