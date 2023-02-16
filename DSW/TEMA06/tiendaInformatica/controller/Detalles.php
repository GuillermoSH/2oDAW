<?php
    require_once("../model/DAOProductos.php");
    require_once("../../miSmarty.php");
    session_start();

    if (isset($_SESSION['user'])) {
        if (isset($_GET["cod"])) {
            $codProducto = $_GET["cod"];
            $detallesProducto = DAOProducto::getDetallesProducto($codProducto);
    
            // Instanciamos un objeto, esto crea ya las carpetas y demas
            $smarty = new miSmarty("tiendaInformatica");

            $smarty->assign('codProducto', $codProducto);
            $smarty->assign('detallesProducto', $detallesProducto);
            $smarty->assign('usuario', $_SESSION['user']);
    
            $smarty->display("../view/detalles.tpl");
        } else {
            header("Location: Productos.php");
        }
    } else {
        header('Location: Login.php');
    }
