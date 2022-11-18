<?php
    require_once("../../model/DAOProducto.php");
    $producto = Producto::getProducto($_POST);
    if (DAOProducto::modificarProducto($producto)) {
        echo '{ "resultado" : true }';
    } else {
        echo '{ "resultado" : false }';
    }