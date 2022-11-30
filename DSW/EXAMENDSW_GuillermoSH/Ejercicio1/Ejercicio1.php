<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href=" ">
    <title>Ejercicio 1</title>
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
        function obtenerDatosLinea(string $linea):array
        {
            $jsonLinea = json_decode($linea, true);
            $mes = $jsonLinea['mes'];
            $datos = $jsonLinea['datos'];
            return [$mes,$datos];
        }

        function obtenerMin(array $datos):int
        {
            $tempAnterior = $datos[0];
            $tempMin = 0;
            for ($i = 1; $i < count($datos); $i++) {
                if ($datos[$i] < $tempAnterior) {
                    $tempMin = $datos[$i];
                }
                $tempAnterior = $datos[$i];
            }

            return $tempMin;
        }

        function obtenerMax(array $datos):int
        {
            $tempAnterior = $datos[0];
            $tempMax = 0;
            for ($i = 1; $i < count($datos); $i++) {
                if ($datos[$i] > $tempAnterior) {
                    $tempMax = $datos[$i];
                }
                $tempAnterior = $datos[$i];
            }

            return $tempMax;
        }

        function calcularMedia(array $datos):float
        {
            $suma = 0;
            foreach ($datos as $temp) {
                $suma += $temp;
            }
            return ($suma / count($datos));
        }

        function mostrarTabla(string $mes, int $min, int $max, float $media)
        {
            echo "<tr>
                <td>$mes</td>
                <td>$min</td>
                <td>$max</td>
                <td>$media</td>
            </tr>";
        }

        $BBDD = "./temperaturas.json";
        $fdBBDD = fopen($BBDD, "r"); // json_decode(file_get_contents($BBDD),true);
        $header = fgets($fdBBDD);
        while ($linea = fgets($fdBBDD)) {
            $info = obtenerDatosLinea($linea);
            $mes = $info[0];
            $datos = $info[1];
            $min = obtenerMin($datos);
            $max = obtenerMax($datos);
            $media = calcularMedia($datos);
            mostrarTabla($mes, $min, $max, $media);
        }
    ?>
    </table>
</body>
</html>