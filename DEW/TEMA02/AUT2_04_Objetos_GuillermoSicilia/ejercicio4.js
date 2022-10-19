class Juego {
    constructor() {
        this.opciones = ["piedra", "papel", "tijeras", "lagarto", "spock"];
        this.emojis = ["✊","🧻","✂️","🦎","🖖"];
        this.jugador1 = this.preguntarNombre();
        this.jugador2 = "IA";
        this.puntosJ1 = 0;
        this.puntosJ2 = 0;
    }

    preguntarNombre() {
        return prompt("Ejercicio 4.-\n\nIntroduzca su nombre:");
    }

    subirPuntosJ1() {
        this.puntosJ1++;
    }

    subirPuntosJ2() {
        this.puntosJ2++;
    }

    getNombreJ1() {
        return this.jugador1;
    }

    getNombreJ2() {
        return this.jugador2;
    }

    getPuntosJ1() {
        return this.puntosJ1;
    }

    getPuntosJ2() {
        return this.puntosJ2;
    }

    tiradaJ1() {
        let tirada = document.querySelector("#opcion").value;
        return this.opciones[tirada];
    }

    tiradaJ2() {
        return this.opciones[parseInt(Math.random() * 5)];
    }

    obtenerEmoji(tirada) {
        return this.emojis[this.opciones.indexOf(tirada)]
    }

    imprimirResultados(tiradaJ1,tiradaJ2) {
        let resultado = "<strong>Ronda actual:</strong>  <b>" + this.obtenerEmoji(tiradaJ1) + "</b> VS <b>" + this.obtenerEmoji(tiradaJ2) + "</b><br/>";
        let cabecera = "<br/>Marcador:<br/>"
        let total = "<br/>[<strong>" + this.puntosJ1 + "</strong>] " + this.jugador1 + " : " + this.jugador2 + " [<strong>" + this.puntosJ2 + "</strong>]<br/>";
        
        document.getElementById("result").innerHTML = resultado + cabecera + total;
    }

    evaluaTirada(tiradaJugador1, tiradaJugador2) {
        let ganador;
        if (tiradaJugador1 != tiradaJugador2) {
            if (tiradaJugador1 == "tijeras") {
                if (tiradaJugador2 == "papel") {
                    ganador = this.jugador1;
                } else if (tiradaJugador2 == "lagarto") {
                    ganador = this.jugador1;
                } else if (tiradaJugador2 == "spock") {
                    ganador = this.jugador2;
                } else {
                    ganador = this.jugador2;
                }
            } else if (tiradaJugador1 == "papel") {
                if (tiradaJugador2 == "piedra") {
                    ganador = this.jugador1;
                } else if (tiradaJugador2 == "lagarto") {
                    ganador = this.jugador2;
                } else if (tiradaJugador2 == "spock") {
                    ganador = this.jugador1;
                } else {
                    ganador = this.jugador2;
                }
            } else if (tiradaJugador1 == "spock") {
                if (tiradaJugador2 == "piedra") {
                    ganador = this.jugador1;
                } else if (tiradaJugador2 == "lagarto") {
                    ganador = this.jugador2;
                } else if (tiradaJugador2 == "tijera") {
                    ganador = this.jugador1;
                } else {
                    ganador = this.jugador2;
                }
            } else if (tiradaJugador1 == "lagarto") {
                if (tiradaJugador2 == "spock") {
                    ganador = this.jugador1;
                } else if (tiradaJugador2 == "tijera") {
                    ganador = this.jugador2;
                } else if (tiradaJugador2 == "papel") {
                    ganador = this.jugador1;
                } else {
                    ganador = this.jugador2;
                }
            } else {
                if (tiradaJugador2 == "lagarto") {
                    ganador = this.jugador1;
                } else if (tiradaJugador2 == "papel") {
                    ganador = this.jugador2;
                } else if (tiradaJugador2 == "tijeras") {
                    ganador = this.jugador1;
                } else {
                    ganador = this.jugador2;
                }
            }
        } else {
            ganador = "Empate";
        }
        return ganador;
    }

}
let juegos = new Juego();

function juego() {
    let tiradaJ1 = juegos.tiradaJ1();
    let tiradaJ2 = juegos.tiradaJ2();
    let ganador = juegos.evaluaTirada(tiradaJ1, tiradaJ2);
    console.log(tiradaJ1, tiradaJ2)
    console.log(ganador);

    if (ganador == juegos.getNombreJ1()) {
        juegos.subirPuntosJ1();
    } else if (ganador == juegos.getNombreJ2()) {
        juegos.subirPuntosJ2();
    }

    let puntosJ1 = juegos.getPuntosJ1();
    let puntosJ2 = juegos.getPuntosJ2();
    console.log(puntosJ1);
    console.log(puntosJ2);


    juegos.imprimirResultados(tiradaJ1, tiradaJ2);
}