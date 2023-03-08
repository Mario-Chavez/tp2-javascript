/* 
10- Realiza un script que pida número de filas y columnas 
y escriba una tabla. Dentro de cada una de las celdas deberá escribirse 
un número consecutivo en orden descendente. Si, por ejemplo,
 la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math


*/

const fila = parseInt(prompt("ingrese numero de fila"));
const columna = parseInt(prompt("ingrese numero de columna"));

let numeroCelda = fila * columna;

document.write(`<table>  <tbody>`);

for (let indiceFila = 0; indiceFila < fila; indiceFila++) {
    document.write(`<tr>`);
    for (let indiceColumnas = 0; indiceColumnas < columna; indiceColumnas++) {
        document.write(`<td>${numeroCelda}</td>`);
        numeroCelda--;
    }
    document.write(`</tr>`);
}

document.write(`</tbody></table>`);
