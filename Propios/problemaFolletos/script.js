const btn = document.getElementById("btn-ejecutar");
const containerRes = document.getElementById("resultado");

btn.addEventListener("click", () => {
    btn.setAttribute("style", "display: none;");

    imprimirResultado();
});

function calcularResultado() {
    let candidatos = [];
    for (let i = 3999; i > 0; i--) {
        let candidato = true;
        for (let j = 2; j <= 9; j++) {
            if (i % j != 1) {
                candidato = false;
            }
        }
        if (candidato == true) {
            candidatos.push(i);
        }
    }
    return candidatos;
}

function imprimirResultado() {
    let candidatos = calcularResultado();
    containerRes.innerHTML = candidatos;
}