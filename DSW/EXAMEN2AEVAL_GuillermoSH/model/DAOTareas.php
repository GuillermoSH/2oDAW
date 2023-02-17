<?php

declare(strict_types=1);

require_once("../model/BasePDO.php");
require_once("../model/Tarea.php");
require_once("../model/Empleado.php");

class DAOTareas
{
    // Creamos esto para evitar estar poniendo constantemente toda la linea
    public static function consulta(string $sql): PDOStatement | int
    {
        return BasePDO::consulta($sql, "gestemp", "mysql", "gestemp", "gestemp2023");
    }

    public static function getPaginaTareas(int $numPag, int $tamPag = 10): array
    {
        // lista será asociativa 
        $listaTareas = [];
        $indice = $tamPag * ($numPag - 1);
        $sql = "SELECT * FROM tareas ORDER BY completada DESC, fecha_limite, descripcion LIMIT $indice, $tamPag";
        $resultado = self::consulta($sql);

        while (($tarea = $resultado->fetchObject()) != null) {
            array_push($listaTareas, Tarea::getTareaFromStd($tarea));
        }
        return $listaTareas;
    }

    public static function getListaEmpleadosPorTarea(int $id): array
    {
        // lista será asociativa 
        $listaEmpleados = [];
        $sql = "SELECT * FROM empleados_tareas LEFT JOIN empleados ON id_empleado=id WHERE id_tarea = '$id' ORDER BY ap1, ap2, nombre";
        $resultado = self::consulta($sql);
        while (($empleado = $resultado->fetchObject()) != null) {
            $listaEmpleados[$empleado->id] = Tarea::getTareaFromStd($empleado);
        }
        return $listaEmpleados;
    }

    public static function getTarea(int $id): Tarea {
        $sql = "SELECT * FROM empleados WHERE id = '$id'";
        return Tarea::getTareaFromStd(self::consulta($sql)->fetchObject());
    }

    /**
     * Funcion que devuelve el numero de productos
     * @return int Numero de productos
     */
    public static function numTareas(): int
    {
        $resultado = self::consulta("SELECT count(*) as numTareas FROM tareas");
        return intval($resultado->fetchObject()->numTareas);
    }

    /**
     * Funcion que devuelve el numero de páginas
     * @param int $tamPag tamaño de página
     * @return int número de páginas
     */
    public static function numPags(int $tamPag)
    {
        return ceil(self::numTareas() / $tamPag); // devuelve el entero por encima
    }

    /**
     * Funcion que devuelve el máximo número de productos
     * @return int Numero de productos
     */
    public static function maxNumTareas(): int
    {
        $resultado = self::consulta("SELECT max(id) as max FROM tareas");
        return intval($resultado->fetchObject()->max);
    }
}