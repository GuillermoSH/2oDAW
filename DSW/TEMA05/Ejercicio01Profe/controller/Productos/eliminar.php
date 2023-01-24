<?php
    // Lo cargo para interactuar con la BBDD
    require_once("../../Modelo/DAOProducto.php");
    $id = $_POST['id'];
    $resultado = (DAOProducto::borrarProducto($id) && BaseDAO::getLastAffectedRows() == 1);
    if (DAOProducto::borrarProducto($id)) {
        echo '{ "resultado" : true }';
    } else {
        echo '{ "resultado" : false }';
    }
?>