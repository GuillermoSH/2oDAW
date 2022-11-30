<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href=" ">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>Posición</th>
            <th>Equipo</th>
            <th>Puntos</th>
        </tr>
    <?php
        require_once("./Partidos.php");
        $listaPosiciones = Partidos::generarTablaPuntos();

        foreach ($listaPosiciones as $posicion => $infoEquipo) {
            echo "<tr>
                <td>$posicion</td>
                <td>".$infoEquipo['equipo']."</td>
                <td>".$infoEquipo['puntos']."</td>
            </tr>";
        }
    ?>
    </table>
</body>
</html>