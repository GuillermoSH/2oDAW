<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<?php
        function menorAdiez($fecha) {
            if ($fecha < 10) {
                return "0".$fecha;
            } else {
                return $fecha;
            }
        }
        $contador++;
        $anteriorVisita = $_COOKIE['timeStampUltimaVisita'];
        $dia = menorAdiez(getdate()['mday']);
        $mes = menorAdiez(getdate()['mon']);
        $anio = getdate()['year'];
        $hours = menorAdiez(getdate()['hours']);
        $min = menorAdiez(getdate()['minutes']);
        $seg = menorAdiez(getdate()['secounds']);

        $ultimaVisita = "$dia/$mes/$anio $horas:$min:$seg";

        setcookie("timeStampUltimaVisita", $ultimaVisita, time() + 365 * 24 * 60 * 60);
        setcookie("numVisitas", $contador, time() + 365 * 24 * 60 * 60);
    ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo $_COOKIE['timeStapUltimaVisita']."\n";
        echo $_COOKIE['numVisitas'];
    ?>
</body>
</html>
