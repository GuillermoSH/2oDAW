<?php

declare(strict_types=1);
require_once("./Carta.php");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Juego Cartas DSW</title>
    <style>
        body {
            margin: 0;
        }

        .container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 20vh 1fr;

            height: 100vh;
        }

        .container-menu {
            grid-template-rows: 1/2;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .container-menu h1 {
            margin-top: 0px;
            margin-bottom: 10px;
        }

        .movimientos {
            margin-top: 10px;
        }

        .container-interface {
            grid-row: 2/3;

            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 2px;
        }

        .container-interface div button {
            margin-inline: auto;
            margin-block: auto;
            border-radius: 1rem;
        }

        .container-interface div button img {
            border-radius: 1rem;
        }
    </style>
</head>

<body>
    <div class="container" id="container">
        <div class="container-menu">
            <h1>Memory Game</h1>
            <form method="post" action=# enctype="multipart/form-data">
                <label for="numParejas">Introduzca el número de parejas:</label>
                <input type="text" name="numParejas" id="numParejas" />
                <button name="btnNumParejas" id="btnNumParejas">JUGAR</button>
            </form>
            <div>
                <?php
                if (isset($_POST['btnNumParejas'])) {
                    $_SESSION['numMovimientos'] = 0;
                    $numMovimientos = $_SESSION['numMovimientos'];
                    echo "<div class='movimientos'><strong>Movimientos:</strong> $numMovimientos</div>";
                }
                ?>
            </div>
        </div>
        <div class="container-interface">
            <?php
            function generarMesa(int $numParejas): array
            {
                $cartas = [];
                while (count($cartas) < $numParejas) {
                    $newCarta = new Carta();
                    $newCarta = $newCarta::generarCarta();
                    if (!in_array($newCarta, $cartas)) {
                        array_push($cartas, $newCarta);
                    }
                }
                $cartas = array_merge($cartas, $cartas);
                return $cartas;
            }

            if (isset($_POST['btnNumParejas'])) {
                $numParejas = intval($_POST['numParejas']);
                if ($numParejas > 1 && $numParejas < 48) {
                    $cartas = generarMesa($numParejas);
                    shuffle($cartas);
                    $i = 0;
                    foreach ($cartas as $carta) {
                        //echo "<div><img src='./barajaEspa/" . $carta[0] . "/" . implode($carta) . ".png'/></div>";
                        echo "<div><button name='carta' value='$i'><img src='./barajaEspa/bocaabajo.png'/></button></div>";
                        $i++;
                    }

                    if ($_POST['carta']) {
                        $dom = new DOMDocument;
                        $div = $dom->getElementById($_POST['carta']->value);
                        $div->setAttribute("src", "a");
                    }
                } else {
                    echo "<script>alert('No se pueden generar menos de 2 parejas y más de 48 parejas.')</script>";
                }
            }
            ?>
        </div>
    </div>
</body>

</html>