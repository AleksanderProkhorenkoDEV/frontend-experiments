// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    //ES7631836927962035620321
    digitos_control = "76"
    iban_2 = "3183"
    iban_3 = "6927"
    iban_4 = "9620"
    iban_5 = "3562"
    iban_6 = "0321"


    function validate(digitos_control, iban_2, iban_3, iban_4, iban_5, iban_6) {

        const result = [true, ""]

        let iban =  `ES${digitos_control}${iban_2}${iban_3}${iban_4}${iban_5}${iban_6}`

        console.log(iban)

        if(iban.length != 24){
            result[0] = false
            result[1] = 'La longitud no es válida.'
        }

        // Expresión regular para validar el formato del IBAN
        const ibanRegex = /^[A-Z]{2}\d{2}[A-Z0-9]{4}\d{10}$/;

        // Verificar si el IBAN cumple con el formato esperado
        if (ibanRegex.test(iban)) {
            result[0] = false
            result[1] = 'El formato no es válido.'
        }

        // Obtener el código de país del IBAN
        const countryCode = iban.slice(0, 2);

        // Verificar si el código de país es válido 
        const validCountryCodes = ['ES'];
        if (!validCountryCodes.includes(countryCode)) {
            result[0] = false
            result[1] = 'El código del país no es válido.'
        }

        // Validar el IBAN utilizando el algoritmo de verificación
        const ibanDigits = (iban.substring(4) + iban.substring(0, 4)).replace(/[A-Z]/g, char => char.charCodeAt(0) - 55);
        const ibanBigInt = BigInt(ibanDigits);
        const remainder = ibanBigInt % 97n;

        // Devuelve true si el IBAN es válido, false si no lo es
        if(remainder === 1n){
            result[0] = true
            result[1] = 'El IBAN es correcto.'
        }
        return result; 
    }

    const result = validate(digitos_control, iban_2, iban_3, iban_4, iban_5, iban_6)
    console.log(result[0]);
    console.log(result[1]);
});