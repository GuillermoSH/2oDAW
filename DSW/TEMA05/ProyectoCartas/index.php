<?php
declare(strict_types=1);
session_start();
require_once("./Juego.php");
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
            display: flex;
            gap: 40px;
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
            background-color:  #ffffff;
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
                    $_SESSION['numParejas'] = 0;
                    $numMovimientos = $_SESSION['numMovimientos'];
                    echo "<div class='movimientos'>
                    <div><strong>Movimientos:</strong> ".$_SESSION['numMovimientos']."</div>
                    <div><strong>Parejas acertadas:</strong> ".$_SESSION['numParejas']."</div>
                    </div>";
                }
                ?>
            </div>
        </div>
        <div class="container-interface">
            <?php

            if (isset($_POST['btnNumParejas'])) {
                $numParejas = intval($_POST['numParejas']);
                if ($numParejas > 1 && $numParejas < 48) {
                    Juego::imprimirMesa($numParejas);
                } else {
                    echo "<script>alert('No se pueden generar menos de 2 parejas y más de 48 parejas.')</script>";
                }
            }
            ?>
        </div>
    </div>
</body>

</html>