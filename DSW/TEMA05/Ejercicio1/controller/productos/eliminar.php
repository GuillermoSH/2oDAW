<?php
    require_once("../../model/DAOProducto.php");
    $id = $_POST["id"];
    $resultado = (DAOProducto::borrarProducto($id) && BaseDAO::getLastAffectedRows() == 1);
    if (!$resultado) {
        http_response_code(500);
    }
    echo "{ \"resultado\" : $resultado }";
