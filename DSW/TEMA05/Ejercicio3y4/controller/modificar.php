<?php
require_once("../model/DAOProducto.php");

if ($_GET) {
    $codigo = $_GET['codigo'];
    $descripcion = $_GET['descripcion'];
    $pcompra = floatval($_GET['pcompra']);
    $pventa = floatval($_GET['pventa']);
    $stock = intval($_GET['stock']);
    $producto = new Producto($codigo, $descripcion, $pcompra, $pventa, $stock);
    DAOProducto::modificarProducto($producto);
    header("Location: ../view/index.php");
}
