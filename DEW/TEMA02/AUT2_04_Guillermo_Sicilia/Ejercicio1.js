/**
 * Queremos generar una aplicación para simular un servidor DHCP muy ‘basto’, queremos que el programa
 * genere una IP válida de uno de los grupos de IPs que nos solicite el usuario. El programa Pregunta al
 * usuario que ‘clase de IP’ quiere y le devolverá una IP con números aleatorios de la clase solicitada.
 * Debes dividir las acciones en funciones distintas ( mínimo 2). Recordamos que podremos usar la
 * siguiente tabla para determinarlo según el rango de la dirección IPv4.
 */

/**
 * Crea una matriz de 4 números, el primero de los cuales está entre min y max, y el resto entre 0 y 255.
 * @param min - El valor mínimo para el primer octeto.
 * @param max - El número máximo de direcciones IP para generar.
 * @returns Una cadena de una dirección IP.
 */
function createIP(min, max) {
    let IParray = [];

    IParray[0] = Math.floor(Math.random() * (max - min)) + min;
    for (let i = 1; i < 4; i++) {
        IParray[i] = Math.floor(Math.random() * 256);
    }

    return "<strong>" + formatIP(IParray) + "</strong>";
}

/**
 * Toma una matriz de 4 números y devuelve una cadena en el formato de una dirección IP.
 * @param IParray - La dirección IP en formato de matriz.
 * @returns la dirección IP en el formato de una cadena.
 */
function formatIP(IParray) {
    return IParray[0] + "." + IParray[1] + "." + IParray[2] + "." + IParray[3];
}

/**
 * Funcion para obtener la opcion seleccionada por el usuario para mostrar el resultado.
 */
function getOption() {
    let option = document.querySelector("#class").value;
    let result = "La IP de la clase <strong>'" + option + "'</strong> es: ";

    switch (option) {
        case "A":
            result += createIP(0, 127);
            break;
        case "B":
            result += createIP(127, 192);
            break;
        case "C":
            result += createIP(192, 224);
            break;
        case "D":
            result += createIP(224, 240);
            break;
        case "E":
            result += createIP(240, 256);
            break;
        default:
            result = "<div style='background-color: red'>¡No has especificado ninguna clase!</div>"
    }

    document.getElementById("resultado").innerHTML = result;
}