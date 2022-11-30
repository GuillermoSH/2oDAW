<?php

declare(strict_types=1);
## Ejercicio 9 - Programa que pida un número indeterminado de números (hasta que el usuario inserte -1), muestre dichos números y la suma total.

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 09</title>
</head>

<body>
    <h1>Ejercicio 09</h1>
    <?php
    function mostrarForm($listaNumeros)
    {
    ?>
        <form action="" method="post" enctype="multipart/form-data">
            <label for="n">Número: </label>
            <input type="number" name="n" id="n" />
            <input type="hidden" name="listaNumeros" value="<?= $listaNumeros; ?>" />
            <button type="submit">Sumar</button>
        </form>
    <?php
    }

    if (isset($_POST['n'])) {
        $n = $_POST['n'];
        $listaNumeros = $_POST['listaNumeros'];
        if ($n == "-1") {
            $numeros = explode("| ", $listaNumeros);
            $suma = 0;
            for ($i = 1; $i < count($numeros); $i++) {
                $suma += intval($numeros[$i]);
            }
            echo "Los numeros son: $listaNumeros \n";
            echo "La suma de los números es: $suma";
        } else {
            $listaNumeros .= "| " . $n;
            mostrarForm($listaNumeros);
        }
    } else {
        mostrarForm($listaNumeros);
    }
    ?>
</body>

</html>