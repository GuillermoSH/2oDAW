<?php
require_once("./BaseDAO.php");

class DAOEquipos
{
    public static function getEquipos():array
    {
        $listaEquipos = [];
        $consulta = "SELECT * FROM equipos";
        $resultado = BaseDAO::consulta($consulta);
        while (($equipo = $resultado->fetch_assoc()) != null) {
            $listaEquipos[$equipo['id']] = $equipo['nombre'];
        }
        return $listaEquipos;
    }
}