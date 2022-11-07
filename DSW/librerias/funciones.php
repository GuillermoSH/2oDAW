<?php
    function verificarUsuarioJson(string $usuariojson, string $usuario):bool
    {
        $usuariof = json_decode($usuariojson, true);
        return ($usuariof['user'] == $usuario);
    }

    function buscarDatosUsuario(string $usuario)
    {
        $bbdd = "/var/www/phpdata/BDusuario.txt";
        $fdbaseDatos = fopen($bbdd, "r");
        fseek($fdbaseDatos, 0);

        while ($linea = fgets($fdbaseDatos)) {
            if (verificarUsuarioJson($linea, $usuario)) {
                $usuarioJson = json_decode($linea, true);

                return [$usuarioJson['nombre'], $usuarioJson['ap1'], $usuarioJson['ap2'],
                $usuarioJson['user'], $usuarioJson['email']];
            }
        }
        return null;
    }