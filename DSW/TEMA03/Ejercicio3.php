<?php

declare(strict_types=1) ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>

<body>
    <?php
    require_once("../librerias/funcAuxImgs.php");
    $numeroAleatorio = strval(random_int(10000, 99999));
    mostrarNumeros($numeroAleatorio,"imagenes");
    ?>
</body>

</html>