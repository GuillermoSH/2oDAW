/*----------------------- INICIALIZAR PRODUCTO -----------------------*/
let producto = new Producto();

/*------------------------ INICIALIZAR DIBUJO ------------------------*/
let ahorcado = new DibujoAhorcado();

/*------------------ INICIALIZAR PALABRA A ADIVINAR ------------------*/
let intentos = 6;
let palabraAdivinar = producto.getTitulo();
let adivinanza = palabraAdivinar.replaceAll(/[a-z]|[A-Z]|ñ/g, "_");
document.getElementById("palabraAdivinar").innerHTML = adivinanza;

/*------------------- INICIALIZAR TURNO JUGADORES --------------------*/
let turno = (Math.random() > 0.4999999999999) ? "J1" : "J2";
document.getElementById("turno-J1").innerHTML = "J1: " + sessionStorage.getItem("J1");
document.getElementById("turno-J2").innerHTML = "J2: " + sessionStorage.getItem("J2");
const containerJ1 = document.getElementById("turno-J1");
const containerJ2 = document.getElementById("turno-J2");
mostrarTurno();



/**
 * Funcion principal para comprobar mediante {@link comprobarLetra()} si la letra
 * clickada corresponde a la palabra a adivinar y si es asi, mediante 
 * {@link comprobarVictoria()} se comprueba si se la palabra se ha completado o no.
 * Ademas, cada vez que se clicka una letra, esta la deshabilita y vuelve a actualizar
 * la adivinanza si se ha añadido una letra nueva.
 * 
 * @param {char} letra que se ha clickado.
 */
function jugarLetra(letra) {
    if (adivinanza != palabraAdivinar) {
        comprobarLetra(letra);

        comprobarIntentos(letra);
        comprobarVictoria();

        document.getElementById(letra).disabled = true;
        document.getElementById("palabraAdivinar").innerHTML = adivinanza;
    }
}

/**
 * Funcion que comprueba que la letra esta dentro de la palabra a adivinar,
 * si es asi la sustituye la posicion por el guion de la adivinanza.
 * 
 * @param {char} letra que se ha clickado.
 */
function comprobarLetra(letra) {
    let desglocePalabra = palabraAdivinar.split("");
    let desgloceAdivinanza = adivinanza.split("");

    for (let i = 0; i < palabraAdivinar.length; i++) {
        if (desglocePalabra[i] == letra.toUpperCase() || desglocePalabra[i] == letra.toLowerCase()) {
            desgloceAdivinanza[i] = palabraAdivinar.charAt(i);
        }
    }
    adivinanza = desgloceAdivinanza.join("");
}

/**
 * Funcion que comprueba si se ha completado la palabra que se tenia que adivinar y da
 * la victoria al jugador que esta jugando.
 * 
 * @param {char} letra que se ha clickado.
 */
function comprobarVictoria() {
    if (adivinanza == palabraAdivinar) {
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
        document.getElementById("canvasAhorcado").style.border = "3px solid yellowgreen";
        document.getElementById("canvasAhorcado").style.boxShadow = "0 0 10px 2px green";
        lanzarModal("🥰 ¡Gana " + sessionStorage.getItem(turno) + "! 😍");
        apuntarGanada(turno);
        apuntarJugada();
    } else if (intentos == 0) {
        ahorcado.dibujarAhorcado(intentos);
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
        document.getElementById("canvasAhorcado").style.border = "3px solid orangered";
        document.getElementById("canvasAhorcado").style.boxShadow = "0 0 10px 2px red";
        apuntarJugada();
    } else {
        mostrarTurno();
    }
}

/**
 * Funcion para quitar intentos al jugador, representar el canvas del ahorcado conforme
 * se vaya fallando letras en la palabra y cambia el turno entre jugadores.
 * @param {char} letra - introducida por el usuario. 
 */
function comprobarIntentos(letra) {
    if (intentos > 0 && !(palabraAdivinar.includes(letra.toUpperCase()) || palabraAdivinar.includes(letra.toLowerCase()))) {
        turno = (turno == "J1") ? "J2" : "J1";
        ahorcado.dibujarAhorcado(intentos);
        intentos--;
    }
}

/**
 * Funcion que deshabilita todas las teclas del teclado al acabar la partida,
 * ya sea cuando se pierda o se gane.
 */
function terminarPartida() {
    const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    for (let i = 0; i < letras.length; i++) {
        document.getElementById(letras.charAt(i)).disabled = true;
    }
}

/**
 * Funcion para darle la partida ganada al jugador actual en el turno, sumandolo
 * a la variable partidasGanadas dentro de su JSON.
 * 
 * @param {string} ganador - de la ronda.
 */
