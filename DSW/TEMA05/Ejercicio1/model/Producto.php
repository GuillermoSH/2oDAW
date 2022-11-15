<?php
    require_once("DAOProducto.php");
    
    $productos = new Productos();
    $listaProductos = $productos->getListaProductos();

    function buscarProducto($atributo)
    {
        $productoEncontrado = null;
        
        foreach ($listaProductos as $producto) {
            if ($producto->id == $atributo || $producto->nombre == $atributo) {
                $productoEncontrado = $producto;
            }
        }

        return $productoEncontrado;
    }
