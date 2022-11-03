<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="user">Usuario: </label><br>
        <input type="text" id="user" name="user" /> <br>
        <label for="pass">Contraseña: </label><br>
        <input type="password" id="pass" name="pass" /> <br>
        <button type="submit" value="Entrar" name="entrar">Login</button><br>
    </form>
    <?php
    function verificarCuenta(string $usuariojson, string $username, string $password)
    {
        $usuariof = json_decode($usuariojson, true);
        if ($username == $usuariof['user']) {
            return password_verify($password, $usuariof['pass']);
        }
    }
    if (isset($_POST["entrar"])) {
        $BDatos = "/var/www/phpdata/BDusuario.txt";
        $fdbaseDatos = fopen($BDatos, "r");
        $header = fgets($fdbaseDatos);
        $usuario = $_POST['user'];
        $passw = $_POST['pass'];
        while ($linea = fgets($fdbaseDatos)) {
            if (verificarCuenta($linea, $usuario, $passw)) {
                echo "<script> alert('Bienvenido ", $usuario, "') </script>";
                exit;
            }
        }
        echo "<script> alert('Error. Usuario/contraseña erróneos') </script>";
        fclose($fdbaseDatos);
    }
    ?>
</body>
</html>
