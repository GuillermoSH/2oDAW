<?php
    require_once("../model/DAOProducto.php"); // esto no debe existir aqui en la vista. 

    // Pongo estas variables por defecto
    $pag = 1;
    $tamPag = 10;

    // Si me envian pagina o tamaño de página
    if (isset($_GET['pag'])) {
        $pag = intval($_GET['pag']); // le hacemos la conversion a int porque lo recibimos como string
    }
    if (isset($_GET['tamPag'])) {
        $tamPag = intval($_GET['tamPag']);
    }

    $numPaginas = DAOProducto::numPags($tamPag);
    if ($pag > $numPaginas) {
        $pag = $numPaginas;
    }

    // Le pido al modelo la pagina de productos con los valores recibidos
    $paginaProductos = DAOProducto::getPaginaProducto($pag, $tamPag);
    $siguienteProducto = DAOProducto::maxNumProducto() + 1;
    // Lo ultimo que hará será cargar la vista
    require_once("../view/catalogoProductos.php");
?>