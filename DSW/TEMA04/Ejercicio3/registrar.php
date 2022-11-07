<?php
declare(strict_types=1);
session_start();

if (isset($_SESSION['user']) && $_SESSION['user'] == 'admin') {
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrarse</title>
</head>

<body>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="nombre">Nombre: </label><br>
        <input required="required" type="text" id="nombre" name="nombre" /><br>
        <label for="ap1">Apellidos 1: </label><br>
        <input required="required" type="text" id="ap1" name="ap1" /> <br>
        <label for="ap2">Apellidos 2: </label><br>
        <input type="text" id="ap2" name="ap2" /> <br>
        <label for="user">Usuario: </label><br>
        <input required="required" type="text" id="user" name="user" /> <br>
        <label for="email">Email: </label><br>
        <input required="required" type="text" id="email" name="email" /> <br>
        <label for="pass">Contraseña: </label><br>
        <input required="required" type="password" id="pass" name="pass" /> <br>
        <label for="passConfirm">Confirmar contraseña: </label><br>
        <input required="required" type="password" id="passConfirm" name="passConfirm" /> <br>
        <button type="submit" value="Enviar" name="enviar">Registrarse</button><br><br>
        <a href="inicio.php">Ir al Inicio</a>
    </form>
    <?php
    function comprobarUsuario(string $usuariojson, array $registro)
    {
        $usuariof = json_decode($usuariojson, true);
        return ($usuariof['user'] == $registro['user']);
    }

    if (isset($_POST["enviar"])) {
        $passConfirm = $_POST['passConfirm'];
        $passTxt = $_POST['pass'];

        if ($passTxt != $passConfirm) {
            echo "Las contraseñas no coinciden.";
            exit;
        } else {
            $passHash = password_hash($_POST['pass'], PASSWORD_DEFAULT);
            $usuario = [
                "nombre" => $_POST['nombre'], "ap1" => $_POST['ap1'], "ap2" => $_POST['ap2'],
                "user" => $_POST['user'], "pass" => $passHash, "email" => $_POST['email']
            ];
        }

        $bbdd = "/var/www/phpdata/BDusuario.txt";
        $fdbaseDatos = fopen($bbdd, "c+");
        $header = fgets($fdbaseDatos);
        $usuarioJson = json_encode($usuario, JSON_UNESCAPED_UNICODE);

        if ($header == null) {
            fwrite($fdbaseDatos, $usuarioJson . "\n");
            echo "<script> alert('Se ha registrado con éxito.') </script>";
        } else {
            while ($linea = fgets($fdbaseDatos)) {
                if (comprobarUsuario($linea, $usuario)) {
                    echo "<script> alert('Este usuario ya está registrado.') </script>";
                    exit;
                }
            }
            fwrite($fdbaseDatos, $usuarioJson . "\n");
            echo "<script> alert('Se ha registrado con éxito.') </script>";
            fclose($fdbaseDatos);
            header('Location: index.php');
        }
    }
    ?>
</body>
</html>
<?php
}
?>
