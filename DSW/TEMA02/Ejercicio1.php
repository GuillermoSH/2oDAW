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
        $filas = $_GET['filas'];
        $columnas = $_GET['columnas'];

        $array1[$filas][$columnas];
        $array2[$filas][$columnas];

        function inicializarArray($array) {
            for ($i = 0; $i < $array.sizeof; $i++) {
                for ($j = 0; $j < $array[0].sizeof; $j++) {
                    $array[$i][$j] = $_GET['respuesta'];
                }
            }
        }

        function ponerMatriz($nombreArray) {
            for($f = 0; $f < $filas; $f++) {
                echo "<tr>\n";
                for($c = 0; $c < $columnas; $c++) {
                    echo "<td>";
                    echo "<input type='number' name='$nombreArray","[$f][]' size='5'/>";
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
                            ponerMatriz("a");
                        ?>
                    </table>
                </td>
                <td>
                    <table>
                        <th>B</th>
                        <?php
                            ponerMatriz("b");
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