function ejercicio14() {
    let fechaNacimiento = prompt("Ejercicio14.-\n\nIntroduzca su fecha de nacimiento (formato: dd/mm/aaaa o dd-mm-aaaa):")
    let dia = fechaNacimiento.split("/","-")[0];
    let mes = fechaNacimiento.split("/","-")[1];
    let anio = fechaNacimiento.split("/","-")[2];
    let fecha = new Date(mes/dia/anio);
    let formatoResultado = prompt("Ejercicio14.-\n\n¿En qué formato quiere su resultado? (d -> dias, h -> horas, m -> minutos, s -> segundos)");
    let resultado;
    
    if (formatoResultado == "d") {
        resultado = fecha.getDay();
    } else if (formatoResultado == "h") {
        resultado = fecha.getHours();
    } else if (formatoResultado == "m") {
        resultado = fecha.getMinutes();
    } else if (formatoResultado = "s") {
        resultado = fecha.getSeconds();
    } else {
        alert("Lo siento, esa respuesta no es un formato válido.\n\nPrueba con 'd', 'h', 'm' o 's'.");
    }

    document.getElementById("resultado").innerHTML = `Han pasado ${resultado} ${formatoResultado}.`;
}