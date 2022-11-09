<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Estilográfica</title>
    <style>
        .oculto {
            display: none;
        }

        * {
            margin: 0;
        }

        .container {
            height: 100vh;
            width: 100vw;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 0.2fr 1.8fr;
            gap: 0px 0px;
            grid-template-areas:
                "header header"
                "main main";
            justify-items: center;
        }

        .header {
            width: 100vw;
            grid-area: header;
            display: grid;
            align-content: center;
            justify-content: center;
            background: linear-gradient(180deg, blue 0%, skyblue 80%, white 100%);
        }

        .header h1 {
            font-size: 7vh;
            font-family: Snell Roundhand, cursive;
            height: fit-content;
        }

        .main {
            width: 100vw;
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            grid-template-rows: 1fr;
            gap: 0px 0px;
            grid-template-areas:
                "catalogo carrito";
            grid-area: main;
        }

        .container-catalogo {
            grid-area: catalogo;
            margin: 1rem;
        }

        .catalogo {
            margin-top: 15px;
        }

        .detalles {
            margin: 15px 0 15px 0;
            text-align: justify;
        }

        .carrito-container {
            grid-area: carrito;
            margin: 1rem;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 20px;
        }

        h2 {
            border-bottom: 4px solid rgb(53, 53, 53);
            height: 33px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>La Estilográfica</h1>
        </div>
        <div class="main">
            <div class="container-catalogo" id="catalogo">
                <h2>Productos</h2>
                <div class="catalogo">
                    <?php require_once("Catalogo.php"); ?>
                </div>
            </div>
            <div class="carrito-container" id="carrito">
                <h2>Carrito</h2>
                <div class="carrito">
                    <?php require_once("VistaCarrito.php"); ?>
                </div>
            </div>
        </div>
    </div>

    <script src="detalle.js"></script>
</body>

</html>