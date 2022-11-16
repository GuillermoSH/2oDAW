const jsonPeliculas = {
    "peliculasYseries": [
        {
            "Titulo": "Avatar"
        },
        {
            "Titulo": "Soy leyenda"
        },
        {
            "Titulo": "Vengadores"
        },
        {
            "Titulo": "Interstellar"
        },
        {
            "Titulo": "Cars"
        },
        {
            "Titulo": "Buscando a Nemo"
        },
        {
            "Titulo": "Star Wars"
        },
        {
            "Titulo": "Los Simpson"
        },
        {
            "Titulo": "Andor"
        },
        {
            "Titulo": "Star Wars Clone Wars"
        },
        {
            "Titulo": "Top Gear"
        },
        {
            "Titulo": "Iron Man"
        },
        {
            "Titulo": "Spider-Man"
        },
        {
            "Titulo": "Uncharted"
        },
        {
            "Titulo": "Parque Jurasico"
        },
        {
            "Titulo": "El hombre del norte"
        },
        {
            "Titulo": "Shazam"
        },
        {
            "Titulo": "Predator La Presa"
        },
        {
            "Titulo": "Dune"
        },
        {
            "Titulo": "El proyecto Adam"
        },
        {
            "Titulo": "La llegada"
        },
        {
            "Titulo": "Pocoyo"
        }
    ]
}

let palabraAdivinar = jsonPeliculas.peliculasYseries[parseInt(Math.random() * jsonPeliculas.peliculasYseries.length)].Titulo;
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
    } else if (intentos == 0) {
        divAvance.innerHTML = "☹️ ¡Has perdido! ☹️";
        terminarPartida();
        document.getElementById("btnNuevaPartida").classList.remove("hidden");
    } else if (intentos > 0 && !(palabraAdivinar.includes(letra.toUpperCase()) || palabraAdivinar.includes(letra.toLowerCase()))) {
        divAvance.innerHTML = "Te quedan " + intentos + " intentos.";
        intentos--;
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