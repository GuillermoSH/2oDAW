let pregunta = prompt("¿Desea convertir de F a C o de C a F?\n\nIntroduzca C si quiere convertir a Celsius o F si quiere convertir a Farenheit: ");
let unidad;

if (pregunta != "C" && pregunta != "F") {
    alert("No te entiendo. Por favor, introduzca C si quiere convertir a Celsius o F si quiere convertir a Farenheit.")
} else {
    let preguntaOpcional = prompt("¿Desea que se le muestre el resultado con la unidad 'C o F' o sin ella?\n\nEn caso de querer unidad ponga true, en el caso contrario dejelo vacío o ponga false.");
    if (preguntaOpcional == "true") {
        unidad = " " + pregunta;
    } else {
        unidad = "";
    }

    if (pregunta == "F") {
        let farenheit = prompt("Introduzca SOLO los grados que desea convertir: ");
        alert(`${farenheit} F son: ${(farenheit - 32) * 5 / 9}${unidad}.`);
    } else {
        let celsius = prompt("Introduzca SOLO los grados que desea convertir: ");
        alert(`${celsius} C son: ${((9 * celsius) / 5) + 32}${unidad}.`);
    }
}