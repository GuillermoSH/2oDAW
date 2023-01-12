<?php
class BaseDAO
{
    public static function getConexion()
    {
        $conexion = new MySQLi('localhost', 'cds', 'cds2022', 'cds');
        
        if ($conexion->errno != null) {
            throw new Exception("Error conectando a la base de datos de productos: ", $conexion->error);
        }
    
        return $conexion;
    }
    public static function consulta(string $sql):bool | mysqli_result
    {
        $conexion = self::getConexion();
        $resultado = $conexion->query($sql);
        $conexion->close();
        return $resultado;
    }
}