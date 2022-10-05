<?php declare(strict_types=1)?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once("../librerias/funcAuxImgs.php");
        date_default_timezone_set('Atlantic/Canary');
        $fechaHora = date("m/d/Y-h:i:s");
        for ($i = 0; $i < strlen($fechaHora); $i++) {
            if (is_numeric($fechaHora[$i])) {
                mostrarNumImagen($fechaHora[$i],"./Ejercicio03/imgsNumeros",strval(intval(100/$fechaHora)));
            } else {
                echo $fechaHora[$i];
            }
        }
    ?>
</body>
</html>