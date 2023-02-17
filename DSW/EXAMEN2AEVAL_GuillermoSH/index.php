<?php
    declare(strict_types = 1);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./view/css/styles.css">
    <title>Menu</title>
</head>
<body class="container container-detalles">
    <div class="header header-bb-orange centered">
        <h1>Menu</h1>
    </div>
    <div class="main centered" style="gap: 20px">
        <button class="btn btn-solid btn-solid-orange" name="tareas" onclick="document.location='controller/listaTareas.php'">Ver Tareas</button>
        <button class="btn btn-solid btn-solid-orange" name="empleados" onclick="document.location='controller/listaEmpleados.php'">Ver Empleados</button>
    </div>
    <div class="footer centered">
        <p><strong>Creado por:</strong> GuillermoSH</p>
    </div>
</body>
</html>
