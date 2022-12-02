<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href=" ">
    <title>Ejercicio 1 Profesor</title>
    <style>
        h2 {
            text-decoration: underline;
            text-align: center;
        }

        th {
            background-color: rgb(255,100,100);
            border: 1px solid black;
            padding: 0 0.7rem;
        }
        
        tr:nth-child(even) td {
            background-color: lightblue;
            border: 1px solid black;
        }
        
        tr:nth-child(odd) td {
            background-color: lightgrey;
            border: 1px solid black;
        }
        
        table {
            margin-inline: auto;
        }
    </style>
</head>
<body>
<h2>Estadísticas anuales de temperaturas</h2>
    <table>
        <tr>
            <th>Mes</th>
            <th>Temperatura Min</th>
            <th>Temperatura Max</th>
            <th>Temperatura Media</th>
        </tr>
    <?php
        function obtenerDatos()
        {
            return json_decode((file_get_contents("./temperaturas.json")), true);
        }

        function mediaMes(array $datos):float
        {
            $sumaTotal = array_sum($datos);
            return round($sumaTotal/count($datos), 2);
        }

        function insertarDatosEnTabla(array $temperaturas)
        {
            $maxAnio = $minAnio = $temperaturas[0]['datos'][0];
            $sumaMediaAnio = 0;
            foreach ($temperaturas as $mes) {
                $min = min($mes['datos']);
                $max = max($mes['datos']);
                $media = mediaMes($mes['datos']);
                $sumaMediaAnio += $media;
                if ($min < $minAnio) {
                    $minAnio = $min;
                }
                if ($max > $maxAnio) {
                    $maxAnio = $max;
                }
                echo "<tr>
                    <td style='font-weight: bold'>",$mes['mes'],"</td>
                    <td>",$min,"</td>
                    <td>",$max,"</td>
                    <td>",$media,"</td>
                </tr>\n";
            }
            echo "<tr>
                <td style='font-weight: bold'>Año Completo</td>
                <td>$minAnio</td>
                <td>$maxAnio</td>
                <td>",round($sumaMediaAnio/12, 2),"</td>
            </tr>";
        }
        insertarDatosEnTabla(obtenerDatos());
    ?>
    </table>
</body>
</html>