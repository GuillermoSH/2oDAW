/**
 * Realiza un programa que pida números por teclado hasta que nos introduzcan un número menor
 * que 1 o mayor que 50, momento en el que se invertirán los elementos dentro del array. Mostrar
 * el array invertido. Se valorará el uso de 1 solo array para todo el programa.
 */

function getNumber() {
    let input;
    let numbers = [];
    let counter = 0;

    do {
        input = prompt("Ejercicio 3.-\n\n· Numeros introducidos: "+numbers.toString()+"\n\nIntroduzca un numero (se acaba al introducir un numero mayor a 50 o menor a 1): ");
        numbers[counter++] = input;
    } while (input >= 1 && input <= 50);

    numbers.pop(counter);

    document.getElementById("resultado").innerHTML = formatTable(numbers);
}

/**
 * Funcion que devuelve un string de una tabla a insertar
 * en el html para mostrar los numeros invertidos en un
 * formato mas adecuado.
 * 
 * @param {Array} numbers array de impares.
 * 
 * @returns tabla con numeros por cada celda.
 */
 function formatTable(numbers) {
    numbers = numbers.reverse();
    let result = "<table class='result-table'><tr>";

    for (let i = 1; i <= numbers.length; i++) {
        result += "<td>" + numbers[i - 1] + "</td>";

        if (i % 10 == 0 && i > 9) {
            result += "</tr><tr>";
        }
    }

    result += "</tr></table>";

    return result;
}