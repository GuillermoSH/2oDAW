let respuesta = parseInt(prompt("Introduzca un numero: "));

if (respuesta > 6 || respuesta < 0) {
    alert("¡¡Solo se contar de 0 a 6!!");
} else if (respuesta == 0) {
    alert("Este es muy facil...¡prueba con otro!");
} else if (respuesta % 2 == 0) {
    alert("El numero es par");
} else {
    alert("El numero es impar");
}