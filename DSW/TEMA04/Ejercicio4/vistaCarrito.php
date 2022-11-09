<?php
    foreach ($listaProductosCarro as $producto) {
        echo "<h3>$producto->nombre</h3>";
        echo "<img src='$producto->urlImagen'>";
        echo "<div><strong>Precio:</strong> ",$producto->precio,"€</div>";
        echo "<div>Cantidad: $producto->cantidad</div>";
        echo "<div>Coste Unidades: ",$producto->precio * $producto->cantidad,"€</div>";
        echo "<form action='' method='post' enctype='multipart/form-data'>";
        echo "    <input type='hidden' id='idProd_$producto->id' name='idProd' value='$producto->id'/>";
        echo "    <input type='hidden' name='operacion' value='eliminar'/>";
        echo "    <button type='submit'>Eliminar</button>";
        echo "</form>";
        echo "<br/><hr/><br/>";
    }
    echo "<div>Coste Total: ",$costeTotalCarro,"€</div>";
