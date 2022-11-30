<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 11</title>
</head>

<body>
    <?php
        require_once("../config.php");
        require_once("../recursos/librerias/funciones/funcionesAuxImagenes.php");
        function cartaAleatoria() {
            $palos = ["bastos","copas","espadas","oros"];
            return [$palos[rand(0,3)],rand(1,12)];
        }
        function valorCarta($carta) {
            $valores = [0,11,0,10,0,0,0,0,0,0,2,3,4];
            return $valores[$carta[1]];
        }
        $cartas=[];
        while(sizeof($cartas)<10) {
            $carta = cartaAleatoria();
            if (!in_array($carta,$cartas)) {
                array_push($cartas,$carta);
                mostrarCarta($carta[0],$carta[1]);
                $puntos += valorCarta($carta);
            }
        }
        echo "<br/>Total de puntos; $puntos.";
    ?>
</body>

</html>