/* 
 Realiza un script que pida un texto y lo muestre en mayúsculas.
*/
let letras = prompt("escribe un texto");
letras
    ? document.write(` ${letras.toUpperCase()} `)
    : document.write(`Escribe una letras`);
