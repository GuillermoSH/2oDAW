function pedirNumeros(letra) {
    let resultado = Number(prompt(`Introduzca el valor de ${letra}: `))
    return resultado;
}

function ejercicio8() {
    let a, b, c;
    a = pedirNumeros("a");
    b = pedirNumeros("b");
    c = pedirNumeros("c");
    
    if (a < 0 || b < 0 || c < 0) {
        alert("Al menos una de las 3 variables es negativa.");
    } else if (a == 0 && b == 0 && c == 0) {
        alert("Las tres variables son iguales a 0.")
    } else if (a + b + c > 10 && a != b != c) {
        alert("Las sumas de las 3 variables es mayor que 10 y las tres variables son diferentes.")
    }
}