const arrayCapitales = ["Madrid", "Viena", "Berlín", "Buenos Aires", "Bruselas", "Brasilia", "Copenhague", "Tallin", "Helsinki", "Atenas", "Budapest", "Riga", "Rabat", "México", "Oslo"];
const arrayPaises = ["España", "Austria", "Alemania", "Argentina", "Bélgica", "Brasil", "Dinamarca", "Estonia", "Finlandia", "Grecia", "Hungría", "Letonia", "Marruecos", "México", "Noruega"];

let numeroAleatorio = Math.random() * 15;
let indice = parseInt(numeroAleatorio);
let capital = arrayCapitales[indice];
let letrasPista = 0;

for (let i = 2; i >= 0; i--) {
    let respuesta = prompt(`¿Cuál es la capital de ${arrayPaises[indice]}?`);

    if (respuesta == capital) {
        alert("¡Has acertado, felicidades!");
        break;
    } else {
        letrasPista++;
        if (i > 0) {
            alert(`Lo sentimos, esa no es la respuesta.\n\nPista: ${capital.substring(0,letrasPista)}\n\nTe quedan ${i} intentos.`);
        } else {
            alert(`¡Te has quedado sin intentos!.\n\nLa respuesta era: ${capital}`);
        }
    }
}
