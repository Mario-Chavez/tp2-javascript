/* 
8- Crea script para generar pirámide siguiente con los
 números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……


*/

const numeroMaximo = 50;
const numeroUsuario = parseInt(prompt("Ingrese un número entre 1 y 50: "));

if (numeroUsuario > 0 && numeroUsuario <= numeroMaximo) {
    for (let i = 1; i <= numeroUsuario; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
        document.write(linea);
        document.write("</br>");
    }
} else {
    alert(
        `El número ingresado no es válido. Por favor, ingrese un número entre 1 y ${numeroMaximo}.`
    );
}
