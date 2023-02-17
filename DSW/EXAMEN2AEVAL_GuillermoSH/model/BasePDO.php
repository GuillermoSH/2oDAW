<?php
    declare(strict_types=1);
    class BasePDO
    {
        private static $lastAffectedRows;
        /**
         * Crea un nuevo objeto MySQLi, que es una clase de PHP que representa una conexión a una base de datos
         * MySQL.
         * @return PDO La conexión a la base de datos.
         */
        public static function getConexion(string $dbname, string $driver, string $user=null, string $pass=null) : PDO
        {
            try {
                if ($driver == "mysql") {
                    $conexion = new PDO("mysql:host=localhost;charset=utf8;dbname=$dbname", $user, $pass);
                } elseif ($driver == "sqlite") {
                    $conexion = new PDO("sqlite:$dbname");
                } else {
                    die("Error: Driver de bases de datos desconocido: $driver");
                }
                $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $ex) {
                die("Error estableciendo conexión con el servidor de base de datos.");
            }
            return $conexion;
        }

        /**
         * Función que conecta a la base de datos y ejecuta la consulta.
         * @param string sql La consulta SQL a ejecutar.
         * @return int | PDOStatement El resultado de la consulta.
         */
        public static function consulta(string $sql, $dbname, $driver, $user=null, $pass=null) : PDOStatement | int
        {
            // Para evitar el error de "duplicate entry", generamos un try-catch
            try {                
                $conexion = self::getConexion($dbname, $driver, $user, $pass); 
                
                //Comprobamos si la sql pasada por parametro contiene la palabra "SELECT"
                if (str_starts_with(strtolower(trim($sql)), "select")) {
                    $resultado = $conexion->query($sql);    // pDOStatement  
                } else {
                    // En caso contrario, ejecutamos un exec
                    $resultado = $conexion->exec($sql); // nº filas afectadas
                }
                // Cerramos la conexión y devolvemos
                unset($conexion); // Cerrar la conexion
                return $resultado;
            } catch (Exception $ex) {
                // throw new Exception("Error en la consulta.");
                die("Error en la consulta. ".$ex->getMessage());
            }
        }

        /**
         * Devuelve el número de filas afectadas por la última consulta
         * @return int El número de filas afectadas por la última instrucción SQL.
         */
        public static function getLastAffectedRows() : int
        {
            return self::$lastAffectedRows;
        }
    }