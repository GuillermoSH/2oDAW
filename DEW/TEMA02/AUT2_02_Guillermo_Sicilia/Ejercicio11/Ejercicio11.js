function ejercicio11() {
    let pregunta = prompt("¿Desea convertir de F a C o de C a F?\n\nIntroduzca C si quiere convertir a Celsius o F si quiere convertir a Farenheit: ");
    if (pregunta == "F") {
        let farenheit = prompt("Introduzca SOLO los grados que desea convertir: ");
        alert(`${farenheit} F son: ${(farenheit - 32) * 5 / 9} C.`);
    } else if (pregunta == "C") {
        let celsius = prompt("Introduzca SOLO los grados que desea convertir: ");
        alert(`${celsius} C son: ${((9 * celsius) / 5) + 32} F.`);
    } else {
        alert("No te entiendo. Por favor, introduzca C si quiere convertir a Celsius o F si quiere convertir a Farenheit.")
    }
}