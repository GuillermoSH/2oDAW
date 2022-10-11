<?php declare(strict_types=1);?>
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
        function lineaCsvToTr(string $linea,string $tipoCelda="td",string $separador=";"):string {
            $res="";
            $campos=explode($separador,$linea);

            $res.="<tr>\n";
            foreach($campos as $campo) {
                $res.="<$tipoCelda>".$campo."</$tipoCelda>\n";
            }
            $res.="</tr>\n";

            return $res;
        }

        if (isset($_POST['btnFicheroCsv'])) {
            $fichero=$_FILES['ficheroCsv'];
            $fdCsv=fopen($fichero['tmp_name'],"r");
            $linea="";

            echo "<table>\n";
            echo lineaCsvToTr(fgets(fdCsv),"th");

            while($linea=fgets($fdCsv)) {
                echo lineaCsvToTr($linea);
            }

            echo "</table>\n";
            
        } elseif ($_POST['btnTextoCsv']) {

        } else {

        }
    ?>
</body>
</html>