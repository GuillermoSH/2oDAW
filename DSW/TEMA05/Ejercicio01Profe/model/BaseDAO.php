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
            $conexion = new MySQLi("localhost", "productos", "productos2021", "productos");
            if ($conexion -> errno != null) {
                throw new Exception("Error conectando con la base de datos: ".$conexion->error);
            }
            return $conexion;
        }

        /**
         * Se conecta a la base de datos y ejecuta la consulta.
         * 
         * @param string sql La consulta SQL a ejecutar. Los datos dentro de la consulta deben escaparse
         * correctamente.
         * 
         * @return bool | mysqli_result El resultado de la consulta.
         */
        public static function consulta(string $sql) : int | MySQLi_result
        {
            // Para evitar el duplicate entry, generamos un try catch
            try {
                $conexion = self::getConexion(); // self es llamar a esta clase estatica
                $resultado = $conexion->query($sql);               
                $conexion->affected_rows;
                //BaseDAO::$lastAffectedRows=$conexion->affected_rows;
    
                $conexion->close();
                return $resultado;
            } catch (Exception $ex) {
                // throw new Exception("Error en la consulta.");
                die("Error en la consulta.");
            }
            
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
?>