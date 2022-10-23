import { imprimirInformacion } from "./libreria.js";

"use strict";
const personas = [
    { nombre: "Antonio", apellido: "Hernández" },
    { nombre: "Marta", apellido: "Pérez" },
    { nombre: "Alejandro", apellido: "Matos" },
    { nombre: "Macarena", apellido: "Cabrera" },
    { nombre: "Lucía", apellido: "García" }
];

let resultado = "";

resultado += "<div class='container-resultado'>";
personas.forEach(persona => {
    resultado += imprimirInformacion(persona) + "<br/>";
});
resultado += "</div>";
document.getElementById("resultado").innerHTML = resultado;