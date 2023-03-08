/* 
12- Realiza un script que genere un número aleatorio 
entre 1 y 99

*/
// document.write(`estoy `);

for (let i = 99; i > 0; i--) {
    console.log("entre");
    const numeroAleatorios = Math.floor(Math.random(100) * 100);
    document.write(`${numeroAleatorios} - `);
}
