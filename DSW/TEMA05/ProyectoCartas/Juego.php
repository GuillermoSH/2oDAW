<?php

declare(strict_types=1);
session_start();
require_once("./Mesa.php");
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
            grid-template-rows: 100px 1fr;

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

        .container-menu form {
            margin-inline: auto;
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
            <?php
            echo "<div class='movimientos'>
                <div><strong>Movimientos:</strong> " . $_SESSION['numMovimientos'] . "</div>
                <div><strong>Parejas acertadas:</strong> " . $_SESSION['numAciertos'] . "</div>
                </div>";
            ?>
            <form method="get" action="" enctype="multipart/form-data">
                <button type="submit" name="btnInicio">IR AL INICIO</button>
            </form>
        </div>
        <div class="container-interface">
            <form method='post' action=''>
                <?php
                Mesa::imprimirMesa($_SESSION['numParejas']);
                ?>
            </form>

            <?php
            if (isset($_GET['btnInicio'])) {
                session_destroy();
                header("Location: ./index.php");
            }

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $eleccion = "";
                for ($i = 0; $i < count($_SESSION['mesa']); $i++) {
                    if (isset($_POST['carta' . $i])) {
                        $eleccion = $_POST['carta' . $i];
                        if ($_SESSION['eleccion1'] == $eleccion) {
                            $_SESSION['eleccion1'] = "";
                            array_push($_SESSION['mesaAciertos'], "carta".$i);
                            if ($_SESSION['numAciertos'] != $_SESSION['numParejas']) {
                                $_SESSION['numAciertos']++;
                            } else {
                                echo "<script>alert('HAS GANADO')</script>";
                            }
                        } elseif ($_SESSION['eleccion1']!="" && $eleccion != $_SESSION['eleccion1']) {
                            unset($_SESSION['mesaAciertos'][array_search($_SESSION['eleccion1'], $_SESSION['mesaAciertos'])]);
                            $_SESSION['eleccion1'] = "";
                            $_SESSION['numMovimientos']++;
                        } elseif ($_SESSION['eleccion1']=="") {
                            $_SESSION['eleccion1'] = $eleccion;
                            array_push($_SESSION['mesaAciertos'], "carta".$i);
                        }
                        header("Location: ./Juego.php");
                    }
                }
            }
            ?>
        </div>
    </div>
</body>

</html>