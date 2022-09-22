for (let i = 0; i < 4; i++) {
    let respuesta = parseInt(prompt("Introduzca un numero para sumar: "))
    let resultado = respuesta;
    for (let i = respuesta + 1; i < respuesta + 6; i++) {
        resultado += i;
    }
    console.log(`La suma de los 5 siguientes numeros a ${respuesta} es: ${resultado}`);
}