<?php
require_once("../model/DAOProducto.php");

if ($_POST) {
    $codigo = $_POST['newCodigo'];
    $descripcion = $_POST['newDescripcion'];
    $pcompra = floatval($_POST['newPcompra']);
    $pventa = floatval($_POST['newPventa']);
    $stock = intval($_POST['newStock']);
    $producto = new Producto($codigo, $descripcion, $pcompra, $pventa, $stock);
    DAOProducto::insertarProducto($producto);
    header("Location: ../view/index.php");
}
