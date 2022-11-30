<?php declare(strict_types=1)?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function sorteo($cantidadNumeros) {
            $sorteo=[];
    
            do {
                $numeroAleatorio = random_int(1,49);
    
                if ((in_array($numeroAleatorio, $sorteo))) {
                    array_push($sorteo,$numeroAleatorio);
                }
            } while (count($sorteo) < $cantidadNumeros);
    
            sort($sorteo);
            return $sorteo;
        }

        function formatearSorteo() {
            $sorteo = sorteo(6);

            echo "<table>\n";
            echo "<tr>\n";
            echo "<td>Numeros ganadores del sorteo:</td>\n";
            echo "</tr>\n";

            for($i =0;$i<count($sorteo);$i++) {
                echo "<tr>\n";
                echo "<td>$sorteo[$i]</td>\n";
                echo "</tr>\n";
            }
            echo "</table>\n";
        }
    ?>
</body>
</html>