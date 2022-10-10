/**
 * Realiza un programa para escribir todos los números impares entre dos
 * números A y B introducidos por teclado. Antes habrá que comprobar cuál
 * de los dos números A y B es mayor.
 */

/**
 * Toma dos números, los intercambia si están en el orden incorrecto,
 * genera una matriz de números impares entre ellos y luego formatea 
 * esa matriz en una tabla.
 */
function launchProgram() {
    let min = parseInt(document.getElementById("num1").value);
    let max = parseInt(document.getElementById("num2").value);

    if (min > max) {
        let aux = min;
        min = max;
        max = aux;
    }

    let oddsA = generateOdds(min, max);
    let result = formatTable(oddsA);

    document.getElementById("resultado").innerHTML = result;
}

/**
 * Genera los números impares entre min y max, y los almacena en un array.
 * 
 * @param {int} min valor min del rango a generar impares.
 * @param {int} max valor max del rango a generar impares.
 * 
 * @returns array de impares.
 */
function generateOdds(min, max) {
    let odds = [];

    if (min % 2 == 0) {
        min++;
    }

    for (let i = min, j = 0; i <= max; i += 2, j++) {
        odds[j] = i;
    }

    return odds;
}

/**
 * Funcion que devuelve un string de una tabla a insertar
 * en el html para mostrar los impares en un formato mas
 * adecuado.
 * 
 * @param {Array} odds array de impares.
 * 
 * @returns tabla con numeros impares por cada celda.
 */
function formatTable(odds) {
    let result = "<table class='result-table'><tr>";

    for (let i = 1; i <= odds.length; i++) {
        result += "<td>" + odds[i - 1] + "</td>";

        if (i % 10 == 0 && i > 9) {
            result += "</tr><tr>";
        }
    }

    result += "</tr></table>";

    return result;
}
