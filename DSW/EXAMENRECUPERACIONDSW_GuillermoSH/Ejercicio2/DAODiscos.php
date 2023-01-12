<?php
require_once("./BaseDAO.php");

class DAODiscos
{
    public static function buscarCanciones(int $idAlbum)
    {
        $busqueda=BaseDAO::consulta("SELECT * FROM canciones WHERE idAlbum='$idAlbum'");
        if ($busqueda->num_rows==0) {
            return null;
        }
        return $busqueda->fetch_assoc();
    }

    public static function obtenerAlbums()
    {
        $listaAlbums = [];
        $busqueda=BaseDAO::consulta("SELECT * FROM albums");
        if ($busqueda->num_rows==0) {
            return null;
        }

        while (($album = $busqueda->fetch_assoc()) != null) {
            array_push($listaAlbums, $album);
        }
        return $listaAlbums;
    }

    public static function numDiscos():int
    {
        $busqueda=BaseDAO::consulta("SELECT COUNT(*) FROM albums");
        if ($busqueda->num_rows==0) {
            return null;
        }
        return intval(implode($busqueda->fetch_assoc()));
    }
}