function apuntarGanada(ganador) {
    let jugador = sessionStorage.getItem(ganador);
    let info = JSON.parse(localStorage.getItem(jugador));
    info.partidasGanadas = info.partidasGanadas + 1;
    localStorage.setItem(jugador, JSON.stringify(info));
}

/**
 * Funcion para darle la partida jugada a los jugadores loggeados, sumandolo
 * a la variable partidasJugadas dentro de sus JSONs.
 */
function apuntarJugada() {
    let J1 = sessionStorage.getItem("J1");
    let J2 = sessionStorage.getItem("J2");
    let infoJ1 = JSON.parse(localStorage.getItem(J1));
    let infoJ2 = JSON.parse(localStorage.getItem(J2));

    infoJ1.partidasJugadas = infoJ1.partidasJugadas + 1;
    localStorage.setItem(J1, JSON.stringify(infoJ1));

    infoJ2.partidasJugadas = infoJ2.partidasJugadas + 1;
    localStorage.setItem(J2, JSON.stringify(infoJ2));
}

/**
 * Si el turno es J1, entonces el color de fondo del contenedorJ1 se establece en #ff4733, la sombra del
 * cuadro se establece en el recuadro 0 0 10px 0 #e9e9e9, 0 0 10px 2px, y el borde se establece en 2px
 * sólido #e9e9e9.
 * Si el turno es J2, entonces el color de fondo del contenedorJ1 se establece en #848484, la sombra del
 * cuadro se establece en 0 0 10px 0 #222 y el borde se establece en 2px sólido #222.
 * Si el turno es J2, el color de fondo del contenedorJ2 se establece en #ff9500, la sombra del cuadro
 * se establece en el recuadro 0 0 10px 0 #e9e9e9, 0 0 10px 2px, y el borde se establece en 2px sólido
 * #e9e9e9.
 */
function mostrarTurno() {
    if (turno == "J1") {
        containerJ1.style.backgroundColor = "#ff4733";
        containerJ1.style.boxShadow = "inset 0 0 8px 0 #e9e9e9, 0 0 10px 2px";
        containerJ1.style.border = "2px solid #e9e9e9";
        containerJ2.style.background = "#848484";
        containerJ2.style.boxShadow = "0 0 10px 0 #222";
        containerJ2.style.border = "2px solid #222";
    } else {
        containerJ1.style.backgroundColor = "#848484";
        containerJ1.style.boxShadow = "0 0 10px 0 #222";
        containerJ1.style.border = "2px solid #222";
        containerJ2.style.background = "#ff9500";
        containerJ2.style.boxShadow = "inset 0 0 8px 0 #e9e9e9, 0 0 10px 2px";
        containerJ2.style.border = "2px solid #e9e9e9";
    }
}

/*---------------------------- NUEVA PARTIDA ---------------------------*/
const btnNuevaPartida = document.getElementById("btnNuevaPartida");
btnNuevaPartida.addEventListener("click", () => window.location.reload());

/*-------------------------- VOLVER AL INICIO --------------------------*/
const btnVolverInicio = document.getElementById("btnVolverInicio");
btnVolverInicio.addEventListener("click", () => {
    window.location.replace("../index.html");
    sessionStorage.removeItem("J2");
});

/*--------------------------- CANVAS AHORCADO --------------------------*/
window.addEventListener("load", () => {
    ahorcado.dibujoInicial();
});

/*------------------------ MODAL PELICULA/SERIE ------------------------*/
const modal = document.getElementById("infoPelicula");
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/**
 * Crea una ventana modal con la información del producto.
 * 
 * @param string - si se ha ganado o no.
 */
function lanzarModal(string) {
    modal.style.display = "block";

    document.getElementById("titulo-modal").innerHTML = string;
    let infoPelicula = "<br/><strong>Título:</strong> " + producto.getTitulo() + "<br/>";
    infoPelicula += "<strong>Fecha de salida:</strong> " + producto.getFechaSalida() + "<br/>";
    infoPelicula += "<strong>Duración:</strong> " + producto.getDuracion() + "<br/>";
    infoPelicula += "<strong>Género:</strong> " + producto.getGenero() + "<br/>";
    infoPelicula += "<strong>Director/a:</strong> " + producto.getDirector() + "<br/>";
    infoPelicula += "<strong>Sinopsis:</strong> " + producto.getSinopsis();

    let img = document.createElement("img");
    const modalBody = document.getElementById("body-modal");
    img.src = producto.getImagen();
    img.height = "250";
    img.width = "175";

    document.getElementById("portada").appendChild(img);
    modalBody.innerHTML += infoPelicula;
}