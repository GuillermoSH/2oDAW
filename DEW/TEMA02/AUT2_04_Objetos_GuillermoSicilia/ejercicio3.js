class Juego {
    constructor() {
        this.jugador2 = "Jugador 2";
        this.puntosJugador1 = 0;
        this.puntosJugador2 = 0;
    }

    preguntarNombre() {
        this.jugador1 = prompt("Ejercicio 3.-\n\nIntroduzca su nombre:");
        return this.jugador1;
    }

    numeroRandom() {
        let opciones = ["piedra", "papel", "tijeras", "lagarto", "spock"];
        return opciones[parseInt(Math.random() * 5)];
    }

    tiradaJugador() {
        return this.numeroRandom();
    }

    imprimirResultados(jugador1, jugador2) {
        let ganador = (jugador1 > jugador2) ? this.jugador1 : this.jugador2;
        const div = document.getElementById("result");
        const cabecera = document.createTextNode(this.jugador1 + " vs " + this.jugador2);
        const resultado = document.createTextNode("Ganador por " + jugador1 + " a " + jugador2 + " es: " + ganador);
        div.appendChild(cabecera);
        div.appendChild(document.createElement("br"));
        div.appendChild(resultado);
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));
    }

    evaluaTirada(tiradaJugador1, tiradaJugador2) {
        let ganador;
        if (tiradaJugador1 != tiradaJugador2) {
            if (tiradaJugador1 == "tijera") {
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

function juego() {
    let juegos = new Juego();
    let jugador1 = juegos.preguntarNombre();
    let jugador2 = "Jugador 2";
    let puntosJ1 = 0;
    let puntosJ2 = 0;

    while (puntosJ1 != 2 && puntosJ2 != 2) {
        let tiradaJ1 = juegos.tiradaJugador();
        let tiradaJ2 = juegos.tiradaJugador();
        let ganador = juegos.evaluaTirada(tiradaJ1, tiradaJ2);
        console.log(tiradaJ1, tiradaJ2)
        console.log(ganador);

        if (ganador == jugador1) {
            puntosJ1++;
        } else if (ganador == jugador2) {
            puntosJ2++
        }

        console.log(puntosJ1);
        console.log(puntosJ2);
    }

    juegos.imprimirResultados(puntosJ1, puntosJ2);
}
