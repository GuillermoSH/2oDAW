<?php
    require_once("../view/catalogoProductos.php");
    $pag = 1;
    $tamPag = 10;

    if (isset($_GET['pag'])) {
        $pag=intval($_GET['pag']);
    }
    
    if (isset($_GET['tamPag'])) {
        $pag=intval($_GET['tamPag']);
    }
    
    $numPaginas=DAOProducto::numPags($tamPag);

    if ($pag > $numPaginas) {
        $pag = $numPaginas;
    }

    $paginaProductos = DAOProducto::getPaginaProducto($pag, $tamPag);
    $maxNumProducto=DAOProducto::maxNumProducto() + 1;