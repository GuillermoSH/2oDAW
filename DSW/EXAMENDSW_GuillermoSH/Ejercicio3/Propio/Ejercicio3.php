<?php

declare(strict_types=1);
require_once("./DAOEquipos.php")
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>

<body>
    <table>
        <tr>
            <th>Posición</th>
            <th>Equipo</th>
            <th>Puntos</th>
        </tr>
        <?php

        function sumarPuntaje(array $resultado, Equipo $local, Equipo $visitante, array $equiposLiga)
        {
            if ($resultado[0] > $resultado[1]) {
                for ($i = 0; $i < count($equiposLiga); $i++) {
                    if ($equiposLiga[$i]->id == $local->id) {
                        $equiposLiga[$i]->puntos += 3;
                        break;
                    }
                }
            } elseif ($resultado[0] < $resultado[1]) {
                for ($i = 0; $i < count($equiposLiga); $i++) {
                    if ($equiposLiga[$i]->id == $visitante->id) {
                        $equiposLiga[$i]->puntos += 3;
                        break;
                    }
                }
            } else {
                for ($i = 0; $i < count($equiposLiga); $i++) {
                    if ($equiposLiga[$i]->id == $local->id || $equiposLiga[$i]->id == $visitante->id) {
                        $equiposLiga[$i]->puntos += 1;
                    }
                }
            }
            return $equiposLiga;
        }

        $equiposLiga = [];
        $numEquipos = DAOEquipos::numEquipos();
        for ($i = 1; $i <=  $numEquipos; $i++) {
            $equipo = DAOEquipos::buscarEquipo($i);
            array_push($equiposLiga, $equipo);
        }
        $numPartidos = DAOEquipos::numPartidos();
        for ($i = 1; $i <= $numPartidos; $i++) {
            $partido = DAOEquipos::buscarPartido($i);
            $local = DAOEquipos::buscarEquipo($partido->local);
            $visitante =  DAOEquipos::buscarEquipo($partido->visitante);
            $resultado = explode("-", $partido->resultado);
            $equiposLiga =  sumarPuntaje($resultado, $local, $visitante, $equiposLiga);
        }
        sort($equiposLiga);
        for ($i = 0; $i < count($equiposLiga); $i++) {
            echo "<tr>",
            "<td>", $i + 1, "</td>",
            "<td>", $equiposLiga[$i]->nombre, "</td>",
            "<td>", $equiposLiga[$i]->puntos, "</td>", "</tr>";
        }
        ?>
    </table>
</body>

</html>