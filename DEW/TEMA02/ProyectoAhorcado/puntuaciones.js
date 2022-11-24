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
    let colGanadas = document.createElement("td");
    let colJugadas = document.createElement("td");
    let colSeparacion1 = document.createElement("td");
    let colSeparacion2 = document.createElement("td");

    switch(contador) {
        case 3: colUsuario.appendChild(document.createTextNode("🥇 "+ jugador.usuario + ": ")); break;
        case 2: colUsuario.appendChild(document.createTextNode("🥈 "+ jugador.usuario + ": ")); break;
        case 1: colUsuario.appendChild(document.createTextNode("🥉 "+ jugador.usuario + ": ")); break;
        default: colUsuario.appendChild(document.createTextNode(jugador.usuario + ": "));
    }

    contador--;

    colGanadas.appendChild(document.createTextNode(jugador.partidasGanadas));
    colJugadas.appendChild(document.createTextNode(jugador.partidasJugadas));
    colUsuario.classList.add("jugadores");
    colGanadas.classList.add("partidas");
    colJugadas.classList.add("partidas");
    colSeparacion1.classList.add("separacion");
    colSeparacion2.classList.add("separacion");
    fila.appendChild(colUsuario);
    fila.appendChild(colSeparacion1);
    fila.appendChild(colGanadas);
    fila.appendChild(colSeparacion2);
    fila.appendChild(colJugadas);
    tablaPuntuacion.appendChild(fila);
});

/*-------------------------- ACCIONES BOTONES --------------------------*/
btnVolverInicio.addEventListener("click", () => window.location.replace("./index.html"));
btnResetear.addEventListener("click", () => {
    let claves = Object.keys(localStorage);
    claves.forEach(clave => {
        let info = JSON.parse(localStorage.getItem(clave));
        info.partidasGanadas = 0;
        info.partidasJugadas = 0;
        localStorage.setItem(clave, JSON.stringify(info));
        window.location.reload();
    });
});