<?php declare(strict_types=1); ?>
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
        $filas = (int)$_GET['filas'];
        $columnas = (int)$_GET['columnas'];

        function ponerMatriz(string $nombreArray, int $filas, int $columnas) {
            for($f = 0; $f < $filas; $f++) {
                echo "<tr>\n";
                for($c = 0; $c < $columnas; $c++) {
                    $valor=$f*$columnas+$c+1;
                    echo "<td>";
                    echo "<input type='number' name='$nombreArray","[$f][]' size='5' value='$valor'/>";
                    echo "</td>\n";
                }
                echo "</tr>\n";
            }
        }
    ?>
    <form method="post" action="sumaMatrices.php" enctype="multipart/form-data">
        <table border="1">
            <tr>
                <td>
                    <table>
                        <th>A</th>
                        <?php
                            ponerMatriz("a",$filas,$columnas);
                        ?>
                    </table>
                </td>
                <td>
                    <table>
                        <th>B</th>
                        <?php
                            ponerMatriz("b",$filas,$columnas);
                        ?>
                    </table>
                </td>
            </tr>
            <tr>
                <td><input type="submit" value="Enviar"/></td>
                <td><input type="reset" value="Borrar"/></td>
            </tr>
        </table>
    </form>
</body>
</html>