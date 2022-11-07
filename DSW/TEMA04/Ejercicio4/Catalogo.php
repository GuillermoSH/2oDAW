<?php
    require_once("Producto.php");
    $productos = [
        new Producto(1, "Pelikan Souveran M-100", 545, "Adornos bañados en oro y clip en forma de pico de pelícano", "imagenes/pelikan.png", 0),
        new Producto(2, "Parker Duofold International", 406, "La pluma estilográfica Parker Duofold Classic Black International CT es ideal como regalo para todos en todo tipo de ocasiones, como cumpleaños o como regalo de Navidad.", "imagenes/parker.png", 0),
        new Producto(3, "Visconti van Gogh", 180, "El roller en sí utiliza el diseño de dieciocho facetas de Visconti, cuyos numerosos bordes realzan los vivos colores de la pluma. Viene con las cajas originales y la correspondiente garantía.", "imagenes/visconti.png", 0)
    ];

    echo "<h2>Productos</h2>";
    echo "<br/>";
    foreach ($productos as $producto) {
        echo "<h3>$producto->nombre</h3>";
        echo "<img src='$producto->urlImagen'>";
        echo "<div><strong>Precio:</strong> $producto->precio €</div>";
        echo "<div style='display: none' id='detalles$producto->id' class='detalles'> · $producto->descripcion</div>";
        echo "<button class='btn-comprar' name='comprar' value=$producto->id>Comprar</button>";
        echo "<button class='btn-detalle' name='detalle' onclick='detalles($producto->id)'>Detalles</button>";
        echo "<br/>"; echo "<br/>";
    }