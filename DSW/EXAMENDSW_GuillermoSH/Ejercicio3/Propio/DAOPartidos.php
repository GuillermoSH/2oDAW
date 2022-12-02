<?php
require_once("./BaseDAO.php");

class DAOPartidos
{
    public static function getPartidos():array
    {
        $listaPartidos = [];
        $consulta = "SELECT * FROM partidos";
        $resultado = BaseDAO::consulta($consulta);
        while (($partido = $resultado->fetch_assoc()) != null) {
            $listaPartidos[$partido['id']] = ['local' => $partido['local'],'visitante' => $partido['visitante'], 'resultado' => $partido['resultado']];
        }
        return $listaPartidos;
    }
}