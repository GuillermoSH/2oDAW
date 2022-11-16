const palabras = ["Parque Jurasico", "Star Wars", "Cars", "Buscando a Nemo", "La Sirenita", "El bueno, el feo y el malo"];
let palabraAdivinar = palabras[parseInt(Math.random() * palabras.length)];
let adivinanza = palabraAdivinar.replaceAll(/\w/g, "_");
let intentos = 6;

document.getElementById("palabraAdivinar").innerHTML = adivinanza;

function jugarLetra(letra) {
    if (adivinanza != palabraAdivinar) {
        let desglocePalabra = palabraAdivinar.split("");
        let desgloceAdivinanza = adivinanza.split("");

        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (desglocePalabra[i] == letra.toUpperCase() || desglocePalabra[i] == letra.toLowerCase()) {
                desgloceAdivinanza[i] = palabraAdivinar.charAt(i);
            }
        }
        document.getElementById(letra).disabled = true;

        adivinanza = desgloceAdivinanza.join("");

        comprobarVictoria(letra);

        document.getElementById("palabraAdivinar").innerHTML = adivinanza;
    }
}

function comprobarVictoria(letra) {
    let divAvance = document.getElementById("avance");

    if (adivinanza == palabraAdivinar) {
        divAvance.innerHTML = "🥰 ¡Has ganado! 😍";
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
    } else if (intentos > 0 && !(palabraAdivinar.includes(letra.toUpperCase()) || palabraAdivinar.includes(letra.toLowerCase()))) {
        divAvance.innerHTML = "Te quedan " + intentos + " intentos.";
        intentos--;
    } else if (intentos == 0) {
        divAvance.innerHTML = "☹️ ¡Has perdido! ☹️";
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
    }
}

function terminarPartida() {
    const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    for (let i = 0; i < letras.length; i++) {
        document.getElementById(letras.charAt(i)).disabled = true;
    }
}

function nuevaPartida() {
    window.location.reload();
}