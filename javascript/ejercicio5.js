/* 
5- Realizar una página con un script que calcule el valor de la
 letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, 
D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/

function calcularLetraDNI() {
    let dni = prompt("Introduce tu número de DNI (sin letra):");
    if (dni == null) {
        return; // Si el usuario cancela, se sale de la función
    }
    dni = parseInt(dni);
    if (isNaN(dni)) {
        alert("Debes introducir un número válido");
        return calcularLetraDNI(); // Se vuelve a llamar a la función para pedir el DNI de nuevo
    }
    if (dni < 0 || dni > 99999999) {
        alert("El número de DNI debe estar entre 0 y 99999999");
        return calcularLetraDNI(); // Se vuelve a llamar a la función para pedir el DNI de nuevo
    }
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resto = dni % 23;
    let letra = letras.charAt(resto);
    alert("La letra de tu DNI es: " + letra);
    calcularLetraDNI(); // Se vuelve a llamar a la función para pedir otro DNI
}

calcularLetraDNI();
document.write("cancelaste el Programa");
