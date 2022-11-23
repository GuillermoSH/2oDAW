/*----------------------- INICIALIZAR PRODUCTO -----------------------*/
let producto = new Producto();

/*------------------------ INICIALIZAR DIBUJO ------------------------*/
let ahorcado = new DibujoAhorcado();

/*------------------ INICIALIZAR PALABRA A ADIVINAR ------------------*/
let intentos = 5;
let palabraAdivinar = producto.getTitulo();
let adivinanza = palabraAdivinar.replaceAll(/[a-z]|[A-Z]/g, "_");
document.getElementById("palabraAdivinar").innerHTML = adivinanza;


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

        comprobarVictoria(letra);

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
function comprobarVictoria(letra) {
    if (adivinanza == palabraAdivinar) {
        lanzarModal("🥰 ¡Has ganado! 😍");
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
        document.getElementById("canvasAhorcado").style.border = "3px solid yellowgreen";
        document.getElementById("canvasAhorcado").style.boxShadow = "0 0 10px 2px green";
        apuntarGanada();
    } else if (intentos == 0) {
        lanzarModal("☹️ ¡Has perdido! ☹️");
        ahorcado.dibujarAhorcado(intentos);
        adivinanza = palabraAdivinar;
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
        document.getElementById("canvasAhorcado").style.border = "3px solid orangered";
        document.getElementById("canvasAhorcado").style.boxShadow = "0 0 10px 2px red";
    } else if (intentos > 0 && !(palabraAdivinar.includes(letra.toUpperCase()) || palabraAdivinar.includes(letra.toLowerCase()))) {
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

function apuntarGanada() {
    let jugador = sessionStorage.getItem("J1");
    let info = JSON.parse(localStorage.getItem(jugador));
    info.partidasGanadas = info.partidasGanadas + 1;
    localStorage.setItem(jugador, JSON.stringify(info));
}

/*---------------------------- NUEVA PARTIDA ---------------------------*/
const btnNuevaPartida = document.getElementById("btnNuevaPartida");
btnNuevaPartida.addEventListener("click", () => window.location.reload());

/*-------------------------- VOLVER AL INICIO --------------------------*/
const btnVolverInicio = document.getElementById("btnVolverInicio");
btnVolverInicio.addEventListener("click", () => window.location.replace("../index.html"));

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