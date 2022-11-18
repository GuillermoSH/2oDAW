

/* FUNCIONALIDAD DESPLAZAMIENTO LOGIN Y REGISTRARSE */
const btnLoginAnimacion = document.getElementById("login");
const btnRegistrarseAnimacion = document.getElementById("registrarse");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

btnLoginAnimacion.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

btnRegistrarseAnimacion.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

/* LOGIN USUARIO */
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () => {
	let usuario = document.getElementById("usuarioLog");
	let contrasenia = document.getElementById("contraseniaLog");

	console.log(leerJson());

	validarUsuario();
});

/* LECTURA Y ESCRITURA DE JSON PARA VALIDACION DE USUARIOS */
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