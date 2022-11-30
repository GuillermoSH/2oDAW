<?php

declare(strict_types=1) ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 03</title>
    <style>
        table,
        td {
            border: 1px solid black;
        }

        td {
            display: grid;
            padding: 5px;
            margin: 5px;
            text-align: center;
        }

        img {
            width: 50px;

        }
    </style>
</head>

<body>
    <h1>Ejercicio 04</h1>
    <?php
    ## '<img src="imagenes/'.random_int(1, 9).'.png">';
    $primitiva = [];
    do {
        $rando = rand(1, 49);
        in_array($rando, $primitiva) ?: array_push($primitiva, $rando);
    } while (count($primitiva) < 6);
    sort($primitiva);
    $fechaH = date("d/m/Y:H:i:s");
    echo "<table>\n";
    echo "<tr>";
    echo "<td colspan=3 >Sorteo del dia: $fechaH</td>";
    for ($i = 0; $i < 6; $i++) {

        echo "<td>";
        if ($primitiva[$i] > 9) {
            echo 'Número ' . ($i + 1) . ': <div><img src="imagenes/' . substr(strval($primitiva[$i]), 0, 1) . '.png" /> <img src="imagenes/' . substr(strval($primitiva[$i]), 1, 1) . '.png"/></div>';
        } else {
            echo 'Número ' . ($i + 1) . ': <div><img src="imagenes/' . $primitiva[$i] . '.png"></div>';
        }
        echo "</td>";
    }
    echo "</tr>";
    echo "</table>\n";
    ?>
</body>

</html>