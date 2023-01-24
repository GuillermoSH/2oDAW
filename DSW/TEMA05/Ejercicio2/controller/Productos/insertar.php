<?php
    require_once("../../model/DAOProducto.php");

    // Comprobar que han llegado todos los valores
    if ($_POST) {
        //$id = $_POST['id'];
        $descripcion = $_POST['descripcion'];
        $nombre = $_POST['nombre'];
        $precio = $_POST['precio'];
        $imagen = $_POST['imagen'];

        // Creo el producto con los valores recibidos por post
        // 0 para que sea el sgbd el que se encargue de asignar el numero siguiente disponible
        $p = new Producto(0, $descripcion, $nombre, $precio, $imagen);

        if (DAOProducto::buscarProductoNombre($nombre) == null) {
            if (DAOProducto::insertarProducto($p)) {
                echo "<script>alert('El producto se ha insertado correctamente.');</script>";
            } else {
                echo "<script>alert('Error insertando producto.');</script>";
            }
        } else {
            echo "<script>alert('Error, el nombre del producto ya existe.');</script>";
        }
        echo "<script>document.location='../MantenimientoProductos.php'</script>";

    }
?>