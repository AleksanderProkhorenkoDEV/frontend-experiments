/**
    2. Desarrolla una página web que permita introducir dos fechas y calcular la diferencia en días
    entre ambas fechas. Debe gestionar la entra de datos erróneos.
*/
//Obtenemos los datos del formulario mediante el addEventListener, que se activa cuando el usuario pulsa el botón
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    //Los datos que nos llegan del formulario son String y en un formato correcto, por lo tanto creamos fechas identicas para poder acceder a sus metodos
    let primeraFechaString = document.getElementById("primeraFecha").value;
    let segundaFechaString = document.getElementById("segundaFecha").value;

    console.log("Primera fecha: " + primeraFechaString);
    console.log("Segunda fecha: " + segundaFechaString);


    let primeraFechaDate = new Date(primeraFechaString);
    let segundaFechaDate = new Date(segundaFechaString);


    if(isNaN(primeraFechaDate) && isNaN(segundaFechaDate)){
        //Para eviar que el resultado sea negativo, porque no hay dias negativos, primero hacemos una comparacion en la cual el minuendo tiene que ser mayor o igual al sustraendo
        //Una vez asi, hacemos esta resta y lo guardamos en una variable ya que el getTime() nos lo da en milisegundos, por lo tanto hacemos la conversion a dias y tenemos el resultado.
        if(primeraFechaDate.getTime() >= segundaFechaDate.getTime()){
            let diferencia = primeraFechaDate.getTime() - segundaFechaDate.getTime();

            let diferenciaDias = diferencia / 1000 / 60 / 60 / 24;
            console.log("La diferencia en dias son: "+diferenciaDias);
        }else{
            throw console.error("El sustraendo no puede ser mayor que el minuendo");
        }
    }


});

