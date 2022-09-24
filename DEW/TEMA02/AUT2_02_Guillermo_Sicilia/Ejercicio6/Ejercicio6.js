function ejercicio6() {
    for (let i = 0; i < 4; i++) {
        let respuesta = parseInt(prompt(`Ejercicio6.-\n\nIntroduzca un numero para sumar (bucle ${i+1}): ` ));
        let resultado = respuesta;
        for (let i = respuesta + 1; i < respuesta + 6; i++) {
            resultado += i;
        }
        console.log(`La suma de los 5 siguientes numeros a ${respuesta} es: ${resultado}`);
    }
}