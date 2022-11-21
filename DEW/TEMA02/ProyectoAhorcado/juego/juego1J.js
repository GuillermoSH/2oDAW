class Producto {
    constructor(titulo, fechaSalida, duracion, genero, director, sinopsis, imagen) {
        this.titulo = titulo;
        this.fechaSalida = fechaSalida;
        this.duracion = duracion;
        this.genero = genero;
        this.director = director;
        this.sinopsis = sinopsis;
        this.imagen = imagen;
    }

    setInfo(array) {
        this.titulo = array[0];
        this.fechaSalida = array[1];
        this.duracion = array[2];
        this.genero = array[3];
        this.director = array[4];
        this.sinopsis = array[5];
        this.imagen = array[6];
    }

    getInfo() {
        return [this.titulo,this.fechaSalida,this.duracion,this.genero,this.director,this.sinopsis,this.imagen];
    }
}

const divProducto = document.getElementById("infoProducto");

fetch("./peliculas.json")
    .then(res => res.json())
    .then(data => {
        let info = data.peliculasYseries[parseInt(Math.random() * data.peliculasYseries.length)];
        //[info.Titulo,info.Anio,info["Fecha de salida"],info.Duracion,info.Genero,info.Director,info.Sinopsis,info.Imagen]);
        sessionStorage.setItem("producto",JSON.stringify(info));
    });

let infoProducto = JSON.parse(sessionStorage.getItem("producto"));
let producto = new Producto();
producto.setInfo([infoProducto.Titulo,infoProducto.Anio,infoProducto["Fecha de salida"],infoProducto.Duracion,infoProducto.Genero,infoProducto.Director,infoProducto.Sinopsis,infoProducto.Imagen]);

let palabraAdivinar = producto.getInfo()[0].toString();
console.log(palabraAdivinar)
let adivinanza = palabraAdivinar.replaceAll(/\w/g, "_");
let intentos = 6;

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
    let divAvance = document.getElementById("avance");

    if (adivinanza == palabraAdivinar) {
        divAvance.innerHTML = "🥰 ¡Has ganado! 😍";
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
        apuntarGanada();
    } else if (intentos == 0) {
        divAvance.innerHTML = "☹️ ¡Has perdido! ☹️";
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
    } else if (intentos > 0 && !(palabraAdivinar.includes(letra.toUpperCase()) || palabraAdivinar.includes(letra.toLowerCase()))) {
        divAvance.innerHTML = "Te quedan " + intentos + " intentos.";
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
    info.partidasGanadas = info.partidasGanadas+1;
    localStorage.setItem(jugador, JSON.stringify(info));
}

/*---------------------------- NUEVA PARTIDA ---------------------------*/
const btnNuevaPartida = document.getElementById("btnNuevaPartida");
btnNuevaPartida.addEventListener("click", () => window.location.reload());

/*-------------------------- VOLVER AL INICIO --------------------------*/
const btnVolverInicio = document.getElementById("btnVolverInicio");
btnVolverInicio.addEventListener("click", () => window.location.replace("../index.html"));