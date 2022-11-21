const tablaPuntuacion = document.getElementById("tablaPuntuaciones");
const btnVolverInicio = document.getElementById("btnVolverInicio");
const btnResetear = document.getElementById("btnReset");

/*----------------------------- GENERACION -----------------------------*/
let claves = Object.keys(localStorage);
let arrayJugadores=[];

claves.forEach(clave => {
    arrayJugadores.push(JSON.parse(localStorage.getItem(clave)));
});

arrayJugadores.sort((a,b) => b.partidasGanadas - a.partidasGanadas);

let contador = 3;

arrayJugadores.forEach(jugador => {
    let fila = document.createElement("tr");
    let colUsuario = document.createElement("td");
    let colPartidas = document.createElement("td");
    let colSeparacion = document.createElement("td");

    switch(contador) {
        case 3: colUsuario.appendChild(document.createTextNode("🥇 "+ jugador.usuario + ": ")); break;
        case 2: colUsuario.appendChild(document.createTextNode("🥈 "+ jugador.usuario + ": ")); break;
        case 1: colUsuario.appendChild(document.createTextNode("🥉 "+ jugador.usuario + ": ")); break;
        default: colUsuario.appendChild(document.createTextNode(jugador.usuario + ": "));
    }

    contador--;

    colPartidas.appendChild(document.createTextNode(jugador.partidasGanadas));
    colUsuario.classList.add("jugadores");
    colPartidas.classList.add("partidas");
    colSeparacion.classList.add("separacion");
    fila.appendChild(colUsuario);
    fila.appendChild(colSeparacion);
    fila.appendChild(colPartidas);
    tablaPuntuacion.appendChild(fila);
});

/*-------------------------- ACCIONES BOTONES --------------------------*/
btnVolverInicio.addEventListener("click", () => window.location.replace("./index.html"));
btnResetear.addEventListener("click", () => {
    let claves = Object.keys(localStorage);
    claves.forEach(clave => {
        let info = JSON.parse(localStorage.getItem(clave));
        info.partidasGanadas = 0;
        localStorage.setItem(clave, JSON.stringify(info));
        window.location.reload();
    });
});