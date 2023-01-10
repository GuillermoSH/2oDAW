"use strict";
let sim = "";
const nombres = ["Carlos", "Gonzalo", "Luisa", "Fernando", "Amacio", "Carolina"];
const containerLogs = document.getElementById("containerLogs");
const dialogosHab = {
    salon: ["está viendo la tele", "está jugando a la play", "está usando su ordenador"],
    cocina: ["está horneando un pastel", "está fregando los platos", "está preparando la comida"],
    baño: ["se está lavando los dientes en el baño", "está dandose una ducha", "está plantando un pino"],
    dormitorio: ["está durmiendo", "está haciendo cosas indebidas", "está usando su portatil"]
};
function guardarAccion(accion) {
    console.log(accion);
    switch (accion) {
        case "salon":
            containerLogs === null || containerLogs === void 0 ? void 0 : containerLogs.appendChild(document.createTextNode(sim + " " + dialogosHab.salon[Math.floor(Math.random() * 3)]));
            containerLogs === null || containerLogs === void 0 ? void 0 : containerLogs.appendChild(document.createElement("br"));
            break;
        case "cocina":
            containerLogs === null || containerLogs === void 0 ? void 0 : containerLogs.appendChild(document.createTextNode(sim + " " + dialogosHab.cocina[1]));
            containerLogs === null || containerLogs === void 0 ? void 0 : containerLogs.appendChild(document.createElement("br"));
            break;
        case "baño":
        case "dormitorio":
    }
}
function cambiarPersona(persona) {
    sim = persona;
}
