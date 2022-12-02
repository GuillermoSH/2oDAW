<?php

declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href=" ">
    <title>Ejercicio 2</title>
</head>

<body>
    <?php
    /**
     * Toma una matriz de matrices, cada una de las cuales tiene una clave de "contenido", y genera
     * un botón para cada una de ellas.
     * 
     * @param array botones Una matriz de matrices. Cada matriz representa un botón.
     */
    function crearBotones(array $botones)
    {
        echo "<tr>\n";
        for ($i = 0; $i < count($botones); $i++) {
            echo "<td><button ";
            foreach ($botones[$i] as $atributo => $valor) {
                if ($atributo != "content") {
                    echo "$atributo='$valor'";
                }
            }
            echo ">", $botones[$i]['content'], "</button></td>\n";
        }
        echo "</tr>\n";
    }

    /**
     * Crea una fila de tabla para cada elemento de la matriz y luego llama a una función para crear el
     * elemento de entrada
     * 
     * @param array campos una matriz de matrices, cada una de las cuales contiene lo siguiente:
     */
    function crearCampos(array $campos)
    {
        foreach ($campos as $campo) {
            echo "<tr><td><label>",$campo['label'],"</label></td><td>\n";
            if ($campo['elemento'] == 'select') {
                crearSelect($campo);
            } else {
                crearInput($campo);
            }
            echo "</td></tr>\n";
        }
    }

    /**
     * Toma una matriz de atributos y crea un elemento HTML con esos atributos
     * 
     * @param array campo La matriz de parámetros para el campo de entrada.
     */
    function crearInput(array $campo)
    {
        echo "<",$campo['elemento']," ";
        foreach ($campo as $atributo => $valor) {
            if ($atributo != "label" && $atributo != "elemento") {
                echo " $atributo='$valor' ";
            }
        }
        if ($campo['elemento'] == 'textarea') {
            echo "></textarea>\n";
        } else {
            echo "/>\n";
        }
    }

    /**
     * Crea un cuadro de selección con los atributos name e id establecidos en los valores de las
     * claves name e id en la matriz , y las opciones configuradas en los valores en la clave
     * opciones de la matriz 
     * 
     * @param array campo una matriz con las siguientes claves:
     */
    function crearSelect(array $campo)
    {
        echo "<select name'",$campo['name'],"' id='",$campo['id'],"'>\n";
        foreach ($campo['opciones'] as $opt) {
            echo "<option>$opt</option>";
        }
        echo "</select>\n";
    }

    $datosForm = json_decode(file_get_contents("./form.json"), true);
    /* ------- SOLUCION CON FOPEN -------
    $handle = fopen("./form.json","r");
    $contenidoJson = "";
    while (($linea = fgets($handle)) != null) {
        $contenidoJson += $linea;
    }
    fclose($handle);
    $datosForm = json_decode($contenidoJson, true);
    */
    echo "<form action='", $form['action'], "' method='", $form['method'], "' id='", $form['id'], "' enctype='", $form['enctype'], "'>\n";
    echo "<table>";
    crearCampos($datosForm['campos']);
    crearBotones($datosForm['botones']);
    echo "</table></form>";
    ?>
</body>

</html>