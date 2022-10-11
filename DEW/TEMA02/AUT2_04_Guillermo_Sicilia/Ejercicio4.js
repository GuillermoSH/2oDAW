/**
 * Programa que pide una frase y devuelve cuantas veces aparece de cada una de las 4
 * primeras letras del abcedario (nº de a’s, de b’s, etc.). Prueba con “Cuenta la
 * leyenda que los dioses castigaron a algunos hombres convirtiéndolos en águilas.“
 */


function launchProgram() {
    let phrase = "" + document.getElementById("phrase").value;
    
    let letterCounters = countLetters(phrase);

    document.getElementById("resultado").innerHTML = formatOutput(letterCounters);
}

/**
 * Toma una cadena como argumento y devuelve una matriz de enteros, donde cada entero representa el
 * número de veces que aparece una letra en la cadena.
 * 
 * Se supone que la función cuenta la cantidad de veces que aparece cada letra en la cadena y devuelve
 * una matriz de enteros, donde cada entero representa la cantidad de veces que aparece una letra en la
 * cadena.
 * 
 * @param phrase - La frase a contar.
 * @returns Una matriz del número de veces que aparece cada letra en la frase.
 */
function countLetters(phrase) {
    let letterCounters = [0,0,0,0];

    for (let i = 0; i < phrase.length; i++) {
        let letter = phrase.charAt(i);

        switch (letter) {
            case "A":
            case "a":
            case "á":
            case "Á":
                letterCounters[0] += 1;
                break;
            case "B":
            case "b":
                letterCounters[1] += 1;
                break;
            case "C":
            case "c":
                letterCounters[2] += 1;
                break;
            case "D":
            case "d":
                letterCounters[3] += 1;
                break;
        }
    }
    return letterCounters;
}

/**
 * Crea una tabla con el número de ocurrencias de cada letra en la cadena de entrada.
 * 
 * @param {Array} letterCounters - una matriz de 4 enteros, cada uno de los cuales 
 * representa el número de veces que aparece una letra en la cadena de entrada.
 * 
 * @returns Una cadena que contiene el código HTML de una tabla con el número de 
 * ocurrencias de cada letra.
 */
function formatOutput(letterCounters) {
    let result;

    result = "<table id='resultTable'>";
    result += "<tr><td id='tdCounters'><strong>Nº de A: </strong></td><td>" + letterCounters[0] + "</td></tr>";
    result += "<tr><td id='tdCounters'><strong>Nº de B: </strong></td><td>" + letterCounters[1] + "</td></tr>";
    result += "<tr><td id='tdCounters'><strong>Nº de C: </strong></td><td>" + letterCounters[2] + "</td></tr>";
    result += "<tr><td id='tdCounters'><strong>Nº de D: </strong></td><td>" + letterCounters[3] + "</td></tr>";
    result += "</table>";

    return result;
}
