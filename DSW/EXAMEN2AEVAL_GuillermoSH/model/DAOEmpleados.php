<?php

declare(strict_types=1);

require_once("../model/BasePDO.php");
require_once("../model/Empleado.php");
require_once("../model/Tarea.php");

class DAOEmpleados
{
    // Creamos esto para evitar estar poniendo constantemente toda la linea
    public static function consulta(string $sql): PDOStatement | int
    {
        return BasePDO::consulta($sql, "gestemp", "mysql", "gestemp", "gestemp2023");
    }

    public static function getPaginaEmpleados(int $numPag, int $tamPag = 10): array
    {
        // lista será asociativa 
        $listaEmpleados = [];
        $indice = $tamPag * ($numPag - 1);
        $sql = "SELECT * FROM empleados ORDER BY ap1, ap2, nombre LIMIT $indice, $tamPag";
        $resultado = self::consulta($sql);

        while (($empleado = $resultado->fetchObject()) != null) {
            array_push($listaEmpleados, Empleado::getEmpleFromStd($empleado));
        }
        return $listaEmpleados;
    }

    public static function getListaTareasPorEmpleado(int $id): array
    {
        // lista será asociativa 
        $listaTareas = [];
        $sql = "SELECT * FROM empleados_tareas LEFT JOIN tareas ON id_tarea=id WHERE id_empleado = '$id' ORDER BY fecha_limite";
        $resultado = self::consulta($sql);
        while (($tareas = $resultado->fetchObject()) != null) {
            $listaTareas[$tareas->id] = Tarea::getTareaFromStd($tareas);
        }
        return $listaTareas;
    }

    public static function getEmpleado(int $id): Empleado {
        $sql = "SELECT * FROM empleados WHERE id = '$id'";
        return Empleado::getEmpleFromStd(self::consulta($sql)->fetchObject());
    }

    /**
     * Funcion que devuelve el numero de productos
     * @return int Numero de productos
     */
    public static function numEmpleados(): int
    {
        $resultado = self::consulta("SELECT count(*) as numEmple FROM empleados");
        return intval($resultado->fetchObject()->numEmple);
    }

    /**
     * Funcion que devuelve el numero de páginas
     * @param int $tamPag tamaño de página
     * @return int número de páginas
     */
    public static function numPags(int $tamPag)
    {
        return ceil(self::numEmpleados() / $tamPag); // devuelve el entero por encima
    }

    /**
     * Funcion que devuelve el máximo número de productos
     * @return int Numero de productos
     */
    public static function maxNumEmpleados(): int
    {
        $resultado = self::consulta("SELECT max(id) as max FROM empleados");
        return intval($resultado->fetchObject()->max);
    }
}
