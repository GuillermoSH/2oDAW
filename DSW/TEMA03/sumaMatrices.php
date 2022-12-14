<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table, td {
            border: 1px solid black;
            margin: 0 auto;
        }
        td {
            padding: 5px;
            margin: 5px;
            text-align: right;
        }
    </style>
</head>
<body>
    <?php
    function mostrarMatrizBid($a,$caption) {
        echo "<table>\n";
        echo "<caption>$caption</caption>\n";
        foreach($a as $fila) {
            echo "<tr>";
            foreach($fila as $celda) {
                echo "<td>$celda</td>";
            }
            echo "</tr>\n";
        }
        echo "</table>";
    }
    $a=$_POST['a'];
    $b=$_POST['b'];

    for ($i = 0 ; $i < sizeof($a); $i++) {
        for ($j = 0; $j < sizeof($a[$i]); $j++) {
            $c[$i][$j] = (int)$a[$i][$j] + (int)$b[$i][$j];
        }
    }
    ?>
    <table>
        <tr>
            <td>
                <?php
                mostrarMatrizBid($a,"A");
                ?>
            </td>
            <td>
                <?php
                mostrarMatrizBid($b,"B");
                ?>
            </td>
            <td>
                <?php
                mostrarMatrizBid($c,"C");
                ?>
            </td>
        </tr>
    </table>
</body>
</html>