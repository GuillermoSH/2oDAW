let contador = 0;

export function imprimirInformacion(persona) {
    contador++;
    if (contador < 10) {
        return "<strong>Usuario 0" + contador + "</strong>: su nombre es " + [persona.nombre, persona.apellido].join(" ") + ".";
    }
    return "<strong>Usuario " + contador + "</strong>: su nombre es " + [persona.nombre, persona.apellido].join(" ") + ".";
}