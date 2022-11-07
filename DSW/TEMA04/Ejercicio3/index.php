<?php
declare(strict_types=1);
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>>Login</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="user">Usuario: </label><br>
        <input type="text" id="user" name="user" /> <br>
        <label for="pass">Contraseña: </label><br>
        <input type="password" id="pass" name="pass" /> <br>
        <button type="submit" value="Entrar" name="entrar">Login</button><br>
    </form>
</body>
</html>

<?php
function comprobarUsuario(string $usuariojson, string $username, string $password)
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
        if (comprobarUsuario($linea, $usuario, $passw)) {
            echo "<script> alert('Bienvenido ", $usuario, "') </script>";
            $_SESSION['user'] = $usuario;
            header('Location: inicio.php');
            exit;
        }
    }
    echo "<script> alert('Error. Usuario/Contraseña erróneos') </script>";
    fclose($fdbaseDatos);
}
?>