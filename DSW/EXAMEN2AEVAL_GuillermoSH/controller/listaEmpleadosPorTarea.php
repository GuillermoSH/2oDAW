<?php
require_once("../model/DAOTareas.php");
require_once("../miSmarty.php");

if (isset($_GET["id"])) {
    $idTarea = $_GET["id"];
    $listaEmpleados = DAOTareas::getListaEmpleadosPorTarea($idTarea);
    $tarea = DAOTareas::getTarea($idTarea);

    // Instanciamos un objeto, esto crea ya las carpetas y demas
    $smarty = new miSmarty("EXAMEN2EVAL_GuillermoSH");

    $smarty->assign('listaEmpleados', $listaEmpleados);
    $smarty->assign('tarea', $tarea);

    $smarty->display("../view/listaEmpleadosPorTarea.tpl");
} else {
    header("Location: listaTareas.php");
}