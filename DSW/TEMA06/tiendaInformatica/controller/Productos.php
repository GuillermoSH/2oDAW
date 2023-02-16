<?php
    require_once("../model/DAOProductos.php");
    require_once("../model/Carro.php");
    require_once("../../miSmarty.php");

    session_start();

    // Si el usuario ha iniciado sesión
    if (isset($_SESSION['user'])) {
        // Instanciamos un objeto, esto crea ya las carpetas y demas
        $smarty = new miSmarty("tiendaInformatica");

        // Pongo estas variables por defecto
        $pag = 1;
        $tamPag = 10;
        $familiaSeleccionada = "";

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
        $listadoFamilias = DAOProducto::getFamilias();

        // Si pulso una familia, devuelvo el listado de productos de esa familia
        if (isset($_GET['familia'])) {
            $familiaSeleccionada = $_GET['familia'];
            // Sobreescribo el listado con la familia actual
            $paginaProductos = DAOProducto::getProductosPorFamilia($pag, $tamPag, $familiaSeleccionada);
        }
        
        // Si está el carrito inicializado
        if (isset($_SESSION['carro'])) {
            $carro = $_SESSION['carro'];

            // Acciones al pulsar el boton de "Comprar" o boton "+"
            if (isset($_POST['aniadir'])) { // se envia el value del button comprar
                $productoSeleccionado = DAOProducto::buscarProducto($_POST['aniadir']);
                $carro -> aniadir($productoSeleccionado);
            }

            // Acciones al pulsar el boton de "-"
            if (isset($_POST['restar'])) { // se envia el value del button restar
                $productoSeleccionado = DAOProducto::buscarProducto($_POST['restar']);
                $carro -> restar($productoSeleccionado, 1);
            }

            // Acciones al pulsar el boton de eliminar
            if (isset($_POST['eliminar'])) { // se envia el value del button restar
                $productoSeleccionado = DAOProducto::buscarProducto($_POST['eliminar']);
                $carro -> borrar($productoSeleccionado);
            }
        } else {
            $_SESSION['carro'] = new Carro();
        }

        $smarty->assign('pag', $pag); // marca error pero funciona
        $smarty->assign('tamPag', $tamPag);
        $smarty->assign('numPaginas', $numPaginas);
        $smarty->assign('paginaProductos', $paginaProductos);
        $smarty->assign('listadoFamilias', $listadoFamilias);
        $smarty->assign('siguienteProducto', $siguienteProducto);
        $smarty->assign('familiaSeleccionada', $familiaSeleccionada);
        $smarty->assign('carro', $_SESSION['carro']);
        $smarty->assign('usuario', $_SESSION['user']);
        
        // Lo ultimo que hará será cargar la vista
        //require_once("../view/catalogoProductos.php");
        $smarty->display("../view/catalogoProductos.tpl");
    } else {
        header("Location: Login.php");
    }
