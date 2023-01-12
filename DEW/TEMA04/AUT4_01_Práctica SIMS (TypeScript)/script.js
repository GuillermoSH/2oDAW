"use strict";
const nombres = ["Carlos", "Gonzalo", "Luisa", "Fernando", "Amacio", "Carolina"];
const containerLogs = document.getElementById("containerLogs");
const dialogosHab = {
    salon: ["está viendo la tele", "está jugando a la play", "está usando su ordenador"],
    cocina: ["está horneando un pastel", "está fregando los platos", "está preparando la comida"],
    baño: ["se está lavando los dientes en el baño", "está dandose una ducha", "está plantando un pino"],
    dormitorio: ["está durmiendo", "está haciendo cosas indebidas", "está usando su portatil"]
};
function getHora() {
    let horario = new Date().toLocaleString().split(" ");
    return horario[1].substring(0, horario[1].length - 3);
}
function guardarAccion(accion) {
    const habitantes = document.getElementById("convivientes");
    let listaHabitantes = habitantes.selectedOptions;
    console.log(accion);
    switch (accion) {
        case "salon":
            crearLog(dialogosHab.salon, listaHabitantes);
            break;
        case "cocina":
            crearLog(dialogosHab.cocina, listaHabitantes);
            break;
        case "baño":
            crearLog(dialogosHab.baño, listaHabitantes);
            break;
        case "dormitorio":
            crearLog(dialogosHab.dormitorio, listaHabitantes);
            break;
    }
}
function crearLog(habitacion, listaHabitantes) {
    for (let i = 0; i < listaHabitantes.length; i++) {
        containerLogs === null || containerLogs === void 0 ? void 0 : containerLogs.appendChild(document.createTextNode("[" + getHora() + "] " + listaHabitantes[i].value + " " + habitacion[Math.floor(Math.random() * 3)]));
        containerLogs === null || containerLogs === void 0 ? void 0 : containerLogs.appendChild(document.createElement("br"));
    }
}
