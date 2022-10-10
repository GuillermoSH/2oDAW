/**
 * Realiza un programa para escribir todos los números impares entre dos
 * números A y B introducidos por teclado. Antes habrá que comprobar cuál
 * de los dos números A y B es mayor.
 */

/**
 * Toma dos números, los intercambia si están en el orden incorrecto, genera una matriz de números
 * impares entre ellos y luego formatea esa matriz en una tabla.
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
