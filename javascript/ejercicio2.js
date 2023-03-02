/* 
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

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
