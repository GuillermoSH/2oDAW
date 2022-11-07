<?php
    function mostrarNumeros(string $numero, string $rutaRelativa, string $porcentaje="100")
    {
        for ($i = 0; $i < strlen($numero); $i++) {
            echo "<img src='$rutaRelativa/", $numero[$i], ".png' alt='Imagen del numero ",
            $numero[$i], "' style='width: ${porcentaje}%' />\n";
        }
    }