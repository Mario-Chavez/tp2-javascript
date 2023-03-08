/* 
11- Realiza un script que pida por teclado 3 edades y
 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


*/

const edad1 = parseInt(prompt("Introduce la edad de la primera persona: "));
const nombre1 = prompt("Introduce el nombre de la primera persona: ");
const edad2 = parseInt(prompt("Introduce la edad de la segunda persona: "));
const nombre2 = prompt("Introduce el nombre de la segunda persona: ");
const edad3 = parseInt(prompt("Introduce la edad de la tercera persona: "));
const nombre3 = prompt("Introduce el nombre de la tercera persona: ");

let nombreMayor = "";

if (edad1 >= edad2 && edad1 >= edad3) {
    nombreMayor = nombre1;
} else if (edad2 >= edad1 && edad2 >= edad3) {
    nombreMayor = nombre2;
} else {
    nombreMayor = nombre3;
}

document.write(`La persona más grande es ${nombreMayor}. `);
