<?php
declare(strict_types=1);
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
</head>
<body>
    <h1>Inicio</h1>
    <a href="profile.php">Perfil</a>
    <a href="modData.php">Modificar Datos</a>

    <?php
    if (isset($_SESSION['user']) && $_SESSION['user'] == 'admin') {
    ?>

    <a href="register.php">Dar alta usuario</a>

    <?php
    }
    ?>

</body>
</html>