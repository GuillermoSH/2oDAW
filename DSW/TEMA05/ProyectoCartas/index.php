<?php
declare(strict_types=1);
session_start();
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
            display: flex;
            align-items: center;
            justify-content: center;

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

        .container-menu h1 {
            margin-block: 5px;
        }
    </style>
</head>

<body>
    <div class="container" id="container">
        <div class="container-menu">
            <h1>Memory Game</h1>
            <form method="post" action="" enctype="multipart/form-data">
                <label for="numParejas">Introduzca el número de parejas:</label>
                <input type="number" name="numParejas" id="numParejas" />
                <button type="submit" name="btnNumParejas">JUGAR</button>
            </form>
            <?php
            if (isset($_POST['btnNumParejas']) || isset($_POST['numParejas'])) {
                $numParejas = $_POST['numParejas'];
                if ($numParejas >= 2 && $numParejas <= 48 && $numParejas != null) {
                    $_SESSION['numParejas'] = intval($_POST['numParejas']);
                    $_SESSION['numAciertos'] = 0;
                    $_SESSION['numMovimientos'] = 0;
                    $_SESSION['mesa'] = null;
                    $_SESSION['mesaAciertos'] = [];
                    header("Location: ./Juego.php");
                } else {
                    echo "<script>alert('No se pueden generar menos de 2 parejas y más de 48 parejas.')</script>";
                }
            }
            ?>
        </div>
    </div>
</body>

</html>