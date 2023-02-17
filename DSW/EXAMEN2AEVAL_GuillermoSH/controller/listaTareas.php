<?php
require_once("../model/DAOTareas.php");
require_once("../miSmarty.php");
// Instanciamos un objeto, esto crea ya las carpetas y demas
$smarty = new miSmarty("EXAMEN2EVAL_GuillermoSH");

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

$numPaginas = DAOTareas::numPags($tamPag);
if ($pag > $numPaginas) {
    $pag = $numPaginas;
}

// Le pido al modelo la pagina de productos con los valores recibidos
$paginaTareas = DAOTareas::getPaginaTareas($pag, $tamPag);
$siguienteTarea = DAOTareas::maxNumTareas() + 1;

$smarty->assign('pag', $pag); // marca error pero funciona
$smarty->assign('tamPag', $tamPag);
$smarty->assign('numPaginas', $numPaginas);
$smarty->assign('paginaTareas', $paginaTareas);
$smarty->assign('siguienteTarea', $siguienteTarea);

// Lo ultimo que hará será cargar la vista
$smarty->display("../view/listaTareas.tpl");