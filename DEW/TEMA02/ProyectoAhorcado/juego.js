const palabras = ["Parque Jurasico", "Star Wars", "Cars","Buscando a Nemo","La Sirenita","El bueno, el feo y el malo"];
let palabraAdivinar = palabras[parseInt(Math.random() * palabras.length)];
let adivinanza = palabraAdivinar.replaceAll(/\w/g,"_");

document.getElementById("palabraAdivinar").innerHTML = adivinanza;

function jugarLetra(letra) {
    let desglocePalabra = palabraAdivinar.split("");
    let desgloceAdivinanza = adivinanza.split("");
    
    for (let i = 0; i < palabraAdivinar.length; i++) {
        if (desglocePalabra[i] == letra.toUpperCase() || desglocePalabra[i] == letra.toLowerCase()) {
            desgloceAdivinanza[i] = palabraAdivinar.charAt(i);
        }
    }

    if (palabraAdivinar.includes(letra.toUpperCase()) || palabraAdivinar.includes(letra.toLowerCase())) {
        document.getElementById(letra).classList.add("hidden")
    }

    adivinanza = desgloceAdivinanza.join("");

    comprobarVictoria();

    document.getElementById("palabraAdivinar").innerHTML = adivinanza;
}

function comprobarVictoria() {
    if (adivinanza == palabraAdivinar) {
        alert("Has ganao bro!");
    }
}