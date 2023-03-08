/* 
17- Realiza un script que muestre la posición de la primera 
vocal de un texto introducido por teclado.

*/

let frase = prompt("escribe una frase");

let vocalesEncontrada = frase.match(/[aeiou]/g);
document.write(`
   la primer vocal encontrada es ${vocalesEncontrada}
`);
