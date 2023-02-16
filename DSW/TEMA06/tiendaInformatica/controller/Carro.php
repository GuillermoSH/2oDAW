<?php
    require_once("../model/DAOProducto.php");
    require_once("../../../miSmarty.php");
    session_start();
    // Instanciamos un objeto, esto crea ya las carpetas y demas
    $smarty = new miSmarty("tiendaInformatica");
    $smarty->display("../view/carro.tpl");
