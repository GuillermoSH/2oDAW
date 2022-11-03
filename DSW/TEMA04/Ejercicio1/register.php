<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
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
        <a href="login.php">Ir al Login</a>
    </form>
    <?php
    function verifyExistingUser(string $usuariojson, array $registro)
    {
        $usuariof = (array)json_decode($usuariojson);

        return $usuariof['user'] == $registro['user'];
    }

    if (isset($_POST["enviar"])) {
        $nombre = $_POST['nombre'];
        $ap1 = $_POST['ap1'];
        $ap2 = $_POST['ap2'];
        $user = $_POST['user'];
        $pass = $_POST['pass'];
        $passConfirm = $_POST['passConfirm'];
        $email = $_POST['email'];

        if ($pass != $passConfirm) {
            echo "<script> alert('Error01:\\n\\nLas contraseñas no coinciden.'); </script>";
            exit;
        } else {
            $passHash = password_hash($_POST['pass'], PASSWORD_DEFAULT);
            $usuario = [
                "nombre" => $nombre, "ap1" => $ap1, "ap2" => $ap2,
                "user" => $user, "pass" => $passHash, "email" => $email
            ];
        }

        $bbdd = "/var/www/phpdata/BDusuario.txt";
        $fdbaseDatos = fopen($bbdd, "c+");
        $header = fgets($fdbaseDatos);
        $usuarioJson = json_encode($usuario, JSON_UNESCAPED_UNICODE);

        if ($header == null) {
            fwrite($fdbaseDatos, $usuarioJson);
            echo "<script> alert('Se ha registrado con éxito'); </script>";
        } else {
            while ($linea = fgets($fdbaseDatos)) {
                if (verifyExistingUser($linea, $usuario)) {
                    echo "<script> alert('Error02:\\n\\nEste usuario ya está registrado.'); </script>";
                    exit;
                }
            }
            fwrite($fdbaseDatos, $usuarioJson);
            echo "<script> alert('Se ha registrado con éxito'); </script>";
            fclose($fdbaseDatos);
            header('Location: login.php');
        }
    }
    ?>
</body>

</html>
