<?php
declare(strict_types=1);
require_once("./DAODiscos.php")
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Ejercicio 2 Recuperacion DSW</title>
</head>
<body>
<div class="container" id="container">
        <div class="tabla" id="tabla">
            <table>
                <tr class="naranja">
                    <th>Album</th>
                    <th>Año</th>
                    <th>Duración</th>
                    <th>Canción</th>
                </tr>
                <?php
                    $numAlbums = DAODiscos::numDiscos();
                    $listaAlbums = DAODiscos::obtenerAlbums();
                    sort($listaAlbums);
                    foreach ($listaAlbums as $album) {
                        echo "<tr>";
                        $idAlbum = intval($album['id']);
                        $tituloAlbum = $album['titulo'];
                        $anioAlbum = $album['año'];
                        $listaCanciones = DAODiscos::buscarCanciones($idAlbum);
                        echo "<td>$tituloAlbum</td>";
                        echo"</tr>";
                    }
                    ?>
            </table>
        </div>
    </div>
</body>
</html>