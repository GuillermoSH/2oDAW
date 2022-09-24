function ejercicio14() {
    let input = prompt("Ejercicio14.-\n\nIntroduzca su fecha de nacimiento (formato: aaaa-mm-dd):");
    let fechaNacimiento = new Date(`${input}T00:00:00.000Z`);
    let fechaActual = new Date();
    let formatoResultado = prompt("Ejercicio14.-\n\n¿En qué formato quiere su resultado? (d -> dias, h -> horas, m -> minutos, s -> segundos)");
    let resultado;

    let segundosDiff = (fechaActual.getTime() - fechaNacimiento.getTime()) / 1000;

    if (formatoResultado == "d") {
        resultado = segundosDiff / (60 * 60 * 24);
    } else if (formatoResultado == "h") {
        resultado = segundosDiff / (60 * 60);
    } else if (formatoResultado == "m") {
        resultado = segundosDiff / 60;
    } else if (formatoResultado == "s") {
        resultado = segundosDiff;
    } else {
        alert("Lo siento, esa respuesta no es un formato válido.\n\nPrueba con 'd', 'h', 'm' o 's'.");
    }

    document.getElementById("resultado").innerHTML = `Han pasado ${parseInt(resultado)} ${formatoResultado} desde que naciste.`;
}