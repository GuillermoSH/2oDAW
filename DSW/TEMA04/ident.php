<?php declare(strict_types=1);?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if (isset($_POST['usuario']) && isset($_POST['pass'])) {
            $usuario = $_POST['usuario'];
            $pass = $_POST['pass'];
            if ($usuario == 'Juan' && $pass = '1234') {
                echo "Bienvenido Juan!!!";
            } else {
                echo "Error en usuario y/o contraseña";
            }
        }
    ?>
</body>
</html>