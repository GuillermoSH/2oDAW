<?php

declare(strict_types=1);
# Ejercicio 12 - Programa en PHP que muestre un tablero de ajedrez, de 64 casillas, j de la a-h y i de la 1-8. Cuando el usuario haga "click" sobre una casilla, se le enviará información al
# programa de las coordenadas de la casilla y el programa devolverá un nuevo tablero, coloreando las casillas a las cuales podría saltar un alfil, desde la casilla indicada.
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="ej12.css">
    <title>Ejercicio 12</title>
    <script>
        function recarga(f, c) {
            document.location = "?fila=" + f + "&col=" + c;
        }
    </script>
</head>

<body>
    <h1>Ejercicio 12</h1>
    <table cellspacing="0px" cellpadding="0px">
        <?php
        function crearTablero($filas = 8, $cols = 8, $celda = null)
        {
            $casilla = "";
            for ($i = $filas; $i > 0; $i--) {
                echo "<tr>";
                echo "<th>$i</th>\n";
                for ($j = $cols; $j > 0; $j--) {
                    $clase = (($i + $j) % 2 == 0 ? 'white' : 'black');
                    if ($celda!=null && abs(intval($celda[0])-$i)==abs(intval($celda[1])-$j)) {
                    echo '<td style="background-color:red;" onclick="recarga(' . $i . ',' . $j . ');"></td>';
                    }
                    echo '<td style="background-color:' . $clase . ';" onclick="recarga(' . $i . ',' . $j . ');"></td>';
                }
                echo "</tr>";
            }
        }
        function alfilMovimiento()
        {
            $casilla = 0;
            echo $casilla;
        }

        if (isset($_GET['fila']) && isset($_GET['columna'])) {
        } else {
            echo crearTablero();
        }
        ?>
    </table>
</body>

</html>