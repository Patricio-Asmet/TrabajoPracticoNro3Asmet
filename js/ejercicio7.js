/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
 la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        document.write(`${numero} x ${i} = ${resultado} <br>`);
    }
}

let numeroIngresado = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

if (!isNaN(numeroIngresado)) {
    tablaMultiplicar(numeroIngresado);
} else {
    document.write("Por favor, ingrese un número válido.");
}