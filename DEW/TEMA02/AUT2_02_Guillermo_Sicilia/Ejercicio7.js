const arrayCapitales = ["Madrid","Viena","Berlín","Buenos Aires","Bruselas","Brasilia","Copenhague","Tallin","Helsinki","Atenas","Budapest","Riga","Rabat","México","Oslo"];
const arrayPaises = ["España","Austria","Alemania","Argentina","Bélgica","Brasil","Dinamarca","Estonia","Finlandia","Grecia","Hungría","Letonia","Marruecos","México","Noruega"];

let numeroAleatorio = Math.random()*15;

document.getElementById("").innerHTML = `¿Cuál es la capital de ${arrayPaises[numeroAleatorio]}?`

for (let i = 0; i<3;i++) {
    
    let respuesta = promt(`Ejercicio7.-\n\n¿Cuál es la capital de ${arrayPaises[numeroAleatorio]}?`);
    if (respuesta.equals(arrayCapitales[numeroAleatorio])) {
        console.log("¡Has acertado, felicidades!");
    } else {
        if (i > 0) {
            console.log(`Lo sentimos, esa no es la respuesta.\n\nTe quedan ${i} intentos.`);
        } else {
            console.log(`¡Te has quedado sin intentos!.\n\nLa respuesta era: ${arrayCapitales[numeroAleartorio]}`);
        }
    }
}