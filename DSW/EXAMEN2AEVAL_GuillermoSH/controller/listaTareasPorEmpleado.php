<?php
require_once("../model/DAOEmpleados.php");
require_once("../miSmarty.php");

if (isset($_GET["id"])) {
    $idEmpleado = $_GET["id"];
    $listaTareas = DAOEmpleados::getListaTareasPorEmpleado($idEmpleado);
    $empleado = DAOEmpleados::getEmpleado($idEmpleado);

    // Instanciamos un objeto, esto crea ya las carpetas y demas
    $smarty = new miSmarty("EXAMEN2EVAL_GuillermoSH");

    $smarty->assign('listaTareas', $listaTareas);
    $smarty->assign('empleado', $empleado);

    $smarty->display("../view/listaTareasPorEmpleado.tpl");
} else {
    header("Location: listaEmpleados.php");
}
