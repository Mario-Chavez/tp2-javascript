/* 
4- Realiza un script que pida números hasta que se pulse “cancelar”.
Si no es un número deberá indicarse con un «alert» y seguir pidiendo
 números. Al salir con “cancelar” deberá indicarse la suma total de
 los números introducidos.

*/

let numerosTotales = [];
let numeros;
let total = 0;

while (confirm("escribe numeros") == true) {
    let numeros = parseInt(prompt("Introduce numeros"));
    if (!isNaN(numeros)) {
        numerosTotales.push(numeros);
    } else {
        alert("debes escribir un numero");
    }
}

if (numerosTotales.length > 0) {
    for (let i of numerosTotales) total += i;
    document.write("la suma total es " + total);
} else {
    document.write(`se cancelo el programa`);
}
