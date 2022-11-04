<?php
    require_once("Producto.php");
    $productos = [
        new Producto(1, "Pelikan Souveran M-100", 545, "Es bueno", "imagenes/pelikan.png", 0),
        new Producto(2, "Parker Duofold International", 406, "Es muy bueno", "imagenes/parker.png", 0),
        new Producto(3, "Visconti van Gogh", 180, "Es el mejor", "imagenes/visconti.png", 0)
    ];

    echo "<h2>Productos</h2>";
    foreach ($productos as $producto) {
        echo "<h3>$producto->nombre</h3>";
        echo "<img src='$producto->urlImagen'>";
        echo "<div>Precio: $producto->precio €</div>";
        echo "<div hidden id='detalles$producto->id' class='detalles'></div>";
        echo "<button class='btn-comprar' name='comprar' value=$producto->id>Comprar</button>";
        echo "<button class='btn-detalle' name='detalle' value=$producto->id>Detalles</button>";
    }