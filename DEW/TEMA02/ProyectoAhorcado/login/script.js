import { leerJson, escribirJson } from "./require";

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