export { leerJson, escribirJson };

/* LECTURA Y ESCRITURA DE JSON PARA VALIDACION DE USUARIOS */
const config = require("./users.json");
const fs = require('fs');
let f = new Date();
let fechaActualStr = formatearFecha(f.getDate()) + "/" + formatearFecha(f.getMonth()) + "/" + f.getFullYear() + "-" + formatearFecha(f.getHours()) + ":" + formatearFecha(f.getMinutes()) + ":" + formatearFecha(f.getSeconds());

function formatearFecha(numero) {
    if (numero < 10) {
        return "0" + numero;
    }
    return numero;
}

function leerJson() {
    let data;

    fs.readFile('./users.json', 'utf-8', (err, jsonString) => {
        if (err) {
            fs.writeFile('./logs/sesion.log', JSON.stringify(fechaActualStr + "__Error leyendo user.json ", null, 2), err => {
                if (err) {
                    console.log("Error al escribir logs.");
                }
            });
        } else {
            data = JSON.parse(jsonString);
        }
    });

    return data;
}

function escribirJson(nuevoUsuario) {
    fs.writeFile('./users.json', JSON.stringify(nuevoUsuario, null, 2), err => {
        if (err) {
            fs.writeFile('./logs/sesion.log', JSON.stringify(fechaActualStr + "__Error escribiendo user.json ", null, 2), err => {
                if (err) {
                    console.log("Error al escribir logs.");
                }
            });
        }
    });
}