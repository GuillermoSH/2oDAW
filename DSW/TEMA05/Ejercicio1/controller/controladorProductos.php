<?php
    require_once("../model/Producto.php");

    $producto;

    if (isset($_POST['buscar'])) {
        if (isset($_POST['id'])) {
            $producto = buscarProducto($id);
        } elseif (isset($_POST['nombre'])) {
            $producto = buscarProducto($nombre);
        }
    }