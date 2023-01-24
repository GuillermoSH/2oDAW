<?php
require_once("../model/DAOProducto.php");

$codigo = $_GET["codigo"];
DAOProducto::borrarProducto($codigo);
header("Location: ../view/index.php");
