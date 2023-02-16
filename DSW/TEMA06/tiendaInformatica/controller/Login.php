<?php
    require_once("../model/DAOProductos.php");
    require_once("../../miSmarty.php");
    session_start();

    // Instanciamos un objeto, esto crea ya las carpetas y demas
    $smarty = new miSmarty("tiendaInformatica");

    if (isset($_POST['user'])) {
        if (DAOProducto::comprobarUsuario($_POST['user'], $_POST['password'])) {
            $_SESSION['user'] = $_POST['user'];
            header('Location: ../controller/Productos.php');
        } else {
            echo "<script>alert('Usuario y/o contraseña incorrectos.');</script>";
        }
    }
    //$usuarios = DAOProducto::getPaginaProducto();
    $smarty->display("../view/login.tpl");
