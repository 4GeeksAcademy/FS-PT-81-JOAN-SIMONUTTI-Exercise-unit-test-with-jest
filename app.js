//Paso 1: Definir el objeto con las tasas de conversión
// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//Paso 2: Crear las funciones de conversión
// Convierte de Euro a Dólar
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

//Convierte de Dólar a Yen
function fromDollarToYen(dollars) {
    // Convertimos de dólar a euro y luego de euro a yen
    const euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}



//Convierte de Yen a Libras
function fromYenToPound(yen) {
    // Convertimos de yen a euro y luego de euro a libras
    const euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}
console.log(fromYenToPound(1000));

/* Explicación del código
fromEuroToDollar: Multiplica el valor en euros por la tasa de conversión a dólares.
fromDollarToYen: Convierte primero de dólares a euros (dividiendo por la tasa euro/dólar) y luego de euros a yenes.
fromYenToPound: Convierte de yenes a euros y luego de euros a libras.
*/

// Exportar las funciones
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };