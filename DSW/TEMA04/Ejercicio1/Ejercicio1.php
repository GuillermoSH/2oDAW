<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="Ejercicio1.php" method="post" enctype="multipart/form-data">
        <table>
            <tr>
                <td><label for="nombre">Nombre: </label><input type="text" id="nombre" /> </td>
                <td><label for="ap1">Apellidos: </label><input type="text" id="ap1" /> </td>
                <td><input type="text" id="ap2" /> </td>
            </tr>
            <tr>
                <td><label for="user">Usuario: </label><input type="text" id="juanlo" /> </td>
                <td><label for="email">Email: </label><input type="text" id="email" /> </td>
            </tr>
            <tr>
                <td><label for="pass">Contraseña: </label><input type="password" id="pass" /> </td>
                <td><label for="passConfirm">Confirmar contraseña: </label><input type="password" id="passConfirm" /> </td>
                <td><button type="submit" value="Enviar" name="enviar">Enviar</button></td>
            </tr>
        </table>
    </form>
    <?php
    function verifyExistingUser(string $usuariojson, array $registro)
    {
        $usuariof = (array)json_decode($usuariojson);

        return $usuariof['user'] == $registro['user'];
    }

    if (isset($_POST["Enviar"])) {
        $nombre = $_POST['nombre'];
        $ap1 = $_POST['ap1'];
        $ap2 = $_POST['ap2'];
        $user = $_POST['user'];
        $pass = $_POST['pass'];
        $passConfirm = $_POST['passConfirm'];
        $email = $_POST['email'];

        if ($pass != $passConfirm) {
            echo "<script> alert('Error01:\n\nLas contraseñas no coinciden.'); </script>";
            exit;
        }

        $usuario = [
            "nombre" => $nombre, "ap1" => $ap1, "ap2" => $ap2,
            "user" => $user, "pass" => $pass, "email" => $email
        ];
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
                    echo "<script> alert('Error02:\n\nEste usuario ya está registrado.'); </script>";
                    exit;
                }
            }
            fwrite($fdbaseDatos, $usuarioJson);
            echo "<script> alert('Se ha registrado con éxito'); </script>";
        }
    }
    ?>
</body>

</html>
