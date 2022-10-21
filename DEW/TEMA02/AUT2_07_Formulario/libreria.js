let contador = 0;

export function imprimirInformacion(persona) {
    contador++;
    if (contador < 10) {
        return "Usuario 0" + contador + ": su nombre es " + [persona.nombre, persona.apellido].join(" ") + ".";
    }
    return "Usuario " + contador + ": su nombre es " + [persona.nombre, persona.apellido].join(" ") + ".";
}