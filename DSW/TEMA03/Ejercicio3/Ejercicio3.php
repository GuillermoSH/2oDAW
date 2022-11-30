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
    <h1>Ejercicio 03</h1>
    <?php
    $numeroAleatorio = strval(random_int(10000, 99999));
    echo "<table>\n";
    echo "<tr>";
    echo "<td>Numeros:</td>";
    echo "<td>";
    echo "<div>";
    for ($i = 0; $i < 5; $i++) {
        echo '<img src="imagenes/' . $numeroAleatorio[$i] . '.png"/>';
    }
    echo "</div>";
    echo "</td>";
    echo "</tr>";
    echo "</table>\n";
    ?>
</body>

</html>