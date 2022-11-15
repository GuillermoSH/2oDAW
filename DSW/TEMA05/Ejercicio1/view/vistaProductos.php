<?php
require_once("../controller/controladorProductos.php");


echo "<form action='' method='post' enctype='multipart/form-data'>";
echo "\t<label for='id'>ID: </label>";
echo "\t<input type='text' name='id' id='id' value='<?=$producto->id?>'/>";
echo "\t<label for='nombre'>Nombre: </label>";
echo "\t<input type='text' name='nombre' id='nombre' value='<?=$producto->nombre?>'/>";
echo "\t<label for='descripcion'>Descripción: </label>";
echo "\t<input type='text' name='descripcion' id='descripcion' value='<?=$producto->descripcion?>'/>";
echo "\t<label for='precio'>Precio: </label>";
echo "\t<input type='text' name='precio' id='precio' value='<?=$producto->precio?>'/>";
echo "\t<label for='imagen'>Imagen: </label>";
echo "\t<input type='text' name='imagen' id='imagen' value='<?=$producto->imagen?>'/>";
echo "\t<button type='submit' name='buscar'>Buscar</button>";
echo "\t<button type='submit' name='modificar'>Modificar</button>";
echo "\t<button type='submit' name='aniadir'>Añadir</button>";
echo "\t<button type='submit' name='borrar'>Borrar</button>";
