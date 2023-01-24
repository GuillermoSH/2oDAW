<?php

class BaseDAO
{
    private static $lastAffectedRows;
    // La clase conexion estara aqui
    /**
     * Crea un nuevo objeto MySQLi, que es una clase de PHP que representa una conexión a una base de datos
     * MySQL
     * 
     * @return La conexión a la base de datos.
     */
    public static function getConexion()
    {
        return new PDO("mysql:host=localhost;dbname=gestisimal;charset=utf8", "gestisimal", "gestisimal2021");
    }

    /**
     * Se conecta a la base de datos y ejecuta la consulta.
     * 
     * @param string sql La consulta SQL a ejecutar. Los datos dentro de la consulta deben escaparse
     * correctamente.
     * 
     * @return bool | mysqli_result El resultado de la consulta.
     */
    public static function consulta(string $sql)
    {
        $conexion = self::getConexion(); // self es llamar a esta clase estatica
        $resultado = $conexion->query($sql);
        unset($conexion);
        return $resultado;
    }

    /**
     * Ejecuta una sentencia SQL y devuelve el número de filas afectadas
     * 
     * @param string sql La consulta SQL a ejecutar.
     * 
     * @return El número de filas afectadas.
     */
    public static function modificarBD(string $sql)
    {
        $conexion = self::getConexion();
        $conexion->beginTransaction();
        $resultado = $conexion->exec($sql);

        if ($resultado != 0) {
            $conexion->commit();
        } else {
            $conexion->rollback();
        }
        unset($conexion);

        return $resultado;
    }

    /**
     * Devuelve el número de filas afectadas por la última consulta
     * 
     * @return El número de filas afectadas por la última instrucción SQL.
     */
    public static function getLastAffectedRows()
    {
        return self::$lastAffectedRows;
    }

    // public static function getNumProductos() {
    //     $resultado = consulta("select count(*) as numProductos from producto");
    //     return $resultado -> fetch_assoc()['numProductos'];
    // }
}
