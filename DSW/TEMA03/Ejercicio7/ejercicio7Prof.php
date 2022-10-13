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
            
        } elseif (isset($_POST['btnTextoCsv'])) {
            $contenidoCsv=$_POST['txtCsv'];
            $lineas=explode("\n",$contenidoCsv);

            echo "<table>\n";
            echo "<thead>\n";

            lineaCsvToTr($lineas[0],"th");

            echo "</thead>\n";
            echo "<tbody>\n";

            for ($i = 1; $i < count($lineas); $i++) {
                lineaCsvToTr($lineas[$i]);
            }

            echo "</tbody>\n";
            echo "</table>\n";
        } elseif (isset($_POST['btnSubirImagen'])) {
            
        }
    ?>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="ficheroCsv">Fichero csv:</label>
        <input type="file" name="ficheroCsv"/><br/>
        <button type="submit" name="btnFicheroCsv">Subir fichero</button>
    </form>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="txtCsv">Texto csv:</label>
        <textarea name="txtCsv" rows="20" cols="80"></textarea><br/>
        <button type="submit" name="btnTextoCsv">Enviar fichero</button>
    </form>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="fImagen">Fichero de imagen a subir:</label>
        <input type="file" name="fImagen" accept="image/*"/><br/>
        <button type="submit" name="btnSubirImagen">Enviar fichero</button>
    </form>
</body>
</html>