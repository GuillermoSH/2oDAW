let sim = "";

interface Habitaciones {
    salon: string[],
    cocina: string[],
    baño: string[],
    dormitorio: string[]
}

const nombres: string[] = ["Carlos", "Gonzalo", "Luisa", "Fernando", "Amacio", "Carolina"];
const containerLogs = document.getElementById("containerLogs");

const dialogosHab: Habitaciones = {
    salon: ["está viendo la tele", "está jugando a la play", "está usando su ordenador"],
    cocina: ["está horneando un pastel", "está fregando los platos", "está preparando la comida"],
    baño: ["se está lavando los dientes en el baño", "está dandose una ducha", "está plantando un pino"],
    dormitorio: ["está durmiendo", "está haciendo cosas indebidas", "está usando su portatil"]
}

function guardarAccion(accion: string):void {
    console.log(accion);
    switch (accion) {
        case "salon":
            containerLogs?.appendChild(document.createTextNode(sim+" "+dialogosHab.salon[Math.floor(Math.random()*3)]));
            containerLogs?.appendChild(document.createElement("br"));
            break;
        case "cocina":
            containerLogs?.appendChild(document.createTextNode(sim+" "+dialogosHab.cocina[Math.floor(Math.random()*3)]));
            containerLogs?.appendChild(document.createElement("br"));
            break;
        case "baño":
        case "dormitorio":
    }
}

function cambiarPersona(persona: string) {
    sim = persona;
}