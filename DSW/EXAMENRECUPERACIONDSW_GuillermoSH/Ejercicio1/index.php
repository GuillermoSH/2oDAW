<?php

declare(strict_types=1);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Ejercicio 1 Recuperacion DSW</title>
</head>

<body>
    <div class="container" id="container">
        <div class="tabla" id="tabla">
            <table>
                <tr class="naranja">
                    <th>Alumno</th>
                    <th>Matemáticas</th>
                    <th>Lengua</th>
                    <th>Informática</th>
                    <th>Media</th>
                    <th>Promocionan</th>
                </tr>
                <?php

                function obtenerDatos()
                {
                    return json_decode((file_get_contents("./notas.json")), true);
                }

                function generarTabla($datosAlumnado)
                {
                    $numPromocionados = 0;
                    $infoAlumnos = tratarDatos($datosAlumnado);
                    $sumaTotalNotas = [0, 0, 0];
                    foreach ($infoAlumnos as $alumno) {
                        echo "<tr>";
                        for ($i = 0; $i < count($alumno); $i++) {
                            echo "<td>" . $alumno[$i] . "</td>";
                        }
                        echo "</tr>";
                        if ($alumno[count($alumno) - 1] == "SI") {
                            $numPromocionados++;
                        }
                        $sumaTotalNotas[0] += $alumno[1];
                        $sumaTotalNotas[1] += $alumno[2];
                        $sumaTotalNotas[2] += $alumno[3];
                    }
                    $numAlumnos = count($infoAlumnos);
                    $mediaTotalNotas = [$sumaTotalNotas[0] / $numAlumnos, $sumaTotalNotas[1] / $numAlumnos, $sumaTotalNotas[2] / $numAlumnos];
                    
                    echo "<tr><td>Medias Clase:</td>";
                    foreach ($mediaTotalNotas as $media) {
                        echo "<td>".round($media, 2)."</td>";
                    }
                    echo "<td></td><td></td>";
                    echo "</tr>";

                    echo "<tr>
                        <td colspan='5' class='negrita-centro naranja'>Nº de Alumnos que promocionan:</td>
                        <td style='text-align:center'>$numPromocionados</td>
                    </tr>";

                    echo "<tr>
                        <td colspan='5' class='negrita-centro naranja'>Nº de Alumnos que promocionan:</td>
                        <td style='text-align:center'>".$numAlumnos-$numPromocionados."</td>
                    </tr>";
                }

                function tratarDatos($datosAlumnado): array
                {
                    $infoAlumnado = [];
                    foreach ($datosAlumnado as $alumno) {
                        $infoAlumno = [];
                        $sumaNotas = 0;
                        $superaNotas = true;
                        $promociona = "";
                        array_push($infoAlumno, $alumno['alumno']);
                        for ($i = 0; $i < count($alumno['notas']); $i++) {
                            $nota = $alumno['notas'][$i];
                            array_push($infoAlumno, $nota);
                            $sumaNotas += intval($nota);
                            if ($nota < 4) {
                                $superaNotas = false;
                            }
                        }
                        $mediaNotas = $sumaNotas / count($alumno['notas']);
                        array_push($infoAlumno, round($mediaNotas, 2));
                        if ($superaNotas) {
                            if ($mediaNotas < 5) {
                                $promociona = "Media < 5";
                            } else {
                                $promociona = "SI";
                            }
                        } else {
                            $promociona = "Hay notas < 4";
                        }
                        array_push($infoAlumno, $promociona);
                        array_push($infoAlumnado, $infoAlumno);
                    }
                    return $infoAlumnado;
                }

                generarTabla(obtenerDatos());
                ?>
            </table>
        </div>
    </div>
</body>

</html>