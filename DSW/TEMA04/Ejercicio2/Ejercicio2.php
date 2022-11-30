<?php 
    $contador = 0;
    $dia = getdate()['mday'];
    $mes = getdate()['mon'];
    $anio = getdate()['year'];
    $hora = getdate()['hours'];
    $min = getdate()['minutes'];
    $seg = getdate()['seconds'];
    if (intval($min) < 10) {
        $min = "0".$min;
    }
    $fecha = $dia."/".$mes."/".$anio." ".$hora.":".$min.":".$seg;
    if (isset($_COOKIE['ultimaVisita'])) {
        $ultimaVisita= $_COOKIE['ultimaVisita'];
        $numUltVisita=$_COOKIE['contador'];
        $numUltVisitaTranscurridas= $contador-$numUltVisita;

    }
    setcookie("ultimaVisita",$fecha);
    setcookie("contador",intval($contador)+1);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ejercicio 2</h1>
    <?php
    if (isset($num)) {
        # code...
    }
        echo $_COOKIE['ultimaVisita']."<br>";
        echo $_COOKIE['contador'];


    ?>
</body>
</html>
