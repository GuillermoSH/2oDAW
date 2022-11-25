const btn1J = document.getElementById("btn1J");
const btn2J = document.getElementById("btn2J");
const btnPuntuaciones = document.getElementById("btnPuntuaciones");
const containerMenu = document.getElementById("container-menu");
const containerLogin = document.getElementById("container-login");
const btnIniciarSesion = document.getElementById("btnIniciarSesion");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

/*-------------------- REDIRECCIONES DESDE EL MENU --------------------*/
btnPuntuaciones.addEventListener("click", () => window.location.replace("./puntuaciones.html"));
btn1J.addEventListener("click", () => window.location.replace("./juego/juego1J.html"));
btn2J.addEventListener("click", () => window.location.replace("./login/login.html"));


/*---------------------- BOTON INICIO DE SESION -----------------------*/
btnIniciarSesion.addEventListener("click", () => window.location.replace("./login/login.html"));


/*------------ MOSTRAR EL MENU DESPUES DE INICIO DE SESION ------------*/
if (sessionStorage.getItem("J1")) {
    containerMenu.classList.remove("oculto");
    containerLogin.classList.add("oculto");
}

/*------------------ CERRAR SESION JUGADOR PRINCIPAL ------------------*/
btnCerrarSesion.addEventListener("click", () => {
    sessionStorage.removeItem("J1");
    sessionStorage.removeItem("J2");
    window.location.reload();
});

/*-------------------- CORRECCION FALLO CON FETCH ---------------------*/
document.cookie = "loaded=false";