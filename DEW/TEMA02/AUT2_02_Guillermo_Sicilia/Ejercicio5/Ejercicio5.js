function ejercicio5() {
    for (let i = 0; i < 5; i++) {
        let numero1 = Number(prompt(`Ejercicio5.-\n\nIntroduzca un numero (bucle ${i+1}): `));
        let numero2 = Number(prompt(`Ejercicio5.-\n\nIntroduzca un numero (bucle ${i+1}): `));
        let suma = numero1 + numero2;

        console.log(`La suma de los numeros ${numero1} y ${numero2} es: ${suma}.`);
    }
}