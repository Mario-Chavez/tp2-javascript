/* 
3- Realiza un script que pida cadenas de texto  hasta que se 
pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas
 las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

let cadenas = [];
while (confirm("Quieres escribir una cadena de texto") == true) {
    let cadena = prompt("Introduce una cadena de texto");
    cadenas.push(cadena);
}

if (cadenas.length > 0) {
    let cadText = cadenas.join(" - ");
    document.write("esto es lo que escribiste = " + cadText);
} else {
    document.write(`No se han introducido cadenas.`);
}
