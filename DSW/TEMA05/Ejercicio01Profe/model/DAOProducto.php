<?php
    require_once(__DIR__."/BaseDAO.php");
    require_once(__DIR__."/Producto.php");

    class DAOProducto
    {
        /**
         * Elimina un producto de la base de datos.
         * 
         * @param int id El id del producto que se va a eliminar.
         */
        public static function borrarProducto(int $id) : bool
        {
            $sql = "DELETE FROM producto WHERE id = '$id'";
            return BaseDAO::consulta($sql);
        }

        /**
         * Inserta un producto en la base de datos.
         * 
         * @param Producto prod El objeto del producto que se insertará en la base de datos.
         * 
         * @return bool El resultado de la consulta.
         */
        public static function insertarProducto(Producto $prod) : bool
        {
            if ($prod->id == 0) {
                $id = "null";
            } else {
                $id = $prod->id;
            }
            $sql = "INSERT INTO producto VALUES ($id, '$prod->descripcion', '$prod->nombre', $prod->precio, '$prod->imagen')";
            
            // capturamos la excepcion
            /*try {
                return $conexion->query($sql);
            } catch (mysqli_sql_exception $ex) {
                return false;
            }*/

            return BaseDAO::consulta($sql);
        }

        /**
         * Actualiza un producto en la base de datos.
         * 
         * @param Producto prod es un objeto de la clase Producto
         * 
         * @return El resultado de la consulta.
         */
        public static function modificarProducto(Producto $prod)
        {
            $sql = "UPDATE producto SET descripcion = '$prod->descripcion', nombre='$prod->nombre', precio=$prod->precio, imagen='$prod->imagen' WHERE id=$prod->id";
            return BaseDAO::consulta($sql);
        }

        /**
         * Busca un producto por id.
         * 
         * @param int id El id del producto que desea buscar.
         */
        public static function buscarProducto(int $id) : ?Producto
        { // con la ? le decimos que puede ser null o de la clase producto lo que va a devolver
            $resultado = BaseDAO::consulta("SELECT * FROM producto WHERE id='$id'");
            if ($resultado->num_rows == 0) {
                return null;
            }
            return Producto::getProducto($resultado->fetch_assoc());
        }

        /**
         * Busca un producto por nombre.
         * 
         * @param string nombre El nombre del producto.
         */
        public static function buscarProductoNombre(string $nombre) : ?Producto
        { // o null o un objeto de la clase producto
            $resultado = BaseDAO::consulta("SELECT * FROM producto WHERE nommbre='$nombre'");
            if ($resultado->num_rows == 0) {
                return null;
            }
            return Producto::getProducto($resultado->fetch_assoc());
        }

        /**
         * Devuelve una matriz de productos.
         * 
         * @param int numPag El número de página que se mostrará.
         * @param int tamPag el número de productos por página
         * 
         * @return array Una gama de productos.
         */
        public static function getPaginaProducto(int $numPag, int $tamPag = 10) : array
        {
            // lista será asociativa 
            $listaProductos = [];
            $indice = $tamPag * ($numPag - 1);
            $sql = "SELECT * FROM producto LIMIT $indice, $tamPag";
            $resultado = BaseDAO::consulta($sql);
            while (($prod = $resultado -> fetch_assoc()) != null) {
                $listaProductos[$prod['id']] = Producto::getProducto($prod);
            }
            return $listaProductos;
        }

        /**
         * Devuelve el número de productos en la base de datos.
         * 
         * @return int El número de productos en la base de datos.
         */
        public static function numProductos() : int
        {
            $resultado = BaseDAO::consulta("SELECT count(*) as numProds FROM producto");
            return intval($resultado -> fetch_assoc()['numProds']);
        }

        /**
         * Devuelve el número de páginas que se necesitarán para mostrar todos los productos.
         * 
         * @param int tamPag El número de productos por página.
         * 
         * @return int El número de páginas que se necesitarán para mostrar todos los productos.
         */
        public static function numPags(int $tamPag) : int
        {
            return ceil(DAOProducto::numProductos() / $tamPag);
        }

        /**
         * *|MARCADOR_CURSOR|*
         * 
         * @return int El número máximo de productos en la base de datos.
         */
        public static function maxNumProducto() : int
        {
            $resultado = BaseDAO::consulta("SELECT max(id) as max FROM producto");
            return intval($resultado -> fetch_assoc()['max']);
        }

    }
    /* $lista = DAOProducto::getPaginaProducto(2,7);
    foreach ($lista as $p) {
        echo $p."<br/>\n";
    }
    echo DAOProducto::numProductos();
    echo DAOProducto::numPags(7);
    echo DAOProducto::buscarProducto(1);
    */