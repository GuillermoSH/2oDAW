const btnLoginAnimacion = document.getElementById("login");
const btnRegistrarseAnimacion = document.getElementById("registrarse");
const container = document.querySelector(".container");
const errorLog = document.getElementById("errorLog");
const errorReg = document.getElementById("errorReg");
const exitoReg = document.getElementById("exitoReg");
const btnLogin = document.getElementById("btnLogin");
const btnRegistrarse = document.getElementById("btnRegistrarse");
let usuarioLog = document.getElementById("usuarioLog");
let usuarioReg = document.getElementById("usuarioReg");
let contraseniaReg = document.getElementById("contraseniaReg");
let contrasenia2Reg = document.getElementById("contrasenia2Reg");
let contraseniaLog = document.getElementById("contraseniaLog");


/*--------- FUNCIONALIDAD DESPLAZAMIENTO LOGIN Y REGISTRARSE ----------*/
btnLoginAnimacion.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    usuarioReg.value = "";
    contraseniaReg.value = "";
    contrasenia2Reg.value = "";
});

btnRegistrarseAnimacion.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    usuarioLog.value = "";
    contraseniaLog.value = "";
});

/*------------------ QUITAR ERRORES Y SUCCESS ONFOCUS -----------------*/
usuarioLog.addEventListener("focus", () => errorLog.innerHTML = exitoReg.innerHTML = "");
contraseniaLog.addEventListener("focus", () => errorLog.innerHTML = exitoReg.innerHTML = "");
usuarioReg.addEventListener("focus", () => errorReg.innerHTML = exitoReg.innerHTML = "");
contraseniaReg.addEventListener("focus", () => errorReg.innerHTML = exitoReg.innerHTML = "");
contrasenia2Reg.addEventListener("focus", () => errorReg.innerHTML = exitoReg.innerHTML = "");

/*--------------------------- LOGIN USUARIO ---------------------------*/
btnLogin.addEventListener("click", () => comprobarLogin());

/*------------------------- REGISTRAR USUARIO -------------------------*/
btnRegistrarse.addEventListener("click", () => comprobarRegistro());

/*---- CAMBIO DE TITULO DEPENDIENDO DE JUGADOR QUE QUIERA LOGGEARSE ---*/
let jugador = sessionStorage.getItem("J1") ? "J2" : "J1";
if (sessionStorage.getItem("J1")) {
    document.getElementById("titulo-log").innerHTML = "Iniciar Sesi??n J2";
}

/**
 * Funcion de comprobacion de campos de la parte de login. Aparecera un mensaje de
 * error en el formulario en caso de que:
 *  - El usuario no exista
 *  - Los campos no esten rellenos
 *  - La combinacion de usuario/contrasenia no coincidan
 */
function comprobarLogin() {
	if (localStorage.getItem(usuarioLog.value) == null && usuarioLog.value != "") {
        errorLog.innerHTML = "El usuario no existe.";
    } else if (usuarioLog.value == "") {
        errorLog.innerHTML = "Los campos deben ser rellenados."
    } else if (JSON.parse(localStorage.getItem(usuarioLog.value)).contrasenia != contraseniaLog.value) {
        errorLog.innerHTML = "La combinaci??n usuario/contrase??a es incorrecta.";
    } else if (jugador == "J2" && usuarioLog.value == sessionStorage.getItem("J1")) {
        errorLog.innerHTML = "Este usuario ya ha iniciado sesi??n.";
    } else {
        sessionStorage.setItem(jugador, usuarioLog.value);
        jugador == "J1" ? window.location.replace("../index.html") : window.location.replace("../juego/juego2J.html");
    }
}

/**
 * Funcion de comprobacion de campos de la parte de registro. Aparecera un mensaje de
 * error en el formulario en caso de que:
 *  - El usuario ya exista
 *  - Los campos no esten rellenos
 *  - La contrasenia no cumpla el formato
 *  - Las contrasenias no coincidan
 */
function comprobarRegistro() {
    const jsonUsuario = { "usuario": usuarioReg.value, "contrasenia": contraseniaReg.value, "partidasGanadas": 0, "partidasJugadas": 0}

    if (localStorage.getItem(usuarioReg.value) != null) {
        errorReg.innerHTML = "El usuario ya existe."
    } else if (usuarioReg.value == "") {
        errorReg.innerHTML = "Campo usuario est?? vac??o."
    } else if (contraseniaReg.value == "") {
        errorReg.innerHTML = "Campo contrase??a est?? vac??o."
    } else if (!comprobarContrasenia()) {
        errorReg.innerHTML = "La contrase??a debe tener al menos un digito y una may??scula."
    } else if (contrasenia2Reg.value != contraseniaReg.value) {
        errorReg.innerHTML = "Ambas contrase??as deben coincidir.";
    } else {
        localStorage.setItem(usuarioReg.value, JSON.stringify(jsonUsuario));
        errorReg.innerHTML = "";
        usuarioReg.value = contraseniaReg.value = contrasenia2Reg.value = "";
        exitoReg.innerHTML = "Usuario dado de alta. Ahora inicie sesi??n.";
    }
}

/**
 * Si la expresi??n regular coincide con la contrasenia, devuelve verdadero.
 * 
 * @returns un valor booleano.
 */
function comprobarContrasenia() {
    const regex = /(^[A-Z]+\w*)|(^\w*[A-Z]+\w*$)/gm;

    return regex.test(contraseniaReg.value);
}