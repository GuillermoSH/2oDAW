<?php
declare(strict_types=1);
## Ejercicio 10 - Programa que imprima las direcciones IP públicas del Instituto
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 10</title>
    <style>
        table,
        td {
            border: 1px solid black;
        }

        td {
            display: grid;
            padding: 5px;
            margin: 5px;
            text-align: center;
            display: inline-block;
            font-size: 75px;
            align-content: center;
        }

        img {
            
            width: 50px;
            height: 50px;

        }
    </style>
</head>

<body>
    <h1>Ejercicio 10</h1>
    <?php
    echo json_decode(file_get_contents('https://api.ipify.org?format=json'))->ip;
    ?>
</body>
</html>