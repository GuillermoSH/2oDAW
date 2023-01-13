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

/**
 * Devuelve la hora actual en el formato HH:MM:SS
 * @returns La hora actual en el formato HH:MM:SS
 */
function getHora(): string {
    let horario: string[] = new Date().toLocaleString().split(" ");
    return horario[1].substring(0, horario[1].length - 3);
}

/**
 * Toma una cadena como argumento y, dependiendo de la cadena, llama a una función que toma dos
 * argumentos, uno de los cuales es una matriz de HTMLSelectElements.
 * @param {string} accion - cuerda
 */
function guardarAccion(accion: string): void {
    const habitantes = document.getElementById("convivientes") as HTMLSelectElement;
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

/**
 * Crea un registro de las acciones de los habitantes de la casa.
 * @param {any} habitacion - any = ["entró a la habitación", "salio de la habitación", "se quedó en la
 * habitación"];
 * @param {any} listaHabitantes - una matriz de los habitantes de la habitación
 */
function crearLog(habitacion: any, listaHabitantes: any) {
    for (const persona of listaHabitantes) {
        containerLogs?.appendChild(document.createTextNode("[" + getHora() + "] " + persona.value + " " + habitacion[Math.floor(Math.random() * 3)]));
        containerLogs?.appendChild(document.createElement("br"));
    }
}