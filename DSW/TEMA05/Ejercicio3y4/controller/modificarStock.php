<?php
require_once("../model/DAOProducto.php");

if ($_GET) {
    $codigo = $_GET['codigo'];
    $cantidad = intval($_GET['cantidad']);
    $flag = boolval($_GET['flag']);
    if ($flag) {
        DAOProducto::aumentarStock($codigo, $cantidad);
    } else {
        DAOProducto::reducirStock($codigo, $cantidad);
    }
    header("Location: ../view/index.php");
}
