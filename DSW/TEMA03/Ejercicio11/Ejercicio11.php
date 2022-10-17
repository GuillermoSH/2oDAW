<?php

declare(strict_types=1);
/* Ejercicio 11 - Realiza un programa que escoja al azar 10 cartas de la baraja española y 
que diga cuántos puntos suman según el juego de la brisca. Asegúrate de que no se repite ninguna 
carta, igual que si las hubieras cogido de una baraja de verdad. Deberás mostrar las imágenes de 
las cartas obtenidas al azar y la puntuación que suman. El valor de cada carta es el que sigue: 
As (11 puntos), Tres (10 puntos), Rey (4 puntos), Caballo (3 puntos) y Sota (2 puntos). El resto 
de cartas no tienen valor puntuable. El número total de puntos que suman las cartas de la baraja 
es 120.
*/
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 11</title>
    <link href="Ejercicio11.css" type="text/css" rel="stylesheet">
</head>

<body>
    <h1>Ejercicio 11: Juego de la Brisca.-</h1>
    <?php

    $palo = ["bastos", "copas", "espadas", "oros"];
    $valores = [0,11,0,10,0,0,0,0,0,0,2,3,4];
    $palosRandom = [];
    $valorCartas = [];
    $baraja = [];

    do {
        $paloAleatorio = $palo[random_int(0, 3)];
        $numAleatorio = random_int(1, 12);
        $cartaAleatoria = $paloAleatorio . $numAleatorio;

        if (!in_array($cartaAleatoria, $baraja)) {
            array_push($baraja, $cartaAleatoria);
            array_push($palosRandom, $paloAleatorio);
            array_push($valorCartas, $numAleatorio);
        }
    } while (count($baraja) < 10);

    echo "<table>\n";
    echo "        <tr>\n";

    for ($i = 0; $i < count($baraja); $i++) {
        echo "           <td><img src='barajaEspa/", $palosRandom[$i], "/", $baraja[$i], ".png'/></td>\n";
    }

    echo "        </tr>\n";
    echo "        <tr>\n";
    echo "           <td>Puntuación total:" . calcularValores($valorCartas, $valores) . "</td>\n";
    echo "        </tr>\n";
    echo "    </table>\n";

    function calcularValores(array $valorCartas, array $valores)
    {
        $suma = 0;
        for ($i = 0; $i < count($valorCartas); $i++) {
            $suma += $valores[$valorCartas[$i]];
        }
        return $suma;
    }
    ?>
</body>

</html>