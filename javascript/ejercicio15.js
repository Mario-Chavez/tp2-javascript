/* 
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

let frase = prompt("escribe una frase");
let vocales = frase.replace(/[aeiou]/gi, "").length;
let vocalesEncontradas = frase.match(/[aeiou]/gi);
document.write(`
   tu frase tiene ${vocales}
   vocales , y son ${vocalesEncontradas}
`);
