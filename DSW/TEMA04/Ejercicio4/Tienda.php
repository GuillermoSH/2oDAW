<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet" type="text/css">
    <title>La Estilográfica</title>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>La Estilográfica</h1>
        </div>
        <div class="main">
            <div class="catalogo" id="catalogo">
                <?php require_once("Catalogo.php") ?>
            </div>
            <div class="carrito" id="carrito">
                <h2>Carrito</h2>
                <?php require_once("Carrito.php") ?>
            </div>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>

</html>