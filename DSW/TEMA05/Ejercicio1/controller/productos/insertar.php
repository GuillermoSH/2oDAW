<?php
    require_once("../../model/DAOProducto.php");
    if ($_POST) {
        $id=$_POST['id'];
        $descripcion=$_POST['descripcion'];
        $nombre=$_POST['nombre'];
        $precio=$_POST['precio'];
        $imagen=$_POST['imagen'];
        $p=new Producto($id, $descripcion, $nombre, $precio, $imagen);
        if (DAOProducto::insertarProducto($p)) {
            echo "<script>alert('El producto se ha insertado correctamente.')</script>";
        } else {
            echo "<script>alert('Error insertando producto.')</script>";
        }
        echo "<script>document.location='../controladorProductos.php'</script>";
    }