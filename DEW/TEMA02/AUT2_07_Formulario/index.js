import { imprimirInformacion } from "./libreria.js";

'use strict';
const personas = [
    { nombre: "Antonio", apellido: "Hernández" },
    { nombre: "Marta", apellido: "Pérez" },
    { nombre: "Alejandro", apellido: "Matos" },
    { nombre: "Macarena", apellido: "Cabrera" },
    { nombre: "Lucía", apellido: "García" }
];

let resultado = "";

personas.forEach(persona => {
    resultado += imprimirInformacion(persona) + "<br/>";
});
document.getElementById("resultado").innerHTML = resultado;