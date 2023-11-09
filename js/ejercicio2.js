/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let ciudades = [];

while (true) {
    let ciudad = prompt("Ingrese el nombre de una ciudad:");
    if (ciudad === null || ciudad === "") {
        break;
    } else {
        ciudades.push(ciudad);
    }
}

document.write(`El arreglo de cuidades tiene ${ciudades.length} elementos <br>`);

document.write(`<ul>`)
document.write(`<li>Primer elemento: ${ciudades[0]} </li>`);
document.write(`<li>Tercer elemento: ${ciudades[2]} </li>`);
document.write(`<li>Último elemento: ${ciudades[ciudades.length - 1]} </li>`);
// Añade París en la última posición del arreglo
ciudades.push('París');
document.write(`<br><li>Último elemento: ${ciudades[ciudades.length - 1]} </li>`);
document.write(`<li>Elemento en la segunda posición: ${ciudades[1]} </li>`);
document.write(`</ul>`)

// Sustituye el elemento en la segunda posición por 'Barcelona'
ciudades[1] = 'Barcelona';

// Muestra el arreglo actualizado
document.write('<h1> Arreglo de ciudades: </h1>');
document.write(`<ul>`)
for(let i = 0; i < ciudades.length; i++){
document.write(`<li>${ciudades[i]}</li>`)
}
document.write(`</ul>`)
