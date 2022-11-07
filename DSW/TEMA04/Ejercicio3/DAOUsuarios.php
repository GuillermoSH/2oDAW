<?php

declare(strict_types=1);
session_start();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Datos</title>
</head>

<body>
    <h1>Modificar Datos</h1>
    <p>Seleccione que datos desea modificar:</p>
    <form action="" method="post" enctype="multipart/form-data">
        <label>Nombre</label><br>
        <input type="text" name="nombre" id="nombre"> <br>
        <label>Apellidos:</label><br>
        <label for="apellido1">Primero</label>
        <input type="text" name="apellido1" id="apellido1">
        <label for="apellido2">Segundo</label>
        <input type="text" name="apellido2" id="apellido2"> <br>
        <label for="user">Usuario</label><br>
        <input type="text" name="user" id="user"> <br>
        <label for="mail">Email</label> <br>
        <input type="text" name="mail" id="mail"> <br><br>
        <button name="btnMod">Modificar</button>
    </form>
    <?php
    require_once("../../../librerias/config.php");
    require_once("../../../librerias/funciones.php");

    if (isset($_POST['btnMod'])) {
        [$nombre, $apellido1, $apellido2, $usuario, $email] = [$_POST['nombre'], $_POST['apellido1'],
        $_POST['apellido2'], $_POST['user'], $_POST['mail']];
        $datosUsuario = buscarDatosUsuario($usuario);
        for ($i = 0; $i < count($modificaciones); $i++) {
            if ($modificaciones[$i] != "") {
                unset($linea);
            }
        }
    }
    ?>
</body>

</html>