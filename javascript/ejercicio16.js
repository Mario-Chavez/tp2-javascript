/* 
16- Realiza un script que pida una cadena de texto y la devuelva al revés.
 Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

*/

const cadena = prompt("Introduce una cadena de texto: ");
let resultado = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    resultado += cadena[i];
}
document.write(resultado);
