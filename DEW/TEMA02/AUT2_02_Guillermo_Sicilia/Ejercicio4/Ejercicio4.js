function ejercicio4() {
    let n1 = Number(prompt("Ejercicio4.-\n\nEscriba un numero: "));
    let n2 = Number(prompt("Ejercicio4.-\n\nEscriba un numero: "));
    let n3 = Number(prompt("Ejercicio4.-\n\nEscriba un numero: "));

    document.getElementById("ejercicio4").innerHTML = `Los numeros posteriores a sus numeros ${n1}, ${n2} y ${n3} son: ${n1 + 1}, ${n2 + 1}, ${n3 + 1}.`
}