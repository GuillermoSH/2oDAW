<?php

declare(strict_types=1);
require_once("Carrito.php");
session_start();
require_once("../../librerias/config.php");
require_once("DAOProducto.php");

if (isset($_SESSION['carrito'])) {
    $carrito = $_SESSION['carrito'];
} else {
    $carrito = new Carrito();
}

if (isset($_POST['idProd'])) {
    $producto = null;
    $idProd = $_POST['idProd'];

    foreach ($productos as $prod) {
        if ($prod->id == $idProd) {
            $producto = $prod;
            break;
        }
    }

    if ($producto != null) {
        $operacion = $_POST['operacion'];

        if ($operacion == "comprar") {
            $carrito->aniadir($producto);
        } elseif ($operacion == "eliminar") {
            $carrito->borrar($producto);
        }
    }
}

$productos = getListaProductos();

$listaProductosCarro = $carrito->getListaProductos();
$costeTotalCarro = $carrito->getCosteTotal();

require_once("vistaCompras.php");

$_SESSION['carrito'] = $carrito;
