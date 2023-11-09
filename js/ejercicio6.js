// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//La fórmula del perímetro  es p = 2*(a +b)

const base = parseFloat(prompt('Ingrese el valor de la base de un rectángulo:'))
const altura = parseFloat(prompt('Ingrese el valor de la altura de un rectángulo:'))

function perimetroRectangulo(base, altura){
    return 2 * (base + altura);
}

let perimetro = perimetroRectangulo(base, altura);
document.write(`El perimetro del rectangulo es ${perimetro} `);