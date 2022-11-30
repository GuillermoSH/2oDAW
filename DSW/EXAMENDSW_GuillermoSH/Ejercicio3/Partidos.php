<?php
require_once("./DAOEquipos.php");
require_once("./DAOPartidos.php");

class Partidos
{
    //private $listaEquipos = DAOPartidos::getPartidos();
    //private $listaPartidos = DAOEquipos::getEquipos();

    private static function generarPuntos():array
    {
        $listaEquipos = DAOPartidos::getPartidos();
        $listaPuntos = self::generarLista();
        $listaPartidos = DAOEquipos::getEquipos();

        foreach ($listaPartidos as $partido) {
            $resultado = implode("-", $partido['resultado']);
            if ($resultado[0] > $resultado[1]) {
                $ganador = $listaPartidos['local'];
                $listaPuntos[$listaEquipos[$ganador]] += 1;
            }
        }
        return $listaPuntos;
    }

    private static function generarLista():array
    {
        $listaEquipos = DAOEquipos::getEquipos();
        $lista = [];

        foreach ($listaEquipos as $equipo) {
            $lista[$equipo] = 0;
        }

        return $lista;
    }

    public static function generarTablaPuntos():array
    {
        $listaPuntos = self::generarPuntos();
        $listaPosiciones = [];

        foreach ($listaPuntos as $equipo => $ptosEquipo) {
            $listaOrdenar[$ptosEquipo] = $equipo;
        }

        sort($listaPuntos);

        $contador = 1;
        foreach ($listaPuntos as $ptosEquipo => $equipo) {
            $listaPosiciones[$contador] = ['equipo' => $equipo, 'puntos' => $ptosEquipo];
        }

        return $listaPosiciones;
    }
}