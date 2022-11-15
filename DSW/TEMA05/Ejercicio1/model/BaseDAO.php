<?php
class BaseDAO
{
    /**
     * Crea un nuevo objeto MySQLi, que es una clase de PHP que representa una conexión a una base de
     * datos MySQL
     * 
     * @return La conexión a la base de datos.
     */
    public static function getConexion()
    {
        $conexion = new MySQLi('localhost', 'productos', 'productos2021', 'productos');
        
        if ($conexion->errno != null) {
            throw new Exception("Error conectando a la base de datos de productos: ", $conexion->error);
        }
    
        return $conexion;
    }

    /**
     * Ejecuta una consulta y devuelve el resultado.
     * 
     * @param string sql La consulta SQL a ejecutar.
     * 
     * @return bool El resultado de la consulta.
     */
    public static function consulta(string $sql):bool
    {
        $conexion = self::getConexion();
        $resultado = $conexion->query($sql);
        $conexion->close();
        return $resultado;
    }
}
