<?php

declare(strict_types=1) ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>

<body>
    <?php
    function sorteo($cantidadNumeros) {
        $sorteo=[];

        do {
            $numeroAleatorio = random_int(1,49);

            if (!(in_array($numeroAleatorio, $sorteo))) {
                array_push($sorteo,$numeroAleatorio);
            }
        } while (count($sorteo) < $cantidadNumeros);
        
        sort($sorteo);

        return $sorteo;
    }
    require_once("../librerias/funcAuxImgs.php");
    echo "<table>";
    $numeros = sorteo(6);
    echo "<tr>";
    foreach($numeros as $numero) {
        echo "<td>";
        mostrarNumeros($numero,"./Ejercicio03/imgsNumeros","25");
        echo "</td>";
    }
    echo "</tr>";
    echo "</table>";
    ?>
</body>

</html>