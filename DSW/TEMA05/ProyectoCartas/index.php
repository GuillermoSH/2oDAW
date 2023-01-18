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
            gap: 10px;
        }

        .continer-menu h1 {
            margin-block: 0;
        }

        .movimientos {
            display: flex;
            gap: 40px;
        }

        .container-interface {
            grid-row: 2/3;
        }

        .container-interface form {
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 2px;
        }

        .container-interface form div button {
            margin-inline: auto;
            margin-block: auto;
            border-radius: 1rem;
            background-image: linear-gradient(270deg, #ffffff 0%, #f3f3f3 100%);
        }

        .container-interface form div button:active {
            transform: scale(0.95);
        }

        .container-interface form div button img {
            border-radius: 1rem;
        }
    </style>
</head>

<body>
    <div class="container" id="container">
        <div class="container-menu">
            <h1>Memory Game</h1>
            <form method="get" action=# enctype="multipart/form-data">
                <label for="numParejas">Introduzca el número de parejas:</label>
                <input type="number" name="numParejas" id="numParejas"/>
                <button type="submit" name="btnNumParejas">JUGAR</button>
            </form>
            <form method="get" action=# enctype="multipart/form-data">
                <button type="submit" name="resetear">VOLVER A JUGAR</button>
            </form>
            <div>
                <?php
                $_SESSION['numMovimientos'] = 0;
                $_SESSION['numParejas'] = 0;
                $numMovimientos = $_SESSION['numMovimientos'];
                echo "<div class='movimientos'>
                    <div><strong>Movimientos:</strong> " . $_SESSION['numMovimientos'] . "</div>
                    <div><strong>Parejas acertadas:</strong> " . $_SESSION['numParejas'] . "</div>
                    </div>";
                ?>
            </div>
        </div>
        <div class="container-interface">
            <?php
            if (isset($_SESSION['mesa']) && $_SESSION['mesa']!=null) {
                echo "<form method='post' action=''";
                Juego::imprimirMesa($_SESSION['numParejas']);
                echo "</form>";
            } elseif (isset($_GET['numParejas']) || isset($_GET['btnNumParejas'])) {
                unset($_SESSION['mesa']);
                $numParejas = intval($_GET['numParejas']);
                $_SESSION['numParejas'] = $numParejas;
                if ($numParejas >= 2 && $numParejas < 48 && $numParejas != null) {
                    echo "<form method='post' action=''>";
                    Juego::imprimirMesa($numParejas);
                    echo "</form>";
                } else {
                    echo "<script>alert('No se pueden generar menos de 2 parejas y más de 48 parejas.')</script>";
                }
            }

            if (isset($_GET['resetear'])) {
                unset($_SESSION['mesa']);
                header("Location: .");
            }

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $eleccion1 = "";
                for ($i = 0; $i < count($_SESSION['mesa']); $i++) {
                    if (isset($_POST['carta' . $i])) {
                        $eleccion1 = $_POST['carta' . $i];
                    }
                }
                $_SESSION['eleccion1'] = $eleccion1;
                echo "<script>alert('" . $_SESSION['eleccion1'] . "')</script>";
            }
            ?>
        </div>
    </div>
</body>

</html>