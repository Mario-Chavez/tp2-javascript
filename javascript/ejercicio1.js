/* 
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede 
conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edad = prompt("escribe tu edad");

if (!isNaN(edad)) {
    if (edad >= 18) {
        document.write(`
         <p>Felecidades puedes conducir</p>
        `);
    } else {
        document.write(`
         <p>Lo siento no puedes conducir</p>
        `);
    }
} else {
    alert(" Escribe un numerog");
}
