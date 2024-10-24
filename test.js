//TEST 1 DE EURO A DOLAR
test("One euro should be 1.07 dollars", function () {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(5)).toBeCloseTo(5.35); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// $$$ HOMEWORK $$$
//TEST 2 DE DOLAR A YEN
test("One dollar should be 146.26 Yens", function () {

    const { fromDollarToYen } = require('./app.js');

    const yenes = fromDollarToYen(1);

    const expected = 1 * 146.26;

    // Hago la prueba
    expect(yenes).toBeCloseTo(expected);
})

//TEST 3 DE YENES A LIBRAS
test("one thousand Yen should be 5.5591 Pounds", function () {

    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1000);

    const expected = 1000 * 0.005559;

    // Hago la prueba
    expect(pounds).toBeCloseTo(expected);
})
