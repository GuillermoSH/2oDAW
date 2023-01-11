<?php
declare(strict_types=1);
require_once("./Carta.php");
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Juego Cartas DSW</title>
</head>
<body>
    <div class="container" id="container">
        <div class="container-interface">
            <?php
                $cartas = [];
                for ($i = 0; $i < $numParejas; $i++) {
                    $newCarta = Carta::getCarta();
                    if (!in_array($newCarta, $cartas)) {
                        array_push($cartas, $newCarta);
                    }
                }
                $cartas = array_merge($cartas, $cartas);
                shuffle($cartas);
                foreach ($cartas as $carta) {
                    echo "<div>$carta</div>";
                }
            ?>
        </div>
    </div>
</body>
</html>
