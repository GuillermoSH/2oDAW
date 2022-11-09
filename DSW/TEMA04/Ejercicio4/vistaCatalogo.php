<?php
require_once("Catalogo.php");

foreach ($productos as $producto) {
    echo "<h3>$producto->nombre</h3>";
    echo "<img src='$producto->urlImagen'>";
    echo "<div><strong>Precio:</strong> ", $producto->precio, "€</div>";
    echo "<div class='oculto detalles' id='detalles$producto->id'> · $producto->descripcion</div>";
    echo "<form action='' method='post' enctype='multipart/form-data'>";
    echo "    <input type='hidden' id='idProd_$producto->id' name='idProd' value='$producto->id'/>";
    echo "    <input type='hidden' name='operacion' value='comprar'/>";
    echo "    <button type='submit'>Comprar</button>";
    echo "    <button onclick='mostrarOcultarDetalle($producto->id)' id='btn_detalle$producto->id'>Detalles</button>";
    echo "</form>";
    echo "<br/><hr/><br/>";
}